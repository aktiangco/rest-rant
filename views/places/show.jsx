const React = require('react')
const Def = require('../default')

function show(data) {
    return (
      <Def>
            
        <main>
        
          <h1 className="text-warning">{data.place.name} {/* SHOW DETAILS PAGE FOR ONE PLACE */}</h1>
          <br />
            <a href={`/places/${data.id}/edit`} className="btn btn-warning"> 
              Edit
            </a>  
            <form method="POST" action={`/places/${data.id}?_method=DELETE`}> 
            <button type="submit" className="btn btn-danger">
              Delete
            </button>
            </form>     
            <section>Currently unrated</section>
            <section>No comments yet!</section>
          </main>
      </Def>
    )
  }
  

module.exports = show