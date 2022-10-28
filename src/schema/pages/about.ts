import alinea from "alinea";

export const AboutPage = alinea.type("About Page", {
    title: alinea.text("Title", { width: 0.5 }),
    path: alinea.path("Path", { width: 0.5, hidden: true }),
    bio: alinea.richText("Bio"),
});
