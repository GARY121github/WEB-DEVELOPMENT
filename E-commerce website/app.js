const wrapper = document.querySelector(".sliderWrapper");
const menuItems = document.querySelectorAll(".menuItem");
const products = [
    {
        id: 1,
        title: "Air Force",
        price: 119,
        colors: [
        {
            code: "black",
            img: "../E-commerce/img/AIR (1).png",
        },
        {
            code: "blue",
            img: "../E-commerce/img/AIR (2).png",
        },
    ],
    },
    {
        id: 2,
        title: "Jordan",
        price: 119,
        colors: [
        {
            code: "black",
            img: "../E-commerce/img/AIR (2).png",
        },
        {
            code: "blue",
            img: "../E-commerce/img/AIR (2).png",
        },
    ],
    },
    {
        id: 3,
        title: "Blazer",
        price: 119,
        colors: [
        {
            code: "black",
            img: "../E-commerce/img/AIR (3).png",
        },
        {
            code: "blue",
            img: "../E-commerce/img/AIR (2).png",
        },
    ],
    },
    {
        id: 4,
        title: "Creater",
        price: 119,
        colors: [
        {
            code: "black",
            img: "../E-commerce/img/AIR (4).png",
        },
        {
            code: "blue",
            img: "../E-commerce/img/AIR (2).png",
        },
    ],
    },
    {
        id: 5,
        title: "Hipper",
        price: 119,
        colors: [
        {
            code: "black",
            img: "../E-commerce/img/AIR (5).png",
        },
        {
            code: "blue",
            img: "../E-commerce/img/AIR (2).png",
        },
    ],
    },
];

let chosenProduct = products[0]

const currentProductImg = document.querySelector(".productImg");
const currentProductTitle = document.querySelector(".productTitle");
const currentProductPrice = document.querySelector(".productPrice");
const currentProductColor = document.querySelector(".color");
const currentProductSizes = document.querySelector(".size");


menuItems.forEach((item, index) => {
    item.addEventListener("click", () => {
        //CHANGE THE CURRENT SLIDE.
        wrapper.style.transform = `translateX(${
            -100 * index
          }vw)`;

          //CHANGE THE CHOSEN PRODUCT.
          chosenProduct = products[index];

          //CHANGE TEXT OF CURRENT PRODUCT.
          currentProductTitle.textContent = chosenProduct.title;
          currentProductSizes.textContent = "$" + chosenProduct.price;
          currentProductImg.src = chosenProduct.colors[0].img;

          //ASSIGN NEW COLOR.
          currentProductColor.forEach((color, index) => {
            color.style.backgroundColor = chosenProduct.colors[index].code
          })
    });
});

currentProductColor.forEach((color, index) => {
    color.addEventListener("change", () => {
        currentProductImg.src = chosenProduct.colors[index].img
    })
})