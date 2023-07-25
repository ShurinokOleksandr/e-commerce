'use client';

import { Navigation, FreeMode, Thumbs } from 'swiper/modules';
// Import Swiper React components
import { SwiperSlide, Swiper } from 'swiper/react';
import React, { useState, useRef } from 'react';
import Image from 'next/image';
import 'swiper/css/navigation';
import { isArray } from 'util';
import 'swiper/css/free-mode';
import 'swiper/css/thumbs';
// Import Swiper styles
import 'swiper/css';

interface SwiperImageProps {
    data:string
}
export function SwiperImage({ data }:SwiperImageProps) {
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
                {
                    JSON.parse(data).map((item:string) => (
                        <SwiperSlide>
                            <Image height={350} width={350} src={item} alt="as" />
                        </SwiperSlide>
                    ))
                }
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
                {
                    JSON.parse(data).map((item:string) => (
                        <SwiperSlide>
                            <Image height={100} width={100} src={item} alt="as" />

                        </SwiperSlide>
                    ))
                }
            </Swiper>
        </div>
    );
}
