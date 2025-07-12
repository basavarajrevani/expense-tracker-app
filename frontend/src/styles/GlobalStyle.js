import {createGlobalStyle} from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        list-style: none;
    }

    :root{
        --primary-color: #222260;
        --primary-color2: 'color: rgba(34, 34, 96, .6)';
        --primary-color3: 'color: rgba(34, 34, 96, .4)';
        --color-green: #42AD00;
        --color-grey: #aaa;
        --color-accent: #F56692;
        --color-delete: #FF0000;
    }

    body{
        font-family: 'Nunito', sans-serif;
        font-size: clamp(0.9rem, 1.5vw, 1.2rem);
        overflow: hidden;
        color: rgba(34, 34, 96, .6);
        line-height: 1.6;
    }

    h1, h2, h3, h4, h5, h6{
        color: var(--primary-color);
        line-height: 1.3;
    }

    /* Enhanced Responsive Typography */
    h1 {
        font-size: clamp(1.5rem, 4vw, 2.5rem);
    }

    h2 {
        font-size: clamp(1.2rem, 3vw, 2rem);
    }

    h3 {
        font-size: clamp(1.1rem, 2.5vw, 1.5rem);
    }

    /* Responsive Utilities */
    .container {
        width: 100%;
        max-width: 1200px;
        margin: 0 auto;
        padding: 0 1rem;
    }

    /* Mobile-first responsive breakpoints */
    @media (max-width: 480px) {
        body {
            font-size: clamp(0.8rem, 1.2vw, 1rem);
        }
    }

    @media (max-width: 360px) {
        body {
            font-size: 0.85rem;
        }
    }

    /* Touch-friendly interactive elements */
    @media (max-width: 768px) {
        button,
        .clickable,
        input[type="submit"] {
            min-height: 44px;
            min-width: 44px;
        }
    }

    .error{
        color: red;
        animation: shake 0.5s ease-in-out;
        @keyframes shake {
            0%{
                transform: translateX(0);
            }
            25%{
                transform: translateX(10px);
            }
            50%{
                transform: translateX(-10px);
            }
            75%{
                transform: translateX(10px);
            }
            100%{
                transform: translateX(0);
            }
        }
    }
`;