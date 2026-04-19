import Image from "next/image";
import quote from "@/assets/img/quote.png";

interface DataType {
    id?: number;
    image?: string;
    title?: string;
    content?: string;
    name?: string;
    designation?: string;
}

const SingleTestimonialV3 = ({ testimonial }: { testimonial: DataType }) => {
    const { image, title, content, name, designation } = testimonial;

    return (
        <>
            <div className="testimonial-style-three">
                <div className="thumb">
                    <Image src={`/assets/img/team/${image}`} alt="Image Not Found" width={700} height={700} />
                    <div className="icon">
                        <Image src={quote} alt="Quote Icon" width={50} height={50} />
                    </div>
                </div>
                <div className="item">
                    <div className="content">
                        <div className="top">
                            <h2>{title}</h2>
                        </div>
                        <p>“{content}”</p>
                    </div>
                    <div className="provider">
                        <div className="info">
                            <h4>{name}</h4>
                            <span>{designation}</span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SingleTestimonialV3;
