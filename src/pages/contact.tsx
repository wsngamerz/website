import Head from "next/head";

import Container from "../components/container";
import Layout from "../components/layout";
import Header from "../components/header";
import RichTextStyled from "../components/rich-text";

import { createApi } from "../lib/api";

import type { Page } from "@alinea/content";

type Props = {
    contact: Page.ContactPage;
};

export default function Contact({ contact }: Props) {
    return (
        <>
            <Layout>
                <Head>
                    <title>{contact.title}</title>
                </Head>
                <Header title={contact.title} />
                <Container>
                    <div className="flex flex-wrap">
                        <RichTextStyled content={contact.content} />
                    </div>
                </Container>
            </Layout>
        </>
    );
}

export const getStaticProps = async (context) => {
    const api = createApi(context.previewData);
    const contact = await api.getPage("Contact");

    return {
        props: { contact },
    };
};
