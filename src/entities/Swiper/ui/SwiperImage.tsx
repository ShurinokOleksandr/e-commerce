'use client';

import { Navigation, FreeMode, Thumbs } from 'swiper/modules';
// Import Swiper React components
import { SwiperSlide, Swiper } from 'swiper/react';
import React, { useState, useRef } from 'react';
import 'swiper/css/navigation';
import 'swiper/css/free-mode';
import 'swiper/css/thumbs';
// Import Swiper styles
import 'swiper/css';

export function SwiperImage() {
    const [thumbsSwiper, setThumbsSwiper] = useState(null);

    return (
        <div className="w-1/4">
            <Swiper
                modules={[FreeMode, Navigation, Thumbs]}
                thumbs={{ swiper: thumbsSwiper }}
                className="mySwiper2"
                spaceBetween={10}
                loop
            >
                <SwiperSlide>
                    <img src="https://swiperjs.com/demos/images/nature-1.jpg" alt="as" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://swiperjs.com/demos/images/nature-2.jpg" alt="as" />
                </SwiperSlide>
            </Swiper>
            <Swiper
                modules={[FreeMode, Navigation, Thumbs]}
                // @ts-ignore
                onSwiper={setThumbsSwiper}
                className="mySwiper"
                watchSlidesProgress
                spaceBetween={10}
                slidesPerView={4}
                freeMode
                loop
            >
                <SwiperSlide>
                    <img src="https://swiperjs.com/demos/images/nature-1.jpg" alt="te" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://swiperjs.com/demos/images/nature-2.jpg" alt="te" />
                </SwiperSlide>
            </Swiper>
        </div>
    );
}
