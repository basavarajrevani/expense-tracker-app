const IncomeSchema = require("../models/IncomeModel")

exports.addIncome = async (req, res) => {
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

        // Create income with user ID
        const income = new IncomeSchema({
            title,
            amount: numAmount,
            category,
            description,
            date,
            user: req.user._id // Add user reference
        });

        await income.save();
        res.status(200).json({message: 'Income Added', income});
    } catch (error) {
        console.error('Add income error:', error);
        res.status(500).json({message: 'Server Error', error: error.message});
    }
}

exports.getIncomes = async (req, res) =>{
    try {
        // Only get incomes for the logged-in user
        const incomes = await IncomeSchema.find({ user: req.user._id }).sort({createdAt: -1});
        res.status(200).json(incomes);
    } catch (error) {
        console.error('Get incomes error:', error);
        res.status(500).json({message: 'Server Error', error: error.message});
    }
}

exports.deleteIncome = async (req, res) =>{
    try {
        const {id} = req.params;
        
        // Only delete if income belongs to user
        const income = await IncomeSchema.findOneAndDelete({
            _id: id,
            user: req.user._id
        });

        if (!income) {
            return res.status(404).json({message: 'Income not found'});
        }

        res.status(200).json({message: 'Income Deleted', income});
    } catch (error) {
        console.error('Delete income error:', error);
        res.status(500).json({message: 'Server Error', error: error.message});
    }
}
