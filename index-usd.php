<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8" />
  <meta http-equiv="X-UA-Compatible" content="IE=edge" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Tienda de Ropa</title>
  <link rel="stylesheet" href="Css/styles.css" />
  <script src="https://kit.fontawesome.com/81581fb069.js" crossorigin="anonymous"></script>
</head>

<body>
  <header class="site-header">
    <div class="contenedor">
      <div class="barra">
        <a href="/">
          <h1 class="no-margin"><span>Plantilla</span></h1>
        </a>
      </div>
      <!--barra-->

      <div class="texto-header">
        <h1 class="no-margin">Pagina de inicio</h1>
        <p class="no-margin">Buenas ofertas y ropa de marca</p>
      </div>
    </div>
    <!--contenedor-->
  </header>
  <div class="header">
    <p class="logo">Ofertas en USD</p>
    <div class="cart">
      <i class="fa-solid fa-cart-shopping"></i>
      <p id="count">0</p>
    </div>
  </div>
  <div class="container">
    <div id="root"></div>
    <div class="sidebar">
      <div class="head">
        <p>Mis Pedidos</p>
      </div>
      <div id="cartItem">(Vacio..)</div>
      <div class="foot">
        <h3>Total</h3>
        <h2 id="total">$ 0.00</h2>
      </div>
      <button>Pagar</button>
    </div>
  </div>
  <footer id="finish" class="footer">
    <div class="contact-info">
      <p class="title-footer">AutomaTech</p>
      <div class="social-icons">
        <span class="facebook">
          <a target="_blank" href="https://www.facebook.com/profile.php?id=100090664016070&sk=about">
            <div class="fa-brands fa-facebook-f"></div>
          </a>
        </span>
        <span class="whatsapp">
          <a target="_blank" href="https://wa.me/5352489105">
            <div class="fa-brands fa-whatsapp"></div>
          </a>
        </span>
        <span class="instagram">
          <a target="_blank" href="#">
            <div class="fa-brands fa-instagram"></div>
          </a>
        </span>
      </div>
    </div>
  </footer>
</body>
<script src="js/ext-usd.js"></script>

</html>