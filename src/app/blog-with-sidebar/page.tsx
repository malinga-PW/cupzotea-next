import BlogWithSidebarContent from '@/components/blog/BlogWithSidebarContent';
import BodyClassV2 from '@/components/classes/BodyClassV2';
import LayoutV5 from '@/components/layouts/LayoutV5';

export const metadata = {
    title: "Gixus - Business Consulting - Blog With Sidebar"
};

const BlogWithSidebarPage = () => {
    return (
        <>
            <LayoutV5 breadCrumb="blog-with-sidebar" title="Latest Blog">
                <BlogWithSidebarContent />
                <BodyClassV2 />
            </LayoutV5>
        </>
    );
};

export default BlogWithSidebarPage;