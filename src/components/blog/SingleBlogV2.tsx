import Image from 'next/image';
import Link from 'next/link';
import Animate from '../animation/Animate';

interface DataType {
    id?: number;
    date?: string;
    tag?: string;
    title?: string;
    btnText?: string;
    thumb?: string;
    animationDelay?: string;
}

const SingleBlogV2 = ({ blog }: { blog: DataType }) => {
    const { id, thumb, date, tag, title, btnText, animationDelay } = blog

    return (
        <>
            <Animate className="animate__animated animate__fadeInUp" delay={animationDelay}>
                <div className="home-blog-style-one-item" >
                    <div className="home-blog-thumb">
                        <Link href={`/blog-single-with-sidebar/${id}`}>
                            <Image src={`/assets/img/blog/${thumb}`} alt="Image not Found" width={800} height={600} />
                        </Link>
                        <ul className="home-blog-meta">
                            <li>
                                <Link scroll={false} href="#">{tag}</Link>
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
            </Animate>
        </>
    );
};

export default SingleBlogV2;