const React = require('react')
const Def = require('./default')

function error404() {
    return (
      <Def>
          <main>
                <h1 className="text-danger">404: PAGE NOT FOUND</h1>
          <img src="/images/404.jpg" alt="404"></img> {/* images */}
              <p >Oops, sorry, we can't find this page!</p>
          </main>
      </Def>
    )
  }
  

module.exports = error404