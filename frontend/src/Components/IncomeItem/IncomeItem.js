import React from 'react'
import styled from 'styled-components'
import { dateFormat } from '../../utils/dateFormat';
import { bitcoin, book, calender, card, circle, clothing, comment, rupee, food, freelance, medical, money, piggy, stocks, takeaway, trash, tv, users, yt } from '../../utils/Icons';
import Button from '../Button/Button';

function IncomeItem({
    id,
    title,
    amount,
    date,
    category,
    description,
    deleteItem,
    indicatorColor,
    type
}) {
    const categoryIcon = () =>{
        switch(category) {
            case 'salary':
                return money;
            case 'freelancing':
                return freelance
            case 'investments':
                return stocks;
            case 'stocks':
                return users;
            case 'bitcoin':
                return bitcoin;
            case 'bank':
                return card;
            case 'youtube':
                return yt;
            case 'other':
                return piggy;
            default:
                return ''
        }
    }

    const expenseCatIcon = () => {
        switch (category) {
            case 'education':
                return book;
            case 'groceries':
                return food;
            case 'health':
                return medical;
            case 'subscriptions':
                return tv;
            case 'takeaways':
                return takeaway;
            case 'clothing':
                return clothing;
            case 'travelling':
                return freelance;
            case 'other':
                return circle;
            default:
                return ''
        }
    }

    return (
        <IncomeItemStyled>
            <div className="icon-container">
                <div className="icon">
                    {type === 'expense' ? expenseCatIcon() : categoryIcon()}
                </div>
                <span className="category">{category}</span>
            </div>
            
            <div className="content">
                <div className="header">
                    <h5>{title}</h5>
                    <div className="amount">
                        <span>{rupee}</span>{amount}
                    </div>
                </div>
                
                <div className="footer">
                    <div className="info">
                        <div className="date">
                            {calender}
                            <span>{dateFormat(date)}</span>
                        </div>
                        {description && (
                            <div className="description" title={description}>
                                {comment}
                                <span>{description}</span>
                            </div>
                        )}
                    </div>
                    <Button 
                        icon={trash}
                        bPad={'0.8rem'}
                        bRad={'50%'}
                        bg={'rgba(220, 53, 69, 0.1)'}
                        color={'#dc3545'}
                        iColor={'#dc3545'}
                        hColor={'#fff'}
                        onClick={() => deleteItem(id)}
                    />
                </div>
            </div>
        </IncomeItemStyled>
    )
}

const IncomeItemStyled = styled.div`
    background: white;
    border: 2px solid #ffffff;
    box-shadow: 0px 1px 15px rgba(0, 0, 0, 0.06);
    border-radius: 20px;
    padding: 1rem;
    margin-bottom: 1rem;
    display: flex;
    align-items: flex-start;
    gap: 1.5rem;
    transition: all 0.3s ease;

    &:hover {
        transform: translateX(5px);
        box-shadow: 0px 3px 15px rgba(0, 0, 0, 0.08);
    }

    .icon-container {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 0.5rem;

        .icon {
            width: 60px;
            height: 60px;
            border-radius: 15px;
            background: #f8f9fa;
            display: flex;
            align-items: center;
            justify-content: center;
            border: 2px solid #ffffff;
            transition: all 0.3s ease;

            i {
                font-size: 1.8rem;
                color: var(--primary-color);
            }
        }

        .category {
            font-size: 0.8rem;
            color: #666;
            text-transform: capitalize;
        }
    }

    .content {
        flex: 1;
        display: flex;
        flex-direction: column;
        gap: 0.8rem;

        .header {
            display: flex;
            justify-content: space-between;
            align-items: center;

            h5 {
                font-size: 1.2rem;
                font-weight: 600;
                color: var(--primary-color);
                text-transform: capitalize;
            }

            .amount {
                font-size: 1.2rem;
                font-weight: 600;
                color: var(--color-green);
                display: flex;
                align-items: center;
                gap: 0.2rem;

                span {
                    font-size: 1.1rem;
                }
            }
        }

        .footer {
            display: flex;
            justify-content: space-between;
            align-items: center;

            .info {
                display: flex;
                align-items: center;
                gap: 1.5rem;

                .date, .description {
                    display: flex;
                    align-items: center;
                    gap: 0.5rem;
                    color: #666;
                    font-size: 0.9rem;

                    i {
                        font-size: 1.1rem;
                        color: #666;
                    }
                }

                .description {
                    max-width: 200px;
                    span {
                        white-space: nowrap;
                        overflow: hidden;
                        text-overflow: ellipsis;
                    }
                }
            }
        }
    }

    /* Enhanced Responsive Design */
    @media (max-width: 1024px) {
        padding: 0.9rem;
        gap: 1.2rem;

        .icon-container {
            .icon {
                width: 70px;
                height: 70px;

                i {
                    font-size: 1.8rem;
                }
            }

            .category {
                font-size: 0.8rem;
            }
        }

        .content {
            .header {
                h5 {
                    font-size: 1.1rem;
                }

                .amount {
                    font-size: 1.3rem;
                }
            }
        }
    }

    @media (max-width: 768px) {
        padding: 0.8rem;
        gap: 1rem;
        border-radius: 15px;

        .icon-container {
            .icon {
                width: 60px;
                height: 60px;

                i {
                    font-size: 1.6rem;
                }
            }

            .category {
                font-size: 0.75rem;
                max-width: 60px;
                overflow: hidden;
                text-overflow: ellipsis;
                white-space: nowrap;
            }
        }

        .content {
            .header {
                gap: 0.8rem;

                h5 {
                    font-size: 1rem;
                    line-height: 1.3;
                }

                .amount {
                    font-size: 1.2rem;
                }
            }

            .footer {
                gap: 0.8rem;

                .info {
                    gap: 0.6rem;

                    .date, .description {
                        font-size: 0.8rem;

                        i {
                            font-size: 1rem;
                        }
                    }

                    .description {
                        max-width: 150px;
                    }
                }
            }
        }
    }

    @media (max-width: 480px) {
        flex-direction: column;
        align-items: center;
        text-align: center;
        padding: 0.8rem;
        gap: 0.8rem;
        border-radius: 12px;

        .icon-container {
            margin-bottom: 0.3rem;

            .icon {
                width: 50px;
                height: 50px;

                i {
                    font-size: 1.4rem;
                }
            }

            .category {
                font-size: 0.7rem;
                max-width: 50px;
            }
        }

        .content {
            width: 100%;

            .header {
                flex-direction: column;
                gap: 0.5rem;
                align-items: center;

                h5 {
                    font-size: 0.9rem;
                    margin: 0;
                }

                .amount {
                    font-size: 1.1rem;
                }
            }

            .footer {
                flex-direction: column;
                gap: 0.8rem;
                align-items: center;

                .info {
                    flex-direction: column;
                    gap: 0.4rem;
                    align-items: center;

                    .date, .description {
                        font-size: 0.75rem;
                        justify-content: center;

                        i {
                            font-size: 0.9rem;
                        }
                    }

                    .description {
                        max-width: 120px;
                    }
                }

                button {
                    padding: 0.6rem !important;

                    i {
                        font-size: 0.9rem !important;
                    }
                }
            }
        }
    }

    @media (max-width: 360px) {
        padding: 0.6rem;
        gap: 0.6rem;
        border-radius: 10px;

        .icon-container {
            .icon {
                width: 45px;
                height: 45px;

                i {
                    font-size: 1.2rem;
                }
            }

            .category {
                font-size: 0.65rem;
                max-width: 45px;
            }
        }

        .content {
            .header {
                h5 {
                    font-size: 0.85rem;
                }

                .amount {
                    font-size: 1rem;
                }
            }

            .footer {
                .info {
                    .date, .description {
                        font-size: 0.7rem;
                    }

                    .description {
                        max-width: 100px;
                    }
                }

                button {
                    padding: 0.5rem !important;
                }
            }
        }
    }
`;

export default IncomeItem;