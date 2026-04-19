import BlogSingleContent from '@/components/blog/BlogSingleContent';
import BlogData from '@/assets/jsonData/blog/BlogData.json';
import BodyClassV2 from '@/components/classes/BodyClassV2';
import LayoutV5 from '@/components/layouts/LayoutV5';

export const metadata = {
    title: "Gixus - Business Consulting - Blog Single"
};

interface Params {
    id: string;
}

interface PageProps {
    params: Promise<Params>;
}

const BlogSingle = async ({ params }: PageProps) => {

    const { id } = await params;
    const data = BlogData.find(blog => blog.id === parseInt(id))

    return (
        <>
            <LayoutV5 breadCrumb="blog-single" title="Partiality indulgence dispatched to of celebrated.">
                {data && <BlogSingleContent blogInfo={data} totalBlogs={BlogData.length} />}
                <BodyClassV2 />
            </LayoutV5>
        </>
    );
};

export default BlogSingle;