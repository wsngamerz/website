import alinea from "alinea";
import { Entry } from "@alinea/core";

export const BlogPage = alinea
    .type("Blog Page", {
        title: alinea.text("Title", { width: 0.5 }),
        path: alinea.path("Path", { width: 0.5, hidden: true }),
        featuredPost: alinea.entry("Featured Post", {
            condition: Entry.type.is("Post"),
        }),
    })
    .configure({
        isContainer: true,
        contains: ["Post"],
    });
