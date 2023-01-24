const React = require('react')
const Def = require('./default')

function home () {
    return (
      <Def>
          <main>
          <h1>HOME</h1>
          <div>
            <img src="/images/fork.avif" alt="fork-knife-spoon on a plate"/>
          </div>
          <div>
            Photo by <a href="https://unsplash.com/@gettyimages">Getty Images</a> on <a href="https://unsplash.com/photos/7bLKjfoDtcM">Unsplash</a>
          </div>
          <a href="/places">
            <button className="btn-primary">Places Page</button>
          </a>
          </main>
      </Def>
    )
  }
  

module.exports = home