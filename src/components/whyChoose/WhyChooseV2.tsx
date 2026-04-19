/* eslint-disable @typescript-eslint/no-unused-vars */

"use client"
import Image from 'next/image';
import React, { useEffect, useRef } from 'react';
import illustration7 from "@/assets/img/illustration/7.png"
import Link from 'next/link';
import CircleType from 'circletype';

const WhyChooseV2 = () => {

    const circleTypeElm = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        if (circleTypeElm.current) {
            const options = circleTypeElm.current.dataset.circleTextOptions;
            const circleTypeInstance = new CircleType(circleTypeElm.current);
        }
    }, []);

    return (
        <>
            <div className="choose-us-style-two-area relative bg-dark text-light">
                <div className="container">
                    <div className="row align-center">
                        <div className="col-xl-6 order-xl-last pl-80 pl-md-15 pl-xs-15 choose-us-style-two-content">
                            <div className="info-style-one">
                                <h4 className="sub-title">Why Choose Us</h4>
                                <h2 className="title">Empowering success in technology since 1968 </h2>
                                <p>
                                    Continue indulged speaking the was out horrible for domestic position. Seeing rather her you not esteem men settle genius excuse. Deal say over you age from. Comparison new ham melancholy son themselves.
                                </p>
                                <ul className="list-sytle-four mt-30">
                                    <li>
                                        <h4>Tech Solution</h4>
                                        <p>
                                            Continued at up to zealously necessary breakfast. Surrounded sir motionless she end literature.
                                        </p>
                                    </li>
                                    <li>
                                        <h4>Quick support</h4>
                                        <p>
                                            Continued at up to zealously necessary breakfast. Surrounded sir motionless she end literature
                                        </p>
                                    </li>
                                </ul>
                                <Link className="btn btn-md circle btn-gradient animation mt-20" href="/about-us">Learn More</Link>
                            </div>
                        </div>
                        <div className="col-xl-6">
                            <div className="thumb-style-three">
                                <Image src={illustration7} alt="Image Not Found" />
                                <div className="circle-text" style={{ backgroundImage: 'url(/assets/img/shape/26.png)' }}>
                                    <div
                                        ref={circleTypeElm}
                                        className="circle-text-item"
                                        data-circle-text-options='{"radius": 81, "forceWidth": true, "forceHeight": true }'
                                    >
                                        .  Certified Company   .  IT Consulting Solution
                                    </div>
                                    <Link href="/about-us"><i className="fas fa-long-arrow-right" /></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default WhyChooseV2;