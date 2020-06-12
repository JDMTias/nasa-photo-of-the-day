import {createGlobalStyle} from 'styled-components'

const GlobalFonts = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Inconsolata:wght@500&display=swap');

    body {
        font-family: 'Inconsolata', monospace;
        background-color: #2F4F4F;
    }

    img {
        width: 90%;
    }

    .logo{
        width: auto;
        height: 175px;
    }

`

export default GlobalFonts