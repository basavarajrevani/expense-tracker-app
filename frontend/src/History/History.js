import React from 'react'
import styled from 'styled-components'
import { useGlobalContext } from '../context/globalContext';
import { rupee } from '../utils/Icons';
import { dateFormat } from '../utils/dateFormat';

function History() {
    const {transactionHistory} = useGlobalContext()

    const [...history] = transactionHistory()

    return (
        <HistoryStyled>
            <h2>Recent History</h2>
            <div className="history-list">
                {history.length === 0 ? (
                    <div className="no-history">
                        <p>No recent transactions</p>
                    </div>
                ) : (
                    history.map((item) =>{
                        const {_id, title, amount, type, date, category} = item
                        return (
                            <div key={_id} className={`history-item ${type}`}>
                                <div className="icon-title">
                                    <div className="type-indicator"></div>
                                    <div className="content">
                                        <h5>{title}</h5>
                                        <small>{category} • {dateFormat(date)}</small>
                                    </div>
                                </div>
                                <div className="amount">
                                    <p>
                                        {type === 'expense' ? '-' : '+'}{rupee}{amount <= 0 ? 0 : amount}
                                    </p>
                                </div>
                            </div>
                        )
                    })
                )}
            </div>
        </HistoryStyled>
    )
}

const HistoryStyled = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;

    h2 {
        font-size: 1.5rem;
        font-weight: 600;
        color: var(--primary-color);
        margin-bottom: 1.5rem;
        position: relative;
        padding-left: 0.5rem;

        &::before {
            content: '';
            position: absolute;
            left: -1rem;
            top: 0;
            width: 0.3rem;
            height: 100%;
            background: var(--primary-color);
            border-radius: 0 5px 5px 0;
        }
    }

    .history-list {
        display: flex;
        flex-direction: column;
        gap: 1rem;
    }

    .no-history {
        text-align: center;
        padding: 2rem;
        background: white;
        border-radius: 15px;
        box-shadow: 0px 1px 15px rgba(0, 0, 0, 0.06);
        
        p {
            color: #666;
            font-size: 1.1rem;
        }
    }

    .history-item {
        background: white;
        border-radius: 15px;
        padding: 1rem 1.5rem;
        display: flex;
        justify-content: space-between;
        align-items: center;
        transition: all 0.3s ease;
        border: 2px solid transparent;
        position: relative;
        overflow: hidden;

        &:hover {
            transform: translateX(5px);
            border-color: ${props => props.type === 'expense' ? '#ff5c5c' : '#2ecc71'};
            box-shadow: 0px 3px 15px rgba(0, 0, 0, 0.08);
        }

        &.expense {
            .type-indicator {
                background: #ff5c5c;
            }
            .amount p {
                color: #ff5c5c;
            }
        }

        &.income {
            .type-indicator {
                background: #2ecc71;
            }
            .amount p {
                color: #2ecc71;
            }
        }

        .icon-title {
            display: flex;
            align-items: center;
            gap: 1rem;

            .type-indicator {
                width: 0.5rem;
                height: 0.5rem;
                border-radius: 50%;
            }

            .content {
                h5 {
                    font-size: 1.1rem;
                    font-weight: 500;
                    color: #333;
                    margin-bottom: 0.2rem;
                }

                small {
                    color: #666;
                    font-size: 0.9rem;
                }
            }
        }

        .amount {
            p {
                font-weight: 600;
                font-size: 1.2rem;
                display: flex;
                align-items: center;
                gap: 0.2rem;
            }
        }
    }

    @media (max-width: 768px) {
        .history-item {
            padding: 0.8rem 1rem;

            .icon-title {
                .content {
                    h5 {
                        font-size: 1rem;
                    }
                    small {
                        font-size: 0.8rem;
                    }
                }
            }

            .amount p {
                font-size: 1.1rem;
            }
        }
    }
`;

export default History