import { createGlobalStyle } from "styled-components";
export const Global = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Outfit:wght@100..900&display=swap');
*{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
}
html {
   font-size: 62.5%;
}
body{
    font-family: "Outfit", sans-serif;
    background: var(--Dark-Blue, #10141E);
}
`;
