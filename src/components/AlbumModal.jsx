import "../styles/modal.css";
import { FaTimes, FaShoppingCart } from "react-icons/fa";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";

export default function AlbumModal({ album, close }) {

  const { addToCart } = useContext(CartContext);

  if (!album) return null;

  return (
    <div className="modal-overlay" onClick={close}>

      <div
        className="modal-content"
        onClick={(e) => e.stopPropagation()}
      >

        <button className="close-btn" onClick={close}>
          <FaTimes />
        </button>

        <img
          src={album.image}
          alt={album.title}
        />

        <div className="modal-info">

          <h1>{album.title}</h1>

          <h3>{album.artist}</h3>

          <p>
            <strong>Year:</strong> {album.year}
          </p>

          <p>
            <strong>Genre:</strong> {album.genre}
          </p>

          <h2>₹ {album.price}</h2>

          <button
            className="modal-cart"
            onClick={() => addToCart(album)}
          >
            <FaShoppingCart /> Add To Cart
          </button>

        </div>

      </div>

    </div>
  );
}