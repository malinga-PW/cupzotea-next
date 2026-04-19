import Link from "next/link";
import robot from "@/assets/img/icon/robot.png"
import Image from "next/image";
import Animate from "../animation/Animate";

const ThemeGixus = () => {
    return (
        <>
            <div className="try-gixus-area default-padding text-light text-center bg-cover" style={{ backgroundImage: 'url(/assets/img/shape/9.jpg)' }}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="try-gixus">
                                <div className="text">
                                    <Animate className="animate__animated animate__fadeInUp">
                                        <h2>Try Gixus Now</h2>
                                    </Animate>
                                </div>
                                <div className="icon">
                                    <Link href="#">
                                        <Image src={robot} alt="Image Not Found" />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ThemeGixus;