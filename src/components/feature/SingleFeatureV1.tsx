import Image from "next/image";

interface DataType {
    id?: number;
    icon?: string;
    title?: string;
    description?: string;
}

const SingleFeatureV1 = ({ feature }: { feature: DataType }) => {
    const { icon, title, description } = feature;

    return (
        <div className="feature-style-one-item">
            <div className="icon">
                <Image src={`/assets/img/icon/${icon}`} alt={title || "Image Not Found"} width={68} height={60} />
            </div>
            <div className="info">
                <h4>{title}</h4>
                <p>{description}</p>
            </div>
        </div>
    );
};

export default SingleFeatureV1;
