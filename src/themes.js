import { createGlobalStyle } from "styled-components";

export const lightTheme = {
    body: "#faf9f7",
    fontColor: "#12130f",
    navLinkColor: "hsl(236, 79%, 75%)",
    navLinkHoveredColor: "hsl(236, 79%, 80%)",
    socialLinkColor: "hsl(350, 96%, 33%)",
    socialLinkHoveredColor: "hsl(350, 96%, 40%)",
    switchColor: "hsl(46, 98%, 50%)"
}

export const darkTheme = {
    body: "#12130f",
    fontColor: "#f5f5f5",
    navLinkColor: "hsl(236, 79%, 85%)",
    navLinkHoveredColor: "hsl(236, 79%, 90%)",
    socialLinkColor: "hsl(350, 96%, 33%)",
    socialLinkHoveredColor: "hsl(350, 96%, 40%)",
    switchColor: "hsl(0, 0%, 93%)"
}

export const GlobalStyles = createGlobalStyle`
    body {
        background-color: ${props => props.theme.body};
    }
`