import { PreviewData } from "next";

import { initPages } from "@alinea/content/pages";

import { getReadingMins, getWords } from "./utils";

export function createApi(previewToken?: PreviewData) {
    const pages = initPages(previewToken as string);

    return {
        async getPage(page: string) {
            switch (page) {
                case "About":
                    return pages.whereType("AboutPage").sure();

                case "Blog":
                    return pages.whereType("BlogPage").sure();

                case "Contact":
                    return pages.whereType("ContactPage").sure();

                case "Gallery":
                    return pages.whereType("GalleryPage").sure();

                case "Home":
                    return pages.whereType("HomePage").sure();

                case "Projects":
                    return pages.whereType("ProjectsPage").sure();

                default:
                    break;
            }
        },
        async getPostSlugs() {
            return pages.whereType("Post").select((post) => post.path);
        },
        async getPostBySlug(slug: string) {
            return pages.whereType("Post").first((post) => post.path.is(slug));
        },
        async getAllPosts() {
            return pages.whereType("Post").select((post) => {
                return {
                    title: post.title,
                    date: post.date,
                    path: post.path,
                    author: post.author,
                    coverImage: post.coverImage,
                    excerpt: post.excerpt,
                    words: post.words,
                    reading_time: post.reading_time,
                };
            });
        },
        async getRecentPosts(num: number) {
            return await pages
                .whereType("Post")
                .orderBy((post) => [post.date.desc()])
                .take(num);
        },
        async getTopProjects(num: number) {
            return await pages.whereType("Project").take(num);
        },
        async getProjectSlugs() {
            return pages.whereType("Project").select((page) => page.path);
        },
        async getProjectBySlug(slug: string) {
            return pages
                .whereType("Project")
                .first((page) => page.path.is(slug));
        },
    };
}
