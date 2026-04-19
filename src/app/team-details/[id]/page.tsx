
import TeamData from '@/assets/jsonData/team/TeamData.json'
import SingleTeamMemberInfo from '@/components/team/SingleTeamMemberInfo';
import LayoutV5 from '@/components/layouts/LayoutV5';

export const metadata = {
    title: "Gixus - Business Consulting - Team Details"
};

interface Params {
    id: string;
}

interface PageProps {
    params: Promise<Params>;
}


const TeamDetails = async ({ params }: PageProps) => {

    const { id } = await params;
    const data = TeamData.find(team => team.id === parseInt(id))

    return (
        <>
            <LayoutV5>
                {data && <SingleTeamMemberInfo teamInfo={data} />}
            </LayoutV5>
        </>
    );
};

export default TeamDetails;