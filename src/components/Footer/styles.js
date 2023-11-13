import { styled } from 'styled-components';
import DEVICE_BREAKPOINTS from '../../styles/deviceBreakPoints';

export const Container = styled.footer`
    grid-area: footer;
    display: flex;
    align-items: center;
    background: ${({ theme }) => theme.COLORS.DARK_600};
    justify-content: space-around;
    align-items: center;
    gap: 1.6rem;
    padding: 3rem 2.7rem;

    > img {
        width: 11.4rem;
        height: auto;
    }

    > p {
        font-family: 'DM Sans', sans-serif;
        font-size: 1.2rem;
        font-weight: 400;
        color: ${({ theme }) => theme.COLORS.LIGHT_200};
    }

    @media (min-width: ${DEVICE_BREAKPOINTS.MD}) {
        padding: 2.4rem 12.3rem;
        justify-content: space-between;

        > img {
            width: 14.6rem;
        }

        > p {
            font-size: 1.4rem;
            line-height: 2.2rem;
        }
    }
`;
