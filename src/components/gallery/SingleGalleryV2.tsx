import Image from "next/image";
import Link from "next/link";

interface DataType {
    id?: number;
    title?: string;
    category?: string;
    description?: string;
    image?: string;
}

const SingleGalleryV2 = ({ gallery }: { gallery: DataType }) => {
    const { id, title, category, description, image } = gallery

    return (
        <>
            <div className="gallery-style-two">
                <Image src={`/assets/img/projects/${image}`} alt="Image Not Found" width={800} height={800} />
                <div className="overlay text-light">
                    <div className="info">
                        <span>{category}</span>
                        <h4><Link href={`/project-details/${id}`}>{title}</Link></h4>
                        <p>{description}</p>
                    </div>
                    <Link href={`/project-details/${id}`}>Know More <i className="fas fa-long-arrow-right" /></Link>
                </div>
            </div>
        </>
    );
};

export default SingleGalleryV2;
