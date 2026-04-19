import Image from "next/image";
import thumbM1 from "@/assets/img/team/m1.jpg"
import thumbM2 from "@/assets/img/team/m2.jpg"
import thumbM3 from "@/assets/img/team/m3.jpg"
import thumbM4 from "@/assets/img/team/m4.jpg"
import illustration15 from "@/assets/img/illustration/15.png"
import Animate from "../animation/Animate";
import SplitAnimation from "../animation/SplitAnimation";

const BannerV7 = () => {
    return (
        <>
            <div className="banner-style-seven-area overflow-hidden">
                <div className="container">
                    <div className="banner-seven-items text-light">
                        <div className="row">
                            <div className="col-lg-10 offset-lg-1 text-center">
                                <SplitAnimation>
                                    <h2 className="split-text">Creative projects with <strong>AI-Powered patern</strong></h2>
                                </SplitAnimation>
                            </div>
                            <div className="col-lg-12">
                                <div className="banner">
                                    <div className="info order-lg-last">
                                        <p className="split-text">
                                            Side in so life past. Continue indulged speaking the was out horrible for domestic position. Seeing rather her you not esteem men settle genius excuse. Deal say over you age from comparison
                                        </p>

                                        <Animate className="animate__animated animate__fadeInUp" delay="300ms">
                                            <div className="card-style-three">
                                                <div className="top-info">
                                                    <div className="thumb">
                                                        <Image src={thumbM1} alt="Image Not Found" />
                                                        <Image src={thumbM2} alt="Image Not Found" />
                                                        <Image src={thumbM3} alt="Image Not Found" />
                                                        <Image src={thumbM4} alt="Image Not Found" />
                                                        <span>+20K</span>
                                                    </div>
                                                </div>
                                                <h5><i className="fas fa-star" /> <strong>4.8 58</strong> Reviews</h5>
                                                <h4>Top AI data talent</h4>
                                                <p>
                                                    The next generation production for designer. Resolve parties but why she shewing
                                                </p>
                                            </div>
                                        </Animate>
                                    </div>

                                    <Animate className="animate__animated animate__fadeInLeft">
                                        <div className="illustration">
                                            <Image src={illustration15} alt="Image Not Found" />
                                        </div>
                                    </Animate>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default BannerV7;