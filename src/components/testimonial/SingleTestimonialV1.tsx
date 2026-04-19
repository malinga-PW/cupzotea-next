interface DataType {
    id?: number;
    title?: string;
    quote?: string;
    name?: string;
    designation?: string;
}

const SingleTestimonialV1 = ({ testimonial }: { testimonial: DataType }) => {
    const { title, quote, name, designation } = testimonial;

    return (
        <div className="testimonial-style-one">
            <div className="item">
                <div className="content">
                    <div className="top">
                        <h2>{title}</h2>
                    </div>
                    <p>“{quote}”</p>
                </div>
                <div className="provider">
                    <div className="info">
                        <h4>{name}</h4>
                        <span>{designation}</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleTestimonialV1;
