import Image from "next/image";
import Link from "next/link";

interface DataType {
    title?: string;
    category?: string;
    description?: string;
    image?: string;
    id?: number;
}

const SingleGalleryV1 = ({ gallery }: { gallery: DataType }) => {
    const { title, category, description, image, id } = gallery;

    return (
        <>
            <div className="gallery-style-one">
                <Image src={`/assets/img/projects/${image}`} alt="Image Not Found" width={800} height={600} />
                <div className="overlay">
                    <div className="info">
                        <h4><Link href={`/project-details/${id}`}>{title}</Link></h4>
                        <span>{category}</span>
                        <p>{description}</p>
                    </div>
                    <Link href={`/project-details/${id}`}>Explore <i className="fas fa-long-arrow-right" /></Link>
                </div>
            </div>
        </>
    );
};

export default SingleGalleryV1;
