import Animate from "../animation/Animate";
import Counter from "../counter/Counter";

interface DataType {
    id: number;
    bgImage: string;
    end: number;
    operator: string;
    subtitle: string;
    titleFirst: string;
    titleLast: string;
    delay: string;
}

const SingleFactV3 = ({ fact }: { fact: DataType }) => {
    const { bgImage, end, operator, subtitle, titleFirst, delay, titleLast } = fact;

    return (
        <>
            <Animate className="animate__animated animate__fadeInRight" delay={delay}>
                <div className="fun-cat-style-three-item" style={{ backgroundImage: `url(/assets/img/shape/${bgImage})` }}>
                    <div className="fun-fact">
                        <div className="counter">
                            <div className="timer"><Counter end={end} /></div>
                            <div className="operator">{operator}</div>
                        </div>
                    </div>
                    <h5>{subtitle}</h5>
                    <h4>{titleFirst}<br /> {titleLast}</h4>
                </div>
            </Animate>
        </>
    );
};

export default SingleFactV3;