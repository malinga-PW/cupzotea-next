import Animate from "../animation/Animate";

interface DataType {
    id: number;
    number: string;
    title: string;
    description: string;
    delay: string;
}

const SingleProcessV4 = ({ process }: { process: DataType }) => {
    const { number, description, title, delay } = process

    return (
        <>
            <Animate className="animate__animated animate__fadeInRight" delay={delay}>
                <div className="process-style-one-item">
                    <span>{number}</span>
                    <h4>{title}</h4>
                    <p>
                        {description}
                    </p>
                </div>
            </Animate>

        </>
    );
};

export default SingleProcessV4;