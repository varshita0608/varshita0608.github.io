import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import AlbumCard from "../components/AlbumCard";
import albums from "../data/albums";
import "../styles/genres.css";

export default function Genres() {

  const genres = [...new Set(albums.map(album => album.genre))].sort();

  const [selectedGenre, setSelectedGenre] = useState(genres[0]);

  const genreAlbums = albums.filter(
    album => album.genre === selectedGenre
  );

  return (
    <>
      <Navbar />

      <div className="genres-page">

        <h1>Genres</h1>

        <div className="genre-list">

          {genres.map((genre) => (

            <button
              key={genre}
              className={
                selectedGenre === genre
                  ? "genre active"
                  : "genre"
              }
              onClick={() => setSelectedGenre(genre)}
            >
              {genre}
            </button>

          ))}

        </div>

        <h2>{selectedGenre}</h2>

        <div className="genre-grid">

          {genreAlbums.map(album => (

            <AlbumCard
              key={album.id}
              album={album}
            />

          ))}

        </div>

      </div>

      <Footer />
    </>
  );
}