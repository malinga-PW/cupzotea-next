import Image from 'next/image';
import Link from 'next/link';

interface DataType {
    id?: number;
    title?: string;
    description?: string;
    icon?: string;
}

const SingleServicesV2 = ({ service }: { service: DataType }) => {
    const { id, title, description, icon } = service;

    return (
        <>
            <div className="service-style-two">
                <Image src={`/assets/img/icon/${icon}`} alt="Image Not Found" width={295} height={275} />
                <h4><Link href={`/services-details/${id}`}>{title}</Link></h4>
                <p>{description}</p>
            </div>
        </>
    );
};

export default SingleServicesV2;
