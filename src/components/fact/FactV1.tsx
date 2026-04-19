import FactV1Data from "@/assets/jsonData/fact/FactV1Data.json"
import SingleFactV1 from './SingleFactV1';

interface DataType {
    sectionClass?: string
}

const FactV1 = ({ sectionClass }: DataType) => {
    return (
        <>
            <div className={`fun-factor-area default-padding-bottom ${sectionClass ? sectionClass : ""}`}>
                <div className="container">
                    <div className="fun-fact-style-one-items text-center">
                        <div className="row">
                            {FactV1Data.map(fact =>
                                <div className="col-lg-3 col-md-6 funfact-style-one-item" key={fact.id}>
                                    <SingleFactV1 fact={fact} />
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default FactV1;