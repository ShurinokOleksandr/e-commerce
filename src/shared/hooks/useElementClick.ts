import { useEffect, useRef } from 'react';

type ClickFunction = () => void;

export const useElementClick = (funcs:ClickFunction[]) => {
    const searchResultsRef = useRef<HTMLDivElement | null>(null);
    const handleOutsideClick = (e:MouseEvent) => {
        if (searchResultsRef.current && !searchResultsRef.current.contains(e.target as Node)) {
            funcs.forEach((func) => func());
        }
    };
    useEffect(() => {
        document.addEventListener('click', handleOutsideClick);

        return () => {
            document.removeEventListener('click', handleOutsideClick);
        };
    }, [funcs]);
    return searchResultsRef;
};
