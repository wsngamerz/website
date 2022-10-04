import Head from "next/head";
import Link from "next/link";
import { RichText } from "@alinea/ui";

import Header from "../components/header";
import Layout from "../components/layout";
import { createApi } from "../lib/api";
import { Post, HomePage, Project } from "../schema";
import ProjectCard from "../components/project-card";

type Props = {
    home: HomePage;
    allPosts: Post[];
    topProjects: Project[];
};

export default function Index({ home, allPosts, topProjects }: Props) {
    const heroPost = allPosts[0];
    const morePosts = allPosts.slice(1);

    const subtitles = home.subtitles.map((s) => s.subtitle);

    return (
        <>
            <Layout>
                <Head>
                    <title>{home.title}</title>
                </Head>
                <Header
                    big={true}
                    title={home.title}
                    subtitle={subtitles.shift()}
                    alternatives={subtitles}
                    typewriter={true}
                    buttons={[
                        ["Projects", "/projects"],
                        ["Blog", "/blog"],
                    ]}
                />
                <div className="bg-slate-700 text-gray-100 p-8">
                    <RichText
                        doc={home.intro}
                        p={<p className="my-2" />}
                        a={<a className="text-cyan-500 underline" />}
                    />
                </div>
                {topProjects && (
                    <div className="px-4 py-16">
                        <h2 className="text-2xl mx-4 font-medium">
                            Featured Projects
                        </h2>
                        <div className="flex">
                            {topProjects.map((project) => (
                                <Link
                                    key={project.title}
                                    href={`/projects/${project.path}`}
                                >
                                    <a className="flex-1">
                                        <ProjectCard
                                            name={project.title}
                                            excerpt={project.excerpt}
                                            cover={project.coverImage}
                                        />
                                    </a>
                                </Link>
                            ))}
                        </div>
                    </div>
                )}
            </Layout>
        </>
    );
}

export const getStaticProps = async (context) => {
    const api = createApi(context.previewData);
    const home = await api.getPage("Home");
    const allPosts = await api.getAllPosts();
    const topProjects = await api.getTopProjects(3);

    return {
        props: { home, allPosts, topProjects },
    };
};
