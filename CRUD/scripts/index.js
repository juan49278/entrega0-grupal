let url = "https://636430b78a3337d9a2f33147.mockapi.io/users/";
const modal = new bootstrap.Modal("#dataModal");

closeAlert.addEventListener("click", () => {
  badRequest.classList.remove("show");
});

//get
document.getElementById("btnGet1").addEventListener("click", async function () {
  let val = document.getElementById("inputGet1Id").value;
  let data = await getJSONData(val);

  showUser(data);
});

//post
btnPost.addEventListener("click", async function () {
  const name = inputPostNombre.value;
  const lastname = inputPostApellido.value;
  const data = {
    name: name,
    lastname: lastname,
  };

  await postData(data);
});

//put
btnSendChanges.addEventListener("click", async function () {
  let idUrl = document.getElementById("inputPutId").value;

  const name = inputPutNombre.value;
  const lastname = inputPutApellido.value;
  const data = {
    name: name,
    lastname: lastname,
  };

  await putData(idUrl, data);
});

btnPut.addEventListener("click", async () => {
  let idUrl = document.getElementById("inputPutId").value;
  const data = await getJSONData(idUrl);

  if (!data.status) {
    badRequest.classList.add("show");
    return;
  } else {
    inputPutNombre.value = data.result[0].name;
    inputPutApellido.value = data.result[0].lastname;
    modal.show();
  }
});

//delete
btnDelete.addEventListener("click", async function () {
  let idUrl = document.getElementById("inputDelete").value;
  deleteData(idUrl);
});

function showUser(arr) {
  if (!arr.status) {
    badRequest.classList.add("show");
    return;
  }

  let htmlToAppend = "";
  for (let users of arr.result) {
    const { name: name, lastname: lastname, id: id } = users;

    htmlToAppend += `
            <div style="font-size: 12px" class="ms-3 mt-2">
                <p>ID: ${id} <br> 
                NAME: ${name} <br>
                LASTNAME: ${lastname}</p>          
            </div>           
            `;
  }

  document.getElementById("results").innerHTML = htmlToAppend;
}

async function getJSONData(id = "") {
  const response = await fetch(url + id);
  const data = {};
  data.status = response.ok;
  data.result = id == "" ? await response.json() : [await response.json()];

  return data;
}

async function postData(objToSave) {
  const saveData = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(objToSave),
  });

  showUser(await getJSONData());
}

async function putData(id, objToSave) {
  const putData = await fetch(url + id, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(objToSave),
  });

  showUser(await getJSONData());
}

async function deleteData(id) {
  try {
    const deleteData = await fetch(url + id, {
      method: "DELETE",
    });
    if (!deleteData.ok) {
      throw "bad delete";
    }
  } catch (error) {
    badRequest.classList.add("show");
    return;
  }

  showUser(await getJSONData());
}

//verificaciones
function inputVerificationPost() {
  if (
    inputPostNombre.value.trim() != "" &&
    inputPostApellido.value.trim() != ""
  ) {
    btnPost.disabled = false;
    inputPostNombre.value = inputPostNombre.value.trim();
    inputPostApellido.value = inputPostApellido.value.trim();
  } else {
    btnPost.disabled = true;
  }
}

function inputVerificationPut() {
  if (inputPutId.value.trim() != "") {
    btnPut.disabled = false;
    inputPutId.value = inputPutId.value.trim();
  } else {
    btnPut.disabled = true;
  }
}

function inputVerificationPutModal() {
  if (
    inputPutNombre.value.trim() != "" &&
    inputPutApellido.value.trim() != ""
  ) {
    btnSendChanges.disabled = false;
    inputPutNombre.value = inputPutNombre.value.trim();
    inputPutApellido.value = inputPutApellido.value.trim();
  } else {
    btnSendChanges.disabled = true;
  }
}

function inputVerification() {
  if (inputDelete.value.trim() != "") {
    btnDelete.disabled = false;
    inputDelete.value = inputDelete.value.trim();
  } else {
    btnDelete.disabled = true;
  }
}
