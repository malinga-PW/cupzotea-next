import Image from "next/image";

interface DataType {
    id: number;
    thumb: string;
    icon: string;
    title: string;
    description: string;
    name: string;
    designation: string;
}

const SingleTestimonialV5 = ({ testimonial }: { testimonial: DataType }) => {
    const { thumb, icon, title, description, name, designation } = testimonial;

    return (
        <div className="swiper-slide">
            <div className="testimonial-style-three">
                <div className="thumb">
                    <Image src={`/assets/img/team/${thumb}`} alt={name} width={800} height={800} />
                    <div className="icon">
                        <Image src={`/assets/img/${icon}`} alt="Quote Icon" width={143} height={100} />
                    </div>
                </div>
                <div className="item">
                    <div className="content">
                        <div className="top">
                            <h2>{title}</h2>
                        </div>
                        <p>“{description}”</p>
                    </div>
                    <div className="provider">
                        <div className="info">
                            <h4>{name}</h4>
                            <span>{designation}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleTestimonialV5;
