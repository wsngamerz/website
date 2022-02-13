import { graphql } from "gatsby";

import Layout from "../components/Layout";
import PageHeader from "../components/PageHeader";

const IndexPage = ({ location, data }) => {
    return (
        <Layout location={location} brand={data.site.siteMetadata.title} links={data.site.siteMetadata.links}>
            <PageHeader
                title={data.site.siteMetadata.title}
                subtitle={data.site.siteMetadata.subtitle}
                altSubtitles={data.site.siteMetadata.altSubtitles}
                typewriter={true}
                big={true}
            />
        </Layout>
    );
};

export const query = graphql`
    query {
        site {
            siteMetadata {
                title
                subtitle
                altSubtitles
                links {
                    label
                    navbarHidden
                    url
                }
            }
        }
    }
`;

export default IndexPage;
