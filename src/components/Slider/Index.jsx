import { useState, useEffect } from 'react';

import 'swiper/css/navigation';
import 'swiper/css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import { Container } from './styles';
import Card from '../Card';

/* eslint-disable */
function Slider({ slides, category, ...rest }) {
    const [slidesPerView, setSlidesPerView] = useState(0);
    const [navigation, setNavigation] = useState(false);

    function calcSlidesPerScreen({ width, padding, cardSize, margin }) {
        let slidesInScreen = (width - padding * 2) / cardSize;
        slidesInScreen -= (margin / cardSize) * slidesInScreen;
        const result = slidesInScreen < 1 ? 1 : slidesInScreen.toFixed(2);
        return result;
    }

    function handleResize() {
        const width = window.innerWidth;
        const options = { padding: 0, margin: 0, cardSize: 0, width };
        if (width < 768) {
            options.padding = 24;
            options.margin = 16;
            options.cardSize = 210;
            setNavigation(false);
        } else {
            options.padding = 124;
            options.margin = 16;
            options.cardSize = 304;
            setNavigation(true);
        }
        const numOfSlides = calcSlidesPerScreen(options);
        if (width > 768 && numOfSlides < 3) {
            setNavigation(false);
        }
        setSlidesPerView(numOfSlides);
    }

    useEffect(() => {
        window.addEventListener('resize', handleResize);
        handleResize();
    }, []);

    return (
        <Container>
            {category && <h3>{category}</h3>}
            <Swiper
                slidesPerView={slidesPerView}
                spaceBetween={16}
                className='mySwiper'
                modules={[Navigation]}
                navigation={navigation}
            >
                {slides &&
                    slides.map((slide) => (
                        <SwiperSlide key={slide.id}>
                            <Card data={slide} {...rest} />
                        </SwiperSlide>
                    ))}
            </Swiper>
        </Container>
    );
}

export default Slider;
