import React, { useState } from 'react'
import styled from 'styled-components'
import { signout } from '../../utils/Icons'
import { menuItems } from '../../utils/menuItems'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../../context/authContext'
import AvatarSelect from '../Avatar/AvatarSelect'

const defaultAvatar = 'https://avatars.dicebear.com/api/avataaars/1.svg'

function Navigation({active, setActive}) {
    const navigate = useNavigate();
    const { logout, user } = useAuth();
    const [showAvatarSelect, setShowAvatarSelect] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [currentAvatar, setCurrentAvatar] = useState(() => {
        const saved = localStorage.getItem('userAvatar');
        return saved || defaultAvatar;
    });

    const handleNavigation = (id, link) => {
        setActive(id);
        navigate(link);
        setMobileMenuOpen(false); // Close mobile menu on navigation
    }

    const handleSignOut = () => {
        logout();
        navigate('/login');
    }

    const handleAvatarSelect = (avatarSrc) => {
        setCurrentAvatar(avatarSrc);
        localStorage.setItem('userAvatar', avatarSrc);
        setShowAvatarSelect(false);
    }
    
    return (
        <>
            <NavStyled>
                <div className="logo-con">
                    <h2>Expense Tracker</h2>
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="mobile-menu-btn"
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </button>

                {/* Desktop Menu */}
                <ul className="menu-items desktop-menu">
                    {menuItems.map((item) => {
                        return <li
                            key={item.id}
                            onClick={() => handleNavigation(item.id, item.link)}
                            className={active === item.id ? 'active': ''}
                        >
                            {item.icon}
                            <span>{item.title}</span>
                        </li>
                    })}
                </ul>

                {/* Desktop User Controls */}
                <div className="user-con desktop-user">
                    <div className="user-info">
                        <span>{user?.username || 'User'}</span>
                        <img
                            src={currentAvatar}
                            alt="user avatar"
                            onClick={() => setShowAvatarSelect(true)}
                        />
                    </div>
                    <button className="sign-out" onClick={handleSignOut}>
                        {signout} Sign Out
                    </button>
                </div>
            </NavStyled>

            {/* Mobile Menu Overlay */}
            {mobileMenuOpen && (
                <MobileMenuOverlay onClick={() => setMobileMenuOpen(false)}>
                    <div className="mobile-menu" onClick={(e) => e.stopPropagation()}>
                        <div className="mobile-user-info">
                            <img
                                src={currentAvatar}
                                alt="user avatar"
                                onClick={() => setShowAvatarSelect(true)}
                            />
                            <span>{user?.username || 'User'}</span>
                        </div>

                        <ul className="mobile-menu-items">
                            {menuItems.map((item) => {
                                return <li
                                    key={item.id}
                                    onClick={() => handleNavigation(item.id, item.link)}
                                    className={active === item.id ? 'active': ''}
                                >
                                    {item.icon}
                                    <span>{item.title}</span>
                                </li>
                            })}
                        </ul>

                        <button className="mobile-sign-out" onClick={handleSignOut}>
                            {signout} Sign Out
                        </button>
                    </div>
                </MobileMenuOverlay>
            )}
            {showAvatarSelect && (
                <AvatarSelect 
                    onSelect={handleAvatarSelect}
                    selectedAvatar={currentAvatar}
                    onClose={() => setShowAvatarSelect(false)}
                />
            )}
        </>
    )
}

const NavStyled = styled.nav`
    padding: 1rem 2rem;
    width: 100%;
    background: rgba(255, 255, 255, 0.95);
    backdrop-filter: blur(10px);
    border-bottom: 1px solid rgba(0, 0, 0, 0.05);
    box-shadow: 0px 1px 15px rgba(0, 0, 0, 0.03);
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 2rem;
    position: sticky;
    top: 0;
    z-index: 10;

    /* Mobile Menu Button */
    .mobile-menu-btn {
        display: none;
        flex-direction: column;
        background: none;
        border: none;
        cursor: pointer;
        padding: 0.5rem;
        gap: 0.3rem;

        span {
            width: 25px;
            height: 3px;
            background: var(--primary-color);
            border-radius: 2px;
            transition: all 0.3s ease;
        }
    }

    .logo-con {
        h2 {
            color: var(--primary-color);
            font-size: 1.8rem;
            font-weight: 700;
            background: linear-gradient(to right, var(--primary-color), #2ecc71);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            transition: all 0.3s ease;
        }
    }

    .menu-items {
        display: flex;
        align-items: center;
        gap: 1.5rem;

        li {
            display: flex;
            align-items: center;
            gap: 0.8rem;
            padding: 0.8rem 1.2rem;
            border-radius: 12px;
            cursor: pointer;
            transition: all 0.3s ease;

            &:hover {
                background: rgba(0, 0, 0, 0.03);
            }

            &.active {
                background: var(--primary-color);
                color: white;
                i {
                    color: white;
                }
            }

            i {
                color: rgba(34, 34, 96, 0.6);
                font-size: 1.2rem;
                transition: all 0.3s ease;
            }
        }
    }

    .user-con {
        display: flex;
        align-items: center;
        gap: 1.5rem;

        .user-info {
            display: flex;
            align-items: center;
            gap: 1rem;
            
            span {
                font-size: 1.1rem;
                font-weight: 500;
                color: var(--primary-color);
            }

            img {
                width: 40px;
                height: 40px;
                border-radius: 50%;
                object-fit: cover;
                cursor: pointer;
                border: 2px solid var(--primary-color);
                padding: 2px;
                transition: all 0.3s ease;

                &:hover {
                    transform: scale(1.1);
                }
            }
        }

        .sign-out {
            display: flex;
            align-items: center;
            gap: 0.5rem;
            padding: 0.8rem 1.5rem;
            border-radius: 12px;
            background: #f8f9fa;
            border: none;
            color: #dc3545;
            font-weight: 500;
            cursor: pointer;
            transition: all 0.3s ease;

            i {
                font-size: 1.2rem;
            }

            &:hover {
                background: #dc3545;
                color: white;
            }
        }
    }

    @media (max-width: 768px) {
        padding: 1rem;
        flex-wrap: wrap;
        gap: 1rem;

        .menu-items {
            order: 3;
            width: 100%;
            justify-content: center;
            overflow-x: auto;
            padding-bottom: 0.5rem;

            li {
                padding: 0.6rem 1rem;
                white-space: nowrap;
            }
        }

        .user-con {
            .user-info span {
                display: none;
            }
        }
    }

    /* Responsive Design */
    @media (max-width: 1024px) {
        padding: 1rem 1.5rem;
        gap: 1rem;

        .menu-items {
            gap: 1rem;

            li {
                padding: 0.6rem 1rem;

                span {
                    font-size: 0.9rem;
                }
            }
        }

        .user-con {
            .user-info {
                span {
                    font-size: 0.9rem;
                }
            }

            .sign-out {
                padding: 0.6rem 1rem;
                font-size: 0.9rem;
            }
        }
    }

    @media (max-width: 768px) {
        padding: 1rem;

        .mobile-menu-btn {
            display: flex;
        }

        .desktop-menu,
        .desktop-user {
            display: none;
        }

        .logo-con {
            h2 {
                font-size: 1.4rem;
            }
        }
    }

    @media (max-width: 480px) {
        padding: 0.8rem;

        .logo-con {
            h2 {
                font-size: 1.2rem;
            }
        }
    }
`;

/* Mobile Menu Overlay */
const MobileMenuOverlay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    z-index: 1000;
    display: flex;
    justify-content: flex-end;

    .mobile-menu {
        width: 280px;
        height: 100%;
        background: white;
        padding: 2rem 1.5rem;
        box-shadow: -5px 0 15px rgba(0, 0, 0, 0.1);
        display: flex;
        flex-direction: column;
        gap: 2rem;

        .mobile-user-info {
            display: flex;
            align-items: center;
            gap: 1rem;
            padding: 1rem;
            background: #f8f9fa;
            border-radius: 12px;

            img {
                width: 50px;
                height: 50px;
                border-radius: 50%;
                cursor: pointer;
            }

            span {
                font-weight: 600;
                color: var(--primary-color);
            }
        }

        .mobile-menu-items {
            display: flex;
            flex-direction: column;
            gap: 0.5rem;

            li {
                display: flex;
                align-items: center;
                gap: 1rem;
                padding: 1rem;
                border-radius: 12px;
                cursor: pointer;
                transition: all 0.3s ease;

                &:hover {
                    background: rgba(0, 0, 0, 0.05);
                }

                &.active {
                    background: var(--primary-color);
                    color: white;

                    i {
                        color: white;
                    }
                }

                i {
                    color: rgba(34, 34, 96, 0.6);
                    font-size: 1.2rem;
                }

                span {
                    font-weight: 500;
                }
            }
        }

        .mobile-sign-out {
            background: linear-gradient(135deg, #e74c3c, #c0392b);
            color: white;
            border: none;
            padding: 1rem;
            border-radius: 12px;
            cursor: pointer;
            font-weight: 600;
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 0.5rem;
            transition: all 0.3s ease;
            margin-top: auto;

            &:hover {
                transform: translateY(-2px);
                box-shadow: 0 5px 15px rgba(231, 76, 60, 0.3);
            }
        }
    }

    @media (max-width: 480px) {
        .mobile-menu {
            width: 100%;
        }
    }
`;

export default Navigation;