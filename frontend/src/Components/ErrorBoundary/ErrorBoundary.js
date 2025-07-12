import React from 'react';
import styled from 'styled-components';

class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false, error: null, errorInfo: null };
    }

    static getDerivedStateFromError(error) {
        return { hasError: true };
    }

    componentDidCatch(error, errorInfo) {
        console.error('Error caught by boundary:', error, errorInfo);
        this.setState({
            error: error,
            errorInfo: errorInfo
        });
    }

    render() {
        if (this.state.hasError) {
            return (
                <ErrorStyled>
                    <div className="error-container">
                        <div className="content">
                            <div className="error-icon">⚠️</div>
                            <h1>Oops! Something went wrong</h1>
                            <p>We're sorry, but something unexpected happened.</p>
                            <button 
                                onClick={() => window.location.reload()} 
                                className="reload-btn"
                            >
                                Reload Page
                            </button>
                            <button 
                                onClick={() => window.location.href = '/dashboard'} 
                                className="home-btn"
                            >
                                Go to Dashboard
                            </button>
                            {process.env.NODE_ENV === 'development' && (
                                <details className="error-details">
                                    <summary>Error Details (Development)</summary>
                                    <pre>{this.state.error && this.state.error.toString()}</pre>
                                    <pre>{this.state.errorInfo.componentStack}</pre>
                                </details>
                            )}
                        </div>
                    </div>
                </ErrorStyled>
            );
        }

        return this.props.children;
    }
}

const ErrorStyled = styled.div`
    .error-container {
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
        max-width: 600px;
        width: 100%;
    }

    .error-icon {
        font-size: 4rem;
        margin-bottom: 1rem;
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

    .reload-btn, .home-btn {
        background: var(--color-green);
        color: white;
        border: none;
        padding: 1rem 2rem;
        border-radius: 50px;
        font-size: 1rem;
        font-weight: 600;
        cursor: pointer;
        transition: all 0.3s ease;
        margin: 0 0.5rem;
        
        &:hover {
            background: #27ae60;
            transform: translateY(-2px);
            box-shadow: 0 10px 20px rgba(46, 204, 113, 0.3);
        }
    }

    .home-btn {
        background: var(--primary-color);
        
        &:hover {
            background: #1a1a5e;
            box-shadow: 0 10px 20px rgba(34, 34, 96, 0.3);
        }
    }

    .error-details {
        margin-top: 2rem;
        text-align: left;
        background: #f8f9fa;
        padding: 1rem;
        border-radius: 8px;
        
        summary {
            cursor: pointer;
            font-weight: 600;
            margin-bottom: 1rem;
        }
        
        pre {
            background: #e9ecef;
            padding: 1rem;
            border-radius: 4px;
            overflow-x: auto;
            font-size: 0.8rem;
            margin: 0.5rem 0;
        }
    }

    /* Responsive Design */
    @media (max-width: 768px) {
        .error-container {
            padding: 1rem;
        }

        .content {
            padding: 2rem 1.5rem;
        }

        .error-icon {
            font-size: 3rem;
        }

        h1 {
            font-size: 1.5rem;
        }

        p {
            font-size: 1rem;
        }

        .reload-btn, .home-btn {
            padding: 0.8rem 1.5rem;
            font-size: 0.9rem;
            margin: 0.25rem;
            display: block;
            width: 100%;
        }
    }

    @media (max-width: 480px) {
        .content {
            padding: 1.5rem 1rem;
        }

        .error-icon {
            font-size: 2.5rem;
        }

        h1 {
            font-size: 1.3rem;
        }

        p {
            font-size: 0.9rem;
        }
    }
`;

export default ErrorBoundary;
