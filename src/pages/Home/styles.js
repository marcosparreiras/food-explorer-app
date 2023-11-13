import { styled } from 'styled-components';
import DEVICE_BREAKPOINTS from '../../styles/deviceBreakPoints';

export const Container = styled.div`
    width: 100%;
    min-height: 100vh;
`;

export const Main = styled.main`
    grid-area: main;
    padding: 4.4rem 2.4rem 2.4rem;

    display: flex;
    flex-direction: column;
    gap: 2.4rem;

    h5 {
        font-size: 2.2rem;
        color: ${({ theme }) => theme.COLORS.DARK_1000};
    }

    summary {
        font-family: 'Poppins', sans-serif;
        font-weight: 500;
        font-size: 1.5rem;
        line-height: 2.5rem;
        color: ${({ theme }) => theme.COLORS.LIGHT_300};
        margin-bottom: 2.4rem;
    }

    @media (min-width: ${DEVICE_BREAKPOINTS.MD}) {
        padding: 16.4rem 12.4rem 4.6rem;
        gap: 4.7rem;

        h5 {
            font-size: 3.2rem;
        }

        summary {
            font-size: 2.6rem;
            line-height: 4.4rem;
        }
    }
`;
