import "../styles/navbar.css";

import {

FaMoon,

FaHeart,

FaShoppingCart

}

from "react-icons/fa";
import { WishlistContext } from "../context/WishlistContext";
import {useContext} from "react";
import { ThemeContext } from "../context/ThemeContext";
import {CartContext} from "../context/CartContext";
import { Link } from "react-router-dom";

export default function Navbar(){
const { darkMode, toggleTheme } =
useContext(ThemeContext);
const {
  cart,
  setCartOpen
} = useContext(CartContext);
 const { wishlist }=useContext(WishlistContext);
return(

<header className="navbar">

<div className="logo">

💿 Black Vinyl Co.

</div>

<nav className="nav-links">

<Link to="/">Home</Link>

<Link to="/albums">Albums</Link>

<Link to="/artists">Artists</Link>

<Link to="/genres">Genres</Link>
</nav>

<div className="nav-icons">

<button onClick={toggleTheme}>

<FaMoon/>

</button>

<button>

<FaHeart/>

<span>

{wishlist.length}

</span>

</button>

<button onClick={() => setCartOpen(true)}>

  <FaShoppingCart />

  <span>{cart.length}</span>

</button>

</div>

</header>

)

}