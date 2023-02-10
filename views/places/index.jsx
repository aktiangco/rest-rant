const React = require('react')
const Def = require('../default')


function index(data) {
  let placesFormatted = data.places.map((place) => {
    return (
      <div  className="col-sm-6 col-md-4 col-lg-3">
        <h2>
          <a className="text-warning" href={`/places/${place.id}`}>
            {place.name} 
          </a>
        </h2>
        <p>
          {place.cuisines}
        </p>
        <img className="border border-warning img-places img-fluid " src={place.pic} alt={place.name} />
        <p className="location">
          Located in{' '}{place.city}, {place.state}
          <br/>
          Found: {place.founded}
        </p>
        
        </div>
        
    )
  })
  return (
    <Def>
        <main>
        <h1 className="text-warning">PLACE's to Rave or Rant</h1> 
        <br />
        <div className="row">
          {placesFormatted}
        </div>
        
        </main>
    </Def>
)
}



module.exports = index