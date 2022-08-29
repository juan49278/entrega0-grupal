function add(){
    if(item.value == ""){
        item.classList.add("is-invalid");
    } else {
        contenedor.innerHTML += `
        <li class="list-group-item">${item.value}</li>`
        item.classList.remove("is-invalid");
    }
    item.value = "";
    localStorage.setItem("content", contenedor.innerHTML)
}

agregar.addEventListener("click", add);
document.addEventListener("DOMContentLoaded", () =>{
    contenedor.innerHTML = localStorage.getItem("content")
})

limpiar.addEventListener("click", ()=>{
    contenedor.innerHTML = "";
    localStorage.removeItem("content");
    item.classList.remove("is-invalid");
})