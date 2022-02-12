import { ThemeProvider } from "styled-components";
import GlobalStyle from "../globalstyles";

import defaultTheme from "../themes";

const Layout = ({ children }) => {
    return (
        <>
            <GlobalStyle />
            <ThemeProvider theme={defaultTheme}>{children}</ThemeProvider>
        </>
    );
};

export default Layout;
