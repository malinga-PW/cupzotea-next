import Image from 'next/image';
import Link from 'next/link';

interface DataType {
    id?: number;
    memberThumb2?: string;
    designation?: string;
    name?: string
}

const SingleTeamV2 = ({ team }: { team: DataType }) => {
    const { id, memberThumb2, name, designation } = team

    return (
        <>
            <div className="team-style-two-item" style={{ backgroundImage: 'url(/assets/img/shape/15.webp)' }}>
                <div className="thumb">
                    <Image src={`/assets/img/team/${memberThumb2}`} alt="Image Not Found" width={800} height={800} />
                    <Link href="#" scroll={false}><i className="fas fa-envelope" /></Link>
                </div>
                <div className="info">
                    <h4><Link href={`/team-details/${id}`}>{name}</Link></h4>
                    <span>{designation}</span>
                </div>
            </div>
        </>
    );
};

export default SingleTeamV2;