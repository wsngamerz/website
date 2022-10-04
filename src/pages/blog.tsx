import Head from "next/head";

import Container from "../components/container";
import Header from "../components/header";
import Layout from "../components/layout";
import { createApi } from "../lib/api";
import { BlogPage } from "../schema";

type Props = {
    blog: BlogPage;
};

export default function Blog({ blog }: Props) {
    return (
        <>
            <Layout>
                <Head>
                    <title>{blog.title}</title>
                </Head>
                <Header title={blog.title} />
                <Container></Container>
            </Layout>
        </>
    );
}

export const getStaticProps = async (context) => {
    const api = createApi(context.previewData);
    const blog = await api.getPage("Blog");

    return {
        props: { blog },
    };
};
