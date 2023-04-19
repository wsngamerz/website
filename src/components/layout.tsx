import { cn } from "../lib/utils";

import Footer from "./footer";
import Meta from "./meta";
import Navigation from "./navigation";

type Props = {
    preview?: boolean;
    children: React.ReactNode;
    bgc?: string;
};

const Layout = ({ preview, children, bgc }: Props) => {
    return (
        <>
            <Meta />
            <Navigation />
            <div className={cn("min-h-screen", bgc !== undefined && bgc)}>
                <main>{children}</main>
            </div>
            <Footer />
        </>
    );
};

export default Layout;
