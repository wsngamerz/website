import "styled-components"

declare module "styled-components" {
    export interface DefaultTheme {
        fonts: {
            default: string
        },
        colours: {
            surface: {
                level1: string,
                level2: string,
                level3: string,
                level4: string
            },
            text: {
                default: string
            }
        }
    }
}
