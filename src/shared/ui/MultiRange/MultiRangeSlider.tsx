'use client';

import React, {
    useCallback, useEffect, useState, useRef,
} from 'react';
import { twMerge } from 'tailwind-merge';
import classnames from 'classnames';
import PropTypes from 'prop-types';

import './multiRangeSlider.css';

interface MultiRangeSliderProps {
    onChange?:() => void;
    max:number;
    min:number;
}
function MultiRangeSlider({ onChange, max, min }:MultiRangeSliderProps) {
    const [minVal, setMinVal] = useState(min);
    const [maxVal, setMaxVal] = useState(max);
    const minValRef = useRef<HTMLInputElement>(null);
    const maxValRef = useRef<HTMLInputElement>(null);
    const range = useRef<HTMLDivElement>(null);

    // Convert to percentage
    const getPercent = useCallback(
        (value:number) => Math.round(((value - min) / (max - min)) * 100),
        [min, max],
    );

    // Set width of the range to decrease from the left side
    useEffect(() => {
        if (maxValRef.current) {
            const minPercent = getPercent(minVal);
            const maxPercent = getPercent(+maxValRef.current.value); // Preceding with '+' converts the value from type string to type number

            if (range.current) {
                range.current.style.left = `${minPercent}%`;
                range.current.style.width = `${maxPercent - minPercent}%`;
            }
        }
    }, [minVal, getPercent]);

    // Set width of the range to decrease from the right side
    useEffect(() => {
        if (minValRef.current) {
            const minPercent = getPercent(+minValRef.current.value);
            const maxPercent = getPercent(maxVal);

            if (range.current) {
                // @ts-ignore
                range.current.style.width = `${maxPercent - minPercent}%`;
            }
        }
    }, [maxVal, getPercent]);

    // // Get min and max values when their state changes
    // useEffect(() => {
    //     onChange({ min: minVal, max: maxVal });
    // }, [minVal, maxVal, onChange]);

    return (
        <div className="container">
            <input
                onChange={(event) => {
                    const value = Math.min(+event.target.value, maxVal - 1);
                    setMinVal(value);
                    event.target.value = value.toString();
                }}
                className={twMerge('thumb thumb--zindex-3', `${minVal > max - 100 && 'z-50'} `)}
                ref={minValRef}
                value={minVal}
                type="range"
                max={max}
                min={min}
            />
            <input
                onChange={(event:React.ChangeEvent<HTMLInputElement>) => {
                    const value = Math.max(+event.target.value, minVal + 1);
                    setMaxVal(value);
                    event.target.value = value.toString();
                }}
                className={twMerge('thumb thumb--zindex-3', `${minVal > max - 100 && 'z-50'} `)}
                ref={maxValRef}
                value={maxVal}
                type="range"
                max={max}
                min={min}
            />

            <div className="slider">
                <div className="slider__track" />
                <div className="slider__range" ref={range} />
                <div className="slider__left-value">{minVal}</div>
                <div className="slider__right-value">{maxVal}</div>
            </div>
        </div>
    );
}

MultiRangeSlider.propTypes = {
    onChange: PropTypes.func.isRequired,
    max: PropTypes.number.isRequired,
    min: PropTypes.number.isRequired,
};

export default MultiRangeSlider;
