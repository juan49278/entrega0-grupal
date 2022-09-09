let url = "https://images-api.nasa.gov/search?q=";

const btn = document.getElementById("btnBuscar");
const btnBuscar = document.getElementById("inputBuscar");
const  busqueda = btn.addEventListener("click" , Buscar);

async function Buscar () {
    document.getElementById("conte").innerHTML = "";
    let a = url+btnBuscar.value; 
    let promesa = await fetch (a);
    let respuesta = await promesa.json();
    
    const {
        collection: { items }
    } = respuesta;

    for (const item of items) {
        const {
            data: [data],
            links: [link]
        } = item;
        const { title, date_created, description} = data;
        const { href } = link;

        Llenar (title, date_created, description, href)
    }


}

function Llenar (a , b, c, d) {
    
    let html = "";
   // let z = items;
    //for (let i = 0; (i < 20) && (i < z.length); i++) {
      //  let data = z[i];

        html += `
            <div class="col-sm-4">
                <div class="card mb-2">
                    <img src="${d}" class="card-img-fluid" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">${a}</h5>
                        <p class="card-text">${c}</p>
                        <div class="card-footer">
                            <small class="text-muted">${b}</small>
                        </div>
                    </div>
                </div>
            </div>
        `

        document.getElementById("conte").innerHTML += html;
   // }
}

