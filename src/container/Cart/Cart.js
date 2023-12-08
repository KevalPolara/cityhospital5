import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  decrementCart,
  deleteCart,
  incrementCart
} from "../../redux/slice/cart.slice";
import { idID } from "@mui/material/locale";

function Cart(props) {
  const cart = useSelector((state) => state.cart);
  console.log(cart);
  const medicine = useSelector((state) => state.medicines);
  const dispatch = useDispatch();

  let finaData = cart.cart.map((v) => {
    console.log(v.qty);
    let ans = medicine.medicine.find((m) => m.id === v.id);
    console.log(ans);
  
    return { ...ans, qty1: v.qty};
  });

  console.log(finaData);

  let qty = finaData.reduce((acc,v)=>acc + v.qty1,0)
  console.log(qty);

  let ansCart = finaData.reduce((acc,v) => acc +(v.qty1 * v.price), 0);
  console.log(ansCart);

  const handleIncrement = (id) => {
    dispatch(incrementCart(id));
  };

  const handleDecrement = (id) => {
    dispatch(decrementCart(id));
  };

  const handleDelete = (id) => {
    dispatch(deleteCart(id));
  };

  return (
    <>
      <br></br>
      <div className="container">
        <div className="card">
          <div className="row">
            <div className="col-md-8 cart">
              <div className="title">
                <div className="row">
                  <div className="col">
                    
                    <h4>
                      <b>Shopping Cart</b>
                    </h4>
                  </div>
                  <div className="col align-self-center text-right text-muted">
                  {qty} items
                  </div>
                </div>
              </div>

              {finaData.map((v) => {
                return (
                  <div className="row border-top">
                    <div className="row main align-items-center">
                      {/* <div className="col-2"><img id='img' className="img-fluid" src="https://i.imgur.com/1GrakTl.jpg" /></div> */}
                      <div className="col">
                        <div className="row text-muted">{v.name}</div>
                        <div className="row">₹{v.price * v.qty1}</div>
                      </div>
                      <div className="col">
                        <a onClick={() => handleDecrement(v.id)}>-</a>
                        <a href="#" className="border">
                          {v.qty1}
                        </a>
                        <a onClick={() => handleIncrement(v.id)}>+</a>
                      </div>
                      <div className="col">
                        <span
                          className="close"
                          onClick={() => handleDelete(v.id)}
                        >
                          ✕
                        </span>
                        
                      </div>
                    </div>
                  </div>

                )
              })}
            </div>
            <div className="col-md-4 summary">
              <div>
                <h5>
                  <b></b>
                </h5>
              </div>
              <hr />
              <div className="row">
                <div className="col" style={{ paddingLeft: 0 }}>
                  {qty} items 
                </div>
                <div className="col text-right">€ 132.00</div>
              </div>
              <form>
                <p>SHIPPING</p>
                <select disabled>
                  <option className="text-muted">
                    Standard-Delivery- €5.00
                  </option>
                </select>
                <p>GIVE CODE</p>
                <input id="code" placeholder="Enter your code" disabled />
              </form>
              <div
                className="row"
                style={{
                  borderTop: "1px solid rgba(0,0,0,.1)",
                  padding: "2vh 0"
                }}
              >
                <div className="col">TOTAL PRICE </div>
                <div className="col text-right">₹{ansCart}</div>
              </div>
              <button className="checkoutbtn">CHECKOUT</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cart;
