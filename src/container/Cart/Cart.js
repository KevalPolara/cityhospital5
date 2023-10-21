import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrementCart, incrementCart } from "../../redux/action/cart.action";

function Cart(props) {

  const cart=useSelector(state=>state.cart);
  const medicine=useSelector(state=>state.medicines);
  const dispatch = useDispatch();

  let finaData=cart.cart.map((v)=>{
    let ans=medicine.medicine.find((m)=>m.id===v.id)
    

    return {...ans ,qty1:v.qty}
  })

  console.log(finaData);

  console.log(cart,medicine);

  const handleIncrement=(id)=>{
    dispatch(incrementCart(id))
  }

  const handleDecrement=(id)=>{
    dispatch(decrementCart(id))
  }
  
 
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
                    3 items
                  </div>
                </div>
              </div>

              <div className="row border-top">
              {
                
                    finaData.map((v)=>{

                      return(
                        <div className="row main align-items-center">
    
                  {/* <div className="col-2"><img id='img' className="img-fluid" src="https://i.imgur.com/1GrakTl.jpg" /></div> */}
                  <div className="col">
                    <div className="row text-muted">{v.name}</div>
                    <div className="row">{v.price * v.qty1}</div>
                  </div>
                  <div className="col">
                    <button onClick={()=>handleDecrement(v.id)}>-</button>
                    <a href="#" className="border">
                      {v.qty1}
                    </a>
                    <button onClick={()=>handleIncrement(v.id)}>+</button>
                  </div>
                  <div className="col">
                    <span className="close">✕</span>
                  </div>
                </div>
                      )
                      
                    })
                  }
                
              </div>
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
                  ITEMS 3
                </div>
                <div className="col text-right">€ 132.00</div>
              </div>
              <form>
                <p>SHIPPING</p>
                <select disabled>
                  <option className="text-muted">Standard-Delivery- €5.00</option>
                </select>
                <p>GIVE CODE</p>
                <input id="code" placeholder="Enter your code" disabled />
              </form>
              <div
                className="row"
                style={{ borderTop: "1px solid rgba(0,0,0,.1)", padding: "2vh 0" }}
              >
                <div className="col">TOTAL PRICE</div>
                <div className="col text-right">€ 137.00</div>
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
