const img = document.querySelectorAll('img')
console.log(img)

const imagemPalavra = document.querySelectorAll('img[src^="img/imagem"]');
console.log(imagemPalavra)

const linksInterno = document.querySelectorAll('[href^="#"]');
console.log(linksInterno)

const h2 = document.querySelector('.animais-descricao h2');
console.log(h2)

const paragrafos = document.querySelectorAll('p')
console.log(paragrafos[--paragrafos.length])