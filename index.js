const reviews = [
  {
    id: 1,
    name: "Heer",
    job: "web developer",
    img: "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg",
    text: "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
  },
  {
    id: 2,
    name: "Haider",
    job: "web designer",
    img: "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883409/person-2_np9x5l.jpg",
    text: "Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.",
  },
  {
    id: 3,
    name: "Muskan",
    job: "intern",
    img: "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg",
    text: "Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.",
  },
  {
    id: 4,
    name: "Afzal",
    job: "the boss",
    img: "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg",
    text: "Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ",
  },
];

// getting element from html
const getImage = document.querySelector("#image");
const getName = document.querySelector("#Name");
const getRole = document.querySelector("#Role");
const getText = document.querySelector("#text");

const getPre = document.querySelector(".pre");
const getNext = document.querySelector(".next");
const getBtn = document.querySelector("#btn");
let currentItems = 0;

window.addEventListener("DOMContentLoaded", () => {
  onLoading()
})

function onLoading() {
  getImage.src = reviews[currentItems].img;
  getName.textContent = reviews[currentItems].name;
  getRole.textContent = reviews[currentItems].job;
  getText.textContent = reviews[currentItems].text;
}

getNext.addEventListener("click", () => {
  currentItems++;
  if (currentItems > reviews.length - 1) {
    currentItems = 0
  }
  onLoading(currentItems)

})
getPre.addEventListener("click", () => {
  currentItems--;
  if (currentItems < 0) {
    currentItems = reviews.length - 1
  }
  onLoading(currentItems)

})

getBtn.addEventListener("click", () => {
  currentItems = Math.floor(Math.random() * reviews.length);
  onLoading()
})