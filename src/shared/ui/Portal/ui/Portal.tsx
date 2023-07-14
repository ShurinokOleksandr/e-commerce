import { createPortal } from 'react-dom';
import React from 'react';

interface PortalProps {
    children:React.ReactNode;
    element?:HTMLElement;
}
export function Portal(props: PortalProps) {
    const {
        element = document.body,
        children,
    } = props;
    return createPortal(children, element);
}
