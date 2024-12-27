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
`;

export const InnerLayout = styled.div`
    padding: 2rem 1.5rem;
    width: 100%;
    height: 100%;
`;