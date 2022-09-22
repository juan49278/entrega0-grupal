let url = "https://japceibal.github.io/japflix_api/movies-data.json";
let result = {}
document.addEventListener("DOMContentLoaded", async()=>{
    let response = await fetch(url);
    result = await response.json();
    })
btnBuscar.addEventListener("click", ()=>{
    let val = inputBuscar.value.toLowerCase();
    let printArray = result.filter(movie=>(movie.title.toLowerCase().includes(val)))/*||(movie=>movie.overview.toLowerCase().includes(val))||
    (movie=>movie.genres.name.toLowerCase().includes(val))||(movie=>movie.tagline.toLowerCase().includes(val)));
    https://stackoverflow.com/questions/37896484/multiple-conditions-for-javascript-includes-method*/
    for(let movies of printArray){
        lista.innerHTML+=`
        <ul class="list-group">
        <li class="list-group-item d-flex justify-content-between align-items-start"  style="background:none;color:#fff;">
          <div class="ms-2 me-auto">
            <div class="fw-bold">${movies.title}</div>
                ${movies.tagline}
            </div>
          <span class="badge bg-primary rounded-pill">estrellita</span>
        </li>
        </ul>
        `
    }
})