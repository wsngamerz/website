import Head from "next/head";
import { RichText } from "@alinea/ui";

import Container from "../components/container";
import Layout from "../components/layout";
import { createApi } from "../lib/api";
import { ContactPage } from "../schema";
import Header from "../components/header";

type Props = {
    contact: ContactPage;
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
                        <RichText
                            doc={contact.content}
                            p={<p className="mb-4" />}
                            a={<a className="text-cyan-500 underline" />}
                        />
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
