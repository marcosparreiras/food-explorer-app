import { styled } from 'styled-components';

export const Container = styled.div`
    width: 100%;
    > div {
        background-color: ${({ theme }) => theme.COLORS.DARK_900};
        width: 100%;
        padding: 1.2rem 1.4rem;
        display: flex;
        align-items: center;
        gap: 1.4rem;
        border-radius: 0.8rem;

        > svg {
            width: 2.4rem;
            height: 2.4rem;
            color: ${({ theme }) => theme.COLORS.LIGHT_400};
        }

        > input {
            width: 100%;
            font-family: 'Roboto', sans-serif;
            font-size: 1.6rem;
            background: none;
            border: none;
            outline: none;
            color: ${({ theme }) => theme.COLORS.LIGHT_100};

            &::placeholder {
                font-size: 1.6rem;
                color: ${({ theme }) => theme.COLORS.LIGHT_500};
            }
        }
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
