const React = require('react')
const Def = require('../default')

function show(data) {
    return (
      <Def>
            <section>Currently unrated</section>
            <main>
          <h1>{data.place.name} {/* SHOW DETAILS PAGE FOR ONE PLACE */}</h1>
            <a href={`/places/${data.id}/edit`} className="btn btn-warning"> 
              Edit
            </a>  
            <form method="POST" action={`/places/${data.id}?_method=DELETE`}> 
            <button type="submit" className="btn btn-danger">
              Delete
            </button>
            </form>     

            <section>No comments yet!</section>
          </main>
      </Def>
    )
  }
  

module.exports = show