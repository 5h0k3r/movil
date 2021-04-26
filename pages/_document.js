import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  render() {
    return (
      <Html lang="es-ES">
        <Head />
        <script async src="https://securepubads.g.doubleclick.net/tag/js/gpt.js"></script>
        <body>
          <Main />
          
          <NextScript />
          <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
        </body>
        
      </Html>
    )
  }
}

export default MyDocument