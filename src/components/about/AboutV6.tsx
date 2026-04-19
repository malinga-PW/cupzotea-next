import thumb8 from "@/assets/img/thumb/8.jpg"
import thumb10 from "@/assets/img/thumb/10.jpg"
import thumb11 from "@/assets/img/thumb/11.jpg"
import thumb9 from "@/assets/img/thumb/9.jpg"
import Image from "next/image";
import Animate from "../animation/Animate";

const AboutV6 = () => {
    return (
        <>
            <div className="about-style-six-area text-light">
                <div className="about-style-six-items" style={{ backgroundImage: 'url(/assets/img/shape/35.png)' }}>
                    <div className="container">
                        <div className="row align-center">
                            <div className="col-lg-5">
                                <div className="about-style-six-info">
                                    <p>
                                        Artificial Intelligence refers to the development of computer systems that can perform tasks that would typically require human intelligence. It involves the creation of algorithms and models that enable machines to learn, reason, perceive, and make decisions.
                                    </p>
                                    <p>
                                        There are generally two types of AI: Narrow or Weak AI, which is designed to perform specific tasks, and General or Strong AI, which possesses human-level intelligence and can handle a wide range of tasks.
                                    </p>
                                    <a className="btn btn-md btn-theme animation mt-20" href="about-us.html">Explore More</a>
                                </div>
                            </div>
                            <div className="col-lg-6 offset-lg-1">
                                <div className="about-style-six-thumb">
                                    <Animate className="animate__animated animate__fadeInUp">
                                        <div className="item">
                                            <Image src={thumb8} alt="Image Not Found" />
                                        </div>
                                    </Animate>

                                    <Animate className="animate__animated animate__fadeInUp" delay="100ms">
                                        <div className="item">
                                            <Image src={thumb10} alt="Image Not Found" />
                                        </div>
                                    </Animate>

                                    <Animate className="animate__animated animate__fadeInUp" delay="200ms">
                                        <div className="item">
                                            <Image src={thumb11} alt="Image Not Found" />
                                        </div>
                                    </Animate>

                                    <Animate className="animate__animated animate__fadeInUp" delay="300ms">
                                        <div className="item">
                                            <Image src={thumb9} alt="Image Not Found" />
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

export default AboutV6;