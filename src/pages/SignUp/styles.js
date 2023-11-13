import { styled } from 'styled-components';
import DEVICE_BREAKPOINTS from '../../styles/deviceBreakPoints';

export const Container = styled.div`
    width: 100%;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;

    > img {
        width: 27.8rem;
        margin-top: 15.8rem;
        height: auto;
    }

    @media (min-width: ${DEVICE_BREAKPOINTS.MD}) {
        flex-direction: row;
        justify-content: space-evenly;

        > img {
            margin-top: 0;
            width: clamp(27.8rem, 30%, 32.4rem);
        }
    }
`;

export const Form = styled.form`
    margin-top: 7.3rem;
    width: 28.8rem;
    display: flex;
    flex-direction: column;
    gap: 3.2rem;

    > h1 {
        text-align: center;
        display: none;
    }

    > label {
        span {
            display: block;
            color: ${({ theme }) => theme.COLORS.LIGHT_400};
        }

        div {
            margin-top: 0.8rem;
        }
    }

    > a {
        font-family: 'Poppins', sans-serif;
        text-align: center;
        color: ${({ theme }) => theme.COLORS.LIGHT_100};
        font-size: 1.4rem;
        font-weight: 500;
        line-height: 2.4rem;
    }

    @media (min-width: ${DEVICE_BREAKPOINTS.MD}) {
        background-color: ${({ theme }) => theme.COLORS.DARK_700};
        border-radius: 1.6rem;
        padding: 6.4rem;
        width: clamp(42rem, 40%, 52rem);

        > h1 {
            display: block;
        }
    }
`;
