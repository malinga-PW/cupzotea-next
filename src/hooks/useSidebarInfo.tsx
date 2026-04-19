"use client";
import { useState } from 'react';

const useSidebarInfo = () => {
    const [isInfoOpen, setIsInfoOpen] = useState<boolean>(false);

    const openInfoBar = (): void => {
        setIsInfoOpen(true);
        document.body.classList.add('on-sides');
    };

    const closeInfoBar = (): void => {
        setIsInfoOpen(false);
        document.body.classList.remove('on-sides');
    };

    return { isInfoOpen, openInfoBar, closeInfoBar };
};

export default useSidebarInfo;
