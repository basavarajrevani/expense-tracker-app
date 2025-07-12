import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useAuth } from '../../context/authContext';
import { useNavigate, useLocation } from 'react-router-dom';
import { rupee } from '../../utils/Icons';

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [successMsg, setSuccessMsg] = useState('');
    const { login, error, setError } = useAuth();
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        setError(null);
        if (location.state?.fromRegister) {
            setSuccessMsg('Registration successful! Please login.');
        }
    }, [setError, location]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setSuccessMsg('');
        try {
            await login(email, password);
            navigate('/dashboard', { replace: true });
        } catch (err) {
            console.error('Login error:', err);
        }
    };

    return (
        <LoginStyled>
            <div className="background-design">
                <div className="circle circle-1"></div>
                <div className="circle circle-2"></div>
                <div className="circle circle-3"></div>
            </div>
            
            <div className="login-container">
                <div className="login-content">
                    <div className="header">
                        <div className="logo">
                            <i>{rupee}</i>
                            <h1>Expense Tracker</h1>
                        </div>
                        <p className="subtitle">See It, Track It, Save It. Welcome back! Please login to your account.</p>
                    </div>

                    {successMsg && <div className="message success">{successMsg}</div>}
                    {error && <div className="message error">{error}</div>}

                    <form onSubmit={handleSubmit}>
                        <div className="input-group">
                            <label>Email</label>
                            <div className="input-control">
                                <input
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    placeholder="Enter your email"
                                    required
                                />
                            </div>
                        </div>

                        <div className="input-group">
                            <label>Password</label>
                            <div className="input-control">
                                <input
                                    type="password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    placeholder="Enter your password"
                                    required
                                />
                            </div>
                        </div>

                        <button type="submit" className="submit-btn">
                            Login
                            <span className="btn-shine"></span>
                        </button>
                    </form>

                    <div className="register-link">
                        Don't have an account?{' '}
                        <span onClick={() => navigate('/register')}>Register Now</span>
                    </div>
                </div>
            </div>
        </LoginStyled>
    );
}

const LoginStyled = styled.div`
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #f8f9fa;
    position: relative;
    overflow-y: auto;
    padding: 2rem 0;

    .background-design {
        position: fixed;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        z-index: 1;

        .circle {
            position: fixed;
            border-radius: 50%;
            background: linear-gradient(to right, var(--color-green), #87eb8f);
            opacity: 0.1;
        }

        .circle-1 {
            width: 200px;
            height: 200px;
            top: -100px;
            left: -100px;
        }

        .circle-2 {
            width: 300px;
            height: 300px;
            bottom: -150px;
            right: -150px;
            background: linear-gradient(to right, var(--primary-color), var(--color-green));
        }

        .circle-3 {
            width: 150px;
            height: 150px;
            bottom: 50%;
            left: 50%;
            transform: translate(-50%, 50%);
            background: linear-gradient(to right, var(--color-green), var(--primary-color));
        }
    }

    .login-container {
        width: 100%;
        max-width: 450px;
        padding: 2rem;
        z-index: 2;
    }

    .login-content {
        background: white;
        padding: 2.5rem;
        border-radius: 20px;
        box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
        position: relative;
        overflow: hidden;

        .header {
            text-align: center;
            margin-bottom: 2.5rem;

            .logo {
                display: flex;
                align-items: center;
                justify-content: center;
                gap: 0.5rem;
                margin-bottom: 1rem;

                i {
                    font-size: 2rem;
                    color: var(--color-green);
                }

                h1 {
                    font-size: 1.8rem;
                    color: var(--primary-color);
                    font-weight: 600;
                }
            }

            .subtitle {
                color: #666;
                font-size: 1rem;
            }
        }

        .message {
            padding: 1rem;
            border-radius: 10px;
            margin-bottom: 1.5rem;
            text-align: center;
            font-weight: 500;

            &.success {
                background: rgba(46, 204, 113, 0.1);
                color: #2ecc71;
            }

            &.error {
                background: rgba(231, 76, 60, 0.1);
                color: #e74c3c;
            }
        }

        .input-group {
            margin-bottom: 1.5rem;

            label {
                display: block;
                margin-bottom: 0.5rem;
                color: var(--primary-color);
                font-weight: 500;
            }

            .input-control {
                position: relative;

                input {
                    width: 100%;
                    padding: 0.8rem 1rem;
                    border: 2px solid #eee;
                    border-radius: 10px;
                    font-size: 1rem;
                    transition: all 0.3s ease;
                    background: #f8f9fa;
                    
                    &:focus {
                        outline: none;
                        border-color: var(--color-green);
                        background: white;
                    }

                    &::placeholder {
                        color: #999;
                    }
                }
            }
        }

        .submit-btn {
            width: 100%;
            padding: 1rem;
            background: var(--color-green);
            color: white;
            border: none;
            border-radius: 10px;
            font-size: 1.1rem;
            font-weight: 600;
            cursor: pointer;
            transition: all 0.3s ease;
            position: relative;
            overflow: hidden;

            &:hover {
                transform: translateY(-2px);
                box-shadow: 0 5px 15px rgba(46, 204, 113, 0.3);
            }

            .btn-shine {
                position: absolute;
                top: -50%;
                left: -50%;
                width: 200%;
                height: 200%;
                background: linear-gradient(
                    to right,
                    rgba(255, 255, 255, 0) 0%,
                    rgba(255, 255, 255, 0.3) 50%,
                    rgba(255, 255, 255, 0) 100%
                );
                transform: rotate(45deg);
                animation: shine 3s infinite;
            }

            @keyframes shine {
                0% {
                    transform: translateX(-100%) rotate(45deg);
                }
                100% {
                    transform: translateX(100%) rotate(45deg);
                }
            }
        }

        .register-link {
            text-align: center;
            margin-top: 1.5rem;
            color: #666;

            span {
                color: var(--color-green);
                cursor: pointer;
                font-weight: 500;
                transition: all 0.3s ease;

                &:hover {
                    color: var(--primary-color);
                }
            }
        }
    }

    /* Enhanced Responsive Design */
    @media (max-width: 1024px) {
        .login-container {
            padding: 1rem;
        }

        .login-content {
            padding: 2rem;
            max-width: 450px;
        }
    }

    @media (max-width: 768px) {
        .login-container {
            padding: 0.75rem;
        }

        .login-content {
            padding: 1.5rem;
            max-width: 400px;

            .header {
                margin-bottom: 1.5rem;

                .logo {
                    h1 {
                        font-size: 1.4rem;
                    }

                    i {
                        font-size: 1.6rem;
                    }
                }

                .subtitle {
                    font-size: 0.9rem;
                }
            }

            .input-group {
                margin-bottom: 1rem;

                label {
                    font-size: 0.9rem;
                }

                input {
                    padding: 0.8rem 1rem;
                    font-size: 0.9rem;
                }
            }

            .submit-btn {
                padding: 0.8rem;
                font-size: 0.9rem;
            }
        }
    }

    @media (max-width: 480px) {
        .login-container {
            padding: 0.5rem;
        }

        .login-content {
            padding: 1rem;
            max-width: 350px;
            border-radius: 15px;

            .header {
                margin-bottom: 1rem;

                .logo {
                    gap: 0.3rem;

                    h1 {
                        font-size: 1.2rem;
                    }

                    i {
                        font-size: 1.4rem;
                    }
                }

                .subtitle {
                    font-size: 0.8rem;
                    line-height: 1.4;
                }
            }

            .input-group {
                margin-bottom: 0.8rem;

                label {
                    font-size: 0.8rem;
                    margin-bottom: 0.3rem;
                }

                input {
                    padding: 0.7rem 0.8rem;
                    font-size: 0.8rem;
                    border-radius: 8px;
                }
            }

            .submit-btn {
                padding: 0.7rem;
                font-size: 0.8rem;
                border-radius: 8px;
            }

            .register-link {
                font-size: 0.8rem;
                margin-top: 0.8rem;
            }
        }
    }

    @media (max-width: 360px) {
        .login-content {
            padding: 0.8rem;
            max-width: 320px;

            .header {
                .logo {
                    h1 {
                        font-size: 1.1rem;
                    }

                    i {
                        font-size: 1.2rem;
                    }
                }

                .subtitle {
                    font-size: 0.75rem;
                }
            }
        }
    }
`;

export default Login;
