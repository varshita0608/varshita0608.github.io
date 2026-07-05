
import { useState } from "react";

import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import AlbumRow from "../components/AlbumRow";
import Footer from "../components/Footer";
import SectionTitle from "../components/SectionTitle";
import CartSidebar from "../components/CartSidebar";
import Stats from "../components/Stats";
import albums from "../data/albums";
import VinylOfDay from "../components/VinylOfDay";
import "../styles/home.css";
export default function Home() {
    const [search, setSearch] = useState("");

const filteredAlbums = albums.filter(
  (album) =>
    album.title.toLowerCase().includes(search.toLowerCase()) ||
    album.artist.toLowerCase().includes(search.toLowerCase()) ||
    album.genre.toLowerCase().includes(search.toLowerCase())
);
const newArrivals = albums.filter(album => album.year >= 2024);
const editorsPicks = albums.filter(album =>
[
"Hit Me Hard And Soft",
"Chromakopia",
"Mayhem",
"Starboy",
"Nevermind",
"Future Nostalgia",
"Igor",
"Short N Sweet"
].includes(album.title)
);
  return (
   <>
  <Navbar />
  <CartSidebar />

  <Hero />

  <div className="search-container">
    <input
      type="text"
      placeholder="Search albums or artists..."
      value={search}
      onChange={(e) => setSearch(e.target.value)}
    />
  </div>

  {search ? (

    <AlbumRow
      title="Search Results"
      albums={filteredAlbums}
    />

  ) : (

    <>

      <Stats />

      <VinylOfDay />

      <SectionTitle
        title="EDITOR'S PICKS"
        subtitle="Our favourite records this month"
      />

      <AlbumRow
        albums={editorsPicks}
      />

      <SectionTitle
        title="NEW ARRIVALS"
        subtitle="Fresh pressings"
      />

      <AlbumRow
        albums={newArrivals}
      />

    </>

  )}

  <Footer />

</>
)}

  