import alinea from "alinea";

export const HomePage = alinea.type("Home Page", {
    title: alinea.text("Title", { width: 0.5 }),
    path: alinea.path("Path", { width: 0.5, hidden: true }),
    subtitles: alinea.list("Subtitles", {
        schema: alinea.schema({
            Subtitle: alinea.type("Subtitle", {
                subtitle: alinea.text("text"),
            }),
        }),
    }),
    intro: alinea.richText("Introduction"),
});

export type HomePage = alinea.infer<typeof HomePage>;
