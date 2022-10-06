import { TextNode } from "@alinea/core";
import { GetStaticPropsContext } from "next";
import ErrorPage from "next/error";
import Head from "next/head";
import { useRouter } from "next/router";

import Container from "../../components/container";
import DateFormatter from "../../components/date-formatter";
import Layout from "../../components/layout";
import RichTextStyled from "../../components/rich-text";

import { createApi } from "../../lib/api";

import type { Post as IPost } from "../../schema";

type Props = {
    post: IPost;
    preview?: boolean;
};

export default function Post({ post, preview }: Props) {
    const router = useRouter();
    if (!router.isFallback && !post?.path) {
        return <ErrorPage statusCode={404} />;
    }
    const title = `${post.title}`;

    // count words using a rudimentory method
    let words = 0;
    post.content.forEach((textNode: TextNode) => {
        if (TextNode.isText(textNode)) {
            words += textNode.text.split(" ").length;
        } else if (textNode.content) {
            textNode.content.forEach((tn) => {
                words += tn.text.split(" ").length;
            });
        }
    });

    // estimate reading time from an average of 200wpm
    let mins = Math.round(words / 200);

    return (
        <Layout preview={preview} bgc={"bg-gray-100"}>
            <Container>
                <Head>
                    <title>{title}</title>
                    <meta property="og:image" content={post.ogImage?.src} />
                </Head>
                <article className="bg-white max-w-4xl mx-auto rounded">
                    <img
                        src={
                            post.coverImage?.src
                                ? "/assets" + post.coverImage.src
                                : "https://via.placeholder.com/1200x400"
                        }
                        alt={`Cover Image for ${post.title}`}
                        className="shadow-sm rounded w-full"
                    />
                    <div className="px-4 md:px-8 lg:px-16 py-8">
                        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tighter leading-tight md:leading-none mb-6 text-center md:text-left">
                            {post.title}
                        </h1>
                        <div className="flex gap-6 my-6 text-sm text-gray-700">
                            <p>
                                By <span>{post.author.title}</span>
                            </p>
                            <DateFormatter dateString={post.date} />
                            <p>{words} words</p>
                            <p>{mins} mins</p>
                        </div>
                        <hr className="mb-4" />
                        <RichTextStyled content={post.content} />
                    </div>
                </article>
            </Container>
        </Layout>
    );
}

type Params = {
    slug: string;
};

export async function getStaticProps({
    params,
    previewData,
}: GetStaticPropsContext<Params>) {
    const api = createApi(previewData);
    const post = await api.getPostBySlug(params.slug);

    return {
        props: { post },
    };
}

export async function getStaticPaths(context) {
    const api = createApi(context.previewData);
    const slugs = await api.getPostSlugs();

    return {
        paths: slugs.map((slug) => {
            return {
                params: { slug },
            };
        }),
        fallback: false,
    };
}
