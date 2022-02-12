import Navbar from "./Navbar";

export default {
    title: "Components/Navbar",
    component: Navbar
};

const Template = args => <Navbar {...args} />;

export const Default = Template.bind({});
Default.args = {
    brand: "William Neild",
    links: [
        {
            label: "Home",
            url: "/",
            active: true
        },
        {
            label: "Blog",
            url: "/blog",
            active: false
        },
        {
            label: "Projects",
            url: "/projects",
            active: false
        },
        {
            label: "About",
            url: "/about",
            active: false
        },
        {
            label: "Contact",
            url: "/contact",
            active: false
        }
    ]
};
