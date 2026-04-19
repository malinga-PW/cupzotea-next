import Blog3ColumnContent from '@/components/blog/Blog3ColumnContent';
import BodyClassV2 from '@/components/classes/BodyClassV2';
import LayoutV5 from '@/components/layouts/LayoutV5';

export const metadata = {
    title: "Gixus - Business Consulting - Blog 3 Column"
};

const Blog3Column = () => {
    return (
        <>
            <LayoutV5 breadCrumb="blog-3-column" title="Latest Blog">
                <Blog3ColumnContent />
                <BodyClassV2 />
            </LayoutV5>
        </>
    );
};

export default Blog3Column;