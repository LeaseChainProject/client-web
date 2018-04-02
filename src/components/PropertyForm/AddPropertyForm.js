import React from 'react'

export default class AddPropertyForm extends React.Component {
  render() {
    return (
      <div className="col-lg-6 col-md-8 col-xs-10">
        <form>
          <fieldset>
            <h4>Add a new property here.</h4><br/>
            <div className="form-group"><label for="PropertyName">Property Name</label><input type="text" className="form-control" id="PropertyName" name="PropertyName" /><small id="PropertyNamesmall" helpclassName="form-text text-muted">Name of the property</small></div>
            <div className="form-group"><label for="Address">Address</label><input type="text" className="form-control" id="Address" name="Address" /><small id="Addresssmall" helpclassName="form-text text-muted">Street Address</small></div>
            <div className="form-group"><label for="Zipcode">Zip Code</label><input type="text" className="form-control" id="Zipcode" name="Zipcode" /><small id="Zipcodesmall" helpclassName="form-text text-muted">5- or 9-digit ZIP Code</small></div>
            <div className="form-group"><label for="NumberofUnits"># Units</label><input type="text" className="form-control" id="NumberofUnits" name="NumberofUnits" /><small id="NumberofUnitssmall" helpclassName="form-text text-muted">Number of Units in the property</small></div>
            <br/><h4>Units</h4><br/>
            <table className="table">
              <thead>
                <tr>
                  <th>Unit #</th>
                  <th>Unit Type</th>
                  <th>Apartment #</th>
                  <th><a href="link-to-add-script"><i className="green fa fa-plus"></i></a></th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>2BR/2BA</td>
                  <td>401</td>
                  <td><a href="link-to-del-script"><i className="blue fa fa-times"></i></a></td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>1BR/1BA</td>
                  <td>402</td>
                  <td><a href="link-to-del-script"><i className="blue fa fa-times"></i></a></td>
                </tr>
              </tbody>
            </table>
            <button type="submit" className="btn btn-primary">Create</button>&nbsp;&nbsp;&nbsp;<button type="submit" className="btn btn-secondary">Edit</button>
        </fieldset>
      </form>
    </div>
    )
  }
}