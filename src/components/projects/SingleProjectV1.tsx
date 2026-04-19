import Image from "next/image";
import Link from "next/link";

interface DataType {
    id?: number;
    accordionId?: string;
    title?: string;
    subtitle?: string;
    collapseId?: string;
    expanded?: boolean;
    image?: string;
}

const SingleProjectV1 = ({ project }: { project: DataType }) => {
    const { id, accordionId, title, subtitle, collapseId, expanded, image } = project;

    return (
        <>
            <div className="accordion-item">
                <h2 className="accordion-header" id={accordionId}>
                    <button
                        className={`accordion-button ${expanded ? "" : "collapsed"}`}
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target={`#${collapseId}`}
                        aria-expanded={expanded}
                        aria-controls={collapseId}
                    >
                        <span>{title}</span>
                        <b>{subtitle}</b>
                    </button>
                </h2>
                <div
                    id={collapseId}
                    className={`accordion-collapse collapse ${expanded ? "show" : ""}`}
                    aria-labelledby={accordionId}
                    data-bs-parent="#projectAccordion"
                >
                    <div className="accordion-body">
                        <div className="portfolio-style-one-thumb">
                            <Image src={`/assets/img/portfolio/${image}`} alt="Image Not Found" width={582} height={320} />
                            <Link href={`/project-details/${id}`}>
                                <i className="fas fa-link" />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SingleProjectV1;
