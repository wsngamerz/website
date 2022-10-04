import Head from "next/head";
import { RichText } from "@alinea/ui";

import Container from "../components/container";
import Layout from "../components/layout";
import { createApi } from "../lib/api";
import { AboutPage } from "../schema";
import Header from "../components/header";

type Props = {
    about: AboutPage;
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
                        <RichText
                            doc={about.bio}
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
    const about = await api.getPage("About");

    return {
        props: { about },
    };
};
