import { useContext } from "react";
import { CartContext } from "../context/CartContext";

export default function Cart(){

const {cart}=useContext(CartContext);

return(

<div>

<h2>

Cart ({cart.length})

</h2>

</div>

)

}