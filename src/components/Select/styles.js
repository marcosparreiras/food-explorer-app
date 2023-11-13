import { styled } from 'styled-components';

export const Container = styled.select`
    background-color: ${({ theme }) => theme.COLORS.DARK_900};
    appearance: none;
    width: 100%;
    padding: 1.2rem 1.4rem;
    outline: none;
    border: none;
    color: ${({ theme }) => theme.COLORS.LIGHT_400};
    font-family: 'Roboto', sans-serif;
    font-size: 1.6rem;
    border-radius: 0.8rem;

    > svg {
        position: absolute;
        top: 0;
        left: 0;
    }
`;

export const Label = styled.label`
    width: 100%;
    position: relative;

    > svg {
        position: absolute;
        bottom: 1.2rem;
        right: 1.6rem;
        width: 2.2rem;
        height: 1.6rem;
    }

    > span {
        font-family: 'Roboto', sans-serif;
        font-size: 1.6rem;
        line-height: 1.6rem;
        color: ${({ theme }) => theme.COLORS.LIGHT_400};
        display: block;
        margin-bottom: 1.6rem;
    }
`;
