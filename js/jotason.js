let url = "https://japceibal.github.io/japflix_api/movies-data.json";
let result = {}
document.addEventListener("DOMContentLoaded", async()=>{
    let response = await fetch(url);
    result = await response.json();
    })

btnBuscar.addEventListener("click", ()=>{
  lista.innerHTML = ""
    let val = inputBuscar.value.toLowerCase();
    let printArray = result.filter(movie=>(movie.title.toLowerCase().includes(val)));
    for(let movies of printArray){
        lista.innerHTML+=`
        <a style="color: white; background-color: transparent;" data-bs-toggle="offcanvas" href="#offcanvasExample" class="list-group-item list-group-item-action d-flex justify-content-between align-items-start" aria-current="true">
          <div class="ms-2 me-auto">
          <div class="fw-bold">${movies.title}</div>
            <small class="text-muted">${movies.tagline}</small>
          </div>
          <span class="badge bg-primary rounded-pill">estrellitas</span>
        </a>
        
        
        `
    }
})
/*
<li class="list-group-item cursor-active d-flex justify-content-between align-items-start" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample"  style="background:none;color:#fff;">
          <div class="ms-2 me-auto">
            <div class="fw-bold">${movies.title}</div>
              <small class="text-muted">${movies.tagline}</small>
            </div>
          <span class="badge bg-primary rounded-pill">estrellitas</span>
        </li>*/