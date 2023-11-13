import { styled } from 'styled-components';
import DEVICE_BREAKPOINTS from '../../styles/deviceBreakPoints';

export const Container = styled.div`
    width: 100%;
    min-height: 100vh;
    display: grid;
    grid-template-areas: 'header' 'main' 'footer';
    grid-template-rows: min-content auto min-content;
`;

export const Main = styled.div`
    grid-area: main;
    padding: 2.4rem 1.6rem;

    h5 {
        text-align: center;
        padding: 20vh 0;
        color: ${({ theme }) => theme.COLORS.DARK_1000};
        font-size: 3.2rem;
    }

    > section {
        padding: 2.4rem 2rem;
        display: flex;
        flex-direction: column;
        gap: 2.4rem;
    }

    @media (min-width: ${DEVICE_BREAKPOINTS.MD}) {
        padding: 2.4rem 6rem;
    }
`;

export const Head = styled.div`
    display: flex;
    align-items: end;
    justify-content: space-between;

    button {
        width: 10rem;
    }
`;

export const Foot = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: space-between;
    gap: 2.4rem;

    > div {
        text-align: center;
        h4 {
            font-family: 'Poppins', sans-serif;
            font-size: 2.7rem;
            font-weight: 500;
            line-height: 3.8rem;
        }

        p {
            font-family: 'Poppins', sans-serif;
            font-size: 2.7rem;
            font-weight: 500;
            line-height: 3.8rem;
        }
    }

    > button {
        width: fit-content;
    }

    @media (min-width: ${DEVICE_BREAKPOINTS.MD}) {
        flex-direction: row;

        > div {
            width: 16rem;
            text-align: center;
        }
    }
`;
