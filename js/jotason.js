let url = "https://japceibal.github.io/japflix_api/movies-data.json";
let result = {}
document.addEventListener("DOMContentLoaded", async()=>{
    let response = await fetch(url);
    result = await response.json();
    })
btnBuscar.addEventListener("click", ()=>{
    let val = inputBuscar.value.toLowerCase();
    let printArray = result.filter(movie=>movie.title.toLowerCase().includes(val));
    for(let movies of printArray){
        lista.innerHTML+=`
        <ul class="list-group">
        <li class="list-group-item d-flex justify-content-between align-items-start"  style="background:none;color:#fff;">
          <div class="ms-2 me-auto">
            <div class="fw-bold">${movies.title}</div>
                ${movies.overview}
            </div>
          <span class="badge bg-primary rounded-pill">estrellita</span>
        </li>
        </ul>
        `
    }
})