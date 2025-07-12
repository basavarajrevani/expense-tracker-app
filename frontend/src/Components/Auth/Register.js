import React, { useState } from 'react';
import styled from 'styled-components';
import { useAuth } from '../../context/authContext';
import { useNavigate } from 'react-router-dom';
import { rupee } from '../../utils/Icons';

function Register() {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const { register, error, setError } = useAuth();
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        if (password !== confirmPassword) {
            setError('Passwords do not match');
            return;
        }

        try {
            await register(username, email, password);
            navigate('/dashboard', { replace: true });
        } catch (err) {
            console.error('Registration error:', err);
        }
    };

    return (
        <RegisterStyled>
            <div className="background-design">
                <div className="circle circle-1"></div>
                <div className="circle circle-2"></div>
                <div className="circle circle-3"></div>
            </div>
            
            <div className="register-container">
                <div className="register-content">
                    <div className="header">
                        <div className="logo">
                            <i>{rupee}</i>
                            <h1>Expense Tracker</h1>
                        </div>
                        <p className="subtitle">Create your account to start tracking expenses.</p>
                    </div>

                    {error && <div className="message error">{error}</div>}

                    <form onSubmit={handleSubmit}>
                        <div className="input-group">
                            <label>Username</label>
                            <div className="input-control">
                                <input
                                    type="text"
                                    value={username}
                                    onChange={(e) => setUsername(e.target.value)}
                                    placeholder="Choose a username"
                                    required
                                />
                            </div>
                        </div>

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
                                    placeholder="Create a password"
                                    required
                                />
                            </div>
                        </div>

                        <div className="input-group">
                            <label>Confirm Password</label>
                            <div className="input-control">
                                <input
                                    type="password"
                                    value={confirmPassword}
                                    onChange={(e) => setConfirmPassword(e.target.value)}
                                    placeholder="Confirm your password"
                                    required
                                />
                            </div>
                        </div>

                        <button type="submit" className="submit-btn">
                            Create Account
                            <span className="btn-shine"></span>
                        </button>
                    </form>

                    <div className="login-link">
                        Already have an account?{' '}
                        <span onClick={() => navigate('/login')}>Login Here</span>
                    </div>
                </div>
            </div>
        </RegisterStyled>
    );
}

const RegisterStyled = styled.div`
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #f8f9fa;
    position: relative;
    overflow-y: auto;

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

    .register-container {
        width: 100%;
        max-width: 420px;
        padding: 1rem;
        z-index: 2;
    }

    .register-content {
        background: white;
        padding: 2rem;
        border-radius: 20px;
        box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
        position: relative;
        overflow: hidden;

        .header {
            text-align: center;
            margin-bottom: 1.5rem;

            .logo {
                display: flex;
                align-items: center;
                justify-content: center;
                gap: 0.5rem;
                margin-bottom: 0.75rem;

                i {
                    font-size: 1.75rem;
                    color: var(--color-green);
                }

                h1 {
                    font-size: 1.5rem;
                    color: var(--primary-color);
                    font-weight: 600;
                }
            }

            .subtitle {
                color: #666;
                font-size: 0.9rem;
            }
        }

        .message {
            padding: 0.75rem;
            border-radius: 8px;
            margin-bottom: 1rem;
            text-align: center;
            font-weight: 500;
            font-size: 0.9rem;

            &.error {
                background: rgba(231, 76, 60, 0.1);
                color: #e74c3c;
            }
        }

        .input-group {
            margin-bottom: 1rem;

            label {
                display: block;
                margin-bottom: 0.25rem;
                color: var(--primary-color);
                font-weight: 500;
                font-size: 0.9rem;
            }

            .input-control {
                position: relative;

                input {
                    width: 100%;
                    padding: 0.6rem 0.8rem;
                    border: 2px solid #eee;
                    border-radius: 8px;
                    font-size: 0.9rem;
                    transition: all 0.3s ease;
                    background: #f8f9fa;
                    
                    &:focus {
                        outline: none;
                        border-color: var(--color-green);
                        background: white;
                    }

                    &::placeholder {
                        color: #999;
                        font-size: 0.85rem;
                    }
                }
            }
        }

        .submit-btn {
            width: 100%;
            padding: 0.75rem;
            background: var(--color-green);
            color: white;
            border: none;
            border-radius: 8px;
            font-size: 1rem;
            font-weight: 600;
            cursor: pointer;
            transition: all 0.3s ease;
            position: relative;
            overflow: hidden;
            margin-top: 0.5rem;

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

        .login-link {
            text-align: center;
            margin-top: 1rem;
            color: #666;
            font-size: 0.9rem;

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
        .register-container {
            padding: 1rem;
        }

        .register-content {
            padding: 2rem;
            max-width: 450px;
        }
    }

    @media (max-width: 768px) {
        .register-container {
            padding: 0.75rem;
        }

        .register-content {
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

                .input-control input {
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
        .register-container {
            padding: 0.5rem;
        }

        .register-content {
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

                .input-control input {
                    padding: 0.7rem 0.8rem;
                    font-size: 0.8rem;
                    border-radius: 8px;

                    &::placeholder {
                        font-size: 0.75rem;
                    }
                }
            }

            .submit-btn {
                padding: 0.7rem;
                font-size: 0.8rem;
                border-radius: 8px;
            }

            .login-link {
                font-size: 0.8rem;
                margin-top: 0.8rem;
            }
        }
    }

    @media (max-width: 360px) {
        .register-content {
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

            .input-group {
                .input-control input {
                    padding: 0.6rem 0.7rem;
                    font-size: 0.75rem;
                }
            }

            .submit-btn {
                padding: 0.6rem;
                font-size: 0.75rem;
            }
        }
    }

    @media (max-height: 700px) {
        .register-content {
            .header {
                margin-bottom: 1rem;
            }

            .input-group {
                margin-bottom: 0.75rem;
            }

            .message {
                margin-bottom: 0.75rem;
                padding: 0.6rem;
            }
        }
    }

    @media (max-height: 600px) {
        .register-content {
            .header {
                margin-bottom: 0.8rem;

                .subtitle {
                    display: none;
                }
            }

            .input-group {
                margin-bottom: 0.6rem;
            }
        }
    }
`;

export default Register;
