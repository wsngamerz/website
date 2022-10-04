import Head from "next/head";

import Container from "../components/container";
import Header from "../components/header";
import Layout from "../components/layout";
import { createApi } from "../lib/api";
import { GalleryPage } from "../schema";

type Props = {
    gallery: GalleryPage;
};

export default function Gallery({ gallery }: Props) {
    return (
        <>
            <Layout>
                <Head>
                    <title>{gallery.title}</title>
                </Head>
                <Header title={gallery.title} />
                <Container></Container>
            </Layout>
        </>
    );
}

export const getStaticProps = async (context) => {
    const api = createApi(context.previewData);
    const gallery = await api.getPage("Gallery");

    return {
        props: { gallery },
    };
};
