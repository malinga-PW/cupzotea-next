import Image from 'next/image';
import Link from 'next/link';

interface DataType {
    id?: number;
    icon?: string;
    titleFirst?: string;
    titleLast?: string;
    text?: string;
    counts?: string;
}

const SingleServicesV1 = ({ service }: { service: DataType }) => {
    const { id, icon, titleFirst, titleLast, text, counts } = service

    return (
        <>
            <div className="icon">
                <Image src={`/assets/img/icon/${icon}`} alt="Image Not Found" width={66} height={75} />
            </div>
            <div className="content">
                <h4><Link href={`/services-details/${id}`}>{titleFirst} <br /> {titleLast} </Link></h4>
                <p>{text}</p>
            </div>
            <div className="button">
                <Link className="btn" href={`/services-details/${id}`}><i className="fas fa-arrow-right" /></Link>
            </div>
            <span>{counts}</span>
        </>
    );
};

export default SingleServicesV1;