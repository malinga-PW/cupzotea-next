interface DataType {
    count?: string;
    title?: string;
    description?: string;
}

const SingleProcessV1 = ({ process }: { process: DataType }) => {
    const { count, title, description } = process

    return (
        <>
            <div className="process-style-one-item">
                <span>{count}</span>
                <h4>{title}</h4>
                <p>{description}</p>
            </div>
        </>
    );
};

export default SingleProcessV1;
