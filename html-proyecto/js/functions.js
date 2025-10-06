//----------Seleccion de elementos

const title = document.getElementById("txt");

//console.log(title);

const image = document.getElementsByClassName("header__img");
//console.log(image)

const tags = document.getElementsByTagName("section");
//console.log(tags);

const elem = document.querySelectorAll(".products__container");
//console.log(elem);

//---------Crear elemento y agregar atributos
const parent = document.querySelector(".header__img");

const newElem = document.createElement("a");

newElem.setAttribute("class", "new");

parent.append(newElem);

//-----------Atributos

const logo = document.querySelector(".header__img");

//logo.setAttribute("src", "img/jersey-adidas-seleccion-nacional-de-mexico-local-2024-is-IP6377-5.jpg");

//console.log(logo.getAttribute("src"));
//console.log(logo.hasAttribute("src")) //Indica si tiene o no el atributo
//logo.removeAttribute("src");


if(logo.hasAttribute("src")){ //regresa un booleano
    //alert("tiene src!");
}

//---------CSS Clases
const parent1 = document.querySelector(".products");
//console.log(parent1);

const parent2 = parent1.firstElementChild;
const price = parent2.lastElementChild;
//console.log(price);

price.classList.add("red"); //anadir una clase del scss a un elemento
price.classList.replace("red", "blue");
price.classList.remove("blue");

//-------Modificar texto

const button = document.getElementsByTagName("button");
//console.log(button);
//console.log(button[0].innerText);

//button[0].innerText = "Buy";

//---------MODIFICAR STYLE
//console.log(button[0].style);
//button[0].style.backgroundColor = "black";


//---------EVENTOS

//target.addEventListener(event, function);

// const elemeButton = button[0];

// elemeButton.addEventListener('click', () => {
//     elemeButton.classList.toggle("toggle");
// });

//conteo de productos
let productsCount = 0;

const redcircle = document.getElementById("cart-count");
const cartlist = document.querySelector(".cart__list")
const product = document.querySelectorAll(".products__container");
console.log(product)

// Crea un .cart__container y lo agrega al carrito
function addCartItem({ title, priceText, imgSrc }) {
  const item = document.createElement("div");
  item.className = "cart__container";

  const img = document.createElement("img");
  img.className = "cart__img";
  img.src = imgSrc;
  img.alt = title;

  const nameEl = document.createElement("p");
  nameEl.className = "cart__text";
  nameEl.textContent = title;

  const priceEl = document.createElement("p");
  priceEl.className = "cart__text cart__text--bold";
  priceEl.textContent = priceText; // mantiene el formato $x,xxx

  const trash = document.createElement("i");
  trash.className = "cart__imgContainer";

  const trashIcon = document.createElement("img");
  trashIcon.src = "img/trash_3021948.png";
  trashIcon.alt = "Icono Quitar";
  trashIcon.className = "cart__imgContainer--smaller";
  trash.appendChild(trashIcon);

  item.appendChild(img);
  item.appendChild(nameEl);
  item.appendChild(priceEl);
  item.appendChild(trash);

  cartlist.appendChild(item);
}

product.forEach(p => {
    const addbutton = p.querySelector(".buttonAgregar");

    addbutton.addEventListener("click", () => {
        const title = p.querySelector(".products__title").textContent.trim();
        const priceText = p.querySelector(".products__cost").textContent.trim(); // p.ej. "$2,300"
        const imgSrc = p.querySelector(".products__img").getAttribute("src");

        addCartItem({ title, priceText, imgSrc });
        productsCount++;
        redcircle.textContent = productsCount;
    });
});

// const iconRemove = document.querySelectorAll(".cart__imgContainer");
// //console.log(iconRemove);

cartlist.addEventListener("click", (e) => {
  const trash = e.target.closest(".cart__imgContainer");
  if (!trash) return;
  const row = trash.closest(".cart__container");
  if (row) {
    row.remove();
    productsCount--;
    redcircle.textContent = productsCount;
  }
});

// iconRemove.forEach(elem => {
//     elem.addEventListener("click", () => {
//         const elemParent = elem.parentElement;
//         elemParent.remove();
//         productsCount--;
//         redcircle.textContent = productsCount;
//     })
// });

const header = document.querySelector("header")
const cartIcon = header.lastElementChild;
const cart = document.querySelector(".cart")
const cartX = document.querySelector(".cart_xicon")

const menuIcon = header.firstElementChild;
const menu = document.querySelector(".menu");
const menuX = document.querySelector(".menu_xicon")

//Icono para ver el carrito
cartIcon.addEventListener("click", () => {
    cart.classList.add("show");
});

//X para salir del carrito
cartX.addEventListener("click", () => {
    cart.classList.remove("show");
});

//Icono para ver el menu
menuIcon.addEventListener("click", () => {
    menu.classList.add("show2");
});

//X para salir del menu
menuX.addEventListener("click", () => {
    menu.classList.remove("show2");
});

product.forEach(m => {
    m.addEventListener("mouseenter", () => {
        m.style.opacity = ".5";
    })
});

product.forEach(m => {
    m.addEventListener("mouseleave", () => {
        m.style.opacity = "1";
    })
});

