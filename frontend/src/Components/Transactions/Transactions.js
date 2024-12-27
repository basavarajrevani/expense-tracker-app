import React from 'react'
import styled from 'styled-components'
import { useGlobalContext } from '../../context/globalContext'
import { dateFormat } from '../../utils/dateFormat'
import { bitcoin, book, calender, card, circle, clothing, comment, rupee, food, freelance, medical, money, piggy, stocks, takeaway, trash, tv, users, yt } from '../../utils/Icons'

function Transactions() {
    const { incomes, expenses, getIncomes, getExpenses, deleteIncome, deleteExpense } = useGlobalContext()

    React.useEffect(() => {
        getIncomes()
        getExpenses()
    }, [])

    const [...allTransactions] = [...incomes, ...expenses].sort((a, b) => {
        return new Date(b.date) - new Date(a.date)
    })

    const categoryIcon = {
        salary: money,
        freelance: freelance,
        investments: stocks,
        stocks: stocks,
        bitcoin: bitcoin,
        bank: card,
        youtube: yt,
        other: piggy,
        groceries: food,
        takeaway: takeaway,
        clothing: clothing,
        travelling: takeaway,
        subscription: tv,
        education: book,
        medical: medical
    }

    return (
        <TransactionsStyled>
            <div className="transactions-content">
                <h2>Recent Transactions</h2>
                {allTransactions.length === 0 ? (
                    <div className="no-transactions">
                        <p>No transactions found</p>
                    </div>
                ) : (
                    <div className="transactions-list">
                        {allTransactions.map((transaction) => {
                            const { _id, title, amount, date, category, type, description } = transaction
                            const icon = categoryIcon[category.toLowerCase()]
                            const isIncome = type === 'income'

                            return (
                                <div key={_id} className={`transaction-item ${type}`}>
                                    <div className="icon-content">
                                        {icon}
                                    </div>
                                    <div className="transaction-details">
                                        <div className="header">
                                            <h5>{title}</h5>
                                            <div className="amount-badge">
                                                <span>{isIncome ? '+' : '-'}{rupee}{amount}</span>
                                            </div>
                                        </div>
                                        <div className="info-grid">
                                            <div className="info-item">
                                                <span className="icon">{calender}</span>
                                                <span className="text">{dateFormat(date)}</span>
                                            </div>
                                            <div className="info-item">
                                                <span className="icon">{circle}</span>
                                                <span className="text">{category}</span>
                                            </div>
                                            {description && (
                                                <div className="info-item description">
                                                    <span className="icon">{comment}</span>
                                                    <span className="text">{description}</span>
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                    <button 
                                        className="delete-btn"
                                        onClick={() => {
                                            if(isIncome) {
                                                deleteIncome(_id)
                                            } else {
                                                deleteExpense(_id)
                                            }
                                        }}
                                        title="Delete transaction"
                                    >
                                        {trash}
                                    </button>
                                </div>
                            )
                        })}
                    </div>
                )}
            </div>
        </TransactionsStyled>
    )
}

const TransactionsStyled = styled.div`
    padding: 2rem;
    overflow-y: auto;
    width: 100%;
    
    .transactions-content {
        h2 {
            font-size: 1.8rem;
            font-weight: 700;
            color: var(--primary-color);
            margin-bottom: 2rem;
            position: relative;
            padding-left: 1rem;

            &::before {
                content: '';
                position: absolute;
                left: 0;
                top: 0;
                width: 0.3rem;
                height: 100%;
                background: var(--primary-color);
                border-radius: 0 5px 5px 0;
            }
        }

        .no-transactions {
            text-align: center;
            padding: 3rem;
            background: white;
            border-radius: 15px;
            box-shadow: 0px 1px 15px rgba(0, 0, 0, 0.06);
            
            p {
                color: #666;
                font-size: 1.1rem;
            }
        }

        .transactions-list {
            display: flex;
            flex-direction: column;
            gap: 1rem;

            .transaction-item {
                display: flex;
                align-items: center;
                gap: 1rem;
                background: white;
                border-radius: 15px;
                padding: 1.5rem;
                position: relative;
                transition: all 0.3s ease;
                border: 2px solid transparent;

                &:hover {
                    transform: translateY(-3px);
                    box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.08);
                }

                &.income {
                    border-left: 4px solid #2ecc71;
                    &:hover {
                        border-color: #2ecc71;
                    }
                    .amount-badge span {
                        color: #2ecc71;
                    }
                }

                &.expense {
                    border-left: 4px solid #e74c3c;
                    &:hover {
                        border-color: #e74c3c;
                    }
                    .amount-badge span {
                        color: #e74c3c;
                    }
                }

                .icon-content {
                    width: 60px;
                    height: 60px;
                    border-radius: 12px;
                    background: #f8f9fa;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    flex-shrink: 0;
                    
                    i {
                        font-size: 1.5rem;
                        color: var(--primary-color);
                    }
                }

                .transaction-details {
                    flex: 1;
                    min-width: 0;

                    .header {
                        display: flex;
                        justify-content: space-between;
                        align-items: center;
                        margin-bottom: 1rem;

                        h5 {
                            font-size: 1.2rem;
                            font-weight: 600;
                            color: #333;
                            margin: 0;
                        }

                        .amount-badge {
                            span {
                                font-size: 1.2rem;
                                font-weight: 700;
                            }
                        }
                    }

                    .info-grid {
                        display: grid;
                        grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
                        gap: 1rem;

                        .info-item {
                            display: flex;
                            align-items: center;
                            gap: 0.5rem;
                            
                            &.description {
                                grid-column: 1 / -1;
                            }

                            .icon {
                                display: flex;
                                align-items: center;
                                color: #666;
                            }

                            .text {
                                color: #666;
                                font-size: 0.95rem;
                                white-space: nowrap;
                                overflow: hidden;
                                text-overflow: ellipsis;
                            }
                        }
                    }
                }

                .delete-btn {
                    width: 40px;
                    height: 40px;
                    border-radius: 10px;
                    background: #fff;
                    border: 2px solid #f1f1f1;
                    color: #dc3545;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    cursor: pointer;
                    transition: all 0.3s ease;
                    opacity: 0.6;

                    &:hover {
                        background: #dc3545;
                        border-color: #dc3545;
                        color: white;
                        opacity: 1;
                    }
                }
            }
        }
    }

    @media (max-width: 768px) {
        padding: 1rem;

        .transactions-content {
            h2 {
                font-size: 1.5rem;
                margin-bottom: 1.5rem;
            }

            .transactions-list {
                .transaction-item {
                    padding: 1rem;
                    flex-direction: column;
                    align-items: flex-start;
                    text-align: left;

                    .icon-content {
                        width: 50px;
                        height: 50px;
                    }

                    .transaction-details {
                        width: 100%;

                        .header {
                            margin-bottom: 0.8rem;
                        }

                        .info-grid {
                            grid-template-columns: 1fr;
                            gap: 0.5rem;
                        }
                    }

                    .delete-btn {
                        position: absolute;
                        top: 1rem;
                        right: 1rem;
                        width: 35px;
                        height: 35px;
                    }
                }
            }
        }
    }
`;

export default Transactions
