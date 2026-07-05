const albumImages = import.meta.glob("../assets/albums/*",{eager:true,import:"default"});


const getImage=(filename)=>{
return albumImages[`../assets/albums/${filename}`];
};

const albums=[

{
id:1,
title:"AM",
artist:"Arctic Monkeys",
genre:"indie rock",
category:"Featured",
year:2013,
price:3975,
image:getImage("am-am.webp")
},

{
id:2,
title:"Favourite Worst Nightmare",
artist:"Arctic Monkeys",
genre:"indie rock",
category:"Featured",
year:2007,
price:3855,
image:getImage("am-favourite-worst-nightmare.webp")
},

{
id:3,
title:"Eternal Sunshine",
artist:"Ariana Grande",
genre:"Pop",
category:"Featured",
year:2024,
price:3480,
image:getImage("ariana-eternal-sunshine.webp")
},

{
id:4,
title:"Positions",
artist:"Ariana Grande",
genre:"pop",
category:"Featured",
year:2020,
price:3027,
image:getImage("ariana-positions.webp")
},

{
id:5,
title:"Sweetener",
artist:"Ariana Grande",
genre:"pop",
category:"Featured",
year:2018,
price:3983,
image:getImage("ariana-sweetener.webp")
},

{
id:6,
title:"Thank U Next",
artist:"Ariana Grande",
genre:"pop",
category:"Featured",
year:2019,
price:3021,
image:getImage("ariana-thank-u-next.webp")
},

{
id:7,
title:"If U Think Im Pretty",
artist:"Artemas",
genre:"alt r&b",
category:"Featured",
year:2023,
price:3303,
image:getImage("artemas-if-u-think-im-pretty.webp")
},

{
id:8,
title:"Lovercore",
artist:"Artemas",
genre:"alt r&b",
category:"New Arrivals",
year:2026,
price:3619,
image:getImage("artemas-lovercore.jpg")
},

{
id:9,
title:"Dont Smile At Me",
artist:"Billie Eilish",
genre:"electropop,alternative pop",
category:"Featured",
year:2017,
price:3080,
image:getImage("billie-dont-smile-at-me.webp")
},

{
id:10,
title:"Guitar Songs",
artist:"Billie Eilish",
genre:"electropop,alternative pop",
category:"Editor's Picks",
year:2022,
price:3007,
image:getImage("billie-guitar-songs.webp")
},

{
id:11,
title:"Happier Than Ever",
artist:"Billie Eilish",
genre:"electropop,alternative pop",
category:"Featured",
year:2021,
price:3272,
image:getImage("billie-happier-than-ever.webp")
},

{
id:12,
title:"Hit Me Hard And Soft",
artist:"Billie Eilish",
genre:"electropop,alternative pop",
category:"Best Sellers",
year:2024,
price:3027,
image:getImage("billie-hit-me-hard.webp")
},

{
id:13,
title:"When we all fall asleep where do we go",
artist:"Billie Eilish",
genre:"electropop,alternative pop",
category:"Editor's Picks",
year:2019,
price:4023,
image:getImage("billie-wwafawdwg-go.webp")
},

{
id:14,
title:"Wasteisolation",
artist:"Black Dresses",
genre:"rock music",
category:"Featured",
year:2022,
price:4132,
image:getImage("blackdresses-wasteisolation.webp")
},

{
id:15,
title:"Blackout",
artist:"Britney Spears",
genre:"Pop",
category:"Best Sellers",
year:2007,
price:3762,
image:getImage("britney-blackout.webp")
},

{
id:16,
title:"Britney",
artist:"Britney Spears",
genre:"Pop",
category:"Featured",
year:2013,
price:3825,
image:getImage("britney-britney.webp")
},

{
id:17,
title:"Circus",
artist:"Britney Spears",
genre:"Pop",
category:"Featured",
year:2008,
price:3921,
image:getImage("britney-circus.webp")
},

{
id:18,
title:"In The Zone",
artist:"Britney Spears",
genre:"Pop",
category:"Featured",
year:2003,
price:3373,
image:getImage("britney-in-the-zone.webp")
},

{
id:19,
title:"Brat",
artist:"Charli XCX",
genre:"Electropop",
category:"Editor's Picks",
year:2024,
price:4019,
image:getImage("charlie-brat.webp")
},

{
id:20,
title:"Party Favors",
artist:"Sir Chloe",
genre:"indie pop",
category:"Featured",
year:2020,
price:3744,
image:getImage("chloe-party-favors.webp")
},

{
id:21,
title:"Kid Krow",
artist:"Conan Gray",
genre:"indie pop",
category:"Featured",
year:2017,
price:3862,
image:getImage("conan-kid-krow.webp")
},

{
id:22,
title:"Superache",
artist:"Conan Gray",
genre:"indie pop",
category:"Featured",
year:2022,
price:3295,
image:getImage("conan-superache.webp")
},

{
id:23,
title:"Wishbone",
artist:"Conan Gray",
genre:"indie pop",
category:"Featured",
year:2025,
price:3592,
image:getImage("conan-wishbone.webp")
},

{
id:24,
title:"Aura",
artist:"Diljit Dosanjh",
genre:"Indian pop",
category:"New Arrivals",
year:2026,
price:3444,
image:getImage("diljit-aura.webp")
},

{
id:25,
title:"Ranjha",
artist:"Diljit Dosanjh",
genre:"Indian pop",
category:"Featured",
year:2026,
price:3802,
image:getImage("diljit-ranjha.webp")
},

{
id:26,
title:"Amala",
artist:"Doja Cat",
genre:"pop rap",
category:"Featured",
year:2018,
price:3136,
image:getImage("doja-amala.webp")
},

{
id:27,
title:"Scarlet",
artist:"Doja Cat",
genre:"pop rap",
category:"Featured",
year:2023,
price:3923,
image:getImage("doja-scarlet.webp")
},

{
id:28,
title:"Vie",
artist:"Doja Cat",
genre:"pop rap",
category:"New Arrivals",
year:2025,
price:3320,
image:getImage("doja-vie.webp")
},

{
id:29,
title:"14 Minutes",
artist:"Dominic Fike",
genre:"alt rock",
category:"Featured",
year:2024,
price:3560,
image:getImage("dominic-14-minutes.webp")
},

{
id:30,
title:"Dont Forget About Me Demos",
artist:"Dominic Fike",
genre:"alt rock",
category:"Featured",
year:2018,
price:4075,
image:getImage("dominic-dont-forget-about-me-demos.webp")
},

{
id:31,
title:"Sunburn",
artist:"Dominic Fike",
genre:"alt rock",
category:"Featured",
year:2023,
price:4155,
image:getImage("dominic-sunburn.webp")
},

{
id:32,
title:"What Could Possibly Go Wrong",
artist:"Dominic Fike",
genre:"alt rock",
category:"Featured",
year:2020,
price:3464,
image:getImage("dominic-what-could-possibly-go-wrong.webp")
},

{
id:33,
title:"Future Nostalgia",
artist:"Dua Lipa",
genre:"Pop",
category:"Featured",
year:2021,
price:3946,
image:getImage("dua-future-nostalgia.webp")
},

{
id:34,
title:"The Eminem Show",
artist:"Eminem",
genre:"Hip Hop",
category:"Featured",
year:2002,
price:4137,
image:getImage("eminem-the-eminem-show.webp")
},

{
id:35,
title:"The Dream",
artist:"The Favors",
genre:"Alt pop",
category:"New Arrivals",
year:2025,
price:3011,
image:getImage("favors-the-dream.jpg")
},

{
id:36,
title:"Blood Harmony",
artist:"FINNEAS",
genre:"Alt pop",
category:"Featured",
year:2019,
price:3629,
image:getImage("finneas-blood-harmony.webp")
},

{
id:37,
title:"For Cryin Out Loud",
artist:"FINNEAS",
genre:"Alt pop",
category:"Editor's Picks",
year:2024,
price:3905,
image:getImage("finneas-for-cryin-out-loud.webp")
},

{
id:38,
title:"Optimist",
artist:"FINNEAS",
genre:"Alt pop",
category:"Featured",
year:2021,
price:4101,
image:getImage("finneas-optimist.webp")
},

{
id:39,
title:"Born This Way",
artist:"Lady Gaga",
genre:"Electropop",
category:"Featured",
year:2011,
price:4005,
image:getImage("gaga-born-this-way.jpg")
},

{
id:40,
title:"Mayhem",
artist:"Lady Gaga",
genre:"Electropop",
category:"Featured",
year:2025,
price:3031,
image:getImage("gaga-mayhem.webp")
},

{
id:41,
title:"The Fame",
artist:"Lady Gaga",
genre:"Electropop",
category:"Featured",
year:2011,
price:3370,
image:getImage("gaga-the-fame.webp")
},

{
id:42,
title:"If I Could Make It Go Quiet",
artist:"Girl in red",
genre:"pop",
category:"Featured",
year:2021,
price:3555,
image:getImage("girlinred-if-i-could-make-it-go-quiet.webp")
},

{
id:43,
title:"Im Doing It Again Baby",
artist:"Girl in red",
genre:"pop",
category:"Featured",
year:2023,
price:3688,
image:getImage("girlinred-im-doing-it-again-baby.webp")
},

{
id:44,
title:"P-Pop Culture",
artist:"Karan Aujla",
genre:"Indian pop",
category:"Featured",
year:2025,
price:3733,
image:getImage("karan-p-pop-culture.jpg")
},

{
id:45,
title:"Sweet Boy",
artist:"Malcolm Todd",
genre:"indie pop",
category:"Featured",
year:2024,
price:3336,
image:getImage("malcolm-sweet-boy.webp")
},

{
id:46,
title:"Cinema",
artist:"The Marías",
genre:"alt pop",
category:"Featured",
year:2021,
price:3999,
image:getImage("marias-cinema.webp")
},

{
id:47,
title:"Submarine",
artist:"The Marías",
genre:"alt pop",
category:"Featured",
year:2024,
price:3395,
image:getImage("marias-submarine.webp")
},

{
id:48,
title:"Do Not Disturb:Deluxe",
artist:"Young Miko",
genre:"Raggaeton",
category:"Editor's Picks",
year:2026,
price:3085,
image:getImage("miko-do-not-disturb-deluxe.jpg")
},

{
id:49,
title:"Do Not Disturb",
artist:"Young Miko",
genre:"Raggaeton",
category:"Featured",
year:2025,
price:3765,
image:getImage("miko-do-not-disturb.webp")
},

{
id:50,
title:"Meoimi",
artist:"Young Miko",
genre:"Raggaeton",
category:"New Arrivals",
year:2025,
price:3865,
image:getImage("miko-meoimi.jpg")
},

{
id:51,
title:"Trap Kitty",
artist:"Young Miko",
genre:"Raggaeton",
category:"Featured",
year:2022,
price:3048,
image:getImage("miko-trap-kitty.jpg")
},

{
id:52,
title:"Be The Cowboy",
artist:"Mitski",
genre:"Indie ",
category:"Featured",
year:2018,
price:3934,
image:getImage("mitski-be-the-cowboy.webp")
},

{
id:53,
title:"Bury Me At Makeout Creek",
artist:"Mitski",
genre:"Indie ",
category:"Featured",
year:2014,
price:3846,
image:getImage("mitski-bury-me-at-makeout-creek.webp")
},

{
id:54,
title:"Nothings About To Happen To Me",
artist:"Mitski",
genre:"Indie ",
category:"Featured",
year:2026,
price:3539,
image:getImage("mitski-nothings-about-to-happen-to-me.webp")
},

{
id:55,
title:"Puberty 2",
artist:"Mitski",
genre:"Indie ",
category:"Featured",
year:2016,
price:3839,
image:getImage("mitski-puberty-2.webp")
},

{
id:56,
title:"The Land Is Inhospitable And So Are We",
artist:"Mitski",
genre:"Indie ",
category:"Featured",
year:2023,
price:3941,
image:getImage("mitski-the-land-is-inhospitable-and-so-are-we.webp")
},

{
id:57,
title:"Her Love Still Haunts Me Like A Ghost",
artist:"Montell Fish",
genre:"R&B",
category:"Featured",
year:2023,
price:3975,
image:getImage("montell-her-love-still-haunts-me-like-a-ghost.webp")
},

{
id:58,
title:"The Downward Spiral",
artist:"Nine Inch Nails",
genre:"Grunge",
category:"Featured",
year:2000,
price:3232,
image:getImage("nin-the-downward-spiral.webp")
},

{
id:59,
title:"In Utero",
artist:"Nirvana",
genre:"Grunge",
category:"Featured",
year:1991,
price:3410,
image:getImage("nirvana-in-utero.webp")
},

{
id:60,
title:"Incesticide",
artist:"Nirvana",
genre:"Grunge",
category:"Featured",
year:1992,
price:4090,
image:getImage("nirvana-incesticide.webp")
},

{
id:61,
title:"Nevermind",
artist:"Nirvana",
genre:"Grunge",
category:"Best Sellers",
year:1991,
price:3957,
image:getImage("nirvana-nevermind.webp")
},

{
id:62,
title:"Guts",
artist:"Olivia Rodrigo",
genre:"pop rock",
category:"Featured",
year:2024,
price:4168,
image:getImage("olivia-guts.webp")
},

{
id:63,
title:"Sour",
artist:"Olivia Rodrigo",
genre:"pop rock",
category:"Featured",
year:2024,
price:3082,
image:getImage("olivia-sour.webp")
},

{
id:64,
title:"You Seem Pretty Sad For A Girl So In Love",
artist:"Olivia Rodrigo",
genre:"pop rock",
category:"New Arrivals",
year:2026,
price:4020,
image:getImage("olivia-you-seem-pretty-sad-for-a-girl-so-in-love.webp")
},

{
id:65,
title:"Bite Me",
artist:"Reneé Rapp",
genre:"pop rock",
category:"Editor's Picks",
year:2025,
price:4145,
image:getImage("renee-bite-me.webp")
},

{
id:66,
title:"Everything To Everyone",
artist:"Reneé Rapp",
genre:"pop rock",
category:"Featured",
year:2022,
price:3885,
image:getImage("renee-everything-to-everyone.webp")
},

{
id:67,
title:"Snow Angel",
artist:"Reneé Rapp",
genre:"pop rock",
category:"Featured",
year:2023,
price:3652,
image:getImage("renee-snow-angel.webp")
},

{
id:68,
title:"Emails I Cant Send",
artist:"Sabrina Carpenter",
genre:"pop",
category:"Featured",
year:2022,
price:3005,
image:getImage("sabrina-emails-i-cant-send.webp")
},

{
id:69,
title:"Man's Best Friend",
artist:"Sabrina Carpenter",
genre:"pop",
category:"New Arrivals",
year:2025,
price:3763,
image:getImage("sabrina-mans-best-friend.webp")
},

{
id:70,
title:"Short N Sweet",
artist:"Sabrina Carpenter",
genre:"pop",
category:"Featured",
year:2024,
price:3924,
image:getImage("sabrina-short-n-sweet.webp")
},

{
id:71,
title:"American Hero",
artist:"Towa Bird",
genre:"Indie Rock",
category:"Featured",
year:2024,
price:3520,
image:getImage("towa-american-hero.jpg")
},

{
id:72,
title:"Gentleman",
artist:"Towa Bird",
genre:"Indie Rock",
category:"New Arrivals",
year:2026,
price:3374,
image:getImage("towa-gentleman.webp")
},

{
id:73,
title:"Chromakopia",
artist:"Tyler, The Creator",
genre:"Alt hip hop",
category:"Featured",
year:2024,
price:3242,
image:getImage("tyler-chromakopia.webp")
},

{
id:74,
title:"Dont Tap The Glass",
artist:"Tyler, The Creator",
genre:"Alt hip hop",
category:"New Arrivals",
year:2025,
price:3903,
image:getImage("tyler-dont-tap-the-glass.webp")
},

{
id:75,
title:"Igor",
artist:"Tyler, The Creator",
genre:"Alt hip hop",
category:"",
year:2019,
price:3918,
image:getImage("tyler-igor.webp")
},

{
id:76,
title:"Dawn Fm",
artist:"The Weeknd",
genre:"R&B",
category:"",
year:2022,
price:3991,
image:getImage("weeknd-dawn-fm.webp")
},

{
id:77,
title:"Hurry Up Tomorrow",
artist:"The Weeknd",
genre:"R&B",
category:"",
year:2025,
price:3034,
image:getImage("weeknd-hurry-up-tomorrow.webp")
},

{
id:78,
title:"Kiss Land",
artist:"The Weeknd",
genre:"R&B",
category:"Best Sellers",
year:2013,
price:4009,
image:getImage("weeknd-kiss-land.webp")
},

{
id:79,
title:"My Dear Melancholy",
artist:"The Weeknd",
genre:"R&B",
category:"Best Sellers",
year:2018,
price:2999,
image:getImage("weeknd-my-dear-melancholy.webp")
},

{
id:80,
title:"Starboy",
artist:"The Weeknd",
genre:"R&B",
category:"Best Sellers",
year:2016,
price:3441,
image:getImage("weeknd-starboy.webp")
},

{
id:81,
title:"Blue Album",
artist:"Weezer",
genre:"Rock",
category:"Best Sellers",
year:1994,
price:3973,
image:getImage("weezer-blue-album.webp")
},
];

export default albums;