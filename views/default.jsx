const React = require('react')

function Def(html) {
    return (
        <html>
            <head>
                <title>Rest-rant</title>
                <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css" />
                <link rel="stylesheet" href="/css/style.css" /> 
            </head>
            <body>
                {html.children}
            </body>
            <footer>
                <div>
                    <h4 id="footer">Eat World!!!</h4>
                </div>
            </footer>
        </html>
    )
  }
  

module.exports = Def
