const product = [
    {
        id: 0,
        image: "img_ropa/chanclaniño800.jpg",
        title: 'chancleta de baño',
        price: 800,
    },
    {
        id: 1,
        image: "img_ropa/Guata1500.jpg",
        title: 'Enguatada',
        price: 1500,
    },
    {
        id: 2,
        image: "img_ropa/juegoniño400.jpg",
        title: 'Juego de niño',
        price: 400,
    },
    {
        id: 3,
        image: "img_ropa/juegoniño400.jpg",
        title: 'Juego de niño',
        price: 400,
    },
    {
        id: 4,
        image: "img_ropa/mochila3000.jpg",
        title: 'Mochila',
        price: 3000,
    },
    {
        id: 5,
        image: "img_ropa/negra3500.jpg",
        title: 'Zapatillas',
        price: 3500,
    },
    {
        id: 6,
        image: "img_ropa/Pantalon3500.jpg",
        title: 'Pantalon de mujer',
        price: 3500,
    },
    {
        id: 7,
        image: "img_ropa/Pantalon3800.jpg",
        title: 'Pantalon de hombre',
        price: 3800,
    },
    {
        id: 8,
        image: "img_ropa/perfume700.jpg",
        title: 'Perfume',
        price: 700,
    },
    {
        id: 9,
        image: "img_ropa/sandalias1500.jpg",
        title: 'Sandalias',
        price: 1500,
    },
    {
        id: 10,
        image: "img_ropa/Shorpeta3300.jpg",
        title: 'Shorpeta',
        price: 3300,
    },
    {
        id: 11,
        image: "img_ropa/Short1300.jpg",
        title: 'Short',
        price: 1300,
    },
    {
        id: 12,
        image: "img_ropa/sobrecama1500.jpg",
        title: 'Sobrecama',
        price: 1500,
    },
    {
        id: 13,
        image: "img_ropa/Tacasillo250.jpg",
        title: 'Tacasillo',
        price: 250,
    },
    {
        id: 14,
        image: "img_ropa/zandalianiño1700.jpg",
        title: 'Sandalia de niño',
        price: 1700,
    },
    {
        id: 15,
        image: "img_ropa/zapatillasmujer3500.jpg",
        title: 'Zapatillas',
        price: 3500,
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
