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

    // Responsive chart options
    const getResponsiveOptions = () => {
        const isMobile = window.innerWidth <= 768;
        const isTablet = window.innerWidth <= 1024;

        return {
            plugins: {
                legend: {
                    display: true,
                    position: isMobile ? 'bottom' : 'top',
                    align: isMobile ? 'center' : 'end',
                    labels: {
                        boxWidth: isMobile ? 12 : 15,
                        padding: isMobile ? 10 : 20,
                        usePointStyle: true,
                        font: {
                            size: isMobile ? 10 : isTablet ? 11 : 12,
                            weight: 500
                        }
                    }
                },
                title: {
                    display: true,
                    text: 'Income vs Expenses Over Time',
                    font: {
                        size: isMobile ? 12 : isTablet ? 14 : 16,
                        weight: 'bold'
                    },
                    padding: {
                        top: 10,
                        bottom: isMobile ? 10 : 20
                    }
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
                        padding: isMobile ? 5 : 10,
                        font: {
                            size: isMobile ? 9 : isTablet ? 10 : 11
                        },
                        maxTicksLimit: isMobile ? 5 : 8
                    }
                },
                x: {
                    grid: {
                        display: false,
                        drawBorder: false
                    },
                    ticks: {
                        padding: isMobile ? 5 : 10,
                        font: {
                            size: isMobile ? 9 : isTablet ? 10 : 11
                        },
                        maxTicksLimit: isMobile ? 4 : isTablet ? 6 : 10,
                        maxRotation: isMobile ? 45 : 0
                    }
                }
            },
            responsive: true,
            maintainAspectRatio: false,
            interaction: {
                intersect: false,
                mode: 'index'
            },
            layout: {
                padding: {
                    left: isMobile ? 5 : 10,
                    right: isMobile ? 5 : 20,
                    top: isMobile ? 10 : 20,
                    bottom: isMobile ? 5 : 10
                }
            },
            elements: {
                line: {
                    tension: 0.4
                },
                point: {
                    radius: isMobile ? 3 : 4,
                    hitRadius: isMobile ? 6 : 8,
                    hoverRadius: isMobile ? 4 : 6
                }
            }
        };
    };

    const getBarOptions = () => {
        const isMobile = window.innerWidth <= 768;
        const isTablet = window.innerWidth <= 1024;

        return {
            plugins: {
                legend: {
                    display: false
                },
                title: {
                    display: false // We'll use custom titles
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
                        font: {
                            size: isMobile ? 9 : isTablet ? 10 : 11
                        },
                        maxTicksLimit: isMobile ? 4 : 6
                    }
                },
                x: {
                    grid: {
                        display: false,
                        drawBorder: false
                    },
                    ticks: {
                        font: {
                            size: isMobile ? 8 : isTablet ? 9 : 10
                        },
                        maxRotation: isMobile ? 45 : 0,
                        callback: function(value, index, values) {
                            const label = this.getLabelForValue(value);
                            if (isMobile && label.length > 8) {
                                return label.substring(0, 8) + '...';
                            }
                            return label;
                        }
                    }
                }
            },
            responsive: true,
            maintainAspectRatio: false,
            interaction: {
                intersect: false,
                mode: 'index'
            },
            layout: {
                padding: {
                    left: isMobile ? 5 : 10,
                    right: isMobile ? 5 : 10,
                    top: isMobile ? 5 : 10,
                    bottom: isMobile ? 5 : 10
                }
            }
        };
    };

    return (
        <ChartStyled>
            <div className="analytics">
                <div className="chart-container line-chart">
                    <h2>Income vs Expenses Overview</h2>
                    <div className="line-chart-wrapper">
                        <Line data={lineData} options={getResponsiveOptions()} />
                    </div>
                </div>
                <div className="categories-container">
                    <div className="chart-item income-chart">
                        <h3>Income Categories</h3>
                        <div className="chart-wrapper">
                            <Bar data={incomesBarData} options={getBarOptions()} />
                        </div>
                    </div>
                    <div className="chart-item expense-chart">
                        <h3>Expense Categories</h3>
                        <div className="chart-wrapper">
                            <Bar data={expensesBarData} options={getBarOptions()} />
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
    width: 100%;
    overflow: hidden;

    .analytics {
        display: flex;
        flex-direction: column;
        gap: 2rem;
        width: 100%;
        height: 100%;
    }

    .chart-container {
        background: white;
        border-radius: 15px;
        padding: 1.5rem;
        box-shadow: 0px 1px 10px rgba(0, 0, 0, 0.04);
        transition: all 0.3s ease-in-out;
        width: 100%;
        overflow: hidden;

        &:hover {
            transform: translateY(-2px);
            box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.08);
        }

        &.line-chart {
            height: 450px;
            display: flex;
            flex-direction: column;
            min-height: 350px;
        }
    }

    .line-chart-wrapper {
        flex: 1;
        position: relative;
        width: 100%;
        height: 100%;
        margin-top: 1rem;
        min-height: 280px;

        canvas {
            width: 100% !important;
            height: 100% !important;
        }
    }

    .categories-container {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
        gap: 1.5rem;
        width: 100%;
    }

    .chart-item {
        background: white;
        border-radius: 15px;
        padding: 1.5rem;
        box-shadow: 0px 1px 10px rgba(0, 0, 0, 0.04);
        transition: all 0.3s ease-in-out;
        min-height: 350px;
        display: flex;
        flex-direction: column;

        &:hover {
            transform: translateY(-2px);
            box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.08);
        }

        &.income-chart {
            border-left: 4px solid var(--color-green);
        }

        &.expense-chart {
            border-left: 4px solid #e74c3c;
        }
    }

    .chart-wrapper {
        flex: 1;
        position: relative;
        width: 100%;
        height: 280px;
        margin-top: 1rem;

        canvas {
            width: 100% !important;
            height: 100% !important;
        }
    }

    h2 {
        color: var(--primary-color);
        font-size: clamp(1.2rem, 3vw, 1.8rem);
        font-weight: 700;
        margin-bottom: 1rem;
        text-align: center;
        line-height: 1.3;
    }

    h3 {
        color: var(--primary-color);
        font-size: clamp(1rem, 2.5vw, 1.4rem);
        font-weight: 600;
        margin-bottom: 0.8rem;
        text-align: center;
        line-height: 1.3;
    }

    /* Enhanced Responsive Design */
    @media (max-width: 1200px) {
        padding: 1.5rem;

        .analytics {
            gap: 1.5rem;
        }

        .chart-container.line-chart {
            height: 400px;
            min-height: 320px;
        }

        .chart-item {
            min-height: 320px;
        }

        .chart-wrapper {
            height: 250px;
        }

        .line-chart-wrapper {
            min-height: 250px;
        }
    }

    @media (max-width: 1024px) {
        padding: 1.2rem;

        .categories-container {
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
            gap: 1.2rem;
        }

        .chart-container.line-chart {
            height: 380px;
            min-height: 300px;
        }

        .chart-item {
            min-height: 300px;
            padding: 1.2rem;
        }

        .chart-wrapper {
            height: 220px;
        }

        .line-chart-wrapper {
            min-height: 220px;
        }
    }

    @media (max-width: 768px) {
        padding: 1rem;

        .analytics {
            gap: 1rem;
        }

        .categories-container {
            grid-template-columns: 1fr;
            gap: 1rem;
        }

        .chart-container {
            padding: 1rem;
            border-radius: 12px;

            &.line-chart {
                height: 320px;
                min-height: 280px;
            }
        }

        .chart-item {
            min-height: 280px;
            padding: 1rem;
            border-radius: 12px;
        }

        .chart-wrapper {
            height: 200px;
            margin-top: 0.8rem;
        }

        .line-chart-wrapper {
            min-height: 200px;
            margin-top: 0.8rem;
        }
    }

    @media (max-width: 480px) {
        padding: 0.8rem;

        .analytics {
            gap: 0.8rem;
        }

        .chart-container {
            padding: 0.8rem;
            border-radius: 10px;

            &.line-chart {
                height: 280px;
                min-height: 250px;
            }
        }

        .chart-item {
            min-height: 250px;
            padding: 0.8rem;
            border-radius: 10px;
        }

        .chart-wrapper {
            height: 180px;
            margin-top: 0.6rem;
        }

        .line-chart-wrapper {
            min-height: 180px;
            margin-top: 0.6rem;
        }
    }

    @media (max-width: 360px) {
        padding: 0.6rem;

        .chart-container {
            padding: 0.6rem;

            &.line-chart {
                height: 250px;
                min-height: 220px;
            }
        }

        .chart-item {
            min-height: 220px;
            padding: 0.6rem;
        }

        .chart-wrapper {
            height: 160px;
        }

        .line-chart-wrapper {
            min-height: 160px;
        }
    }

    /* Ensure charts are always visible */
    canvas {
        display: block !important;
        max-width: 100% !important;
        height: auto !important;
    }
`;

export default Chart