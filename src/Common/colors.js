// Color Pallette of the Application
// Uses the colors of my favorite theme - one-monokai
// https://github.com/azemoh/vscode-one-monokai

import { createTheme } from '@mui/material/styles';

// Export colors in 2 ways:

// Colors not MUI style
const Colors = {
    plain: "#abb2bf",
    background: "#282c34",
    caret: "#528bff",
    pink: "#e06c75", 
    cyan: "#56b6c2",
    lime: "#98c379",
    purple: "#c678dd",
    brown: "#d19a66",
    gold: "#e5c07b",
    blue: "#61afef",
    comment: "#5c6370",
}

// Colors MUI style
const Theme = createTheme({
    palette: {
        plain: {
            main: Colors.main
        },
        background: {
            main: Colors.background
        },
        caret: {
            main: Colors.caret
        },
        pink: {
            main: Colors.pink
        },
        cyan: {
            main: Colors.cyan
        },
        lime: {
            main: Colors.lime
        },
        purple: {
            main: Colors.purple
        },
        brown: {
            main: Colors.brown
        },
        gold: {
            main: Colors.gold
        },
        blue: {
            main: Colors.blue
        },
        comment: {
            main: Colors.comment
        },
      }
    },
);

export {
    Colors,
    Theme
}
