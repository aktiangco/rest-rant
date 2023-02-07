const React = require('react')
const Def = require('../default')

function show(data) {
  // adding comments section
  let comments = (
    <h3 className="inactive">
      No comments yet!
    </h3>
  )
  if (data.place.comments.length) {
    comments = data.place.comments.map(c => {
      return (
        // Add css later
        <div className="border">
          <h2 className="rant">
            {c.rant
              ? 'Rant! 😡'
              : 'Rave! 😍'
            }
          </h2>
          <h4>{c.content}</h4>
          <h3>
            <strong>- {c.author}</strong>
          </h3>
          <h4>Rating: {c.stars}</h4>
        </div>
      )
    })
  }
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
            
            {/* comments section */}
            <div className=" p-2 sections comments">           
                <h3 className=" p-2 ">Comments</h3>
                {comments}         
            </div> 

            <div className=" p-2 sections comments">
              <form className="container-fluid form-group w-75" action={`/comments/${data.id}?_method=PUT`} method="POST"> // Todo: action path
                <div className="row">
                <div className="col-sm-6 col-md-4 col-lg-3 form-group forms-name">
                  <label htmlFor="author" >Author:</label>
                    <input
                      className="form-control"
                      type="text" 
                      id="author" 
                      name="author"
                    />
                  </div>
                  <div className="col-sm-6 col-md-4 col-lg-3 form-group forms-name">
                  <label htmlFor="content">Content</label>
                    <input
                      className="form-control"
                      type="textarea" 
                      id="content" 
                      name="content"
                      />
                  </div>
                  <div className="col-sm-6 col-md-4 col-lg-3 form-group forms-name">
                  <label htmlFor="stars">Star Rating</label>
                    <input
                      className="form-control"
                      type="number" 
                      id="stars" 
                      name="stars"
                      />
                  </div>
                  <div className="col-sm-6 col-md-4 col-lg-3  d-flex p-2">
                  <label htmlFor="rant" className="checkbox d-flex p-2">Rant</label>
                    <input
                      className="checkbox d-flex p-2"
                      type="checkbox" 
                      id="rant" 
                      name="rant"
                      />
                </div>
                </div>
                <div className="p-2">
                <input 
                className=" btn-primary p-2" 
                type="submit" 
                value="Add Comment"
                />
              </div>
              </form> 
            </div>
          </div>
        </main>
      </Def>
    )
  }
  

module.exports = show