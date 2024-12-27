import React, { useState } from 'react';
import styled from 'styled-components';

const avatars = [
    { id: 1, src: 'https://i.pinimg.com/736x/c4/09/9e/c4099ee145bcdab1285d39b498968d6a.jpg' },
    { id: 2, src: 'https://i.pinimg.com/736x/d0/b2/72/d0b272f687123c62a53706f1558c356f.jpg' },
    { id: 3, src: 'https://i.pinimg.com/736x/9c/ea/35/9cea35c8b05294f4d6b43c3200770d7c.jpg' },
    { id: 4, src: 'https://i.pinimg.com/736x/59/60/ca/5960ca62ef77285f16d966de3ab9a01c.jpg' },
    { id: 5, src: 'https://i.pinimg.com/736x/05/79/51/05795159cd95af45098bee98d5c25ed5.jpg' },
    { id: 6, src: 'https://i.pinimg.com/736x/9d/a9/51/9da9513873a671d2d9a55b214bc30a47.jpg' },
];

function AvatarSelect({ onSelect, selectedAvatar, onClose }) {
    return (
        <AvatarSelectStyled>
            <div className="avatar-modal">
                <h2>Choose Your Avatar</h2>
                <div className="avatar-grid">
                    {avatars.map((avatar) => (
                        <div
                            key={avatar.id}
                            className={`avatar-item ${selectedAvatar === avatar.src ? 'selected' : ''}`}
                            onClick={() => onSelect(avatar.src)}
                        >
                            <img src={avatar.src} alt={`Avatar ${avatar.id}`} />
                        </div>
                    ))}
                </div>
                <button className="close-btn" onClick={onClose}>Close</button>
            </div>
        </AvatarSelectStyled>
    );
}

const AvatarSelectStyled = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;

    .avatar-modal {
        background: white;
        padding: 2rem;
        border-radius: 20px;
        width: 90%;
        max-width: 500px;
        box-shadow: 0px 1px 15px rgba(0, 0, 0, 0.06);

        h2 {
            text-align: center;
            margin-bottom: 1.5rem;
            color: var(--primary-color);
        }

        .avatar-grid {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 1rem;
            margin-bottom: 1.5rem;

            .avatar-item {
                cursor: pointer;
                padding: 0.5rem;
                border-radius: 15px;
                transition: all 0.3s ease;

                &:hover {
                    transform: scale(1.05);
                    background: #f0f0f0;
                }

                &.selected {
                    background: var(--primary-color);
                    img {
                        border: 3px solid white;
                    }
                }

                img {
                    width: 100%;
                    height: auto;
                    border-radius: 50%;
                    border: 3px solid transparent;
                }
            }
        }

        .close-btn {
            display: block;
            width: 100%;
            padding: 0.8rem;
            border: none;
            background: var(--primary-color);
            color: white;
            border-radius: 10px;
            cursor: pointer;
            font-size: 1.1rem;
            transition: all 0.3s ease;

            &:hover {
                background: #1a1a4b;
            }
        }
    }
`;

export default AvatarSelect;
