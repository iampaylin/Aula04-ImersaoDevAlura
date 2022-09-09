let guardarAlbuns = ["https://t2.genius.com/unsafe/631x0/https%3A%2F%2Fimages.genius.com%2F522b64c7d14b49c118a4b18bed212278.1000x1000x1.jpg",
 "https://t2.genius.com/unsafe/631x0/https%3A%2F%2Fimages.genius.com%2F8966a1bc7cc56419327fcc7540414f1d.1000x1000x1.jpg", 
 "https://t2.genius.com/unsafe/631x0/https%3A%2F%2Fimages.genius.com%2F54ebb702f0bdd4038ec16a4f3c094218.999x999x1.jpg"]

 let links = ["https://open.spotify.com/album/1TKYO9znkrY14VayHze05r?si=EiQ4w8Y3RhmgJREM9kj6Pg", 
 "https://open.spotify.com/album/5fa6oWFXuvaVkY49mfOsRd?si=yvZiZjikRrqKoaBqYInG_Q", 
 "https://open.spotify.com/album/6pFk6M5FURqtdmHDFNJjt5?si=cVIxUU8wQDiPtBLulcVXdw"]

for (let i = 0; i < guardarAlbuns.length; i++) {
    document.write(`<a href="${links[i]}" target="_blank" id="paylinfy"> <img src=${guardarAlbuns[i]} width="200" height="200"> </a>`)
}