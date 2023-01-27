const React = require('react')

function Def(html) {
    return (
        <html>
            <head>
                <title>Rest-rant</title>
                <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css" />
                <link rel="stylesheet" href="path/to/font-awesome/css/font-awesome.min.css"/> {/* fa-font isn't working*/}
                <link rel="stylesheet" href="/css/style.css" /> 
            </head>
            <body>                
                <nav className="navbar navbar-expand-lg navbar-dark">
                    <div className="container-fluid">
                    <a className="navbar-brand text-warning h2">NavBar</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="collapsibleNavbar">
                        <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                            <li className="nav-item">
                                <a className="nav-link" href="/">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/places">Places</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/places/new">Add Place</a>
                                </li>
                                {/* dropdown pop up isn't working */}
                                {/* <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown">Dropdown</a>
                    <ul class="dropdown-menu">
                        <li><a class="dropdown-item" href="#">Link</a></li>
                        <li><a class="dropdown-item" href="#">Another link</a></li>
                        <li><a class="dropdown-item" href="#">A third link</a></li>
                    </ul> 
                    </li>*/}
                        </ul>
                    </div>
                    </div>
                </nav>                   
                {html.children}
            </body>
            {/* Working on this later  */}
            <footer className="fixed-bottom">
            <div>
                    <h4>Hello World</h4>
                </div>
                <div>
                    <h4 id="footer">Eat U.S.A!!!</h4>
                </div>
                <div>
                    <a className="btn btn-primary btn-floating m-1" href="#!" role="button"><i className="fa fa-github" aria-hidden="true"></i></a>
                    <a className="btn btn-primary btn-floating m-1" href="#!" role="button"><i className="fa fa-linkedin" aria-hidden="true"></i></a>
                    <a className="btn btn-primary btn-floating m-1" href="#!" role="button"><i className="fa fa-instagram" aria-hidden="true"></i></a>
                </div>
                
            </footer>
        </html>
    )
  }
  

module.exports = Def
