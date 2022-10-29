import Head from "next/head";
import Link from "next/link";

import Button from "../components/button";
import Card from "../components/card";
import Container from "../components/container";
import DateFormatter from "../components/date-formatter";
import Header from "../components/header";
import Layout from "../components/layout";
import RichTextStyled from "../components/rich-text";

import { createApi } from "../lib/api";
import { getReadingMins, getWords } from "../lib/utils";

import type { Page } from "@alinea/content";

type Props = {
    blog: Page.BlogPage;
    featuredPost: Page.Post;
    posts: Page.Post[];
};

export default function Blog({ blog, featuredPost, posts }: Props) {
    const featuredPostWords = getWords(featuredPost.content);
    const featuredPostMins = getReadingMins(featuredPostWords);

    return (
        <>
            <Layout>
                <Head>
                    <title>{blog.title}</title>
                </Head>
                <Header title={blog.title} />
                <Container>
                    <Link href={`/blog/${featuredPost.path}`}>
                        <div className="flex flex-col lg:flex-row rounded-lg p-4 shadow-md shadow-gray-300 h-full bg-white mb-8">
                            <img
                                alt={`${featuredPost.title}`}
                                src={
                                    featuredPost.coverImage
                                        ? `/assets/${featuredPost.coverImage.src}`
                                        : "https://via.placeholder.com/1200x400"
                                }
                                className="rounded-md object-cover shadow-sm shadow-gray-200 w-full lg:w-1/2"
                            />

                            <div className="mt-2 lg:ml-4 lg:mt-0 flex flex-col">
                                <div className="flex gap-2 text-sm text-gray-600 items-center">
                                    <span className="py-1 px-3 bg-cyan-500 text-white rounded">
                                        Featured
                                    </span>
                                    <p>&#x2022;</p>
                                    <DateFormatter
                                        dateString={featuredPost.date}
                                    />
                                    <span>&#x2022;</span>
                                    <span>{featuredPostWords} words</span>
                                    <span>&#x2022;</span>
                                    <span>
                                        {featuredPostMins} min
                                        {featuredPostMins != 1 && "s"}
                                    </span>
                                </div>
                                <span className="font-bold text-xl pt-2">
                                    {featuredPost.title}
                                </span>
                                <RichTextStyled
                                    content={featuredPost.excerpt}
                                />
                            </div>
                        </div>
                    </Link>

                    <div className="flex my-4 gap-2">
                        <Button>Newest</Button>
                        <Button>Oldest</Button>
                        <Button>Popular</Button>
                        <Button>A-Z</Button>
                        <Button>Z-A</Button>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 py-4">
                        {posts.map((post) => (
                            <Card
                                key={post.path}
                                name={post.title}
                                cover={post.coverImage}
                                excerpt={post.excerpt}
                                to={`/blog/${post.path}`}
                                date={new Date(post.date)}
                                words={post.words}
                                mins={post.reading_time}
                            />
                        ))}
                    </div>
                </Container>
            </Layout>
        </>
    );
}

export const getStaticProps = async (context) => {
    const api = createApi(context.previewData);
    const blog = await api.getPage("Blog");
    const featuredPost = await api.getPostBySlug(blog.featuredPost.path);
    const posts = await api.getAllPosts();

    return {
        props: { blog, featuredPost, posts },
    };
};
