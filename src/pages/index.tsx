import Head from "next/head";

import { buttonVariants } from "../components/ui/button";
import Card from "../components/card";
import Header from "../components/header";
import Layout from "../components/layout";
import RichTextStyled from "../components/rich-text";

import { createApi } from "../lib/api";

import type { Page } from "@alinea/content";
import Link from "next/link";

type Props = {
    page: Page.HomePage;
    recentPosts: Page.Post[];
    topProjects: Page.Project[];
};

export default function Index({ page, recentPosts, topProjects }: Props) {
    const subtitles = page.subtitles.map((s) => s.subtitle);

    return (
        <>
            <Layout>
                <Head>
                    <title>{page.title}</title>
                </Head>
                <Header
                    big={true}
                    title={page.title}
                    subtitle={subtitles.shift()}
                    alternatives={subtitles}
                    typewriter={true}
                    buttons={[
                        ["Projects", "/projects"],
                        ["Blog", "/blog"],
                    ]}
                />
                <div className="bg-gray-200 p-8">
                    <div className="w-full md:w-11/12 lg:w-10/12 mx-auto">
                        <RichTextStyled content={page.intro} />
                    </div>
                </div>
                {topProjects && (
                    <div className="px-4 py-16 w-full md:w-11/12 lg:w-10/12 mx-auto">
                        <h2 className="text-2xl mx-4 font-medium">
                            Featured Projects
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 py-4">
                            {topProjects.map((project) => (
                                <Card
                                    key={project.title}
                                    to={`/projects/${project.path}`}
                                    name={project.title}
                                    excerpt={project.excerpt}
                                    cover={project.coverImage}
                                />
                            ))}
                        </div>
                        <div className="flex justify-center py-4">
                            <Link
                                href={"/projects"}
                                className={buttonVariants()}
                            >
                                More Projects
                            </Link>
                        </div>
                    </div>
                )}

                {recentPosts && (
                    <div className="px-4 py-16 w-full md:w-11/12 lg:w-10/12 mx-auto">
                        <h2 className="text-2xl mx-4 font-medium">
                            Recent Posts
                        </h2>

                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 py-4">
                            {recentPosts.map((post) => (
                                <Card
                                    key={post.title}
                                    to={`/blog/${post.path}`}
                                    name={post.title}
                                    excerpt={post.excerpt}
                                    cover={post.coverImage}
                                    date={new Date(post.date)}
                                    words={post.words}
                                    mins={post.reading_time}
                                />
                            ))}
                        </div>

                        <div className="flex justify-center py-4">
                            <Link href={"/blog"} className={buttonVariants()}>
                                More Posts
                            </Link>
                        </div>
                    </div>
                )}
            </Layout>
        </>
    );
}

export const getStaticProps = async (context) => {
    const api = createApi(context.previewData);

    const page = await api.getPage("Home");
    const recentPosts = await api.getRecentPosts(4);
    const topProjects = await api.getTopProjects(4);

    return {
        props: { page, recentPosts, topProjects },
    };
};
