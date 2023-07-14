import React, {
    MutableRefObject, useEffect, useState, useRef,
} from 'react';
import IconButton from '@/shared/ui/IconButton/IconButton';
import { XMarkIcon } from '@heroicons/react/24/outline';
import { Portal } from '@/shared/ui/Portal/ui/Portal';
import { LinkList } from '@/entities/LinkList';

interface DrawerProps {
    setIsDrawer:(value:boolean) => void;
    isDrawer:boolean;
}
export function Drawer({ setIsDrawer, isDrawer }: DrawerProps) {
    const timerRef = useRef() as MutableRefObject<ReturnType<typeof setTimeout>>;

    const [isClosing, setIsClosing] = useState(false);

    useEffect(() => () => {
        clearTimeout(timerRef.current);
    }, []);

    const handleClickCloseDrawer = () => {
        if (isDrawer) {
            setIsClosing(true);
            timerRef.current = setTimeout(() => {
                setIsDrawer(false);
                setIsClosing(false);
            }, 450);
        }
    };
    return (
        <>
            {
                isDrawer && (
                    <Portal>
                        <div className="bg-gray-800 absolute top-0 bottom-0 right-0 left-0 bg-opacity-50 h-screen">
                            <div className={`bg-white absolute top-0 bottom-0 right-0 bg-opacity-100  w-52 animate-fade-right ${isClosing && 'animate-rotate-y'}`}>
                                <IconButton
                                    onClick={handleClickCloseDrawer}
                                    className="block m-3  md:hidden"
                                    icon={<XMarkIcon width={25} />}
                                    variant="primary"
                                />
                                <LinkList className="flex-col" />
                            </div>
                        </div>
                    </Portal>
                )
            }
        </>
    );
}
