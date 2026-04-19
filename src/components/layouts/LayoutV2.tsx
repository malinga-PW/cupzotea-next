import HeaderV2 from '../header/HeaderV2';
import FooterV2 from '../footer/FooterV2';

interface LayoutProps {
    children?: React.ReactNode;
}

const LayoutV2 = ({ children }: LayoutProps) => {
    return (
        <>
            <HeaderV2 />
            {children}
            <FooterV2 />
        </>
    );
};

export default LayoutV2;