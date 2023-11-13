import { styled } from 'styled-components';
import DEVICE_BREAKPOINTS from '../../styles/deviceBreakPoints';

export const Container = styled.textarea`
    width: 100%;
    height: 14.4rem;
    padding: 1.2rem 1.4rem;
    border-radius: 0.8rem;
    font-family: 'Roboto', sans-serif;
    font-size: 1.6rem;
    background-color: ${({ theme }) => theme.COLORS.DARK_900};
    resize: none;
    border: none;
    outline: none;
    color: ${({ theme }) => theme.COLORS.LIGHT_100};

    &::placeholder {
        color: ${({ theme }) => theme.COLORS.LIGHT_500};
    }

    @media (min-width: ${DEVICE_BREAKPOINTS.MD}) {
        height: 17.2rem;
    }
`;

export const Label = styled.label`
    font-family: 'Roboto', sans-serif;
    font-size: 1.6rem;
    line-height: 1.6rem;
    color: ${({ theme }) => theme.COLORS.LIGHT_400};
    display: block;
    margin-bottom: 1.6rem;
`;
