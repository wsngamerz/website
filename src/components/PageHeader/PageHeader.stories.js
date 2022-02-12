import PageHeader from "./PageHeader";

export default {
    title: "Components/PageHeader",
    component: PageHeader
};

const Template = args => <PageHeader {...args} />;

export const Default = Template.bind({});
Default.args = {
    title: "Page Title",
    subtitle: "Page Subtitle",
    big: true
};
