import alinea from "alinea";

export const ContactPage = alinea.type("Contact Page", {
    title: alinea.text("Title", { width: 0.5 }),
    path: alinea.path("Path", { width: 0.5, hidden: true }),
    content: alinea.richText("content"),
});
