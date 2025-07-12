import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

function NotFound() {
    const navigate = useNavigate();

    const handleGoHome = () => {
        navigate('/dashboard');
    };

    return (
        <NotFoundStyled>
            <div className="not-found-container">
                <div className="content">
                    <div className="error-code">404</div>
                    <h1>Page Not Found</h1>
                    <p>The page you're looking for doesn't exist or has been moved.</p>
                    <button onClick={handleGoHome} className="home-btn">
                        Go to Dashboard
                    </button>
                </div>
            </div>
        </NotFoundStyled>
    );
}

const NotFoundStyled = styled.div`
    .not-found-container {
        display: flex;
        justify-content: center;
        align-items: center;
        min-height: 100vh;
        background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
        padding: 2rem;
    }

    .content {
        text-align: center;
        background: white;
        padding: 3rem 2rem;
        border-radius: 20px;
        box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
        max-width: 500px;
        width: 100%;
    }

    .error-code {
        font-size: 6rem;
        font-weight: 900;
        color: var(--primary-color);
        margin-bottom: 1rem;
        line-height: 1;
    }

    h1 {
        font-size: 2rem;
        color: var(--primary-color);
        margin-bottom: 1rem;
        font-weight: 700;
    }

    p {
        color: #666;
        font-size: 1.1rem;
        margin-bottom: 2rem;
        line-height: 1.6;
    }

    .home-btn {
        background: var(--color-green);
        color: white;
        border: none;
        padding: 1rem 2rem;
        border-radius: 50px;
        font-size: 1rem;
        font-weight: 600;
        cursor: pointer;
        transition: all 0.3s ease;
        
        &:hover {
            background: #27ae60;
            transform: translateY(-2px);
            box-shadow: 0 10px 20px rgba(46, 204, 113, 0.3);
        }
    }

    /* Responsive Design */
    @media (max-width: 768px) {
        .not-found-container {
            padding: 1rem;
        }

        .content {
            padding: 2rem 1.5rem;
        }

        .error-code {
            font-size: 4rem;
        }

        h1 {
            font-size: 1.5rem;
        }

        p {
            font-size: 1rem;
        }

        .home-btn {
            padding: 0.8rem 1.5rem;
            font-size: 0.9rem;
        }
    }

    @media (max-width: 480px) {
        .content {
            padding: 1.5rem 1rem;
        }

        .error-code {
            font-size: 3rem;
        }

        h1 {
            font-size: 1.3rem;
        }

        p {
            font-size: 0.9rem;
        }
    }
`;

export default NotFound;
