let iphone = [
  {
    id: 2,
    src: "imagens/iphone-amarelo.png",
    cor:"#f5de0c"
  },

  {
    id: 1,
    src: "imagens/iphone-azul.png",
    cor:"#a7c4f0"
  },

  {
    id: 6,
    src: "imagens/iphone-branco.png",
    cor:"#e2e4ec"
  },

  {
    id: 4,
    src: "imagens/iphone-preto.png",
    cor:"#333"
  },

  {
    id: 3,
    src: "imagens/iphone-roxo.png",
    cor:"#d4c3d4"
  },

  {
    id: 5,
    src: "imagens/iphone-vemelho.png",
    cor:"#c90202"
  },
];



let color = document.querySelectorAll(".circle");

function add(){
color.map(addEventListener('click',(e)=>{
let cor = e.target.dataset.id;
console.log(cor);

let cores = iphone.filter((src)=>{
return src.id == cor;
});

console.log(cores[0].src);

document.querySelector("#imagens img").src = cores[0].src;
document.querySelector(".bg-circle").style.backgroundColor = cores[0].cor;


}))
}



window.onload = add();



/*
document.querySelector(".circle").addEventListener('click', {

    let color = e.target;

console.log(color);
});*/