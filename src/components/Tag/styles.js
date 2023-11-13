import { styled } from 'styled-components';

export const Container = styled.span`
    padding: 0.4rem 0.8rem;
    background: ${({ theme }) => theme.COLORS.DARK_1000};
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
    border-radius: 0.5rem;
`;
