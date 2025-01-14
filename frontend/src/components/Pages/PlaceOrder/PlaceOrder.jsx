import React, { useContext } from "react";
import { StoreContext } from "../../context/StoreContext";
import "./PlaceOrder.css"

const PlaceOrder =()=>{

    const {getTotalCartAmount}=useContext(StoreContext)

    return (
        <form className="place-order">
           <div className="place-order-left">
            <p className="title">Delivery Information</p>
            
           <div className="multi-fields">
            <input type="text" placeholder="First name" />
            <input type="text" placeholder="Last name" />
           </div>
            
            <input type="email" placeholder="Email address" />
            <input type="text" placeholder="Street" />
            <div className="multi-fields">
            <input type="text" placeholder="city" />
            <input type="text" placeholder="state" />
           </div>
           <div className="multi-fields">
            <input type="text" placeholder="ZIP Code" />
            <input type="text" placeholder="Country" />
           </div>
           <input type=" text" placeholder="Phone" />
           </div>
           <div className="place-order-right">

           <div className="cart-total">
              <h2>Cart Total</h2>
              <div>
                <div className="cart-total-detalis">
                <p>Subtotal</p>
                <p>$ {getTotalCartAmount()}</p>
                </div>
                <hr />
                <div className="cart-total-detalis">
                <p>Delivery Fee</p>
                <p>$ {getTotalCartAmount()===0? "0" :"2"}</p>
                </div>
                <hr />
                <div className="cart-total-detalis">
                <b>Total</b>
                <b>$ {getTotalCartAmount()===0? "0": getTotalCartAmount()+2 }</b>
                </div>
                      <hr />      
                    <button onClick={()=>navigate("/order")}>Checkout Place order</button>
                 </div>
            </div>

           </div>
           
        </form>
    )
}
export default PlaceOrder