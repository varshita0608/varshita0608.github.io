import AlbumCard from "./AlbumCard";
import "../styles/albumrow.css";

export default function AlbumRow({ title, albums }) {
  return (
    <section className="album-row">

      <div className="row-header">
        <h2>{title}</h2>

      <span className="album-count">

{albums.length} Albums

</span>
      </div>

      <div className="row-scroll">

        {albums.map((album) => (
          <div className="row-card" key={album.id}>
            <AlbumCard album={album} />
          </div>
        ))}

      </div>

    </section>
  );
}