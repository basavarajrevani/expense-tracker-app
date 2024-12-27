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
    const [currentAvatar, setCurrentAvatar] = useState(() => {
        const saved = localStorage.getItem('userAvatar');
        return saved || defaultAvatar;
    });

    const handleNavigation = (id, link) => {
        setActive(id);
        navigate(link);
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
                <ul className="menu-items">
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
                <div className="user-con">
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
`;

export default Navigation;