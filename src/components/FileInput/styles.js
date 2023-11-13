import { styled } from 'styled-components';

export const Container = styled.div`
    background-color: ${({ theme }) => theme.COLORS.DARK_900};
    width: 100%;
    padding: 1.2rem 1.4rem;
    display: flex;
    align-items: center;
    gap: 1.4rem;
    border-radius: 0.8rem;

    > svg {
        width: 1.9rem;
        height: 1.9rem;
        color: ${({ theme }) => theme.COLORS.LIGHT_400};
    }

    > span {
        white-space: nowrap;

        color: ${({ theme }) => theme.COLORS.LIGHT_100};
    }

    > input {
        display: none;
    }
`;

export const Label = styled.label`
    width: 100%;
    cursor: pointer;
    > span {
        font-family: 'Roboto', sans-serif;
        font-size: 1.6rem;
        line-height: 1.6rem;
        color: ${({ theme }) => theme.COLORS.LIGHT_400};
        display: block;
        margin-bottom: 1.6rem;
    }
`;
