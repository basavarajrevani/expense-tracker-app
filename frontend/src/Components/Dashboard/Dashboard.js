import React, { useEffect } from 'react'
import styled from 'styled-components'
import { useGlobalContext } from '../../context/globalContext';
import History from '../../History/History';
import { InnerLayout } from '../../styles/Layouts';
import { rupee } from '../../utils/Icons';
import Chart from '../Chart/Chart';

function Dashboard() {
    const {totalExpenses, incomes, expenses, totalIncome, totalBalance, getIncomes, getExpenses } = useGlobalContext()

    useEffect(() => {
        getIncomes()
        getExpenses()
    }, [])

    return (
        <DashboardStyled balance={totalBalance()}>
            <InnerLayout>
                <h1>All Transactions</h1>
                <div className="stats-con">
                    <div className="chart-con">
                        <div className="charts">
                            <Chart />
                        </div>
                        <div className="amount-con">
                            <div className="income">
                                <h2>Total Income</h2>
                                <p>
                                    {rupee} {totalIncome()}
                                </p>
                            </div>
                            <div className="expense">
                                <h2>Total Expense</h2>
                                <p>
                                    {rupee} {totalExpenses()}
                                </p>
                            </div>
                            <div className="balance">
                                <h2>Total Balance</h2>
                                <p style={{color: totalBalance() < 0 ? 'red' : 'var(--color-green)'}}>
                                    {rupee} {totalBalance()}
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="history-con">
                        <History />
                        <h2 className="salary-title">Min <span>Income</span>Max</h2>
                        <div className="salary-item">
                            <p>
                                {rupee}{incomes.length > 0 ? Math.min(...incomes.map(item => item.amount)) : 0}
                            </p>
                            <p>
                                {rupee}{incomes.length > 0 ? Math.max(...incomes.map(item => item.amount)) : 0}
                            </p>
                        </div>
                        <h2 className="salary-title">Min <span>Expense</span>Max</h2>
                        <div className="salary-item">
                            <p>
                                {rupee}{expenses.length > 0 ? Math.min(...expenses.map(item => item.amount)) : 0}
                            </p>
                            <p>
                                {rupee}{expenses.length > 0 ? Math.max(...expenses.map(item => item.amount)) : 0}
                            </p>
                        </div>
                    </div>
                </div>
            </InnerLayout>
        </DashboardStyled>
    )
}

const DashboardStyled = styled.div`
    width: 100%;
    padding: 2rem;
    background: #f8f9fa;
    border-radius: 20px;
    
    h1 {
        font-size: 2.5rem;
        font-weight: 700;
        margin-bottom: 2rem;
        color: var(--primary-color);
        text-align: center;
        position: relative;
        
        &::after {
            content: '';
            position: absolute;
            left: 50%;
            bottom: -10px;
            transform: translateX(-50%);
            width: 70px;
            height: 3px;
            background: var(--primary-color);
            border-radius: 10px;
        }
    }

    .stats-con {
        display: grid;
        grid-template-columns: 70% 28%;
        gap: 2rem;
        height: 100%;

        .chart-con {
            .charts {
                background: white;
                border-radius: 20px;
                padding: 1rem;
                box-shadow: 0px 1px 15px rgba(0, 0, 0, 0.06);
                height: auto;
                margin-bottom: 2rem;
                transition: all 0.3s ease;

                &:hover {
                    transform: translateY(-5px);
                    box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.1);
                }
            }

            .amount-con {
                display: grid;
                grid-template-columns: repeat(2, 1fr);
                gap: 2rem;

                .income, .expense, .balance {
                    background: white;
                    border: 2px solid #FFFFFF;
                    box-shadow: 0px 1px 15px rgba(0, 0, 0, 0.06);
                    border-radius: 20px;
                    padding: 1.5rem;
                    text-align: center;
                    transition: all 0.3s ease;

                    &:hover {
                        transform: translateY(-3px);
                        box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.1);
                    }

                    h2 {
                        font-size: 1.5rem;
                        margin-bottom: 1rem;
                        color: var(--primary-color);
                        font-weight: 600;
                    }

                    p {
                        font-size: 2.5rem;
                        font-weight: 700;
                        line-height: 1.2;
                        background: linear-gradient(to right, var(--primary-color), #2ecc71);
                        -webkit-background-clip: text;
                        -webkit-text-fill-color: transparent;
                    }
                }

                .income {
                    border-left: 4px solid #2ecc71;
                }

                .expense {
                    border-left: 4px solid #e74c3c;
                    p {
                        background: linear-gradient(to right, #e74c3c, #c0392b);
                        -webkit-background-clip: text;
                        -webkit-text-fill-color: transparent;
                    }
                }

                .balance {
                    grid-column: 1 / -1;
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                    padding: 2rem;
                    border-left: 4px solid var(--primary-color);

                    p {
                        font-size: 3.5rem;
                        background: ${props => props.balance < 0 ? 
                            'linear-gradient(to right, #e74c3c, #c0392b)' : 
                            'linear-gradient(to right, var(--primary-color), #2ecc71)'};
                        -webkit-background-clip: text;
                        -webkit-text-fill-color: transparent;
                    }
                }
            }
        }

        .history-con {
            background: white;
            border-radius: 20px;
            padding: 1.5rem;
            box-shadow: 0px 1px 15px rgba(0, 0, 0, 0.06);

            h2 {
                margin: 1rem 0;
                display: flex;
                align-items: center;
                justify-content: space-between;
                color: var(--primary-color);
                font-size: 1.5rem;
            }

            .salary-title {
                font-size: 1.2rem;
                margin-top: 2rem;
                
                span {
                    font-size: 1.5rem;
                    color: var(--primary-color);
                    font-weight: 600;
                    margin: 0 0.5rem;
                }
            }

            .salary-item {
                background: #fcfcfc;
                border: 2px solid #FFFFFF;
                box-shadow: 0px 1px 15px rgba(0, 0, 0, 0.06);
                padding: 1rem 2rem;
                border-radius: 20px;
                display: flex;
                justify-content: space-between;
                align-items: center;
                margin-bottom: 1rem;
                transition: all 0.3s ease;

                &:hover {
                    transform: translateX(5px);
                    box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.08);
                }

                p {
                    font-weight: 600;
                    font-size: 1.3rem;
                    color: var(--primary-color);
                }
            }
        }
    }

    /* Enhanced Responsive Design */
    @media (max-width: 1200px) {
        padding: 1.5rem;

        h1 {
            font-size: 2rem;
            margin-bottom: 1.5rem;
        }

        .stats-con {
            grid-template-columns: 1fr;
            gap: 1.5rem;

            .chart-con {
                .charts {
                    height: 350px;
                }

                .amount-con {
                    grid-template-columns: repeat(2, 1fr);
                    gap: 1rem;

                    div {
                        padding: 1rem;

                        h2 {
                            font-size: 1.1rem;
                        }

                        p {
                            font-size: 1.3rem;
                        }
                    }
                }
            }
        }
    }

    @media (max-width: 768px) {
        padding: 1rem;

        h1 {
            font-size: 1.8rem;
            margin-bottom: 1rem;
        }

        .stats-con {
            gap: 1rem;

            .chart-con {
                .charts {
                    height: 300px;
                }

                .amount-con {
                    grid-template-columns: 1fr;
                    gap: 0.8rem;

                    div {
                        padding: 0.8rem;

                        h2 {
                            font-size: 1rem;
                        }

                        p {
                            font-size: 1.2rem;
                        }
                    }
                }
            }

            .history-con {
                h2 {
                    font-size: 1.2rem;
                    margin-bottom: 1rem;
                }

                .salary-item {
                    padding: 0.8rem 1rem;

                    p {
                        font-size: 1.1rem;
                    }
                }
            }
        }
    }

    @media (max-width: 480px) {
        padding: 0.8rem;

        h1 {
            font-size: 1.5rem;
            margin-bottom: 0.8rem;
        }

        .stats-con {
            .chart-con {
                .charts {
                    height: 250px;
                }

                .amount-con {
                    div {
                        padding: 0.6rem;

                        h2 {
                            font-size: 0.9rem;
                        }

                        p {
                            font-size: 1rem;
                        }
                    }
                }
            }

            .history-con {
                .salary-item {
                    padding: 0.6rem 0.8rem;
                    flex-direction: column;
                    align-items: flex-start;
                    gap: 0.3rem;

                    p {
                        font-size: 1rem;
                    }
                }
            }
        }
    }

    @media (max-width: 360px) {
        padding: 0.5rem;

        h1 {
            font-size: 1.3rem;
        }

        .stats-con {
            .chart-con {
                .charts {
                    height: 200px;
                }
            }
        }
    }
`;

export default Dashboard