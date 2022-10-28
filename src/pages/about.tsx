import Head from "next/head";

import Container from "../components/container";
import Layout from "../components/layout";
import Header from "../components/header";
import RichTextStyled from "../components/rich-text";

import { createApi } from "../lib/api";

import type { Page } from "@alinea/content";

type Props = {
    about: Page.AboutPage;
};

export default function About({ about }: Props) {
    return (
        <>
            <Layout>
                <Head>
                    <title>{about.title}</title>
                </Head>
                <Header title={about.title} />
                <Container>
                    <div className="flex flex-wrap">
                        <RichTextStyled content={about.bio} />
                    </div>
                </Container>
            </Layout>
        </>
    );
}

export const getStaticProps = async (context) => {
    const api = createApi(context.previewData);
    const about = await api.getPage("About");

    return {
        props: { about },
    };
};
