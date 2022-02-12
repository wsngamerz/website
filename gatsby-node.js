exports.onCreatePage = ({ page, actions: { createPage, deletePage } }) => {
    const frontmatter = page.context.frontmatter;
    if (!frontmatter) return;

    switch (frontmatter.type) {
        case "post":
            deletePage(page);
            createPage({
                ...page,
                path: `/blog/${frontmatter.slug}`
            });
            break;

        case "project":
            deletePage(page);
            createPage({
                ...page,
                path: `/projects/${frontmatter.slug}`
            });
            break;

        default:
            break;
    }
};
