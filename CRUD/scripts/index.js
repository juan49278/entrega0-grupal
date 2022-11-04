let url = "https://636430b78a3337d9a2f33147.mockapi.io/users";



document.getElementById("btnGet1").addEventListener("click", async function() {
    let arr = [];
    const response = await fetch(url);
    let data = await response.json();

    document.getElementById("results").innerHTML = ""; 

    let val = document.getElementById("inputGet1Id").value;
    arr.push(data.find((element) => element.id == val));

    if(val != "") {
        data = arr;
    }

    showUser(data);     
})

btnPost.addEventListener("click", async function() {
    const name = inputPostNombre.value;
    const lastname = inputPostApellido.value;
    const data = {
        name: name,
        lastname: lastname
    }

    const response = await fetch(url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json" 
        },
        body: JSON.stringify(data)
    })

    showUser(await getData());
})



btnSendChanges.addEventListener("click", async function() {
    let idUrl = document.getElementById("inputPutId").value
    
    const postUrl = url+`/${idUrl}`

    const name = inputPutNombre.value;
    const lastname = inputPutApellido.value;
    const data = {
        name: name,
        lastname: lastname
    }

    const response = await fetch(postUrl, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json" 
        },
        body: JSON.stringify(data)

    })
    showUser(await getData());

})

btnDelete.addEventListener("click", async function() {
    let idUrl = document.getElementById("inputDelete").value   
    const postUrl = url+`/${idUrl}`
    const response = await fetch(postUrl, {
        method: "DELETE",
    })
    showUser(await getData());
})


function showUser(arr) {
    console.log(arr.length)
    let htmlToAppend = "";
        for(let users of arr) {
            const {name:name, lastname:lastname, id:id} = users
    
            htmlToAppend += 
            `
            <div style="font-size: 12px" class="ms-3 mt-2">
                <p>ID: ${id} <br> 
                NAME: ${name} <br>
                LASTNAME: ${lastname}</p>          
            </div>           
            `
        }
        document.getElementById("results").innerHTML = htmlToAppend;  
}

async function getData () {
    const response = await fetch(url);
    let data = await response.json();
    return data;
}

function inputVerificationPost () {
    if(inputPostNombre.value.trim() != ""  && inputPostApellido.value.trim() != "" ) {
        btnPost.disabled = false;
        inputPostNombre.value = inputPostNombre.value.trim();
        inputPostApellido.value = inputPostApellido.value.trim();
    } else {
        btnPost.disabled = true;
    }
}

function inputVerificationPut () {
    if(inputPutId.value.trim() != "") {
        btnPut.disabled = false;
        inputPutId.value = inputPutId.value.trim();    
    } else {
        btnPut.disabled = true;
    }
}

function inputVerificationPutModal () {
    if(inputPutNombre.value.trim() != "" && inputPutApellido.value.trim() != "") {
        btnSendChanges.disabled = false;
        inputPutNombre.value = inputPutNombre.value.trim();
        inputPutApellido.value = inputPutApellido.value.trim();
    } else {
        btnSendChanges.disabled = true;
    }
}

function inputVerification () {
    if(inputDelete.value.trim() != "") {
        btnDelete.disabled = false;
        inputDelete.value = inputDelete.value.trim();
    } else {
        btnDelete.disabled = true;
    }
}