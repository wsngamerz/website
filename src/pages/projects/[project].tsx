import { GetStaticPropsContext } from "next";
import { useRouter } from "next/router";
import ErrorPage from "next/error";
import Head from "next/head";

import Container from "../../components/container";
import Header from "../../components/header";
import Layout from "../../components/layout";
import RichTextStyled from "../../components/rich-text";

import { createApi } from "../../lib/api";

import type { Page } from "@alinea/content";

type Props = {
    project: Page.Project;
    preview?: boolean;
};

export default function Post({ project, preview }: Props) {
    const router = useRouter();
    if (!router.isFallback && !project?.path) {
        return <ErrorPage statusCode={404} />;
    }
    const title = `${project.title}`;

    return (
        <Layout preview={preview}>
            <Header title={project.title} />
            <Container>
                {router.isFallback ? (
                    <h1>Loading…</h1>
                ) : (
                    <>
                        <Head>
                            <title>{title}</title>
                            <meta
                                property="og:image"
                                content={project.ogImage?.src}
                            />
                        </Head>
                        <RichTextStyled content={project.content} />
                    </>
                )}
            </Container>
        </Layout>
    );
}

type Params = {
    project: string;
};

export async function getStaticProps({
    params,
    previewData,
}: GetStaticPropsContext<Params>) {
    const api = createApi(previewData);
    const project = await api.getProjectBySlug(params.project);

    return {
        props: { project },
    };
}

export async function getStaticPaths(context) {
    const api = createApi(context.previewData);
    const slugs = await api.getProjectSlugs();

    return {
        paths: slugs.map((project) => {
            return {
                params: { project },
            };
        }),
        fallback: false,
    };
}
