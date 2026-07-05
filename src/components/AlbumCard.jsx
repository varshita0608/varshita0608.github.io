import "../styles/album.css";
import { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";
import { FaHeart, FaShoppingCart } from "react-icons/fa";
import AlbumModal from "./AlbumModal";
import { WishlistContext }
from "../context/WishlistContext";
export default function AlbumCard({ album }) {

  const { addToCart } = useContext(CartContext);
  const { addToWishlist } =
useContext(WishlistContext);
  const [open,setOpen]=useState(false);
 

  return (

    <>

    <div className="card">

      <img
        src={album.image}
        alt={album.title}
        onClick={()=>setOpen(true)}
        style={{cursor:"pointer"}}
      />

      <div className="card-content">

        <h3>{album.title}</h3>

        <p>{album.artist}</p>

<small>
  {album.year} • {album.genre}
</small>

        <span>₹ {album.price}</span>

        <div className="buttons">

         <button
onClick={() => {

console.log("clicked");

addToWishlist(album);

}}
>

<FaHeart/>

</button>
          <button
            onClick={() => addToCart(album)}
          >

            <FaShoppingCart/>

          </button>

        </div>

      </div>

    </div>

    <AlbumModal

      album={open ? album : null}

      close={()=>setOpen(false)}

    />

    </>

  );

}