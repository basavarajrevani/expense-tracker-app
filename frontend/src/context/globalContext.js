import React, { useContext, useState } from "react"
import axios from 'axios'

const BASE_URL = `${process.env.REACT_APP_API_URL}/api/v1/`;

const GlobalContext = React.createContext()

export const GlobalProvider = ({children}) => {

    const [incomes, setIncomes] = useState([])
    const [expenses, setExpenses] = useState([])
    const [error, setError] = useState(null)

    //calculate incomes
    const addIncome = async (income) => {
        try {
            const user = JSON.parse(localStorage.getItem('user'));
            if (!user || !user.token) {
                setError('Please log in to add income');
                return;
            }

            const config = {
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${user.token}`
                }
            };

            const response = await axios.post(`${BASE_URL}add-income`, income, config);
            getIncomes();
            return response.data;
        } catch (err) {
            console.error('Add income error:', err.response?.data || err.message);
            setError(err.response?.data?.message || 'Error adding income');
            throw err;
        }
    }

    const getIncomes = async () => {
        try {
            const user = JSON.parse(localStorage.getItem('user'));
            if (!user || !user.token) {
                setError('Please log in to view incomes');
                return;
            }

            const config = {
                headers: {
                    Authorization: `Bearer ${user.token}`
                }
            };

            const response = await axios.get(`${BASE_URL}get-incomes`, config);
            setIncomes(response.data);
        } catch (error) {
            console.error('Get incomes error:', error.response?.data || error.message);
            setError(error.response?.data?.message || 'Error fetching incomes');
        }
    }

    const deleteIncome = async (id) => {
        try {
            const user = JSON.parse(localStorage.getItem('user'));
            if (!user || !user.token) {
                setError('Please log in to delete income');
                return;
            }

            const config = {
                headers: {
                    Authorization: `Bearer ${user.token}`
                }
            };

            const response = await axios.delete(`${BASE_URL}delete-income/${id}`, config);
            getIncomes();
            return response.data;
        } catch (error) {
            console.error('Delete income error:', error.response?.data || error.message);
            setError(error.response?.data?.message || 'Error deleting income');
        }
    }

    const totalIncome = () => {
        let totalIncome = 0;
        incomes.forEach((income) =>{
            totalIncome = totalIncome + income.amount
        })

        return totalIncome;
    }


    //calculate expenses
    const addExpense = async (expense) => {
        try {
            const user = JSON.parse(localStorage.getItem('user'));
            if (!user || !user.token) {
                setError('Please log in to add expense');
                return;
            }

            const config = {
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${user.token}`
                }
            };

            const response = await axios.post(`${BASE_URL}add-expense`, expense, config);
            getExpenses();
            return response.data;
        } catch (err) {
            console.error('Add expense error:', err.response?.data || err.message);
            setError(err.response?.data?.message || 'Error adding expense');
            throw err;
        }
    }

    const getExpenses = async () => {
        try {
            const user = JSON.parse(localStorage.getItem('user'));
            if (!user || !user.token) {
                setError('Please log in to view expenses');
                return;
            }

            const config = {
                headers: {
                    Authorization: `Bearer ${user.token}`
                }
            };

            const response = await axios.get(`${BASE_URL}get-expenses`, config);
            setExpenses(response.data);
        } catch (error) {
            console.error('Get expenses error:', error.response?.data || error.message);
            setError(error.response?.data?.message || 'Error fetching expenses');
        }
    }

    const deleteExpense = async (id) => {
        try {
            const user = JSON.parse(localStorage.getItem('user'));
            if (!user || !user.token) {
                setError('Please log in to delete expense');
                return;
            }

            const config = {
                headers: {
                    Authorization: `Bearer ${user.token}`
                }
            };

            const response = await axios.delete(`${BASE_URL}delete-expense/${id}`, config);
            getExpenses();
            return response.data;
        } catch (error) {
            console.error('Delete expense error:', error.response?.data || error.message);
            setError(error.response?.data?.message || 'Error deleting expense');
        }
    }

    const totalExpenses = () => {
        let totalExpenses = 0;
        expenses.forEach((expense) =>{
            totalExpenses = totalExpenses + expense.amount
        })

        return totalExpenses;
    }

    const totalBalance = () => {
        return totalIncome() - totalExpenses()
    }

    const transactionHistory = () => {
        const history = [...incomes, ...expenses]
        history.sort((a, b) => {
            return new Date(b.createdAt) - new Date(a.createdAt)
        })

        return history.slice(0, 3)
    }

    return (
        <GlobalContext.Provider value={{
            addIncome,
            getIncomes,
            incomes,
            deleteIncome,
            expenses,
            totalIncome,
            addExpense,
            getExpenses,
            deleteExpense,
            totalExpenses,
            totalBalance,
            transactionHistory,
            error,
            setError
        }}>
            {children}
        </GlobalContext.Provider>
    )
}

export const useGlobalContext = () =>{
    return useContext(GlobalContext)
}