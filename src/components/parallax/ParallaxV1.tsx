import Image from 'next/image';
import shape27 from "@/assets/img/shape/27.png"
import banner20 from "@/assets/img/banner/20.jpg"
import Link from 'next/link';

const ParallaxV1 = () => {
    return (
        <>
            <div className="parallax-area">
                <Image src={shape27} alt="Image Not Found" />
                <div className="img-container shape">
                    <Image src={banner20} alt="Image Not Found" />
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="circle-progress-style-two text-center">
                                <div className="curve-text">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 150 150" version="1.1">
                                        <path id="textPath" d="M 0,75 a 75,75 0 1,1 0,1 z" />
                                        <text><textPath href="#textPath">.  Certified Creative   .  Digital Agency Company</textPath></text>
                                    </svg>
                                    <Link href="#" scroll={false}><i className="fas fa-long-arrow-right" /></Link>
                                </div>
                                <h2 className="title split-text">Best creative & modern agency</h2>
                                <p className="split-text">
                                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab veniam ullam vero officia incidunt ea, odio excepturi aut ipsum quis nihil eius ipsa at est libero reprehenderit sapiente iure voluptatem?
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ParallaxV1;