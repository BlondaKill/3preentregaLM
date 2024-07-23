function mostrarProductos() {
    let contentHTML = "";

    for (const producto of productos) {
        contentHTML += `<div class = "col-md-3">    
        <div class="card border-0">
            <a href="product.html" onclick="guardarProductoLS(${producto.id});">
                <img src="img/${producto.imagen}" class="card-img-top" alt="${producto.nombre}">
            </a>
            <div class="card-body text-center">
                <p class="card-text">${producto.nombre}<br><span class="text-danger">$${producto.precio}</span></p>
                
            </div>
        </div>
    </div>`;
    }

    document.getElementById("content").innerHTML = contentHTML;
}

mostrarProductos();
mostrarBotonCart();