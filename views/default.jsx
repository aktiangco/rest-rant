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
                
                <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.6/dist/umd/popper.min.js"></script>
                <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js"></script>
            </head>
            <body>                
                <nav className="navbar navbar-expand-lg navbar-dark ">
                    <div className="container-fluid" type="list">
                        <a className="navbar-brand text-warning h2">NavBar</a>
                        
                    {/* <button className="navbar-toggler" type="button" data-bs-toggle="dropdown" data-bs-target="#dropdownNavbar">
                        <span className="navbar-toggler-icon"><i className="fa-solid fa-bars"></i></span>
                        </button>   */}
                        
                        <div className="dropdown navbar-dropdown" id="dropdownNavbar">  
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
                
                </body>
                
                <footer className="navbar navbar-expand-md navbar-dark fixed-bottom ">
                    <div className="p-2 m-2">
                        <h5 >Hello World</h5>
                    </div>
                    <div className="p-2 m-2">
                        <h5 className="footer-display">Eat U.S.A!!!</h5>
                    </div>
                    <div className="p-2 m-2">
                        <a className="btn btn-primary m-1" href="https://github.com/aktiangco" role="button"><i className="fab fa-github" aria-hidden="true"></i></a>
                        <a className="btn btn-primary m-1" href="https://www.linkedin.com/in/allan-kris-tiangco-057a78a0/" role="button"><i className="fab fa-linkedin" aria-hidden="true"></i></a>
                        <a className="btn btn-primary m-1" href="https://www.instagram.com/akvt808/" role="button"><i className="fab fa-instagram" aria-hidden="true"></i></a>
                    </div>                
                </footer>
           
        </html>
    )
  }
  

module.exports = Def
