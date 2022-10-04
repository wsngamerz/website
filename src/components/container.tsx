type Props = {
    children?: React.ReactNode;
};

const Container = ({ children }: Props) => {
    return <div className="container mx-auto sm:px-4 my-4">{children}</div>;
};

export default Container;
