import Link from "next/link";

interface DataType {
    id?: number;
    bgImage?: string;
    title?: string;
    headline?: string;
    buttonText?: string;
}

const SingleBannerV2 = ({ banner }: { banner: DataType }) => {
    const { bgImage, title, headline, buttonText } = banner;

    return (
        <>
            <div className="banner-thumb bg-cover shadow dark" style={{ background: `url(/assets/img/banner/${bgImage})` }} />
            <div className="container">
                <div className="row align-center">
                    <div className="col-xl-7 offset-xl-5 col-lg-10 offset-lg-1">
                        <div className="content">
                            <h4>{title}</h4>
                            <h2>
                                <strong>{headline?.split(" ").slice(0, 2).join(" ")}</strong>{" "}
                                {headline?.split(" ").slice(2).join(" ")}
                            </h2>
                            <div className="button">
                                <Link className="btn circle btn-gradient btn-md radius animation" href="/contact-us">
                                    {buttonText}
                                </Link>
                            </div>
                            <div className="shape-circle" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="banner-angle-shape">
                <div className="shape-item" style={{ background: "url(/assets/img/shape/2.png)" }} />
            </div>
        </>
    );
};

export default SingleBannerV2;
