import styled from "styled-components";

export const MainLayout = styled.div`
    padding: 0;
    height: 100vh;
    display: flex;
    flex-direction: column;
    gap: 2rem;
    overflow: hidden;

    & > *:nth-child(2) {
        flex: 1;
        padding: 0 2rem;
        overflow-y: auto;
        &::-webkit-scrollbar {
            width: 8px;
        }
        &::-webkit-scrollbar-track {
            background: #f1f1f1;
            border-radius: 10px;
        }
        &::-webkit-scrollbar-thumb {
            background: #888;
            border-radius: 10px;
        }
        &::-webkit-scrollbar-thumb:hover {
            background: #555;
        }
    }

    /* Responsive Design */
    @media (max-width: 1024px) {
        gap: 1.5rem;

        & > *:nth-child(2) {
            padding: 0 1.5rem;
        }
    }

    @media (max-width: 768px) {
        gap: 1rem;

        & > *:nth-child(2) {
            padding: 0 1rem;

            &::-webkit-scrollbar {
                width: 6px;
            }
        }
    }

    @media (max-width: 480px) {
        gap: 0.5rem;

        & > *:nth-child(2) {
            padding: 0 0.8rem;

            &::-webkit-scrollbar {
                width: 4px;
            }
        }
    }
`;

export const InnerLayout = styled.div`
    padding: 2rem 1.5rem;
    width: 100%;
    height: 100%;

    /* Responsive Design */
    @media (max-width: 1024px) {
        padding: 1.5rem 1rem;
    }

    @media (max-width: 768px) {
        padding: 1rem 0.8rem;
    }

    @media (max-width: 480px) {
        padding: 0.8rem 0.5rem;
    }

    @media (max-width: 360px) {
        padding: 0.6rem 0.3rem;
    }
`;