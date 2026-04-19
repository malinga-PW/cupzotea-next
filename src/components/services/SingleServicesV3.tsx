import Image from "next/image";
import Link from "next/link";

interface DataType {
    id?: number;
    title?: string;
    description?: string;
    image?: string;
    tags: string[];
}

const SingleServicesV3 = ({ service }: { service: DataType }) => {
    const { id, image, title, description, tags } = service

    return (
        <div className="services-style-three-item">
            <div className="item-title">
                <Image src={`/assets/img/icon/${image}`} alt="Image Not Found" width={256} height={256} />
                <h4><Link href={`/services-details/${id}`}>{title}</Link></h4>
                <p>{description}</p>
                <div className="d-flex mt-30">
                    <Link href={`/services-details/${id}`}><i className="fas fa-long-arrow-right" /></Link>
                    <div className="service-tags">
                        {tags.map((tag, index) => (
                            <Link key={index} href="#" scroll={false}>{tag}</Link>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleServicesV3;
