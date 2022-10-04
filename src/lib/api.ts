import { initPages } from "@alinea/content/main/pages.js";
import { PreviewData } from "next";

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
            return pages.whereType("Post").select((page) => page.path);
        },
        async getPostBySlug(slug: string) {
            return pages.whereType("Post").first((page) => page.path.is(slug));
        },
        async getAllPosts() {
            return pages.whereType("Post").select((page) => ({
                title: page.title,
                date: page.date,
                path: page.path,
                author: page.author,
                coverImage: page.coverImage,
                excerpt: page.excerpt,
            }));
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
