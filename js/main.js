let url = "https://japceibal.github.io/japflix_api/movies-data.json";
let result = {}
document.addEventListener("DOMContentLoaded", async()=>{
    let response = await fetch(url);
    result = await response.json();
    })

btnBuscar.addEventListener("click", ()=>{
  lista.innerHTML = ""

    let val = inputBuscar.value.toLowerCase();
    let printArray = result.filter(movie=>(movie.title.toLowerCase().includes(val)) || 
    (movie.tagline.toLowerCase().includes(val)) || 
    (movie.overview.toLowerCase().includes(val)) ||
    (movie.genres.some(genre => genre.name.toLowerCase() == val)));



    for(let movies of printArray){

        lista.innerHTML+=`
        <a onclick="canvas(${movies.id})" style="color: white; background-color: transparent;" data-bs-toggle="offcanvas" href="#offcanvasExample" class="list-group-item list-group-item-action d-flex justify-content-between align-items-start" aria-current="true">
          <div class="ms-2 me-auto">
          <div class="fw-bold">${movies.title}</div>
            <small class="text-muted">${movies.tagline}</small>
          </div> 
          <span class="" id="stars">
            ${star(movies.vote_average)}
          </span>
        </a>
        `
    }

   

})


function canvas(movieID){
  movieShow = result.filter(movie=>movie.id == movieID)
  const {title, overview, genres, release_date, budget, runtime, revenue} = movieShow[0]
  titulo.innerHTML = title
  overviews.innerHTML = overview
  genresToAppend = ''
  for(let genre of genres){
    if(genres[0] == genre){ 
      genresToAppend += genre.name
    }else{
      genresToAppend += " - "+genre.name
    }
  }
  gen.innerHTML = genresToAppend

  year = release_date.split('-')[0]
  more.innerHTML = `
  <li style="border: none" class="list-group-item d-flex justify-content-between align-items-center">
    Year:
    <span>${year}</span>
  </li>
  <li style="border: none" class="list-group-item d-flex justify-content-between align-items-center">
    Runtime:
    <span>${runtime} mins</span>
  </li>
  <li style="border: none" class="list-group-item d-flex justify-content-between align-items-center">
    Budget:
    <span>$${budget}</span>
  </li>
  <li style="border: none" class="list-group-item d-flex justify-content-between align-items-center">
    Revenue:
    <span>$${revenue}</span>
  </li>
  `
}

function star (score) {
  let a = "";
  score = Math.round(score/2)

  for(let i = 0; i < 5; i++) {
    if(i<score) {
      a += `<span class="fa fa-star checked"></span>`
    } else {
      a += `<span class="fa fa-star"></span>`
    }
  }
  return a;
}
