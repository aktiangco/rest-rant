const React = require('react')

function Def(html) {
    return (
        <html>
            <head>
            {/* <meta charset="UTF-8"/>
            <meta http-equiv="X-UA-Compatible" content="IE=edge"/>
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <meta name="color-scheme" content="dark light" /> */}
            <title>Rest-rant</title>
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css" />
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.1/css/all.min.css"/>
            <link rel="stylesheet" href="/css/style.css" /> 
            </head>
            <body>                
                <nav className="navbar navbar-expand-lg navbar-dark ">
                    <div className="container-fluid" type="list">
                    <a className="navbar-brand text-warning h2">NavBar</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
                        <span className="navbar-toggler-icon"><i className="fa-solid fa-bars"></i></span>
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
                                
                        </ul>
                        </div>
                    </div>
                </nav>                   
                {html.children}
                

            

                
                <footer className="fixed-bottom">
                <div>
                        <h4>Hello World</h4>
                    </div>
                    <div>
                        <h4 id="footer">Eat U.S.A!!!</h4>
                    </div>
                    <div>
                        <a className="btn btn-primary btn-floating m-1" href="https://github.com/aktiangco" role="button"><i className="fab fa-github" aria-hidden="true"></i></a>
                        <a className="btn btn-primary btn-floating m-1" href="https://www.linkedin.com/in/allan-kris-tiangco-057a78a0/" role="button"><i className="fab fa-linkedin" aria-hidden="true"></i></a>
                        <a className="btn btn-primary btn-floating m-1" href="https://www.instagram.com/akvt808/" role="button"><i className="fab fa-instagram" aria-hidden="true"></i></a>
                    </div>                
                    </footer>
            </body>
        </html>
    )
  }
  

module.exports = Def
