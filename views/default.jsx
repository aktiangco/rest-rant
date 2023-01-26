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
                <nav className="navbar navbar-expand-lg">
                <a className="navbar-brand" href="#">Navbar</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>                 
                <div className="collapse navbar-collapse" id="navbarSupportedContent"></div>
                    
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active"><a className="nav-link" href="/">Home</a></li>
                        <li className="nav-item active"><a className="nav-link" href="/places">Places</a></li>
                        <li className="nav-item active"><a className="nav-link" href="/places/new">Add Place</a></li>
                    </ul>
                </nav>
                {html.children}
            </body>
            <footer>
                <div>
                    <h4>Hello</h4>
                </div>
                <div>
                    <h4 id="footer">Eat U.S.A!!!</h4>
                </div>
                <div>
                <h4>Bye</h4>
                </div>
            </footer>
        </html>
    )
  }
  

module.exports = Def
