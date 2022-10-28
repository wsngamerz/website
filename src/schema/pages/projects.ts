import alinea from "alinea";

export const ProjectsPage = alinea
    .type("Projects Page", {
        title: alinea.text("Title", { width: 0.5 }),
        path: alinea.path("Path", { width: 0.5, hidden: true }),
    })
    .configure({
        isContainer: true,
        contains: ["Project"],
    });
