const productos = [
    {id:1, nombre:"Eres Vibracion", precio:120, imagen:"vibra.JPG", categoria:"libros"},
    {id:2, nombre:"Eres Vibracion", precio:120, imagen:"chaklib.jpg", categoria:"libros"},
    {id:3, nombre:"Eres Vibracion", precio:120, imagen:"loschak.jpg", categoria:"libros"},
    {id:4, nombre:"Eres Vibracion", precio:120, imagen:"regaka.jpg", categoria:"libros"}
]

function mostrarProductos(productos) {
    let contentHTML = "";

    for (const producto of productos) {
        contentHTML += `<div class = "col-md-3">    
        <div class="card border-0">
            <img src="img/${producto.imagen}" class="card-img-top" alt="${producto.nombre}">
            <div class="card-body text-center">
                <p class="card-text">${producto.nombre}<br><span class="text-danger">$${producto.precio}</span></p>
                <p class="card-text"><button class= "btn btn-primary" onclick="addProducto(${producto.id});">Add (+)</button></p>
            </div>
        </div>
    </div>`;
    }

    document.getElementById("content").innerHTML = contentHTML;
}

function addProducto(id) {
    const producto = productos.find(item => item.id == id);
    const cart = cargarCartLS();
    cart.push(producto); 
    localStorage.setItem("cart", JSON.stringify(cart));
    totalProductos();
}

function mostrarBotonCart() {
    let total = totalProductos();
    document.getElementById("totalCart").innerHTML = total;
}

function totalProductos() {
    const cart = cargarCartLS();
    return cart.length;
}

function cargarCartLS() {
    return JSON.parse(localStorage.getItem("cart")) || [];

}

function emptyCart() {
    localStorage.removeItem("cart");
    mostrarCart();
    mostrarBotonCart();
}

mostrarProductos(productos);
mostrarBotonCart();