import AlbumCard from "./AlbumCard";
import albums from "../data/albums";

import "../styles/album.css";

export default function AlbumGrid(){

return(

<section className="albums">

<h2>

Trending Albums

</h2>

<div className="album-grid">

{

albums.map(album=>(

<AlbumCard

key={album.id}

album={album}

/>

))

}

</div>

</section>

)

}