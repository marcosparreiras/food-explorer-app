import { styled } from 'styled-components';

export const Container = styled.button`
    font-family: 'Poppins', sans-serif;
    font-size: 1.4rem;
    font-weight: 500;
    line-height: 2.4rem;
    width: 100%;
    padding: 1.2rem 3.2rem;
    border-radius: 0.5rem;
    border: none;
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
    background: ${({ theme, $bgcolor }) =>
        $bgcolor ? $bgcolor : theme.COLORS.TOMATO_100};
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.8rem;
    white-space: nowrap;

    > img {
        height: 2.8rem;
        width: 2.8rem;
    }
`;
