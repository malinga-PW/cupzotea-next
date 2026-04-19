import Image from 'next/image';
import Link from 'next/link';

interface DataType {
    id?: number;
    title: string;
    description?: string;
    image?: string;
    features: string[];
}

const SingleServicesV5 = ({ service }: { service: DataType }) => {
    const { id, title, description, image, features } = service

    return (
        <div className="services-style-five-item">
            <div className="icon">
                <Image src={`/assets/img/icon/${image}`} alt={title} width={225} height={250} />
            </div>
            <h3><Link href={`/services-details/${id}`}>{title}</Link></h3>
            <p>{description}</p>
            <ul className="list-style-four">
                {features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                ))}
            </ul>
        </div>
    );
};

export default SingleServicesV5;