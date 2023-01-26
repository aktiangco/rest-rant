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
                <nav>
                    <ul>
                        <li><a href="/">Home</a></li>
                        <li><a href="/places">Places</a></li>
                        <li><a href="/places/new">Add Place</a></li>
                    </ul>
                </nav>
                {html.children}
            </body>
            <footer>
                <div>
                    <h4 id="footer">Eat U.S.A!!!</h4>
                </div>
            </footer>
        </html>
    )
  }
  

module.exports = Def
