import React, { useEffect } from 'react'
import styled from 'styled-components'
import { useGlobalContext } from '../../context/globalContext';
import { InnerLayout } from '../../styles/Layouts';
import IncomeItem from '../IncomeItem/IncomeItem';
import ExpenseForm from './ExpenseForm';
import { rupee } from '../../utils/Icons';

function Expenses() {
    const {expenses, getExpenses, deleteExpense, totalExpenses} = useGlobalContext()

    useEffect(() =>{
        getExpenses()
    }, [])

    return (
        <ExpenseStyled>
            <InnerLayout>
                <div className="header">
                    <h1>Expense Manager</h1>
                    <div className="total-expense">
                        <div className="amount">
                            <span className="title">Total Expenses</span>
                            <span className="value">
                                {rupee} {totalExpenses()}
                            </span>
                        </div>
                        <div className="gradient-bar"></div>
                    </div>
                </div>

                <div className="expense-content">
                    <div className="form-container">
                        <ExpenseForm />
                    </div>
                    <div className="expenses">
                        {expenses.length === 0 ? (
                            <div className="no-data">
                                <p>No expense transactions found</p>
                                <small>Add your first expense using the form</small>
                            </div>
                        ) : (
                            expenses.map((expense) => {
                                const {_id, title, amount, date, category, description, type} = expense;
                                return <IncomeItem
                                    key={_id}
                                    id={_id} 
                                    title={title} 
                                    description={description} 
                                    amount={amount} 
                                    date={date} 
                                    type={type}
                                    category={category} 
                                    indicatorColor="var(--color-red)"
                                    deleteItem={deleteExpense}
                                />
                            })
                        )}
                    </div>
                </div>
            </InnerLayout>
        </ExpenseStyled>
    )
}

const ExpenseStyled = styled.div`
    display: flex;
    overflow: auto;
    
    .header {
        display: flex;
        flex-direction: column;
        gap: 2rem;
        margin-bottom: 2rem;

        h1 {
            font-size: 2rem;
            font-weight: 700;
            color: var(--primary-color);
            position: relative;
            padding-left: 1rem;
            
            &::before {
                content: '';
                position: absolute;
                left: 0;
                top: 0;
                width: 0.3rem;
                height: 100%;
                background: #e74c3c;
                border-radius: 0 5px 5px 0;
            }
        }
    }

    .total-expense {
        background: white;
        border: 2px solid #ffffff;
        box-shadow: 0px 1px 15px rgba(0, 0, 0, 0.06);
        border-radius: 20px;
        padding: 1rem 2rem;
        position: relative;
        overflow: hidden;
        transition: all 0.3s ease;
        
        &:hover {
            transform: translateY(-3px);
            box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.08);
            
            .gradient-bar {
                transform: translateX(0);
                opacity: 1;
            }
        }

        .amount {
            display: flex;
            flex-direction: column;
            gap: 0.5rem;
            z-index: 1;
            position: relative;

            .title {
                font-size: 1.3rem;
                font-weight: 500;
                color: var(--primary-color);
                opacity: 0.9;
            }

            .value {
                font-size: 2.5rem;
                font-weight: 700;
                color: #e74c3c;
                display: flex;
                align-items: center;
                gap: 0.5rem;

                i {
                    font-size: 2rem;
                }
            }
        }

        .gradient-bar {
            position: absolute;
            bottom: 0;
            left: 0;
            width: 100%;
            height: 0.5rem;
            background: linear-gradient(to right, #e74c3c, #ff7675);
            transform: translateX(-100%);
            opacity: 0;
            transition: all 0.5s ease;
        }
    }

    .expense-content {
        display: flex;
        gap: 2rem;
        height: 100%;

        @media (max-width: 1024px) {
            flex-direction: column;
        }

        .form-container {
            flex: 1;
            max-width: 450px;

            @media (max-width: 1024px) {
                max-width: 100%;
            }
        }

        .expenses {
            flex: 1;
            
            .no-data {
                background: white;
                border-radius: 20px;
                padding: 2rem;
                text-align: center;
                box-shadow: 0px 1px 15px rgba(0, 0, 0, 0.06);
                
                p {
                    font-size: 1.3rem;
                    font-weight: 500;
                    color: var(--primary-color);
                    margin-bottom: 0.5rem;
                }
                
                small {
                    color: #666;
                    font-size: 1rem;
                }
            }
        }
    }

    @media (max-width: 768px) {
        .header {
            h1 {
                font-size: 1.8rem;
            }
        }

        .total-expense {
            padding: 1rem;
            
            .amount {
                .title {
                    font-size: 1.1rem;
                }
                .value {
                    font-size: 2rem;
                }
            }
        }
    }

    /* Responsive Design */
    @media (max-width: 1024px) {
        .expense-content {
            grid-template-columns: 1fr;
            gap: 1.5rem;
        }

        .header {
            h1 {
                font-size: 1.8rem;
            }
        }

        .total-expense {
            padding: 1rem 1.5rem;

            .amount {
                .title {
                    font-size: 1rem;
                }

                .value {
                    font-size: 1.8rem;
                }
            }
        }
    }

    @media (max-width: 768px) {
        .header {
            gap: 1.5rem;
            margin-bottom: 1.5rem;

            h1 {
                font-size: 1.6rem;
                padding-left: 0.8rem;

                &::before {
                    width: 0.25rem;
                }
            }
        }

        .total-expense {
            padding: 1rem;

            .amount {
                .title {
                    font-size: 0.9rem;
                }

                .value {
                    font-size: 1.6rem;
                }
            }
        }

        .expense-content {
            gap: 1rem;
        }
    }

    @media (max-width: 480px) {
        .header {
            gap: 1rem;
            margin-bottom: 1rem;

            h1 {
                font-size: 1.4rem;
                padding-left: 0.6rem;
            }
        }

        .total-expense {
            padding: 0.8rem;
            border-radius: 15px;

            .amount {
                gap: 0.3rem;

                .title {
                    font-size: 0.8rem;
                }

                .value {
                    font-size: 1.4rem;
                }
            }
        }

        .expense-content {
            gap: 0.8rem;
        }

        .no-data {
            padding: 1rem;

            p {
                font-size: 1rem;
            }

            small {
                font-size: 0.8rem;
            }
        }
    }

    @media (max-width: 360px) {
        .header {
            h1 {
                font-size: 1.2rem;
            }
        }

        .total-expense {
            padding: 0.6rem;

            .amount {
                .value {
                    font-size: 1.2rem;
                }
            }
        }
    }
`;

export default Expenses;