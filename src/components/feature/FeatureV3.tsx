import FeatureV3Data from "@/assets/jsonData/feature/FeatureV3Data.json";
import SingleFeatureV3 from "./SingleFeatureV3";
import SplitAnimation from "../animation/SplitAnimation";

const FeatureV3 = () => {
    return (
        <>
            <div className="feature-style-three-area text-light default-padding bottom-less">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-6 offset-xl-3 col-lg-8 offset-lg-2">
                            <div className="site-heading text-center">
                                <SplitAnimation>
                                    <h2 className="title">Amazing feature that you will be able to use now.</h2>
                                </SplitAnimation>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="container">
                    <div className="row">
                        {FeatureV3Data.map(feature =>
                            <SingleFeatureV3 feature={feature} key={feature.id} />
                        )}
                    </div>
                </div>
            </div>
        </>
    );
};

export default FeatureV3;