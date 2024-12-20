
import Reac, { useContext } from "react" 
import "./Cart.css"
import {StoreContext} from "../../context/StoreContext"
const Cart =()=>{

    const {cartItems,food_list,removeFromCart}=useContext(StoreContext)

    return (
        <div className="cart">
          <div className="cart-items">
            <div className="cart-items-title">
                <p>Items</p>
                <p>Title</p>
                <p>Price</p>
                <p>Quantity</p>
                <p>Total</p>
                <p>Remove</p>

            </div>
            <br/>
            <hr/>
            {food_list.map((item,index)=>{
              if(cartItems[item._id]>0){
                return (
                  <div>
                  <div className="cart-items-title cart-items-item">
                    <img src={item.image} alt="" />
                    <p>{item.name}</p>
                    <p>${item.price}</p>
                    <p>{cartItems[item._id]}</p>
                    <p>${item.price*cartItems[item._id]}</p>
                    <p className="crose" onClick={()=>removeFromCart(item._id)}>X</p>
                  </div>
                  <hr/>
                  </div>
                )
              }

            })}
          </div>
          <div className="cart-bottom">
            <div className="cart-totl">
              <h2>Cart Total</h2>
              <div>
                <div className="cart-total-detalis">
                <p>Subtotal</p>
                <p>{0}</p>
                </div>
                <hr />
                <div className="cart-total-detalis">
                <p>Delivery Fee</p>
                <p>{2}</p>
                </div>
                <hr />
                <div className="cart-total-detalis">
                <b>Total</b>
                <b>{0}</b>
                </div>
                      <hr />      
                            
                 </div>
            </div>
            <button>Proceed To Checkout</button>
          </div>

        </div>
    )
}
export default Cart