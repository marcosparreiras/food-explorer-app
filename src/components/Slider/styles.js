import { styled } from 'styled-components';
import DEVICE_BREAKPOINTS from '../../styles/deviceBreakPoints';

export const Container = styled.div`
    > h3 {
        font-family: 'Poppins', sans-serif;
        font-weight: 500;
        font-size: 1.8rem;
        line-height: 2.5rem;
        color: ${({ theme }) => theme.COLORS.LIGHT_300};
        margin-bottom: 2.4rem;
    }

    @media (min-width: ${DEVICE_BREAKPOINTS.MD}) {
        > h3 {
            font-size: 3.2rem;
            line-height: 4.4rem;
        }
    }

    .swiper-button-next,
    .swiper-button-prev {
        color: ${({ theme }) => theme.COLORS.LIGHT_300};
        width: 32rem;
        height: 100%;
        top: 0;

        &::after {
            font-size: 3rem;
        }
    }

    .swiper-button-next {
        right: 0;
        background: ${({ theme }) => theme.GRADIENTS.GRADIENT_100R};
    }

    .swiper-button-prev {
        left: 0;
        background: ${({ theme }) => theme.GRADIENTS.GRADIENT_100L};
    }

    .swiper-button-disabled {
        display: none;
    }
`;
