import ServicesV4Data from "@/assets/jsonData/services/ServicesV4Data.json"
import SingleServicesV4 from './SingleServicesV4';

const ServicesV4 = () => {
    return (
        <>
            <div className="services-style-four-area default-padding-bottom">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="services-style-four-items">
                                {ServicesV4Data.map(service =>
                                    <SingleServicesV4 service={service} key={service.id} />
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ServicesV4;