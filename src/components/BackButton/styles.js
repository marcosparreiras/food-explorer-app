import { styled } from 'styled-components';
import { Link } from 'react-router-dom';
import DEVICE_BREAKPOINTS from '../../styles/deviceBreakPoints';

export const Container = styled(Link)`
    display: flex;
    align-items: center;
    gap: 1rem;
    font-family: 'Poppins', sans-serif;
    font-size: 2.4rem;
    font-weight: 500;
    line-height: 3.4rem;
    color: ${({ theme }) => theme.COLORS.LIGHT_300};

    @media (min-width: ${DEVICE_BREAKPOINTS.MD}) {
        font-weight: 700;
    }
`;
