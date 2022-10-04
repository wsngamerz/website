import Footer from "./footer";
import Meta from "./meta";
import Navigation from "./navigation";

type Props = {
    preview?: boolean;
    children: React.ReactNode;
};

const Layout = ({ preview, children }: Props) => {
    return (
        <>
            <Meta />
            <Navigation />
            <div className="min-h-screen">
                <main>{children}</main>
            </div>
            <Footer />
        </>
    );
};

export default Layout;
