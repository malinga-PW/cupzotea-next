import Image from 'next/image';
import Link from 'next/link';

interface DataType {
    id?: number;
    thumb?: string;
    date?: string;
    tag?: string;
    title?: string;
    btnText?: string;
}

const SingleBlog2Column = ({ blog }: { blog: DataType }) => {
    const { id, thumb, date, tag, title, btnText } = blog

    return (
        <>
            <div className="home-blog-style-one-item">
                <div className="home-blog-thumb">
                    <Link href={`/blog-single-with-sidebar/${id}`}>
                        <Image src={`/assets/img/blog/${thumb}`} width={800} height={600} alt="Thumb" />
                    </Link>
                    <ul className="home-blog-meta">
                        <li>
                            <Link href="#" scroll={false}>{tag}</Link>
                        </li>
                        <li>{date}</li>
                    </ul>
                </div>
                <div className="content">
                    <div className="info">
                        <h2 className="blog-title">
                            <Link href={`/blog-single-with-sidebar/${id}`}>{title}</Link>
                        </h2>
                        <Link href={`/blog-single-with-sidebar/${id}`} className="btn-read-more">{btnText} <i className="fas fa-long-arrow-right" /></Link>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SingleBlog2Column;