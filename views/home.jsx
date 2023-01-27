const React = require('react')
const Def = require('./default')

function home() {
    return (
      <Def>
          <main>
          <h1 className="text-warning">REST-rant</h1>
       <br />
          <div>
            <img className="border border-warning img-fluid"src="/images/fork.avif" alt="fork-knife-spoon on a plate"/>
          </div>
          <div>
            Photo by <a className="text-warning" href="https://unsplash.com/@gettyimages">Getty Images</a> on <a className="text-warning" href="https://unsplash.com/photos/7bLKjfoDtcM">Unsplash</a>
          </div>
       
          </main>
      </Def>
    )
  }
  

module.exports = home