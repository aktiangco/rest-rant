const React = require('react')
const Def = require('../default')


function index(data) {
  let placesFormatted = data.Places.map((place) => {
    return (
      <div  className="col-sm-4">
        <h2>{place.name}</h2>
        <p className="text-center">
          {place.cuisines}
        </p>
        <img className="border border-warning img-places" src={place.pic} alt={place.name} />
        <p className="text-center">
          Located in{' '}{place.city}, {place.state}
        </p>
        </div>
        
    )
  })
  return (
    <Def>
        <main>
        <h1>PLACES INDEX PAGE</h1>
        <div className="backButton">
          <a href="/"><button className="btn-primary">Go back Home</button></a>
          <a href="/places/new"><button className="btn-primary">Add a New Place</button></a>
        </div>
        <div className="row">
          {placesFormatted}
        </div>
        
        </main>
    </Def>
)
}



module.exports = index