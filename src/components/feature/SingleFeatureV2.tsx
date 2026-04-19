import Image from "next/image";
import Link from "next/link";

interface DataType {
    id?: number;
    title?: string;
    description?: string;
    image?: string;
    icon?: string;
}

const SingleFeatureV2 = ({ feature }: { feature: DataType }) => {
    const { image, icon, title, description, id } = feature

    return (
        <>
            <div className="feature-style-two">
                <div className="thumb">
                    <Image src={`/assets/img/features/${image}`} alt="Thumb" width={800} height={700} />
                    <div className="title">
                        <div className="top">
                            <Image src={`/assets/img/icon/${icon}`} alt="Icon Not Found" width={256} height={256} />
                            <h4><Link href={`/services-details/${id}`}>{title}</Link></h4>
                        </div>
                        <Link href={`/services-details/${id}`}><i className="fas fa-long-arrow-right" /></Link>
                    </div>
                    <div className="overlay text-center">
                        <div className="content">
                            <div className="icon">
                                <Image src={`/assets/img/icon/${icon}`} alt="Icon Not Found" width={256} height={256} />
                            </div>
                            <h4><Link href={`/services-details/${id}`}>{title}</Link></h4>
                            <p>{description}</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SingleFeatureV2;
