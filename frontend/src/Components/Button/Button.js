import React from 'react'
import styled from 'styled-components'

function Button({name, icon, onClick, bg, bPad, color, bRad}) {
    return (
        <ButtonStyled style={{
            background: bg,
            padding: bPad,
            borderRadius: bRad,
            color: color,
        }} onClick={onClick}>
            {icon}
            {name}
        </ButtonStyled>
    )
}

const ButtonStyled = styled.button`
    outline: none;
    border: none;
    font-family: inherit;
    font-size: inherit;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: .5rem;
    cursor: pointer;
    transition: all .4s ease-in-out;
    min-height: 44px;
    min-width: 44px;

    /* Enhanced touch targets for mobile */
    @media (max-width: 768px) {
        min-height: 48px;
        min-width: 48px;
        gap: 0.4rem;

        i {
            font-size: 1rem;
        }
    }

    @media (max-width: 480px) {
        min-height: 44px;
        min-width: 44px;
        gap: 0.3rem;
        font-size: 0.9rem;

        i {
            font-size: 0.9rem;
        }
    }

    @media (max-width: 360px) {
        min-height: 40px;
        min-width: 40px;
        font-size: 0.8rem;

        i {
            font-size: 0.8rem;
        }
    }

    /* Hover effects only on non-touch devices */
    @media (hover: hover) and (pointer: fine) {
        &:hover {
            transform: translateY(-2px);
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
        }
    }

    /* Active state for touch devices */
    &:active {
        transform: translateY(0);
        transition: all 0.1s ease;
    }
`;


export default Button