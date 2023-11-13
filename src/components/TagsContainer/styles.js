import { styled } from 'styled-components';

export const Container = styled.div`
    width: 100%;

    > div {
        background-color: ${({ theme }) => theme.COLORS.DARK_900};
        width: 100%;
        padding: 0.8rem 1.4rem;
        display: flex;
        align-items: center;
        gap: 1.6rem;
        border-radius: 0.8rem;
        flex-wrap: wrap;
    }
`;

export const Label = styled.label`
    font-family: 'Roboto', sans-serif;
    font-size: 1.6rem;
    line-height: 1.6rem;
    color: ${({ theme }) => theme.COLORS.LIGHT_400};
    display: block;
    margin-bottom: 1.6rem;
`;
