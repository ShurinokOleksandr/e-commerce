'use client';

import React, {
    useCallback, useEffect, useState, useRef,
} from 'react';
import EventTarget from 'next/dist/compiled/@edge-runtime/primitives/events';
import Typography from '@/shared/ui/Typography/ui/Typography';

import './MultiRangeSlider.css';

interface MultiRangeSliderProps {
    min:number;
    max:number;
}
function MultiRangeSlider({ min, max }: MultiRangeSliderProps) {
    const [minVal, setMinVal] = useState(min);
    const [maxVal, setMaxVal] = useState(max);
    const minValRef = useRef(min);
    const maxValRef = useRef(max);
    const range = useRef<HTMLDivElement>(null);

    // Convert to percentage
    const getPercent = useCallback(
        (value:number) => Math.round(((value - min) / (max - min)) * 100),
        [min, max],
    );

    // Set width of the range to decrease from the left side
    useEffect(() => {
        const minPercent = getPercent(minVal);
        const maxPercent = getPercent(maxValRef.current);

        if (range.current) {
            range.current.style.left = `${minPercent}%`;
            range.current.style.width = `${maxPercent - minPercent}%`;
        }
    }, [minVal, getPercent]);

    // Set width of the range to decrease from the right side
    useEffect(() => {
        const minPercent = getPercent(minValRef.current);
        const maxPercent = getPercent(maxVal);

        if (range.current) {
            range.current.style.width = `${maxPercent - minPercent}%`;
        }
    }, [maxVal, getPercent]);
    const handleChangeRangeMax = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = Math.min(Number(event.target.value), maxVal - 1);
        setMinVal(value);
        minValRef.current = value;
    };
    const handleChangeRangeMin = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = Math.max(Number(event.target.value), minVal + 1);
        setMaxVal(value);
        maxValRef.current = value;
    };
    return (
        <>
            <Typography text="Фильтрация по цене" />
            <div className="flex items-center justify-center">
                <div className="container">
                    <input
                        className={`thumb thumb--left ${minVal > max - 100 && '5'}`}
                        onChange={handleChangeRangeMax}
                        value={minVal}
                        type="range"
                        max={max}
                        min={min}
                    />
                    <input
                        onChange={handleChangeRangeMin}
                        className="thumb thumb--right"
                        value={maxVal}
                        type="range"
                        max={max}
                        min={min}
                    />

                    <div className="slider relative">
                        <div className="slider__track" />
                        <div className="slider__range" ref={range} />
                        <div className="slider__left-value bg-violet-500 absolute ">{minVal}</div>
                        <div className="slider__right-value">{maxVal}</div>
                        {/* <div className="slider__left-value"> */}
                        {/*     <div> */}
                        {/*         <Typography size="xs" className="font-semibold" text={`Price: $${min} -- $${min}`} /> */}
                        {/*     </div> */}
                        {/* </div> */}
                    </div>
                </div>
            </div>
        </>

    );
}

export default MultiRangeSlider;
