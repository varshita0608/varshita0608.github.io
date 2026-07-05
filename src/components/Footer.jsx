import "../styles/footer.css";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="footer">

      <div className="footer-logo">
        💿 VinylVerse
        <p>Discover timeless classics and modern favourites.</p>
      </div>

      <div className="footer-links">
        <Link to="/albums">Albums</Link>
        <Link to="/artists">Artists</Link>
        <Link to="/genres">Genres</Link>
      </div>

      <div className="footer-credit">
        <p>Made with React + Vite</p>
        <p>© 2026 VinylVerse</p>
      </div>

    </footer>
  );
}