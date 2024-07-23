function mostrarCart() {
    const cart = cargarCartLS();
    let contentHTML;

    if(totalProductos() > 0){
        contentHTML = `<table class="table">
        <tbody>
        <tr>
        <td class="text-end" colspan="4"><button class="btn btn-danger btn-sm" onclick="emptyCart();">Vaciar Carrito<i class="bi bi-trash3"></i></button></td>
        </tr>`;

        for (const producto of cart) {
            contentHTML += `<tr>
            <td><img src="img/${producto.imagen}" alt="${producto.nombre}" width="30"></td>    
            <td class="align-middle">${producto.nombre}</td>
            <td class="text-center align-middle"><span class="text-danger">$${producto.precio}</span></td>
            <td class= "text-end align-middle"><button class="btn btn-danger btn-sm" onclick="deleteProducto(${producto.id});">Delete<i class="bi bi-trash3"></i></button></td>
        </tr>`;
        }

        contentHTML += `</tbody>
        </table>`;
    } else {
        contentHTML = `<div class="alert alert-primary my-5 text-center" role="alert">
        <h2>Sin Productos en el Carrito!</h2>
        </div>`;
    }


    document.getElementById("content").innerHTML = contentHTML;
}
mostrarCart();