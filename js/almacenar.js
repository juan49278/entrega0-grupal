let text = document.getElementById("item");
function add(){
    if(text.value == ""){
        text.classList.add("is-invalid");
    } else {
        contenedor.innerHTML += `
        <li class="list-group-item">${text.value}</li>`
        text.classList.remove("is-invalid");
    }
    text.value = "";
   // let cont = document.getElementById("contenedor");
    localStorage.setItem("content", contenedor.innerHTML)
}

agregar.addEventListener("click", add);

document.addEventListener("DOMContentLoaded", () =>{
    contenedor.innerHTML = localStorage.getItem("content")
})

limpiar.addEventListener("click", ()=>{
    contenedor.innerHTML = "";
    localStorage.removeItem("content");
    text.classList.remove("is-invalid");
})