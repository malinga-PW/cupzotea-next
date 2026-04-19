import Image from "next/image";
import Animate from "../animation/Animate";

interface DataType {
    id: number;
    icon: string;
    title: string;
    description: string;
    list: string[];
    delay: string;
}

const SingleFeatureV3 = ({ feature }: { feature: DataType }) => {
    const { icon, title, description, delay, list } = feature

    return (
        <>

            <div className="col-lg-4 col-md-6 mb-30">
                <Animate className="animate__animated animate__fadeInUp" delay={delay}>
                    <div className="feature-style-three-item">
                        <div className="top">
                            <Image src={`/assets/img/icon/${icon}`} alt="Image Not Found" width={30} height={30} />
                            <h4>{title}</h4>
                        </div>
                        <p>
                            {description}
                        </p>
                        <ul>
                            {list.map((item, index) => (
                                <li key={index}>
                                    {item} <i className="fas fa-angle-right" />
                                </li>
                            ))}
                        </ul>
                    </div>
                </Animate>

            </div>
        </>
    );
};

export default SingleFeatureV3;