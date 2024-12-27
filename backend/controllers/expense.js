const ExpenseSchema = require("../models/ExpenseModel")

exports.addExpense = async (req, res) => {
    try {
        const {title, amount, category, description, date} = req.body;

        // Validations
        if(!title || !category || !description || !date){
            return res.status(400).json({message: 'All fields are required!'});
        }
        
        // Check if amount is a number and positive
        const numAmount = Number(amount);
        if(isNaN(numAmount) || numAmount <= 0){
            return res.status(400).json({message: 'Amount must be a positive number!'});
        }

        // Create expense with user ID
        const expense = new ExpenseSchema({
            title,
            amount: numAmount,
            category,
            description,
            date,
            user: req.user._id // Add user reference
        });

        await expense.save();
        res.status(200).json({message: 'Expense Added', expense});
    } catch (error) {
        console.error('Add expense error:', error);
        res.status(500).json({message: 'Server Error', error: error.message});
    }
}

exports.getExpenses = async (req, res) =>{
    try {
        // Only get expenses for the logged-in user
        const expenses = await ExpenseSchema.find({ user: req.user._id }).sort({createdAt: -1});
        res.status(200).json(expenses);
    } catch (error) {
        console.error('Get expenses error:', error);
        res.status(500).json({message: 'Server Error', error: error.message});
    }
}

exports.deleteExpense = async (req, res) =>{
    try {
        const {id} = req.params;
        
        // Only delete if expense belongs to user
        const expense = await ExpenseSchema.findOne({ _id: id, user: req.user._id });
        if (!expense) {
            return res.status(404).json({message: 'Expense not found'});
        }

        await ExpenseSchema.findByIdAndDelete(id);
        res.status(200).json({message: 'Expense Deleted'});
    } catch (error) {
        console.error('Delete expense error:', error);
        res.status(500).json({message: 'Server Error', error: error.message});
    }
}
