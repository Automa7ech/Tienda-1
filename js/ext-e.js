const product = [
    {
        id: 0,
        image: "img_ropa/codo1-2.jpg",
        title: 'Codo 1/2',
        price: 100,
    },
    {
        id: 1,
        image: "img_ropa/codo3-4.jpg",
        title: 'Codo 3/4',
        price: 160,
    },
    {
        id: 2,
        image: "img_ropa/Llave250.jpg",
        title: 'Llave de agua',
        price: 250,
    },
    {
        id: 3,
        image: "img_ropa/llavepaso250.jpg",
        title: 'Llave de Paso',
        price: 250,
    },
    {
        id: 4,
        image: "img_ropa/mando1200.jpg",
        title: 'Mando Universal',
        price: 1200,
    },
    {
        id: 5,
        image: "img_ropa/PlayBack3500.jpg",
        title: 'Play Back',
        price: 3500,
    },
    {
        id: 6,
        image: "img_ropa/silicona3000.jpg",
        title: 'Silicona de parabrisas',
        price: 3000,
    },
    {
        id: 7,
        image: "img_ropa/Toma270.jpg",
        title: 'Tomacorriente',
        price: 270,
    },


];
const categories = [...new Set(product.map((item) => { return item }))]
let i = 0;
document.getElementById('root').innerHTML = categories.map((item) => {
    var { image, title, price } = item;
    return (
        `<div class="box">
            <div class="img-box">
                <img src="${image}" class="images">
            </div>
            <div class="bottom">
                <p>${title}</p>
               <h2>$ ${price}.00</h2>` +
        "<button onclick='addtocart(" + (i++) + ")'>Agregar</button>" +
        `</div>
        </div>`
    )
}).join('')

var cart = [];

function addtocart(a) {
    cart.push({ ...categories[a] });
    displaycart();
}
function delElement(a) {
    cart.splice(a, 1);
    displaycart();
}

function displaycart(a) {
    let j = 0, total = 0;
    document.getElementById("count").innerHTML = cart.length;
    if (cart.length == 0) {
        document.getElementById('cartItem').innerHTML = "(Vacio..)";
        document.getElementById("total").innerHTML = "$ " + 0 + ".00";
    } else {
        document.getElementById('cartItem').innerHTML = cart.map((items) => {
            var { image, title, price } = items;
            total = total + price;
            document.getElementById("total").innerHTML = "$ " + total + ".00";

            return (
                `<div class='cart-item'>
                <div class='row-img'>
                    <img class='rowimg' src= ${image}>
                </div>
                <p style='font-size:12px;'>${title}</p>
                <h2 style='font-size: 15px;'>$ ${price}.00</h2>` +
                "<i class='fa-solid fa-trash' onclick='delElement(" + (j++) + ")'></i></div>"
            );
        }).join('');
    }
}