const React = require('react')
const Def = require('../default')

function new_form() {
    return (
      <Def>
        <main>
          <h1>Add a New Place {/* Create Form*/}</h1>
          <div className="backButton">
            <a href="/"><button className="btn-primary">Go back Home</button></a>
          </div>
          <form action="/places" method="POST">
            <div className="form-group">
              <label htmlFor="name">PLace Name:</label>
              <input className="form-control" id="name" name="name" required/>
            </div>
            <div className="form-group">
              <label htmlFor="pic">Place Picture:</label>
              <input className="form-control" type="url" id="pic" name="pic"/>
            </div>
            <div className="form-group">
              <label htmlFor="city">City:</label>
              <input className="form-control" id="city" name="city"/>
            </div>
            <div className="form-group">
              <label htmlFor="state">State:</label>
              <input className="form-control" id="state" name="state"/>
            </div>
            <div className="form-group">
              <label htmlFor="cuisines">Cuisines:</label>
              <input className="form-control" id="cuisines" name="cuisines" required/>
            </div>
            
            <input className="btn-primary" type="submit" value="Add Place"/>
          </form>
         </main>
      </Def>
    )
  }
  

module.exports = new_form