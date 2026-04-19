import Image from "next/image";
import Link from "next/link";

interface DataType {
    icon?: string;
    title: string;
    activeClass?: string
}

const SingleServicesV4 = ({ service }: { service: DataType }) => {
    const { icon, title, activeClass } = service

    return (
        <div className={`services-style-four-item ${activeClass}`}>
            <div className="icon">
                <Image
                    src={`/assets/img/icon/${icon}`}
                    alt={title}
                    width={512}
                    height={512}
                />
            </div>
            <div className="info">
                <h4><Link href="/services-2">{title}</Link></h4>
            </div>
            <div className="button">
                <Link href="/services-2"><i className="fas fa-long-arrow-right" /></Link>
            </div>
        </div>
    );
};

export default SingleServicesV4;
