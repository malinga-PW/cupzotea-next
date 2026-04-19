import LayoutV5 from '@/components/layouts/LayoutV5';
import TeamV1 from '@/components/team/TeamV1';

export const metadata = {
    title: "Gixus - Business Consulting - Team"
};

const TeamPage = () => {
    return (
        <>
            <LayoutV5>
                <TeamV1 />
            </LayoutV5>
        </>
    );
};

export default TeamPage;