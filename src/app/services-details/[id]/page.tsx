import LayoutV5 from '@/components/layouts/LayoutV5';
import ServicesDetailsContent from '@/components/services/ServicesDetailsContent';
import ServicesV3Data from '@/assets/jsonData/services/ServicesV3Data.json'

export const metadata = {
    title: "Gixus - Business Consulting - Services Details"
};

interface Params {
    id: string;
}

interface PageProps {
    params: Promise<Params>;
}

const ServicesDetailsPage = async ({ params }: PageProps) => {

    const { id } = await params;
    const data = ServicesV3Data.find(service => service.id === parseInt(id))

    return (
        <>
            <LayoutV5>
                {data && <ServicesDetailsContent serviceInfo={data} />}
            </LayoutV5>
        </>
    );
};

export default ServicesDetailsPage;