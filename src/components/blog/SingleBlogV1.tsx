import Image from 'next/image';
import Link from 'next/link';
import Animate from '../animation/Animate';

interface DataType {
    id?: number;
    thumb?: string;
    date?: string;
    tag?: string;
    title?: string;
    btnText?: string;
    animationDelay?: string
}

const SingleBlogV1 = ({ blog }: { blog: DataType }) => {
    const { id, thumb, date, tag, title, btnText, animationDelay } = blog

    return (
        <>
            <Animate className="animate__animated animate__fadeInUp" delay={animationDelay}>
                <div className="home-blog-style-one-item" >
                    <div className="home-blog-thumb">
                        <Link href={`/blog-single-with-sidebar/${id}`}>
                            <Image src={`/assets/img/blog/${thumb}`} width={800} height={600} alt="Thumb" />
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
                            <h4 className="blog-title">
                                <Link href={`/blog-single-with-sidebar/${id}`}>{title}</Link>
                            </h4>
                            <Link href={`/blog-single-with-sidebar/${id}`} className="btn-read-more">{btnText} <i className="fas fa-long-arrow-right" /></Link>
                        </div>
                    </div>
                </div>
            </Animate>
        </>
    );
};

export default SingleBlogV1;