const fs = require("fs");
const path = require("path");

const albumFolder = path.join(__dirname, "../src/assets/albums");

const files = fs.readdirSync(albumFolder);

function titleCase(str) {
  return str
    .replace(/\.(jpg|jpeg|png|webp)$/i, "")
    .replace(/-/g, " ")
    .replace(/\b\w/g, c => c.toUpperCase());
}

function getArtist(filename) {

  const name = filename.toLowerCase();

  if(name.startsWith("billie")) return "Billie Eilish";
  if(name.startsWith("weeknd")) return "The Weeknd";
  if(name.startsWith("nirvana")) return "Nirvana";
  if(name.startsWith("am-")) return "Arctic Monkeys";
  if(name.startsWith("ariana")) return "Ariana Grande";
  if(name.startsWith("britney")) return "Britney Spears";
  if(name.startsWith("conan")) return "Conan Gray";
  if(name.startsWith("doja")) return "Doja Cat";
  if(name.startsWith("dua")) return "Dua Lipa";
  if(name.startsWith("finneas")) return "FINNEAS";
  if(name.startsWith("gaga")) return "Lady Gaga";
  if(name.startsWith("girlinred")) return "girl in red";
  if(name.startsWith("miko")) return "Young Miko";
  if(name.startsWith("mitski")) return "Mitski";
  if(name.startsWith("renee")) return "Reneé Rapp";
  if(name.startsWith("sabrina")) return "Sabrina Carpenter";
  if(name.startsWith("tyler")) return "Tyler, The Creator";
  if(name.startsWith("olivia")) return "Olivia Rodrigo";
  if(name.startsWith("diljit")) return "Diljit Dosanjh";
  if(name.startsWith("karan")) return "Karan Aujla";
  if(name.startsWith("dominic")) return "Dominic Fike";
  if(name.startsWith("marias")) return "The Marías";

  return "Various Artists";
}

const albums = files.map((file,index)=>({

    id:index+1,

    title:titleCase(file),

    artist:getArtist(file),

    genre:"Music",

    category:"Featured",

    year:2024,

    price:2999+Math.floor(Math.random()*1200),

    image:`${file}`

}));

let output = `const albumImages = import.meta.glob("../assets/albums/*",{eager:true,import:"default"});\n\n`;

output += `
const getImage=(filename)=>{
return albumImages[\`../assets/albums/\${filename}\`];
};

`;

output += "const albums=[\n";

albums.forEach(a=>{

output += `
{
id:${a.id},
title:"${a.title}",
artist:"${a.artist}",
genre:"${a.genre}",
category:"${a.category}",
year:${a.year},
price:${a.price},
image:getImage("${a.image}")
},
`;

});

output+="];\n\nexport default albums;";

fs.writeFileSync(
path.join(__dirname,"../src/data/albums.js"),
output
);

console.log("Generated",albums.length,"albums.");