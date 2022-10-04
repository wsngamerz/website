import alinea from "alinea";

export const Project = alinea.type(
    "Project",
    alinea.tabs(
        alinea.tab("Content", {
            title: alinea.text("Title", { width: 0.5 }),
            path: alinea.path("Path", { width: 0.5 }),
            coverImage: alinea.image("Cover image", { width: 0.5 }),
            excerpt: alinea.richText("Excerpt"),
            content: alinea.richText("Content"),
        }),
        alinea.tab("Metadata", {
            ogImage: alinea.image("OG Image"),
        })
    )
);

export type Project = alinea.infer<typeof Project>;
