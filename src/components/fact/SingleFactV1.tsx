import Counter from '../counter/Counter';

interface DataType {
    id?: number;
    count: number;
    suffix?: string;
    label?: string;
}

const SingleFactV1 = ({ fact }: { fact: DataType }) => {
    const { count, suffix, label } = fact;

    return (
        <>
            <div className="fun-fact">
                <div className="counter">
                    <div className="timer">
                        <Counter end={count} />
                    </div>
                    <div className="operator">{suffix}</div>
                </div>
                <span className="medium">{label}</span>
            </div>
        </>
    );
};

export default SingleFactV1;
