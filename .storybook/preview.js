import { ThemeProvider } from "styled-components";

import GlobalStyle from "../src/globalstyles";
import defaultTheme from "../src/themes";

export const parameters = {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
        matchers: {
            color: /(background|color)$/i,
            date: /Date$/
        }
    }
};

export const decorators = [
    Story => (
        <>
            <GlobalStyle />
            <ThemeProvider theme={defaultTheme}>
                <Story />
            </ThemeProvider>
        </>
    )
];
