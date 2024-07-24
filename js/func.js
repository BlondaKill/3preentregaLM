const productos = [
    {id:1, nombre:"Eres Vibracion", precio:120, imagen:"vibra.JPG", categoria:"libros"},
    {id:2, nombre:"El Gran Libro de Los Chakras", precio:130, imagen:"chaklib.jpg", categoria:"libros"},
    {id:3, nombre:"Los Chakras", precio:135, imagen:"loschak.jpg", categoria:"libros"},
    {id:4, nombre:"Registros Akashicos", precio:200, imagen:"regaka.jpg", categoria:"libros"}
]


function addProducto(id) {
    const producto = productos.find(item => item.id == id);
    const cart = cargarCartLS();
    cart.push(producto); 
    guardarCartLS(cart);
    mostrarBotonCart();
}

function deleteProducto(id) {
    const cart = cargarCartLS();
    const cartActualizado = cart.filter(item => item.id != id);
    guardarCartLS(cartActualizado);
    mostrarCart();
    mostrarBotonCart();

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

function guardarCartLS(cart) {
    localStorage.setItem("cart", JSON.stringify(cart));
}


function emptyCart() {
    localStorage.removeItem("cart");
    mostrarCart();
    mostrarBotonCart();
}

function cargarProductoLS() {
    let id = JSON.parse(localStorage.getItem("producto"));
    const producto = productos.find(item => item.id == id);
    
    return producto;

}

function guardarProductoLS(id) {
    localStorage.setItem("producto", JSON.stringify(id));
}

