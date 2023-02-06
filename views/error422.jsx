const React = require('react')
const Def = require('./default')

function error422() {
    return (
      <Def>
          <main>
                <h1 className="text-danger">422: PAGE NOT FOUND</h1>
          <img src="/images/422.jpg" alt="422"></img> {/* images */}
              <p >Oops, sorry, we can't find this page!</p>
          </main>
      </Def>
    )
  }
  

module.exports = error422