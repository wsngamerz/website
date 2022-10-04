import Head from "next/head";

import Container from "../components/container";
import Header from "../components/header";
import Layout from "../components/layout";
import { createApi } from "../lib/api";
import { ProjectsPage } from "../schema";

type Props = {
    projects: ProjectsPage;
};

export default function Blog({ projects }: Props) {
    return (
        <>
            <Layout>
                <Head>
                    <title>{projects.title}</title>
                </Head>
                <Header title={projects.title} />
                <Container></Container>
            </Layout>
        </>
    );
}

export const getStaticProps = async (context) => {
    const api = createApi(context.previewData);
    const projects = await api.getPage("Projects");

    return {
        props: { projects },
    };
};
