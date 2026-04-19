import Image from "next/image";

interface DataType {
    id?: number;
    text?: string;
    thumb?: string;
    name: string;
    designation?: string;
}

const SingleTestimonialV2 = ({ testimonial }: { testimonial: DataType }) => {
    const { text, thumb, name, designation } = testimonial;

    return (
        <>
            <div className="testimonial-style-two">
                <div className="item">
                    <div className="text-info">
                        <p>“{text}”</p>
                    </div>
                    <div className="content">
                        <div className="thumb">
                            <Image
                                src={`/assets/img/team/${thumb}`}
                                alt={name}
                                width={800}
                                height={800}
                            />
                        </div>
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

export default SingleTestimonialV2;
