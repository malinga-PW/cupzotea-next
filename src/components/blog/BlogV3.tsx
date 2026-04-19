import Blog3Data from "@/assets/jsonData/blog/Blog3Data.json"
import SingleBlogV1 from "./SingleBlogV1";
import SplitAnimation from "../animation/SplitAnimation";

const BlogV3 = () => {
    return (
        <>
            <div className="blog-area home-blog default-padding text-light bottom-less">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-6 offset-xl-3 col-lg-8 offset-lg-2">
                            <div className="site-heading text-center">
                                <SplitAnimation>
                                    <h2 className="title split-text">Valuable insights to change your startup idea</h2>
                                </SplitAnimation>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="row">
                        {Blog3Data.map(blog =>
                            <div className="col-xl-4 col-md-6 col-lg-6 mb-30" key={blog.id}>
                                <SingleBlogV1 blog={blog} />
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </>
    );
};

export default BlogV3;