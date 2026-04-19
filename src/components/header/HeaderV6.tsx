"use client"
import useSidebarMenu from "@/hooks/useSidebarMenu";
import useStickyMenu from "@/hooks/useStickyMenu";
import useMenuToggle from "@/hooks/useSubMenuToggle";
import logo from "@/assets/img/logo.png";
import logoLight from "@/assets/img/logo-light.png";
import Image from "next/image";
import Link from "next/link";
import MainMenu from "./MainMenu";

const HeaderV6 = () => {

    const isMenuSticky = useStickyMenu();
    const { toggleSubMenu, toggleMegaMenu } = useMenuToggle();
    const { isOpen, openMenu, closeMenu } = useSidebarMenu();

    return (
        <>
            <header>
                <nav className={`navbar mobile-sidenav navbar-sticky navbar-default validnavs navbar-fixed dark ${isMenuSticky ? 'sticked' : 'no-background'} ${isOpen ? "navbar-responsive" : ""}`}>
                    <div className="container d-flex justify-content-between align-items-center">
                        <div className="navbar-header">
                            <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#navbar-menu" onClick={openMenu}>
                                <i className="fa fa-bars" />
                            </button>

                            <Link className="navbar-brand" href="/">
                                <Image src={logoLight} className="logo logo-display" alt="Logo" />
                                <Image src={logo} className="logo logo-scrolled" alt="Logo" />
                            </Link>
                        </div>

                        <div className="collapse navbar-collapse" id="navbar-menu">
                            <Image src={logo} alt="Logo" />
                            <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#navbar-menu" onClick={closeMenu}>
                                <i className="fa fa-times" />
                            </button>

                            <MainMenu navbarPlacement="navbar-center" toggleSubMenu={toggleSubMenu} toggleMegaMenu={toggleMegaMenu} />
                        </div>

                        <div className="attr-right">
                            <div className="attr-nav">
                                <ul>
                                    <li className="button dark">
                                        <Link href="/contact-us">Get in Touch <i className="fas fa-long-arrow-right" /></Link>
                                    </li>
                                </ul>
                            </div>
                            <div className={`overlay-screen ${isOpen ? "opened" : ""}`} onClick={closeMenu} />
                        </div>
                    </div>
                </nav>
            </header>
        </>
    );
};

export default HeaderV6;