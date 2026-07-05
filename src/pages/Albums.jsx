import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import AlbumCard from "../components/AlbumCard";
import albums from "../data/albums";
import "../styles/albums.css";

export default function Albums() {
  return (
    <>
      <Navbar />

      <div className="albums-page">
        <h1>All Albums</h1>

        <div className="albums-grid">
          {albums.map(album => (
            <AlbumCard key={album.id} album={album} />
          ))}
        </div>
      </div>

      <Footer />
    </>
  );
}