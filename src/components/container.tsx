type Props = {
    children?: React.ReactNode;
};

const Container = ({ children }: Props) => {
    return <div className="container mx-auto sm:px-4 py-8">{children}</div>;
};

export default Container;
