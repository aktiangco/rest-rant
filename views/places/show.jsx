const React = require('react')
const Def = require('../default')

function show(data) {
    return (
      <Def>           
        <main>
          <br/>
          <br/>
          <br/>
          <div className="row">
            <div className="col-sm-6">
              <img className="border border-warning img-places" src={data.place.pic} alt={data.place.name} />
              <p className="location">
                Located in {data.place.city}, {data.place.state}
              </p>
            </div>
            <div className="col-sm-6">
            <h1 className="text-warning">{data.place.name} {/* SHOW DETAILS PAGE FOR ONE PLACE */}</h1>                 
              <h2>
                Rating
              </h2>
              <p>
                Not Rated
              </p>
              <h2>
                Description
              </h2>
              <p>
                {data.place.showEstablished()}
              </p>
              <h5>
                Serving: {data.place.cuisines}
              </h5>
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
            </div>           
            <div className=" p-2 sections">           
              <section className="comments" type="text">
                No comments yet!             
              </section>
            </div>           
          </div>
        </main>
      </Def>
    )
  }
  

module.exports = show