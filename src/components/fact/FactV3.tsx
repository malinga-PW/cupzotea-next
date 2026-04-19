import FactV3Data from "@/assets/jsonData/fact/FactV3Data.json"
import SingleFactV3 from "./SingleFactV3";

const FactV3 = () => {
    return (
        <>
            <div className="fun-fact-style-three-area text-light default-padding-bottom">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="fun-fact-style-three-items">
                                {FactV3Data.map(fact =>
                                    <SingleFactV3 fact={fact} key={fact.id} />
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default FactV3;