import alinea from "alinea";

export const BlogPage = alinea
    .type("Blog Page", {
        title: alinea.text("Title", { width: 0.5 }),
        path: alinea.path("Path", { width: 0.5, hidden: true }),
    })
    .configure({
        isContainer: true,
        contains: ["Post"],
    });

export type BlogPage = alinea.infer<typeof BlogPage>;
