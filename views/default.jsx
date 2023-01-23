const React = require('react')

function Def (html) {
    return (
        <html>
            <head>
                <title>Rest-rant</title>
            </head>
            <body>
                {html.children}
            </body>
        </html>
    )
  }
  

module.exports = Def
