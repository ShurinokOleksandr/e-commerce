import React from 'react';
import { createPortal } from 'react-dom';

interface PortalProps {
    children:React.ReactNode;
    element?:HTMLElement;
}
export function Portal(props: PortalProps) {
    const {
        children,
        element = document.body,
    } = props;
    return createPortal(children, element);
}
