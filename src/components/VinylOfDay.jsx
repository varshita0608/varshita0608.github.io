import albums from "../data/albums";
import "../styles/vinylofday.css";

const album =
  albums[Math.floor(Math.random() * albums.length)];

export default function VinylOfDay() {

  return (

    <section className="vinyl-day">

      <img
        src={album.image}
        alt={album.title}
      />

      <div className="vinyl-info">

        <span>FEATURED TODAY</span>

        <h2>{album.title}</h2>

        <h3>{album.artist}</h3>

        <p>
          {album.year} • {album.genre}
        </p>

        <h4>₹ {album.price}</h4>

        <div className="vinyl-buttons">

          <button>Add to Cart</button>

          <button className="outline">
            View Album
          </button>

        </div>

      </div>

    </section>

  );

}