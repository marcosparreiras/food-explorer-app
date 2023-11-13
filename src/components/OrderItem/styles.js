import { styled } from 'styled-components';
import DEVICE_BREAKPOINTS from '../../styles/deviceBreakPoints';

export const Container = styled.div`
    width: 100%;
    display: flex;
    padding-bottom: 2.4rem;
    border-bottom: 1px solid ${({ theme }) => theme.COLORS.DARK_1000};
    align-items: center;
    flex-direction: column;
    gap: 2.4rem;

    .total {
        text-align: center;

        h4 {
            font-family: 'Poppins', sans-serif;
            font-size: 2.7rem;
            font-weight: 500;
            line-height: 3.8rem;
        }

        p {
            margin-top: 1.6rem;
            font-family: 'Poppins', sans-serif;
            font-size: 1.6rem;
            line-height: 2.2rem;
        }
    }

    .options {
        display: flex;
        align-items: center;
        gap: 1.4rem;
        font-family: 'Roboto', sans-serif;
        font-size: 2.4rem;
        font-weight: 700;
        line-height: 3.6rem;

        button {
            font-size: 3rem;
            border: none;
            background: none;
            color: ${({ theme }) => theme.COLORS.LIGHT_100};
        }
    }

    > button {
        width: 12rem;
    }

    > img {
        width: 16rem;
        height: 16rem;
        object-fit: cover;
        border-radius: 50%;
    }

    @media (min-width: ${DEVICE_BREAKPOINTS.MD}) {
        flex-direction: row;
        justify-content: space-between;

        .total {
            width: 20rem;
        }

        .options {
            flex-direction: column;
        }
    }
`;
