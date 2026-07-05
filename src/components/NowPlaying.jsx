import "../styles/nowplaying.css";
import albums from "../data/albums";

const album =
  albums[Math.floor(Math.random() * albums.length)];

export default function NowPlaying(){

return(

<div className="now-playing">

<p>♪ NOW PLAYING</p>

<h4>{album.title}</h4>

<span>{album.artist}</span>

</div>

);

}