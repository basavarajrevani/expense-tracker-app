import React from 'react';
import styled, { keyframes } from 'styled-components';

function Loading() {
    return (
        <LoadingStyled>
            <div className="loading-container">
                <div className="spinner"></div>
                <h2>Loading Expense Tracker...</h2>
                <p>Please wait while we load your financial data</p>
            </div>
        </LoadingStyled>
    );
}

const spin = keyframes`
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
`;

const pulse = keyframes`
    0%, 100% { opacity: 1; }
    50% { opacity: 0.5; }
`;

const LoadingStyled = styled.div`
    .loading-container {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        min-height: 100vh;
        background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
        padding: 2rem;
        text-align: center;
    }

    .spinner {
        width: 60px;
        height: 60px;
        border: 4px solid rgba(255, 255, 255, 0.3);
        border-top: 4px solid white;
        border-radius: 50%;
        animation: ${spin} 1s linear infinite;
        margin-bottom: 2rem;
    }

    h2 {
        color: white;
        font-size: 1.8rem;
        font-weight: 600;
        margin-bottom: 0.5rem;
        animation: ${pulse} 2s ease-in-out infinite;
    }

    p {
        color: rgba(255, 255, 255, 0.8);
        font-size: 1rem;
        margin: 0;
    }

    /* Responsive Design */
    @media (max-width: 768px) {
        .loading-container {
            padding: 1rem;
        }

        .spinner {
            width: 50px;
            height: 50px;
            border-width: 3px;
        }

        h2 {
            font-size: 1.5rem;
        }

        p {
            font-size: 0.9rem;
        }
    }

    @media (max-width: 480px) {
        .spinner {
            width: 40px;
            height: 40px;
            border-width: 3px;
        }

        h2 {
            font-size: 1.3rem;
        }

        p {
            font-size: 0.8rem;
        }
    }
`;

export default Loading;
