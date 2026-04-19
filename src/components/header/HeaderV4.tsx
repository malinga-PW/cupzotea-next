"use client"
import Image from 'next/image';
import logo2Light from "@/assets/img/logo-2-light.png";
import logo2 from "@/assets/img/logo-2.png";
import Link from 'next/link';
import MainMenu from './MainMenu';
import useStickyMenu from '@/hooks/useStickyMenu';
import useSidebarInfo from '@/hooks/useSidebarInfo';
import useSidebarMenu from '@/hooks/useSidebarMenu';
import SidebarInfo from './SidebarInfo';
import useMenuToggle from '@/hooks/useSubMenuToggle';

const HeaderV4 = () => {

    const { toggleSubMenu, toggleMegaMenu } = useMenuToggle();
    const isMenuSticky = useStickyMenu();
    const { isInfoOpen, openInfoBar, closeInfoBar } = useSidebarInfo();
    const { isOpen, openMenu, closeMenu } = useSidebarMenu();

    return (
        <>
            <header>
                <nav className={`navbar mobile-sidenav inc-border navbar-full-width navbar-sticky navbar-default validnavs navbar-fixed white on menu-center no-full ${isMenuSticky ? 'sticked' : 'no-background'} ${isOpen ? "navbar-responsive" : ""}`}>
                    <div className="container-full d-flex justify-content-between align-items-center">
                        <div className="navbar-header">
                            <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#navbar-menu" onClick={openMenu}>
                                <i className="fa fa-bars" />
                            </button>
                            <Link className="navbar-brand" href="/">
                                <Image src={logo2Light} className="logo logo-display" alt="Logo" />
                                <Image src={logo2} className="logo logo-scrolled" alt="Logo" />
                            </Link>
                        </div>
                        <div className={`collapse navbar-collapse ${isOpen ? "show collapse-mobile" : "collapse-mobile"}`} id="navbar-menu">
                            <div className="collapse-header">
                                <Image src={logo2} alt="Logo" />
                                <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#navbar-menu" onClick={closeMenu}>
                                    <i className="fa fa-times" />
                                </button>
                            </div>
                            <MainMenu navbarPlacement="navbar-center" toggleSubMenu={toggleSubMenu} toggleMegaMenu={toggleMegaMenu} />
                        </div>
                        <SidebarInfo openInfoBar={openInfoBar} closeInfoBar={closeInfoBar} isInfoOpen={isInfoOpen} />
                    </div>
                    <div className={`overlay-screen ${isOpen ? "opened" : ""}`} onClick={closeMenu} />
                </nav>
            </header>
        </>
    );
};

export default HeaderV4;