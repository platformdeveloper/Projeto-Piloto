import { createGlobalStyle, ThemeProvider } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  body {
    background-image: url("https://raw.githubusercontent.com/bebelicha/PublicImg/main/Fundo%20tela%20materiais-para-construc%CC%A7a%CC%83o-1.png");
    /* Background image is centered vertically and horizontally at all times */
    background-position: center center;
    
    /* Background image doesn’t tile */
    background-repeat: no-repeat;
    
    /* Background image is fixed in the viewport so that it doesn’t move when
    the content’s height is greater than the image’s height */
    background-attachment: fixed;
    
    /* This is what makes the background image rescale based
    on the container’s size */
    background-size: cover;
    
    /* Set a background color that will be displayed
    while the background image is loading */
    background-color: #464646;
    
    
    
  }
`

const theme = {
  colors: {
    primary: '#3F48CD',
  },
}

export default function App({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}
