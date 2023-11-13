import { styled } from 'styled-components';
import DEVICE_BREAKPOINTS from '../../styles/deviceBreakPoints';

export const Container = styled.div`
    display: grid;
    min-height: 100vh;
    grid-template-areas: 'header' 'main' 'footer';
    grid-template-rows: min-content auto min-content;
`;

export const Main = styled.main`
    grid-area: main;
    padding: 2.4rem 1.6rem;

    > section {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-top: 1.6rem;
        gap: 1.6rem;

        img {
            width: 26.4rem;
            height: 26.4rem;
            border-radius: 50%;
            object-fit: cover;
        }
    }

    @media (min-width: ${DEVICE_BREAKPOINTS.MD}) {
        padding: 2.4rem 6rem;

        > section {
            flex-direction: row;
            gap: 4.6rem;

            img {
                width: 30rem;
                height: 30rem;
            }
        }
    }

    @media (min-width: ${DEVICE_BREAKPOINTS.LG}) {
        padding: 2.4rem 12rem;

        > section {
            img {
                width: 39rem;
                height: 39rem;
            }
        }
    }
`;

export const Content = styled.div`
    > h1 {
        font-family: 'Poppins', sans-serif;
        font-size: 2.7rem;
        font-weight: 500;
        line-height: 3.8rem;
    }

    > p {
        margin-top: 2.4rem;
        font-family: 'Poppins', sans-serif;
        font-size: 1.6rem;
        line-height: 2.2rem;
    }

    @media (min-width: ${DEVICE_BREAKPOINTS.MD}) {
        > h1 {
            font-size: 4rem;
            line-height: 5.6rem;
        }

        > p {
            font-size: 2.4rem;
            line-height: 3.4rem;
        }
    }
`;

export const TagsDiv = styled.div`
    margin-top: 2.4rem;
    display: flex;
    gap: 2.4rem;
    align-items: center;
    flex-wrap: wrap;

    @media (min-width: ${DEVICE_BREAKPOINTS.MD}) {
        gap: 1.2rem;
    }
`;

export const Options = styled.div`
    display: flex;
    align-items: center;
    margin-top: 4.8rem;
    gap: 1.6rem;

    > .order-btn {
        width: fit-content;
        img {
            width: 2.1rem;
            height: auto;
        }
    }

    > div {
        display: flex;
        align-items: center;
        gap: 1.4rem;
        font-family: 'Roboto', sans-serif;
        font-size: 1.6rem;
        font-weight: 700;
        line-height: 3.6rem;

        button {
            font-size: 2rem;
            border: none;
            background: none;
            color: ${({ theme }) => theme.COLORS.LIGHT_100};
        }
    }

    @media (min-width: ${DEVICE_BREAKPOINTS.MD}) {
        gap: 3.3rem;

        > .edit-btn {
            width: fit-content;
        }

        > div {
            font-size: 2.2rem;
            button {
                font-size: 3rem;
            }
        }

        > button {
            img {
                display: none;
            }
        }
    }
`;
