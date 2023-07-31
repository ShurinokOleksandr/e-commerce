'use client';

import { ChevronRightIcon, ChevronLeftIcon } from '@heroicons/react/24/outline';
import React, { useEffect, useState, useRef } from 'react';
import { ShoppingCartItem } from '@/shared/types/Product';
import { useInView } from 'react-intersection-observer';
import Button from '@/shared/ui/Button/Button';
import { Product } from '@/entities/Product';

interface SwiperProps {
    data:ShoppingCartItem[]
}
export function Swiper({ data = [] }:SwiperProps) {
    const scrollRef = useRef<HTMLDivElement>(null);
    const [activeItem, setActiveItem] = useState(1);
    const { inView, ref } = useInView({ threshold: 1 });
    useEffect(() => {
        const box = scrollRef.current;

        const handlerScroll = () => {
            if (box) {
                const itemWidth = scrollRef.current.scrollWidth / data.length;
                const newActiveItem = 1 + data.length - Math.floor(Math.ceil(
                    Math.ceil(scrollRef.current.scrollWidth) - Math.ceil(scrollRef.current.scrollLeft),
                ) / Math.floor(itemWidth));
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
    }, [activeItem, scrollRef, data.length]);

    const handleClickSwipe = (arg:string) => {
        const nextActiveNumber = arg === 'next' ? 1 : -1;
        scrollRef.current?.scrollTo({
            left: scrollRef.current.scrollLeft + (scrollRef.current.scrollWidth / data.length) * nextActiveNumber,
            behavior: 'smooth',
        });
        setActiveItem(nextActiveNumber);
    };
    const isBackDisabled = activeItem === 1;
    const isNextDisabled = inView;
    return (
        <div>
            <div className=" border relative ">
                <Button
                    className="p-4 absolute inset-y-[45%] z-50 -left-5 shadow"
                    onClick={() => handleClickSwipe('back')}
                    icon={<ChevronLeftIcon width={20} />}
                    disabled={isBackDisabled}
                    variant="third"
                    size="rounded"
                    position
                />
                <div className="flex overflow-x-auto justify-between relative" ref={scrollRef}>
                    {
                        data.map((item, index) => (
                            <div
                                ref={index === data.length - 1 ? ref : null}
                                key={item.id}
                            >
                                <Product className="w-[16.25rem]" {...item} />
                            </div>
                        ))
                    }
                </div>

                <Button
                    className="p-4 absolute inset-y-[45%] z-50 -right-5 shadow"
                    onClick={() => handleClickSwipe('next')}
                    icon={<ChevronRightIcon width={20} />}
                    disabled={isNextDisabled}
                    variant="third"
                    size="rounded"
                    position
                />
            </div>
        </div>

    );
}
