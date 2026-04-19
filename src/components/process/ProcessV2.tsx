import ProcessV2Data from "@/assets/jsonData/process/ProcessV2Data.json"
import SingleProcessV2 from "./SingleProcessV2";

interface DataType {
    sectionClass?: string
}

const ProcessV2 = ({ sectionClass }: DataType) => {
    return (
        <>
            <div className="process-style-two items default-padding bg-dark text-light">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="site-heading">
                                <h4 className="sub-title">Our Process</h4>
                                <h2 className="title">Building great future Together, Be with us</h2>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className={`process-style-two-ites ${sectionClass ? sectionClass : ""}`}>
                        <div className="row">
                            {ProcessV2Data.map(process =>
                                <SingleProcessV2 process={process} key={process.id} />
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ProcessV2;