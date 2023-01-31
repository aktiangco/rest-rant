const React = require('react')
const Def = require('../default')

function show(data) {
    return (
      <Def>
            
        <main>
        <br />
          <h1 className="text-warning">{data.place.name} {/* SHOW DETAILS PAGE FOR ONE PLACE */}</h1>
          <br />
          <span className="content">
            <div>
              <img className="border border-warning img-places" src={data.place.pic} />
            </div>
            <span className="sections">
              <section className="">Located in {data.place.city}, {data.place.state}</section>
              <section className="">{data.place.cuisines}</section>
              <div className="p-2">
              <fieldset className="rating p-2">
                <input type="radio" id="star5" name="rating" value="5" /><label class = "full" for="star5" title="Awesome - 5 stars"></label>
                <input type="radio" id="star4half" name="rating" value="4 and a half" /><label className="half" for="star4half" title="Pretty good - 4.5 stars"></label>
                <input type="radio" id="star4" name="rating" value="4" /><label class = "full" for="star4" title="Pretty good - 4 stars"></label>
                <input type="radio" id="star3half" name="rating" value="3 and a half" /><label className="half" for="star3half" title="Meh - 3.5 stars"></label>
                <input type="radio" id="star3" name="rating" value="3" /><label class = "full" for="star3" title="Meh - 3 stars"></label>
                <input type="radio" id="star2half" name="rating" value="2 and a half" /><label className="half" for="star2half" title="Kinda bad - 2.5 stars"></label>
                <input type="radio" id="star2" name="rating" value="2" /><label class = "full" for="star2" title="Kinda bad - 2 stars"></label>
                <input type="radio" id="star1half" name="rating" value="1 and a half" /><label className="half" for="star1half" title="Meh - 1.5 stars"></label>
                <input type="radio" id="star1" name="rating" value="1" /><label class = "full" for="star1" title="Sucks big time - 1 star"></label>
                <input type="radio" id="starhalf" name="rating" value="half" /><label class="half" for="starhalf" title="Sucks big time - 0.5 stars"></label>
              </fieldset>
              
              <section className="p-2">Rating</section>
             
                <section className="comments" type="text" >No comments yet!</section>
              </div>
            </span>
            </span>

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