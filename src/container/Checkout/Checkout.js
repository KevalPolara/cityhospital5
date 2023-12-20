import React from 'react';

function Checkout(props) {
    return (
        <>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
		<div className="col-md-4 container bg-default">
  <h4 className="my-4">
    Billing Address
  </h4>
  <form>
    <div className="form-row">
      <div className="col-md-6 form-group">
        <label htmlFor="firstname">First Name</label>
        <input type="text" className="form-control" id="firstname" placeholder="First Name" />
        <div className="invalid-feedback">
          Valid first name is required.
        </div>
      </div>
      <div className="col-md-6 form-group">
        <label htmlFor="lastname">Last Name</label>
        <input type="text" className="form-control" id="lastname" placeholder="Last Name" />
        <div className="invalid-feedback">
          Valid last name is required.
        </div>
      </div>
    </div>
    <div className="form-group">
      <label htmlFor="username">Username</label>
      <div className="input-group">
        <div className="input-group-prepend">
          <span className="input-group-text">@</span>
        </div>	
        <input type="text" className="form-control" id="username" placeholder="Username" required />
        <div className="invalid-feedback">
          Your username is required.
        </div>
      </div>
    </div>
    <div className="form-group">
      <label htmlFor="email">Email</label>
      <input type="email" className="form-control" id="email" placeholder="you@example.com" required />
    </div>
    <div className="form-group">
      <label htmlFor="adress">Address</label>
      <input type="text" className="form-control" id="adress" placeholder="1234 Main Street" required />
      <div className="invalid-feedback">
        Please enter your shipping address.
      </div>
    </div>
    <div className="form-group">
      <label htmlFor="address2">Address 2
        <span className="text-muted">(Optional)</span>
      </label>
      <input type="text" className="form-control" id="adress2" placeholder="Flat No" />
    </div>
    <div className="row">
      <div className="col-md-4 form-group">
        <label htmlFor="country">Country</label>
        <select type="text" className="form-control" id="country">
          <option value>Choose...</option>
          <option>United Kingdom</option>
        </select>
        <div className="invalid-feedback">
          Please select a valid country.
        </div>
      </div>
      <div className="col-md-4 form-group">
        <label htmlFor="city">City</label>
        <select type="text" className="form-control" id="city">
          <option value>Choose...</option>
          <option>London</option>
        </select>
        <div className="invalid-feedback">
          Please provide a valid city.
        </div>
      </div>
      <div className="col-md-4 form-group">
        <label htmlFor="postcode">Postcode</label>
        <select type="text" className="form-control" id="postcode">
          <option value>Choose...</option>
          <option>NW6 2LS</option>
        </select>
        <div className="invalid-feedback">
          Postcode required.
        </div>
      </div>
    </div>
    <hr />
    <div className="form-check">
      <input type="checkbox" className="form-check-input" id="shipping-adress" /> 
      Shipping address is the same as my billing address
      <label htmlFor="shipping-adress" className="form-check-label" />
    </div>
    <div className="form-check">
      <input type="checkbox" className="form-check-input" id="same-adress" />
      Save this information for next time
      <label htmlFor="same-adress" className="form-check-label" />					
    </div>
    <hr />
    <h4 className="mb-4">Payment</h4>
    <div className="form-check">
      <input type="radio" className="form-check-input" id="credit" name="payment-method" defaultChecked required />
      <label htmlFor="credit" className="form-check-label">Credit Card</label>
    </div>
    <div className="form-check">
      <input type="radio" className="form-check-input" id="debit" name="payment-method" required />
      <label htmlFor="debit" className="form-check-label">Debit Card</label>
    </div>
    <div className="form-check">
      <input type="radio" className="form-check-input" id="paypal" name="payment-method" required />
      <label htmlFor="paypal" className="form-check-label">PayPal</label>
    </div>
    <div className="row mt-4">
      <div className="col-md-6 form-group">
        <label htmlFor="card-name">Name on card</label>
        <input type="text" className="form-control" id="card-name" placeholder required />
        <div className="invalid-feedback">
          Name on card is required
        </div>
      </div>
      <div className="col-md-6 form-group">
        <label htmlFor="card-no">Card Number</label>
        <input type="text" className="form-control" id="card-no" placeholder required />
        <div className="invalid-feedback">
          Credit card number is required
        </div>
      </div>
    </div>
    <div className="form-row">
      <div className="col-md-5 form-group">
        <label htmlFor="expiration">Expire Date</label>
        <input type="text" className="form-control" id="card-name" placeholder required />
        <div className="invalid-feedback">
          Expiration date required
        </div>
      </div>
      <div className="col-md-5 form-group">
        <label htmlFor="ccv-no">Security Number</label>
        <input type="text" className="form-control" id="sec-no" placeholder required />
        <div className="invalid-feedback">
          Security code required
        </div>
      </div>
    </div>
    <hr className="mb-4" />
    <button className="btn btn-primary bt-lg btn-block" type="submit">Continue to Checkout</button>
  </form>
</div>
</>


    );
}

export default Checkout;