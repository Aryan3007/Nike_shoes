import { v4 as uuidv4 } from "https://jspm.dev/uuid";

const csr = document.querySelector(".cursor");

document.addEventListener("mousemove", function (dets) {
  csr.style.left = dets.x - 100 + "px";
  csr.style.top = dets.y - 100 + "px";
});

function animatonloade(){
  

// gsap.to(".loader",{
//   height:"0%",
//   duration:2
// })

gsap.from(".try",{
  y:"70px",
  opacity:0,
  // delay:2,
  duration:1,
})
gsap.from("#side",{
  opacity:0,
  duration:3,
  // delay:2,
})
// gsap.from("#oo1",{
//   y:"-170px",
//   opacity:0,
//   duration:3,
//   // delay:2,
// })
// gsap.from("#oo2",{
//   y:"170px",
//   opacity:0,
//   duration:3,
//   // delay:2,
// })
gsap.from(".nav, .nav2",{
  y:"-70px",
  opacity:0,
  // delay:2,
  duration:1,
})
gsap.from(".nav ul li",{
  y:"-70px",
  opacity:0,
  duration:1,
  // delay:2,
  stagger:0.4
})
gsap.from(" #ul2 li, #search, .icons",{
  y:"-30px",
  opacity:0,
  duration:1,
  stagger:0.2,
  // delay:2,
})


}

animatonloade()

const shoesdata = [
  {
    name: "Nike Pegasus 40",
    img: "pegasus-40-road-running-shoes-4TS8dd-removebg-preview.png",
    price: "MRP : ₹ 11,999.00",
    size: "size : 7 8 9 10",
    uuid: uuidv4(),
  },
  {
    name: "Nike Air Max 270",
    img: "air-max-270-shoes-V4DfZQ-removebg-preview.png",
    price: "MRP : ₹ 13 395.00",
    size: "size : 7 8 9 10",
    uuid: uuidv4(),
  },
  {
    name: "Air Jordan 6 Retro",
    img: "air-jordan-6-retro-shoes-4m3b9d-removebg-preview.png",
    price: "MRP : ₹ 18 595.00",
    size: "size : 7 8 9 10",
    uuid: uuidv4(),
  },
  {
    name: "Nike Revolution 6",
    img: "revolution-6-road-running-shoes-NC0P7k-removebg-preview.png",
    price: "MRP : ₹ 3 654.00",
    size: "size : 7 8 9 10",
    uuid: uuidv4(),
  },
  {
    name: "Nike Air Force 1 '07",
    img: "air-force-1-07-lv8-shoes-pBxkmz-removebg-preview.png",
    price: "MRP : ₹ 8 595.00",
    size: "size : 7 8 9 10",
    uuid: uuidv4(),
  },
  {
    name: "Air Jordan 1 Mid",
    img: "air-jordan-1-mid-older-shoes-wqHdzW-removebg-preview.png",
    price: "MRP : ₹ 7 995.00",
    size: "size : 7 8 9 10",
    uuid: uuidv4(),
  },
  {
    name: "Nike Air Max 90",
    img: "air-max-90-shoes-GsjTTK-removebg-preview.png",
    price: "MRP : ₹ 11,895.00",
    size: "size : 7 8 9 10",
    uuid: uuidv4(),
  },
  {
    name: "Air Jordan 5 x DJ",
    img: "air-jordan-5-dj-khaled-shoes-tQrmGS-removebg-preview.png",
    price: "MRP : ₹ 19 299.00",
    size: "size : 7 8 9 10",
    uuid: uuidv4(),
  },
  {
    name: "Nike Pegasus 40 SE",
    img: "pegasus-40-se-road-running-shoes-JM1hs5-removebg-preview.png",
    price: "MRP : ₹ 18 595.00",
    size: "size : 7 8 9 10",
    uuid: uuidv4(),
  },
  {
    name: "Nike Air Max Excee",
    img: "air-max-excee-shoes-MxgpKq-removebg-preview.png",
    price: "MRP : ₹ 7 999.00",
    size: "size : 7 8 9 10",
    uuid: uuidv4(),
  },
  {
    name: "Nike React Trail 4 SE",
    img: "react-pegasus-trail-4-se-trail-running-shoes-lGbXdr-removebg-preview.png",
    price: "MRP : ₹ 11 895.00",
    size: "size : 7 8 9 10",
    uuid: uuidv4(),
  },

  {
    name: "Air Jordan 7 Retro",
    img: "air-jordan-7-retro-shoes-xbNFP8-removebg-preview.png",
    price: "MRP : ₹ 18 995.00",
    size: "size : 7 8 9 10",
    uuid: uuidv4(),
  },
];

function getcard() {
  let card = ``;
  shoesdata.forEach(function (shoes) {
    card += `
    <div class="elem1">
    <img class="ii" id="imgg" src="${shoes.img}" alt="">
    <h1 class="back">NIKE</h1>
    <div id="details">
      <p id="price">${shoes.price}</p>
      <h1 id="name" class="details">${shoes.name}</h1>
      <p id="size">size : 7 8 9 10</p>
      <button class="btn">ADD TO CART</button>
    </div>
  </div>
        `;
  });
  return card;
}

let imgarray = [];
let idarray=[]

function createarray() {
  document.addEventListener("mouseover", function (e) {
    if (e.target.classList.contains("ii")) {
      imgarray.unshift(e.target.src);
      idarray.unshift(e.target.id)
      renderimg();
    }
    imgarray = [];
    idarray=[]
  });
}
createarray();
function getimg() {
  let shoe = ``;
  imgarray.forEach(function (image) {
    shoe = `
    <img class="animat" src="${imgarray}" alt="">
    `;
  });
  return shoe;
  ani()
}

function render() {
  document.getElementById("try").innerHTML = getcard();
}
render();


function ani(){
  gsap.from(".animat",{
    x:"-100px",
    opacity:0
  })
}

function renderimg() {
  document.getElementById("divimg").innerHTML = getimg();
}
let first=document.getElementById("first")
let dropdown=document.querySelector(".dropdown")


first.addEventListener("mouseover", function(){
  gsap.to(".dropdown",{
    height:"500px",
    duration:0.2
  })
})
dropdown.addEventListener("mouseout", function(){
  gsap.to(".dropdown",{
    height:"0px",
    duration:0.2
  })
})
