import { Entry } from "@alinea/core";
import alinea from "alinea";

import { AlertSchema } from "../components/blocks/alert";
import { ButtonSchema } from "../components/blocks/button";
import { ImageSchema } from "../components/blocks/image";

export const Post = alinea.type(
    "Post",
    alinea.tabs(
        alinea.tab("Content", {
            title: alinea.text("Title", { width: 0.5 }),
            path: alinea.path("Path", { width: 0.5 }),
            date: alinea.date("Publish date"),
            coverImage: alinea.image("Cover image", { width: 0.5 }),
            author: alinea.entry("Author", {
                width: 0.5,
                condition: Entry.type.is("Author"),
            }),
            excerpt: alinea.richText("Excerpt"),
            content: alinea.richText("Content", {
                blocks: alinea.schema({
                    Image: ImageSchema,
                    Alert: AlertSchema,
                    Button: ButtonSchema,
                }),
            }),
        }),
        alinea.tab("Metadata", {
            ogImage: alinea.image("OG Image"),
        })
    )
);

export type Post = alinea.infer<typeof Post>;
