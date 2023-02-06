const React = require('react')
const Def = require('../default')

function new_form(data) {
  let message = ''
  if (data.message) {
    message = (
      <h4 className="alert">
        {data.message}
      </h4>
    )
  }
    return (
      <Def>
        <main>
          <h1 className="text-warning">Add a New Place {/* Create Form */}</h1>
          {message}
          <br />
            <form className="container-fluid form-group w-75" action="/places" method="POST">
              <div className="row">
              <div className="col-sm-6 col-md-4 col-lg-3 form-group  forms-name">
                <label htmlFor="name">PLace Name:</label>
                <input 
                className="form-control" 
                placeholder="..."
                id="name" 
                name="name" 
                  required
                />
              </div>
              <div className="col-sm-6 col-md-4 col-lg-3 form-group forms-name">
                <label htmlFor="pic">Place Picture:</label>
                <input 
                className="form-control" 
                placeholder="URL" 
                type="text" 
                id="pic" 
                name="pic"
                />
              </div>
              <div className="col-sm-6 col-md-4 col-lg-3 form-group forms-name">
                <label htmlFor="city">City:</label>
                <input 
                className="form-control" 
                placeholder="..."
                id="city" 
                name="city"
                />
              </div>
              <div className="col-sm-6 col-md-4 col-lg-3 form-group forms-name">
                <label htmlFor="state">State:</label>
                <input 
                className="form-control" 
                placeholder="..."
                list="state-list" 
                id="state" 
                  name="state"
                />
                <datalist id="state-list">
                          <option value="AK">Alaska</option>
                          <option value="AL">Alabama</option>
                          <option value="AR">Arkansas</option>
                          <option value="AZ">Arizona</option>
                          <option value="CA">California</option>
                          <option value="CT">Connecticut</option>
                          <option value="CO">Colorado</option>
                          <option value="DE">Delaware</option>
                          <option value="FL">Florida</option>
                          <option value="GA">Georgia</option>
                          <option value="HI">Hawaii</option>
                          <option value="IA">Iowa</option>
                          <option value="ID">Idaho</option>
                          <option value="IL">Illinois</option>
                          <option value="IN">Indiana</option>
                          <option value="KY">Kentucky</option>
                          <option value="LA">Louisiana</option>
                          <option value="MA">Massachusets</option>
                          <option value="MD">Maryland</option>
                          <option value="ME">Maine</option>
                          <option value="MI">Michigan</option>
                          <option value="MN">Minnesota</option>
                          <option value="MO">Missouri</option>
                          <option value="MS">Mississippi</option>
                          <option value="MT">Montana</option>
                          <option value="NC">North Carolina</option>
                          <option value="ND">North Dakota</option>
                          <option value="NE">Nebraska</option>
                          <option value="NH">New Hampshire</option>
                          <option value="NJ">New Jersey</option>
                          <option value="NM">New Mexico</option>
                          <option value="NV">Nevada</option>
                          <option value="NY">New York</option>
                          <option value="OK">Oklahoma</option>
                          <option value="OH">Ohio</option>
                          <option value="OR">Oregon</option>
                          <option value="PA">Pennsylvania</option>
                          <option value="RI">Rhode Island</option>
                          <option value="SC">South Carolina</option>
                          <option value="SD">South Dakota</option>
                          <option value="TN">Tennessee</option>
                          <option value="TX">Texas</option>
                          <option value="UT">Utah</option>
                          <option value="VA">Virginia</option>
                          <option value="VT">Vermont</option>
                          <option value="WA">Washington</option>
                          <option value="WI">Wisconsin</option>
                          <option value="WV">West Virginia</option>
                          <option value="WY">Wyoming</option>
                      </datalist>
                </div>
                <div className="col-sm-6 col-md-4 col-lg-3 form-group forms-name ">
                <label htmlFor="cuisines">Cuisines:</label>
                <input 
                className="form-control"
                placeholder="tacos, cheap dinner, Max's"  
                id="cuisines" 
                name="cuisines" required/>
                </div> 
              <div className="col-sm-6 col-md-4 col-lg-3 form-group forms-name">
                <label for="founded">Founded Year</label>
                <input
                  className="form-control"
                  id="founded"
                  name="founded"
                  type="number"
                  value={new Date().getFullYear()}
                />
              </div>
              <div className="p-2">
                <input 
                className=" btn-primary p-2" 
                type="submit" 
                value="Add Place"
                />
              </div>
              </div>
            </form>          
         </main>
      </Def>
    )
  }
  

module.exports = new_form