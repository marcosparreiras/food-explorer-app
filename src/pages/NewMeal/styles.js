import { styled } from 'styled-components';
import DEVICE_BREAKPOINTS from '../../styles/deviceBreakPoints';

export const Container = styled.div`
    width: 100%;
    min-height: 100vh;
    display: grid;
    grid-template-areas: 'header' 'main' 'footer';
    grid-template-rows: min-content auto min-content;
`;

export const Main = styled.main`
    grid-area: main;
    padding: 1.6rem 5.4rem;

    > h1 {
        font-family: 'Poppins', sans-serif;
        font-size: 3.2rem;
        font-weight: 500;
        line-height: 4.4rem;
        margin-top: 3.5rem;
    }

    @media (min-width: ${DEVICE_BREAKPOINTS.MD}) {
        padding: 4rem 15.5rem;

        > h1 {
            margin-top: 2.4rem;
        }
    }
`;

export const Form = styled.form`
    margin-top: 2.4rem;
    display: flex;
    flex-direction: column;
    gap: 2.4rem;

    .flex {
        display: flex;
        flex-direction: column;
        gap: 2.4rem;
    }

    @media (min-width: ${DEVICE_BREAKPOINTS.MD}) {
        margin-top: 3.2rem;
        gap: 3.2rem;

        button {
            width: 20rem;
        }

        .flex {
            flex-direction: row;
            align-items: start;
            gap: 3.2rem;
            flex-basis: 1;
        }

        .flex-end {
            justify-content: end;
        }

        .flex-2 {
            flex: 2;
        }

        .flex-3 {
            flex: 3;
        }

        .flex-1 {
            flex: 1;
        }
    }
`;
