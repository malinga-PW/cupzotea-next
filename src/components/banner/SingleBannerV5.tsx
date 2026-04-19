import Image from "next/image";
import illustration4 from "@/assets/img/illustration/4.png";
import Link from "next/link";

interface DataType {
    id?: number;
    bgImage?: string;
    title?: string;
    description?: string;
    buttonText?: string;
    illustration?: string;
}

const SingleBannerV5 = ({ banner }: { banner: DataType }) => {
    const { bgImage, title, description, buttonText, illustration } = banner;

    return (
        <>
            <div className="banner-thumb bg-cover shadow dark-hard" style={{ backgroundImage: `url(/assets/img/banner/${bgImage})` }} />
            <div className="container">
                <div className="row align-center">
                    <div className="col-xl-7 col-lg-9 col-md-10">
                        <div className="content">
                            <h2>{title}</h2>
                            <p>{description}</p>
                            <div className="button">
                                <Link className="btn btn-theme btn-md animation" href="/contact-us">
                                    {buttonText} <i className="fas fa-long-arrow-right" />
                                </Link>
                            </div>
                            <div className="shape-circle" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="fixed-item">
                <Image src={`/assets/img/illustration/${illustration}`} alt="Illustration" width={500} height={300} />
            </div>
            <div className="logitic-goods">
                <Image src={illustration4} alt="Illustration" width={500} height={300} />
            </div>
            <div className="banner-fixed-bg" style={{ backgroundImage: 'url(/assets/img/shape/10.png)' }} />
        </>
    );
};

export default SingleBannerV5;
