import Image from 'next/image';
import Link from 'next/link';

interface DataType {
    id?: number;
    memberThumb?: string;
    designation?: string;
    name?: string;
}

const SingleTeamV1 = ({ team }: { team: DataType }) => {
    const { id, memberThumb, designation, name } = team

    return (
        <>
            <div className="team-style-one-item">
                <div className="thumb">
                    <Image src={`/assets/img/team/${memberThumb}`} width={800} height={900} alt="Image Not Found" />
                    <div className="social-overlay">
                        <ul>
                            <li>
                                <Link href="https://www.linkedin.com/" target="_blank">
                                    <i className="fab fa-linkedin-in" />
                                </Link>
                            </li>
                            <li>
                                <Link href="https://dribbble.com/" target="_blank">
                                    <i className="fab fa-dribbble" />
                                </Link>
                            </li>
                            <li>
                                <Link href="https://www.facebook.com/" target="_blank">
                                    <i className="fab fa-facebook-f" />
                                </Link>
                            </li>
                        </ul>
                        <div className="icon">
                            <i className="fas fa-plus" />
                        </div>
                    </div>
                </div>
                <div className="info">
                    <span>{designation}</span>
                    <h4><Link href={`/team-details/${id}`}>{name}</Link></h4>
                </div>
            </div>
        </>
    );
};

export default SingleTeamV1;