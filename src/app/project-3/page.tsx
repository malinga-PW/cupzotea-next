import AboutV5 from '@/components/about/AboutV5';
import FactV1 from '@/components/fact/FactV1';
import GalleryV2 from '@/components/gallery/GalleryV2';
import LayoutV5 from '@/components/layouts/LayoutV5';

export const metadata = {
    title: "Gixus - Business Consulting - Project 3"
};

const Project3Page = () => {
    return (
        <>
            <LayoutV5>
                <GalleryV2 sectionClass="default-padding" />
                <FactV1 />
                <AboutV5 sectionClass="bg-gray"/>
            </LayoutV5>
        </>
    );
};

export default Project3Page;