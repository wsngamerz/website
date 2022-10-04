import alinea from "alinea";

export const GalleryPage = alinea.type("Gallery Page", {
    title: alinea.text("Title", { width: 0.5 }),
    path: alinea.path("Path", { width: 0.5, hidden: true }),
});

export type GalleryPage = alinea.infer<typeof GalleryPage>;
