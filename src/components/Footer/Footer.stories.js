import Footer from ".";

export default {
    title: "Components/Footer",
    component: Footer
};

const Template = args => <Footer {...args} />;

export const Default = Template.bind({});
Default.args = {
    brand: "William Neild",
    year: new Date().getFullYear(),
    links: [
        {
            label: "Home",
            url: "/"
        },
        {
            label: "Blog",
            url: "/blog"
        },
        {
            label: "Projects",
            url: "/projects"
        },
        {
            label: "About",
            url: "/about"
        },
        {
            label: "Contact",
            url: "/contact"
        },
        {
            label: "Privacy Policy",
            url: "/privacy-policy"
        },
        {
            label: "Terms",
            url: "/terms"
        }
    ]
};
