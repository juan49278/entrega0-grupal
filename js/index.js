document.addEventListener("DOMContentLoaded", () => {
    if(productsArray.products == undefined){
        products = productsArray
    }else{
        products = productsArray.products
    }
    if(localStorage.getItem('transactions')){
        transactTable.innerHTML = localStorage.getItem('transactions')
    }
    

})

transactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.target).entries());
    const {type, date, idprod, cost, stock} = data;
    showTrasanction(date, type, idprod, cost, stock);
    let values = [];
    document.querySelectorAll('input').forEach(input =>{
        values.push(input.value)
    })
    transactForm.reset()
    
})

function showTrasanction(date, type, idprod, cost, stock){
    const [id, prod] = idprod.split(":")
    transactTable.innerHTML += `
    <tr>
        <th scope="row">${id}</th>
        <td>${date}</td>
        <td>${prod}</td>
        <td>${type}</td>
        <td>${stock}</td>
        <td>${cost}</td>
        <td>${stock*cost}</td>
        <td>${(stock*cost)*0.22}</td>
        <td>${(stock*cost)*1.22}</td>
    </tr>
    `
    for(product of products){
        if(product['id']== parseInt(id )){
            if(type == 'Compra'){
                product['stock'] = parseInt(product['stock']) + parseInt(stock);
            }else{
                product['stock'] = parseInt(product['stock']) - parseInt(stock);
            }
            
        }
    }
    localStorage.setItem('productsArray', JSON.stringify(products))
    localStorage.setItem('transactions', transactTable.innerHTML)
};