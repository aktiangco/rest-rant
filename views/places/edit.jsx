const React = require('react')
const Def = require('../default')

function  edit_form(data) {
    return (
      <Def>
          <main>
          <h1 className="text-warning">Edit Place</h1>
          <br />
          <form className="container-fluid form-group w-75 " action={`/places/${data.place.id}?_method=PUT`} method="POST"> {/*need to fix path {data.place.id} */}
            <div className="row">
              <div className="form-group col-sm-6">
                <label htmlFor="name">PLace Name:</label>
                <input className="form-control" id="name" name="name" value={data.place.name} required />
              </div>
              <div className="form-group col-sm-6">
                <label htmlFor="pic">Place Picture:</label>
                <input className="form-control" type="text" id="pic" name="pic"/>
              </div>
              <div className="form-group col-sm-6">
                <label htmlFor="city">City:</label>
                <input className="form-control" id="city" name="city"/>
              </div>
              <div className="form-group col-sm-6">
                <label htmlFor="state">State:</label>
                <input className="form-control" list="state" id="state" name="state"/>
              
              </div>
              <div className="form-group col-sm-6">
                <label htmlFor="cuisines">Cuisines:</label>
                <input className="form-control" id="cuisines" name="cuisines" required/>
              </div>  
              <br />
              <div>
                <input className="btn-primary" type="submit" value="Add Place" />
              </div>
            </div>
          </form>
          </main>
      </Def>
    )
  }
  

module.exports = edit_form