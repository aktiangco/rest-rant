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
                <link rel="icon" type="images/x-icon" href="/images/spoon.png" />
            </head>
            <body>                
                <nav className="nav">
                        <ul className="nav-ul">
                            <li className="nav-li">
                                <a className="nav-li" href="/"><i className="fa fa-house"></i> Home</a>
                            </li>
                            <li className="nav-li">
                                <a className="nav-li" href="/places"><i className="fa fa-list"> </i> Place's</a>
                            </li>
                            <li className="nav-li">
                                <a className="nav-li" href="/places/new"><i className="fa fa-add"></i> Place</a>
                                </li>                                
                        </ul>
               </nav>
               
                {html.children}
               
                
                <footer className="navbar navbar-expand-md  form-colork fixed-bottom ">
                    <div className="p-2 m-2">
                        <h5 >Hello World</h5>
                    </div>
                    <div className="p-2 m-2">
                        <h5 className="footer-display">Eat U.S.A!!!</h5>
                    </div>
                    <div className="p-2 m-2">
                        <a className="btn btn-primary m-1" href="https://github.com/aktiangco" role="button"><i className="fab fa-github" ></i></a>
                        <a className="btn btn-primary m-1" href="https://www.linkedin.com/in/allan-kris-tiangco-057a78a0/" role="button"><i className="fab fa-linkedin"></i></a>
                        <a className="btn btn-primary m-1" href="https://www.instagram.com/akvt808/" role="button"><i className="fab fa-instagram"></i></a>
                    </div>                
                </footer>
                </body>
        </html>
    )
  }
  

module.exports = Def
