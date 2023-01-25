const React = require('react')
const Def = require('./default')

function home() {
    return (
      <Def>
          <main>
          <h1>REST-rant</h1>
          <a href="/places">
            <button className="btn-primary">Places</button>
          </a>
          <div>
            <img className="border border-warning"src="/images/fork.avif" alt="fork-knife-spoon on a plate"/>
          </div>
          <div>
            Photo by <a href="https://unsplash.com/@gettyimages">Getty Images</a> on <a href="https://unsplash.com/photos/7bLKjfoDtcM">Unsplash</a>
          </div>
       
          </main>
      </Def>
    )
  }
  

module.exports = home