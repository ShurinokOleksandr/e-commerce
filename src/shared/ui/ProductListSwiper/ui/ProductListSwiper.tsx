'use client';

import React, { useEffect, useState, useRef } from 'react';
import { Product } from '@/entities/Product';

interface SwiperImageProps {
    data:any
}
export function ProductListSwiper({ data = [] }:SwiperImageProps) {
    const scrollRef = useRef<HTMLDivElement>(null);
    const [activeItem, setActiveItem] = useState(1);
    const items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

    useEffect(() => {
        const box = scrollRef.current;

        const handlerScroll = () => {
            if (box) {
                const itemWidth = scrollRef.current.scrollWidth / data.length;
                const newActiveItem = 1 + data.length - Math.floor(scrollRef.current.scrollWidth - scrollRef.current.scrollLeft) / itemWidth;
                if (activeItem !== newActiveItem) {
                    setActiveItem(newActiveItem);
                }
            }
        };
        if (box) {
            box.addEventListener('scroll', handlerScroll, {
                capture: false,
                passive: true,
            });
        }
        return () => {
            if (box) {
                box.removeEventListener('scroll', handlerScroll);
            }
        };
    }, [activeItem, data.length]);

    const onClickNext = () => {
        const newAcitveItem = activeItem + 1;
        scrollRef.current?.scrollTo({
            left: scrollRef.current.scrollLeft + scrollRef.current.scrollWidth / data.length,
            behavior: 'smooth',
        });
        setActiveItem(newAcitveItem);
    };
    const onClickBack = () => {
        const newActiveItem = activeItem - 1;
        scrollRef.current?.scrollTo({
            left: scrollRef.current.scrollLeft - scrollRef.current.scrollWidth / data.length,
            behavior: 'smooth',
        });
        setActiveItem(newActiveItem);
    };

    return (
        <div>
            <button onClick={onClickNext} type="button">next</button>
            <button onClick={onClickBack} type="button">back</button>
            <div className=" flex gap-x-10  overflow-x-auto" ref={scrollRef}>

                {
                    items.map((item) => <Product name="name" />)
                }
            </div>
        </div>

    );
}
