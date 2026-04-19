import ProcessV4Data from "@/assets/jsonData/process/ProcessV4Data.json"
import SingleProcessV4 from "./SingleProcessV4";
import SplitAnimation from "../animation/SplitAnimation";

const ProcessV4 = () => {
    return (
        <>
            <div className="process-style-four-area text-light relative">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="choose-us-one-thumb">
                                <div className="content">
                                    <div className="left-info">
                                        <SplitAnimation>
                                            <h2 className="title">How does it work?</h2>
                                        </SplitAnimation>
                                    </div>
                                    <div className="process-style-one">
                                        {ProcessV4Data.map(process =>
                                            <SingleProcessV4 process={process} key={process.id} />
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ProcessV4;