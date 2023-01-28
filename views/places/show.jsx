const React = require('react')
const Def = require('../default')

function show(data) {
    return (
      <Def>
            
        <main>
        <br />
          <h1 className="text-warning">{data.place.name} {/* SHOW DETAILS PAGE FOR ONE PLACE */}</h1>
          <br />
          <div className="content">
            <div>
              <img className="border border-warning img-places" src={data.place.pic} />
            </div>
            <div className="sections">
              <br />
              <section className="">Located in {data.place.city}, {data.place.state}</section>
              <section className="">{data.place.cuisines}</section>
              <br />
              <br />
              <div>
                <section className="">Currently unrated</section>
                <section className="comments">No comments yet!</section>
              </div>
            </div>
            </div>

          {/* buttons */}
            <div className="edit-delete">
              <div className="p-2">
                <a href={`/places/${data.id}/edit`} className="btn btn-primary"> 
                Edit
                </a> 
              </div>
              
              <div className="p-2">
                <form method="POST" action={`/places/${data.id}?_method=DELETE`}> 
                <button type="submit" className="btn btn-danger">
                Delete
                </button>
                </form> 
             </div>  
          </div>
          </main>
      </Def>
    )
  }
  

module.exports = show