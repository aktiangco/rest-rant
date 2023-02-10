const React = require('react')
const Def = require('../default')

function show(data) {
  // adding comments section
  let comments = (
    <h3 className="inactive">
      No comments yet!
    </h3>
  )
  // adding star rating
  let rating = (
    <h3 className="inactive">
      Not yet rated
    </h3>
  )
  if (data.place.comments.length) {
    // star rating logic
    let sumRatings = data.place.comments.reduce((tot, c) => {
      return tot + c.stars
    }, 0)
    let averageRating = Math.round(sumRatings / data.place.comments.length)
    let stars = ''
    for (let i = 0; i < averageRating; i++) {
      stars += '⭐️'
    }
    rating = (
      <h3>
        {stars} stars
      </h3>
    )
    // comment logic
    comments = data.place.comments.map(c => {
      return (
        // Add css later
        <div>
          <div className="comment2">
            <h3>
              {c.rant
                ? 'Rant! 😡'
                : 'Rave! 😍'
              }
            </h3>
            <h4>{c.content}</h4>
            <h4>
              <strong>📝 {c.author}</strong>
            </h4>
            <h4>Rating: {c.stars}</h4>
            <form method="POST" action={`/places/${data.place.id}/comment/${c.id}?_method=DELETE`}>
              <input type="submit" className="btn btn-danger" value="Delete Comment" />
            </form>
          <br/>
          </div>
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
              {rating}
              <br/>
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
                <a href={`/places/${data.place.id}/edit`} className="btn btn-primary"> 
                  Edit
                </a> 
              </div>           
              <div className="p-2">
                <form method="POST" action={`/places/${data.place.id}?_method=DELETE`}> 
                  <button type="submit" className="btn btn-danger">
                    Delete
                  </button>
                </form> 
              </div>  
            </div>
            </div> 
            
            {/* comments section */}
            <div className=" p-2 comments">           
              <h2 className=" p-2 ">Reviews</h2>
              
              <div className="comment-section">
                <div className="comment2">
                {comments}
                </div>
              </div>
                
          
              
            
            <div className=" p-2 sections comments">
              <h3>Got Your Own Rant or Rave?</h3>
               {/* action path */}
              <form className="container-fluid form-group w-75" action={`/places/${data.place.id}/comment`} method="POST">
               
                <div className="row">
                <div className="col-sm-6 col-md-4 col-lg-3 form-group forms-name">
                  <label htmlFor="author" >Author:</label>
                    <input
                      className="form-control"
                      placeholder="Your Name Here"
                      type="text" 
                      id="author" 
                      name="author"
                    
                    />
                  </div>
                  <div className="col-sm-6 col-md-4 col-lg-3 form-group forms-name">
                  <label htmlFor="content">Content</label>
                    <input
                      placeholder="Write your Comment Here"
                      className="form-control"
                      type="textarea" 
                      id="content" 
                      name="content"
                      />
                  </div>
                  <div className="col-sm-6 col-md-4 col-lg-3">
                  <label htmlFor="stars" className="text-warning p-2">Star Rating</label>
                    <input
                      className="form-control-range form-control d-flex p-2 slider"
                      type="range" 
                      id="stars" 
                      name="stars"
                      step="0.5"
                      min="1"
                      max="5"
                      />
                  </div>
                  <div className="col-sm-6 col-md-4 col-lg-3 font-weight-bold rant-checkbox">
                  <label htmlFor="rant" className="p-2 text-danger "><h4>Rant 😡</h4></label>
                    <input
                      className="checkbox p-2"
                      type="checkbox" 
                      id="rant" 
                      name="rant"
                    
                      />
                </div>
                </div>
                <div className="p-2">
                <input 
                className="btn btn-primary p-2" 
                type="submit" 
                value="Add Comment"
                />
              </div>
              </form> 
            </div>
            </div>
            </div>
        </main>
      </Def>
    )
  }
  

module.exports = show