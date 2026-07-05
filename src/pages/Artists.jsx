import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import AlbumCard from "../components/AlbumCard";
import albums from "../data/albums";
import "../styles/artists.css";

export default function Artists() {
  const artists = [...new Set(albums.map(album => album.artist))].sort();

  const [selectedArtist, setSelectedArtist] = useState(artists[0]);

  const artistAlbums = albums.filter(
    album => album.artist === selectedArtist
  );

  return (
    <>
      <Navbar />

      <div className="artists-page">

        <h1>Artists</h1>

        <div className="artist-list">

          {artists.map((artist) => (

            <button
              key={artist}
              className={
                selectedArtist === artist
                  ? "artist active"
                  : "artist"
              }
              onClick={() => setSelectedArtist(artist)}
            >
              {artist}
            </button>

          ))}

        </div>

        <h2>{selectedArtist}</h2>

        <div className="artist-grid">

          {artistAlbums.map(album => (

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