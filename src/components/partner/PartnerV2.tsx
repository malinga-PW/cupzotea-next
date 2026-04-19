import Animate from "../animation/Animate";
import PortfolioV2Data from "@/assets/jsonData/partner/PartnerV2Data.json";
import Image from "next/image";

const PartnerV2 = () => {
    return (
        <>
            <div className="partner-style-two-area default-padding bg-dark text-light">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 partner-style-one">
                            <div className="partner-style-one-item bg-theme text-light" style={{ backgroundImage: 'url(/assets/img/shape/22.png)' }}>
                                <h4 className="sub-title">Our Partners</h4>
                                <h2 className="title">Worked with <br /> Largest Brands</h2>
                            </div>
                        </div>
                        {PortfolioV2Data.map(partner =>
                            <Animate className='animate__animated animate__fadeInLeft' delay={partner.delay} key={partner.id}>
                                <div className="col-lg-3 col-md-6 partner-style-one">
                                    <div className="partner-style-one-item">
                                        <Image src={`/assets/img/brand/${partner.thumb}`} alt="Image Not Found" width={512} height={512} />
                                    </div>
                                </div>
                            </Animate>
                        )}
                    </div>
                </div>
            </div>
        </>
    );
};

export default PartnerV2;