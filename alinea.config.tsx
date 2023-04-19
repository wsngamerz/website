// import { createCloudBackend } from "@alinea/cloud";
import { alinea, MediaSchema } from "alinea";
import { BrowserPreview } from "@alinea/preview";

import { IcRoundInsertDriveFile } from "@alinea/ui/icons/IcRoundInsertDriveFile";
import { IcRoundPermMedia } from "@alinea/ui/icons/IcRoundPermMedia";
import { IcRoundFeed } from "@alinea/ui/icons/IcRoundFeed";
import { IcRoundPerson } from "./src/schema/icons/IcPerson";
import { IcFaDiagramProject } from "./src/schema/icons/IcFaDiagramProject";

import {
    Author,
    Post,
    Project,
    HomePage,
    AboutPage,
    BlogPage,
    ProjectsPage,
    GalleryPage,
    ContactPage,
} from "./src/schema";

const schema = alinea.schema({
    ...MediaSchema,
    Author,
    Post,
    Project,
    HomePage,
    AboutPage,
    BlogPage,
    ProjectsPage,
    GalleryPage,
    ContactPage,
});

export const config = alinea.createConfig({
    schema,
    workspaces: {
        main: alinea.workspace("Main", {
            source: "./content",
            mediaDir: "./public/assets",
            roots: {
                pages: alinea.root("Pages", {
                    icon: IcRoundInsertDriveFile,
                    contains: [
                        "HomePage",
                        "AboutPage",
                        "GalleryPage",
                        "ContactPage",
                    ],
                }),
                posts: alinea.root("Posts", {
                    icon: IcRoundFeed,
                    contains: ["Post", "BlogPage"],
                }),
                projects: alinea.root("Projects", {
                    icon: IcFaDiagramProject,
                    contains: ["Project", "ProjectsPage"],
                }),
                authors: alinea.root("Authors", {
                    icon: IcRoundPerson,
                    contains: ["Author"],
                }),
                assets: alinea.root("Assets", {
                    icon: IcRoundPermMedia,
                    contains: ["MediaLibrary"],
                }),
            },
            preview({ entry, previewToken }) {
                // During dev point at running Next.js development server,
                // in production use the current domain
                const location =
                    process.env.NODE_ENV === "development"
                        ? "http://localhost:3000"
                        : "";
                if (["Author"].includes(entry.type)) return null;
                return (
                    <BrowserPreview
                        url={`${location}/api/preview?${previewToken}`}
                        // The preview pane will display this url to the user
                        prettyUrl={entry.url}
                    />
                );
            },
        }),
    },
});
