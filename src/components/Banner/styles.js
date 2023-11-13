import { styled } from 'styled-components';
import DEVICE_BREAKPOINTS from '../../styles/deviceBreakPoints';

export const Container = styled.div`
    position: relative;
    min-height: 12rem;
    padding: 3.2rem 0.5rem 2.2rem;
    display: flex;
    justify-content: end;
    align-items: center;
    border-radius: 0.3rem;
    background: ${({ theme }) => theme.GRADIENTS.GRADIENT_200};

    > img {
        height: 14.9rem;
        width: auto;
        position: absolute;
        left: -3rem;
        bottom: 0rem;
    }

    > div {
        z-index: 1;
        width: 60%;
        font-family: 'Poppins', sans-serif;

        h2 {
            font-size: 1.8rem;
            font-weight: 600;
            line-height: 2.5rem;
        }

        p {
            margin-top: 0.3rem;
            font-size: 1.2rem;
            font-weight: 400;
            line-height: 1.7rem;
        }
    }

    @media (min-width: ${DEVICE_BREAKPOINTS.MD}) {
        height: 20rem;
        border-radius: 0.8rem;

        > img {
            height: 26rem;
            left: -5.4rem;
        }

        > div {
            h2 {
                font-size: 4rem;
                font-weight: 500;
                line-height: 5.6rem;
            }

            P {
                font-size: 1.6rem;
            }
        }
    }

    @media (min-width: ${DEVICE_BREAKPOINTS.LG}) {
        height: 26rem;
        border-radius: 0.8rem;

        > img {
            height: 36rem;
            left: -5.4rem;
        }

        > div {
            width: 60%;
        }
    }
`;
