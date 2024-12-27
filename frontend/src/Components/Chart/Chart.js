import React from 'react'
import {
    Chart as ChartJS,
    BarElement,
    Tooltip,
    Legend,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
} from 'chart.js';
import { Line, Bar } from 'react-chartjs-2'
import styled from 'styled-components'
import { useGlobalContext } from '../../context/globalContext'
import { dateFormat } from '../../utils/dateFormat'

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    BarElement,
    Tooltip,
    Legend,
    Title
);

function Chart() {
    const {incomes, expenses} = useGlobalContext()

    const lineData = {
        labels: incomes.map((inc) => {
            const {date} = inc
            return dateFormat(date)
        }),
        datasets: [
            {
                label: 'Income',
                data: [
                    ...incomes.map((income) => {
                        const {amount} = income
                        return amount
                    })
                ],
                backgroundColor: 'green',
                borderColor: 'green',
                tension: .2
            },
            {
                label: 'Expenses',
                data: [
                    ...expenses.map((expense) => {
                        const {amount} = expense
                        return amount
                    })
                ],
                backgroundColor: 'red',
                borderColor: 'red',
                tension: .2
            }
        ]
    }

    // Calculate total income by category
    const incomeTotalsByCategory = incomes.reduce((acc, income) => {
        acc[income.category] = (acc[income.category] || 0) + income.amount;
        return acc;
    }, {});

    // Calculate total expenses by category
    const expenseTotalsByCategory = expenses.reduce((acc, expense) => {
        acc[expense.category] = (acc[expense.category] || 0) + expense.amount;
        return acc;
    }, {});

    const incomesBarData = {
        labels: Object.keys(incomeTotalsByCategory),
        datasets: [{
            label: 'Income by Category',
            data: Object.values(incomeTotalsByCategory),
            backgroundColor: Array(Object.keys(incomeTotalsByCategory).length).fill('rgba(0, 208, 132, 0.7)'),
            borderColor: Array(Object.keys(incomeTotalsByCategory).length).fill('rgba(0, 208, 132, 1)'),
            borderWidth: 2,
            borderRadius: 5,
        }]
    };

    const expensesBarData = {
        labels: Object.keys(expenseTotalsByCategory),
        datasets: [{
            label: 'Expenses by Category',
            data: Object.values(expenseTotalsByCategory),
            backgroundColor: Array(Object.keys(expenseTotalsByCategory).length).fill('rgba(255, 84, 84, 0.7)'),
            borderColor: Array(Object.keys(expenseTotalsByCategory).length).fill('rgba(255, 84, 84, 1)'),
            borderWidth: 2,
            borderRadius: 5,
        }]
    };

    const lineOptions = {
        plugins: {
            legend: {
                display: true,
                position: 'top',
                align: 'end',
                labels: {
                    boxWidth: 15,
                    padding: 20,
                    usePointStyle: true,
                    font: {
                        size: 12,
                        weight: 500
                    }
                }
            },
            title: {
                display: true,
                text: 'Income vs Expenses Over Time'
            }
        },
        scales: {
            y: {
                beginAtZero: true,
                grid: {
                    color: 'rgba(0, 0, 0, 0.1)',
                    drawBorder: false
                },
                ticks: {
                    padding: 10,
                    font: {
                        size: 11
                    }
                }
            },
            x: {
                grid: {
                    display: false,
                    drawBorder: false
                },
                ticks: {
                    padding: 10,
                    font: {
                        size: 11
                    }
                }
            }
        },
        responsive: true,
        maintainAspectRatio: false,
        layout: {
            padding: {
                left: 10,
                right: 20,
                top: 20,
                bottom: 10
            }
        },
        elements: {
            line: {
                tension: 0.4
            },
            point: {
                radius: 4,
                hitRadius: 8,
                hoverRadius: 6
            }
        }
    };

    const barOptions = {
        plugins: {
            legend: {
                display: false
            },
            title: {
                display: true,
                font: {
                    size: 16,
                    weight: 'bold'
                },
                padding: {
                    top: 10,
                    bottom: 30
                }
            }
        },
        scales: {
            y: {
                beginAtZero: true,
                grid: {
                    color: 'rgba(0, 0, 0, 0.1)'
                }
            },
            x: {
                grid: {
                    display: false
                }
            }
        },
        responsive: true,
        maintainAspectRatio: true,
        aspectRatio: 2.5/3.5
    };

    return (
        <ChartStyled>
            <div className="analytics">
                <div className="chart-container line-chart">
                    <h2>Income vs Expenses Overview</h2>
                    <div className="line-chart-wrapper">
                        <Line data={lineData} options={lineOptions} />
                    </div>
                </div>
                <div className="categories-container">
                    <div className="chart-item income-chart">
                        <h2>Income Categories</h2>
                        <div className="chart-wrapper">
                            <Bar data={incomesBarData} options={barOptions} />
                        </div>
                    </div>
                    <div className="chart-item expense-chart">
                        <h2>Expense Categories</h2>
                        <div className="chart-wrapper">
                            <Bar data={expensesBarData} options={barOptions} />
                        </div>
                    </div>
                </div>
            </div>
        </ChartStyled>
    )
}

const ChartStyled = styled.div`
    background: #fcfcfc;
    border: 2px solid #ffffff;
    box-shadow: 0px 1px 15px rgba(0, 0, 0, 0.06);
    padding: 2rem;
    border-radius: 20px;
    height: 100%;

    .analytics {
        display: flex;
        flex-direction: column;
        gap: 3rem;
    }

    .chart-container {
        background: white;
        border-radius: 15px;
        padding: 1.5rem;
        box-shadow: 0px 1px 10px rgba(0, 0, 0, 0.04);
        transition: all 0.3s ease-in-out;
        width: 100%;

        &:hover {
            transform: translateY(-3px);
            box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.08);
        }

        &.line-chart {
            height: 400px;
            display: flex;
            flex-direction: column;
            padding: 1.5rem 2rem;
        }
    }

    .line-chart-wrapper {
        flex: 1;
        position: relative;
        width: 100%;
        margin-top: 1rem;
        min-height: 300px;
    }

    .categories-container {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
        gap: 2rem;
        margin-bottom: 3rem;
    }

    .chart-item {
        background: white;
        border-radius: 15px;
        padding: 1.5rem;
        box-shadow: 0px 1px 10px rgba(0, 0, 0, 0.04);
        transition: all 0.3s ease-in-out;

        &:hover {
            transform: translateY(-3px);
            box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.08);
        }

        &.income-chart {
            border-left: 4px solid rgba(0, 208, 132, 1);
        }

        &.expense-chart {
            border-left: 4px solid rgba(255, 84, 84, 1);
        }
    }

    .chart-wrapper {
        height: calc(100vw * (3.5/2.5) * 0.25);
        max-height: 400px;
        min-height: 300px;
        width: 100%;
        margin-top: 1rem;
        margin-bottom: 2rem;
    }

    h2 {
        color: #333;
        font-size: 1.5rem;
        font-weight: 600;
        margin-bottom: 0.5rem;
        text-align: center;
    }

    @media (max-width: 768px) {
        padding: 1rem;
        
        .categories-container {
            grid-template-columns: 1fr;
        }

        h2 {
            font-size: 1.2rem;
        }

        .line-chart-wrapper, .chart-wrapper {
            min-height: 250px;
        }
    }
`;

export default Chart