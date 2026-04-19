"use client";
import { useCallback } from "react";

const useMenuToggle = () => {

    const toggleSubMenu = useCallback((e: React.MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault();
        const listItem = e.currentTarget.parentElement;
        const subMenu = listItem?.querySelector<HTMLUListElement>("ul.dropdown-menu");
        if (subMenu) {
            listItem?.classList.toggle('on');
            subMenu.style.maxHeight = subMenu.style.maxHeight === "20000px" ? "0" : "20000px";
        }
    }, []);

    const toggleMegaMenu = useCallback((e: React.MouseEvent<Element>) => {
        e.preventDefault();
        const listItem = e.currentTarget.parentElement;
        const megaMenu = listItem?.querySelector<HTMLElement>(".content");
        if (megaMenu) {
            megaMenu.classList.toggle("d-block");
            listItem?.classList.toggle("on");
        }
    }, []);

    return { toggleSubMenu, toggleMegaMenu };
};

export default useMenuToggle
