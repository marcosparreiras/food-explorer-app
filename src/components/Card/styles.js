import { styled } from 'styled-components';
import DEVICE_BREAKPOINTS from '../../styles/deviceBreakPoints';

export const Container = styled.div`
    position: relative;
    padding: 2.4rem;
    border-radius: 0.8rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    background: ${({ theme }) => theme.COLORS.DARK_200};
    gap: 1.2rem;
    width: 21rem;

    > img {
        width: 8.8rem;
        height: 8.8rem;
        object-fit: cover;
        border-radius: 50%;
    }

    > svg {
        position: absolute;
        top: 1.6rem;
        right: 1.8rem;
        width: 2.4rem;
        height: auto;
        cursor: pointer;
    }

    .like {
        fill: ${({ $like, theme }) =>
            $like ? theme.COLORS.LIGHT_300 : 'none'};
    }

    > a {
        h3 {
            font-family: 'Poppins', sans-serif;
            font-weight: 700;
            font-size: 1.4rem;
            line-height: 2.4rem;
            color: ${({ theme }) => theme.COLORS.LIGHT_300};
            height: 4.8rem;

            overflow: hidden;
        }
    }

    > p {
        display: none;
        font-family: 'Roboto', sans-serif;
        font-size: 1.4rem;
        line-height: 2.2rem;
        color: ${({ theme }) => theme.COLORS.LIGHT_400};
        overflow: hidden;
        height: 8.8rem;
    }

    > span {
        font-family: 'Roboto', sans-serif;
        font-size: 1.6rem;
        line-height: 1.6rem;
        color: ${({ theme }) => theme.COLORS.TINTS_200};
    }

    @media (min-width: ${DEVICE_BREAKPOINTS.MD}) {
        gap: 1.5rem;
        width: 30.4rem;

        > img {
            width: 17rem;
            height: 17rem;
        }

        > a {
            h3 {
                font-size: 2.4rem;
                line-height: 3.3rem;
                height: 6.6rem;
            }
        }

        p {
            display: block;
        }

        > span {
            font-size: 3.2rem;
            line-height: 5.1rem;
        }
    }
`;

export const Options = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1.6rem;

    > div {
        display: flex;
        align-items: center;
        gap: 1.4rem;
        font-family: 'Roboto', sans-serif;
        font-weight: 700;
        line-height: 1.6rem;

        span {
            font-size: 1.6rem;
        }

        button {
            border: none;
            background: none;
            color: ${({ theme }) => theme.COLORS.LIGHT_300};
            font-size: 2.4rem;
        }
    }
    @media (min-width: ${DEVICE_BREAKPOINTS.MD}) {
        flex-direction: row;

        > div {
            line-height: 3.2rem;

            span {
                font-size: 2rem;
            }

            button {
                font-size: 2rem;
            }
        }
    }
`;
