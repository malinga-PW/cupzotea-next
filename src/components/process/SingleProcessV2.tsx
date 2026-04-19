interface DataType {
    id?: string;
    title?: string;
    description?: string;
}

const SingleProcessV2 = ({ process }: { process: DataType }) => {
    const { id, title, description } = process;

    return (
        <>
            <div className="col-lg-4 col-md-6 process-style-two-item">
                <div className="item">
                    <span>{id}</span>
                    <h4>{title}</h4>
                    <p>{description}</p>
                </div>
            </div>
        </>
    );
};

export default SingleProcessV2;
