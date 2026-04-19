"use client";
import Link from 'next/link';
import home1 from "@/assets/img/demo/home-1.jpg"
import home2 from "@/assets/img/demo/home-2.jpg"
import home6 from "@/assets/img/demo/home-6.jpg"
import home3 from "@/assets/img/demo/home-3.jpg"
import home4 from "@/assets/img/demo/home-4.jpg"
import home5 from "@/assets/img/demo/home-5.jpg"
import thumb7 from "@/assets/img/thumb/7.jpg"
import Image from 'next/image';
import ModalVideo from 'react-modal-video';
import { useState } from 'react';

interface DataType {
    toggleSubMenu?: (event: React.MouseEvent<HTMLAnchorElement>) => void;
    navbarPlacement?: string;
    toggleMegaMenu: (e: React.MouseEvent<Element>) => void;
}

const MainMenu = ({ toggleSubMenu, navbarPlacement, toggleMegaMenu }: DataType) => {

    const [isOpen, setOpen] = useState(false);

    return (
        <>
            <ul className={`nav navbar-nav ${navbarPlacement}`} data-in="fadeInDown" data-out="fadeOutUp">
                <li className="dropdown megamenu-fw">
                    <Link href="#" className="dropdown-toggle" data-toggle="dropdown" onClick={toggleSubMenu}>Home</Link>
                    <ul className="dropdown-menu megamenu-content" role="menu">
                        <li>
                            <div className="col-menu-wrap">
                                <div className="col-item">
                                    <div className="menu-thumb">
                                        <Image src={home1} alt="Image Not Found" />
                                        <div className="overlay">
                                            <Link href="/">Live Preview</Link>
                                        </div>
                                    </div>
                                    <h6 className="title"><Link href="/">Business Consulting</Link></h6>
                                </div>
                                <div className="col-item">
                                    <div className="menu-thumb">
                                        <Image src={home2} alt="Image Not Found" />
                                        <div className="overlay">
                                            <Link href="/home-2">Live Preview</Link>
                                        </div>
                                    </div>
                                    <h6 className="title"><Link href="/home-2">It Solutions</Link></h6>
                                </div>
                                <div className="col-item">
                                    <div className="menu-thumb">
                                        <Image src={home6} alt="Image Not Found" />
                                        <div className="overlay">
                                            <Link href="/home-6">Live Preview</Link>
                                        </div>
                                    </div>
                                    <h6 className="title"><Link href="/home-6">Artificial Intelligence </Link></h6>
                                </div>
                                <div className="col-item">
                                    <div className="menu-thumb">
                                        <Image src={home3} alt="Image Not Found" />
                                        <div className="overlay">
                                            <Link href="/home-3">Live Preview</Link>
                                        </div>
                                    </div>
                                    <h6 className="title"><Link href="/home-3">Creative Agency</Link></h6>
                                </div>
                                <div className="col-item">
                                    <div className="menu-thumb">
                                        <Image src={home4} alt="Image Not Found" />
                                        <div className="overlay">
                                            <Link href="/home-4">Live Preview</Link>
                                        </div>
                                    </div>
                                    <h6 className="title"><Link href="/home-4">Transport & Logistics</Link></h6>
                                </div>
                                <div className="col-item">
                                    <div className="menu-thumb">
                                        <Image src={home5} alt="Image Not Found" />
                                        <div className="overlay">
                                            <Link href="/home-5">Live Preview</Link>
                                        </div>
                                    </div>
                                    <h6 className="title"><Link href="/home-5">Financial Advisor</Link></h6>
                                </div>
                            </div>
                            <div className="megamenu-banner">
                                <Image src={thumb7} alt="Image Not Found" />
                                <Link href="#" className="popup-youtube video-play-button" scroll={false} onClick={() => setOpen(true)}>
                                    <i className="fas fa-play" />
                                </Link>
                                <h6 className="title">
                                    <Link href="#" onClick={() => setOpen(true)}>Watch Intro Video</Link>
                                </h6>
                            </div>
                        </li>
                    </ul>
                </li>

                <li className="dropdown">
                    <Link href="#" className="dropdown-toggle" data-toggle="dropdown" onClick={toggleSubMenu}>Pages</Link>
                    <ul className="dropdown-menu">
                        <li><Link href="/about-us">About Us</Link></li>
                        <li><Link href="/about-us-2">About Us Two</Link></li>
                        <li><Link href="/team">Team</Link></li>
                        <li><Link href="/team-2">Team Two</Link></li>
                        <li><Link href="/team-details/1">Team Details</Link></li>
                        <li><Link href="/pricing">Pricing</Link></li>
                        <li><Link href="/faq">FAQ</Link></li>
                        <li><Link href="/contact-us">Contact Us</Link></li>
                        <li><Link href="/not-found">Error Page</Link></li>
                    </ul>
                </li>

                <li className="dropdown">
                    <Link href="#" className="dropdown-toggle" data-toggle="dropdown" onClick={toggleSubMenu}>Services</Link>
                    <ul className="dropdown-menu">
                        <li><Link href="/services">Services Version One</Link></li>
                        <li><Link href="/services-2">Services Version Two</Link></li>
                        <li><Link href="/services-3">Services Version Three</Link></li>
                        <li><Link href="/services-details/1">Services Details</Link></li>
                    </ul>
                </li>
                <li className="dropdown">
                    <Link href="#" className="dropdown-toggle" data-toggle="dropdown" onClick={toggleSubMenu}>Blog</Link>
                    <ul className="dropdown-menu">
                        <li><Link href="/blog-standard">Blog Standard</Link></li>
                        <li><Link href="/blog-with-sidebar">Blog With Sidebar</Link></li>
                        <li><Link href="/blog-2-column">Blog Grid Two Column</Link></li>
                        <li><Link href="/blog-3-column">Blog Grid Three Column</Link></li>
                        <li><Link href="/blog-single/1">Blog Single</Link></li>
                        <li><Link href="/blog-single-with-sidebar/1">Blog Single With Sidebar</Link></li>
                    </ul>
                </li>
                <li><Link href="/contact-us">contact</Link></li>
            </ul>

            <ModalVideo channel='youtube' isOpen={isOpen} videoId="aTC_RNYtEb0" onClose={() => setOpen(false)} />
        </>
    );
};

export default MainMenu;