import ChooseProgress1Data from '@/assets/jsonData/choose/ChooseProgress1Data.json'
import SingleChooseProgressV1 from '@/components/whyChoose/SingleChooseProgressV1';
import ProcessV1 from '../process/ProcessV1';

const WhyChooseV1 = () => {
    return (
        <>
            <div className="choose-us-style-one-area overflow-hidden default-padding-top bg-gray">
                <div className="container">
                    <div className="heading-left">
                        <div className="row">
                            <div className="col-lg-5 offset-lg-1">
                                <div className="experience-style-one">
                                    <h2><strong>26</strong> Years of Experience</h2>
                                </div>
                            </div>
                            <div className="col-lg-5 offset-lg-1">
                                <div className="circle-progress">
                                    {ChooseProgress1Data.map(progress =>
                                        <SingleChooseProgressV1 progress={progress} key={progress.id} />
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container container-stage">
                    <div className="choose-us-one-thumb">
                        <div className="content">
                            <div className="left-info">
                                <h2 className="title">Building great future Together, Be with us </h2>
                            </div>
                            <ProcessV1 />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default WhyChooseV1;