function mostrarProducto(){
    const producto = cargarProductoLS();
    let htmlImageProducto = `<img src="img/${producto.imagen}" class= "img-fluid" alt=${producto.nombre}/>`;
    let htmlDetalleProducto = `<h1>${producto.nombre}</h1>;
    <p class="text-danger fs-3">$${producto.precio}</p>;
    <p class="card-text"><button class= "btn btn-primary" onclick="addProducto(${producto.id});">Add (+)</button></p>`;
    
    document.getElementById("imageProducto").innerHTML = htmlImageProducto;
    document.getElementById("detailProducto").innerHTML = htmlDetalleProducto;
}

mostrarProducto();
mostrarBotonCart();