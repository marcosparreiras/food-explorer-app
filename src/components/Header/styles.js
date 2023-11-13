import { styled } from 'styled-components';
import DEVICE_BREAKPOINTS from '../../styles/deviceBreakPoints';

export const Container = styled.header`
    grid-area: header;
    background: ${({ theme }) => theme.COLORS.DARK_600};
    width: 100%;
`;

export const SmScreen = styled.div`
    width: 100%;
    align-items: center;
    justify-content: space-evenly;
    display: flex;
    padding: 6.4rem 1rem 3.2rem;

    .logo {
        width: 16rem;
        height: auto;
        display: flex;
        align-items: end;
        gap: 0.8rem;

        img {
            width: 90%;
            height: auto;
            cursor: pointer;
        }

        span {
            font-family: 'Roboto', sans-serif;
            font-size: 1.2rem;
            line-height: 1.9rem;
            color: ${({ theme }) => theme.COLORS.TINTS_200};
        }
    }

    button {
        position: relative;
        background: none;
        border: none;
        border: none;
        background: none;
        width: 3.2rem;
        height: 3.2rem;

        svg,
        img {
            color: ${({ theme }) => theme.COLORS.LIGHT_100};
            width: 3.2rem;
            height: 3.2rem;
            cursor: pointer;
        }

        span {
            position: absolute;
            display: block;
            width: 2rem;
            height: 2rem;
            border-radius: 50%;
            top: -0.5rem;
            right: -0.5rem;
            background: ${({ theme }) => theme.COLORS.TOMATO_100};
            color: ${({ theme }) => theme.COLORS.LIGHT_100};
            font-family: 'Poppins', sans-serif;
            font-weight: 500;
            font-size: 1.4rem;
            line-height: 2.4rem;
            display: flex;
            align-items: center;
            justify-content: center;
        }
    }

    @media (min-width: ${DEVICE_BREAKPOINTS.MD}) {
        display: none;
    }
`;

export const LgScreen = styled.div`
    width: 100%;
    align-items: center;
    justify-content: space-evenly;
    display: none;
    padding: 2.4rem 3rem;
    gap: 1.6rem;

    .logo {
        width: 18.6rem;
        height: 3rem;
        cursor: pointer;
    }

    > button:not(.btn-logout) {
        width: 21.6rem;
    }

    > .btn-logout {
        border: none;
        background: none;
        width: 3.2rem;
        height: 3.2rem;

        svg {
            color: ${({ theme }) => theme.COLORS.LIGHT_100};
            width: 3.2rem;
            height: 3.2rem;
            cursor: pointer;
        }
    }

    @media (min-width: ${DEVICE_BREAKPOINTS.MD}) {
        display: flex;
    }

    @media (min-width: ${DEVICE_BREAKPOINTS.LG}) {
        padding: 2.4rem 12.3rem;
        gap: 3.2rem;
    }
`;

export const Menu = styled.div`
    display: grid;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 2;
    width: 100%;
    height: 100vh;
    background-color: ${({ theme }) => theme.COLORS.DARK_400};
    grid-template-rows: min-content auto min-content;
    grid-template-areas: 'head' 'main' 'footer';

    transition: transform 400ms ease-in-out;
    transform: translateX(-100%);

    &[data-show='true'] {
        transform: translateX(0);
    }

    .head {
        grid-area: head;
        padding: 6.4rem 2.8rem 3.2rem;
        background-color: ${({ theme }) => theme.COLORS.DARK_700};

        button {
            width: fit-content;
            display: flex;
            align-items: center;
            gap: 0.3rem;
            color: ${({ theme }) => theme.COLORS.LIGHT_100};
            font-family: 'Roboto', sans-serif;
            font-size: 2.2rem;

            svg {
                height: 2.2rem;
                width: 2.2rem;
            }
        }
    }

    .main {
        grid-area: main;
        padding: 3.6rem 2.8rem;

        > div {
            margin-bottom: 3.6rem;
        }

        > button {
            width: 100%;
            height: fit-content;
            text-align: start;
            padding: 1rem;
            font-family: 'Poppins', sans-serif;
            font-size: 2.4rem;
            font-weight: 300;
            line-height: 3.4rem;
            color: ${({ theme }) => theme.COLORS.LIGHT_300};
            border-bottom: 1px solid ${({ theme }) => theme.COLORS.DARK_1000};
        }
    }
`;
