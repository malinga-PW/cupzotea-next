import Link from "next/link";
import Image from "next/image";
import Animate from "../animation/Animate";

interface DataType {
    id?: number;
    category?: string;
    year?: number;
    title?: string;
    image?: string;
}

const SinglePortfolioV3 = ({ portfolio }: { portfolio: DataType }) => {
    const { category, year, title, image, id } = portfolio;

    return (
        <>
            <Animate className="animate__animated animate__fadeInUp">
                <div className="portfolio-style-one">
                    <Link href={`/project-details/${id}`} className="cursor-target">
                        <div className="thumb-zoom">
                            <Image className="img-reveal" src={`/assets/img/portfolio/${image}`} alt="Image Not Found" width={800} height={1088} />
                        </div>
                        <div className="pf-item-info">
                            <div className="content">
                                <div className="pf-tags">
                                    <span>{category}</span>
                                    <span>{year}</span>
                                </div>
                                <h2>{title}</h2>
                            </div>
                        </div>
                    </Link>
                </div>
            </Animate>
        </>
    );
};

export default SinglePortfolioV3;
