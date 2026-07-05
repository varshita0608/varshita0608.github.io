import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import "./../styles/cart.css";

export default function CartSidebar() {

  const {
    cart,
    removeFromCart,
    cartOpen,
    setCartOpen
  } = useContext(CartContext);

  const total = cart.reduce(
    (sum, item) => sum + item.price,
    0
  );

  return (

    <div className={`cart-sidebar ${cartOpen ? "open" : ""}`}>

      <button
        className="close-cart"
        onClick={() => setCartOpen(false)}
      >
        ✕
      </button>

      <h2>Shopping Cart</h2>

      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (

        cart.map((item) => (

          <div
            className="cart-item"
            key={item.id}
          >

            <img
              src={item.image}
              alt=""
            />

            <div>

              <h4>{item.title}</h4>

              <p>₹{item.price}</p>

              <button
                onClick={() =>
                  removeFromCart(item.id)
                }
              >
                Remove
              </button>

            </div>

          </div>

        ))

      )}

      <h3>Total ₹{total}</h3>

      <button className="checkout">

        Checkout

      </button>

    </div>

  );

}