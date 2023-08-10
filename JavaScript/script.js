// console.log("Olá programador")

// Para usar o JavaScript uso <script> ... </script>
// Não é regra mas eu posso codar no html dentro da TAG script ou posso criar um arquivo
// separado como este.
// E para chamar meu aruivo .js uso <script src="./e o nome do aquivo .js"

/* 

O JavaScript se refere ao HTML como DOCUMENT 
document = html

getElementById -> Trás um elemento pelo ID " Lembrando que o ID é único só utilizo uma vez na minha página"
getELementByClassName -> Trás todos os elementos dentro da CLASS citada
getELementByTagName -> Trás todos os elementos com essa TAG
getELementByName -> Trás todos os elementos com esse NAME, lembrando que posso dar name="ao input ou button,etc"

querySelector -> Trás um elemento, o PRIMEIRO que encontrar
querySelectosAll -> Trás TODOS os elementos que encontrar

*/
/*
 const input = document.getElementById("main-input") //  Aqui estou mapeando meu HTML pegando pelo ID  e guardando em uma variável.
 const elements = document.getElementsByClassName("paragraph-js")
 const elementos = document.getElementsByTagName("p")
const elementor = document.getElementsByName("nome-completo")
*/

// const elements = document.querySelector("p") // posso procurar o elemento
// const elements = document.querySelector(".paragraph-js") // posso procurar uam classe usando ponto (".nomedaclasse")
// const elements = document.querySelector("#main-input") // posso procurar o id usando hashtag # 
// const elements = document.querySelector("button.paragraph-js") // Se tiver mais de uma classe com o mesmo nome posso chamar o elemento e ponto nome da classe .nomedaclasse a frente
// console.log(elements)
// O querySelectorAll ele usa o mesmo princípio porém pega tudo 

//Posso ter acesso ou alterar valores no meu HTML pelo javascript como:
// uso o nome da variavel e o ponto ex: variavel.nomedoelemento = ao valor que quero alterar

 //const element = document.querySelector("#main-input")

 // Eu posso trocar o value que tem dentro do meu elemento e também alterar o elemento em si;

 //element.placeholder = "Agora é este texto" // alterando o elemento

 //element.value = "102030" // Aqui estou alterando o valor do elemento com o VALUE

// console.log(element.value) // Assim eu posso pegar o número/valor que está dentro do input, isto é útil porque eu posso esperar usuário digitar algo para pegar como informação de senha.

/* 
---------- Alterando e Acessando Textos ----------

    textContent -> Pega todo o conteúdo
    innerText -> Pega APENAS o texto
    innerHTML -> Permite adicionar HTML, ou seja, posso alterar texto, acrescentar, mudar estilo e sumir com o " " aspas vazias

*/
/*
const element = document.querySelector(".paragraph-js") // Lembrando que para chamar class uso ponto .class

console.log(element.textContent) // SÓ HTML, descosidera o CSS
console.log(element.innerText) // Leva em conta o CSS, aqui ele vai me trazer só o que eu vejo na tela
console.log(element.innerHTML) // Trás TUDO, ele me retorna tudo inclusive o HTML e consigo colcoar HTML no meio

element.innerHTML = "Texto novo <b>Olá</b>" // Posso alterar HTML com JAVASCRIPT usando o innerHTML 
*/
/*
const button = document.querySelector(".main-button")

// Posso trocar qualquer elemento utilizando javascript e no CSS também é possível

button.style.fontSize = "30px"
button.style.backgroundColor = "#932594"
*/

/* 
---------- EVENTOS ----------

Resumidamente, um evento é : Aconteceu uma coisa, faça outra. o "hover" é um evento 
Todos os eventos começam com "on"

*/

//const input = document.querySelector("#main-input")

/*function cliqueiNoButton(){            // Primeiro dou nome a função() uso os parênteses, e para chamar a function com evento eu chamo ela pelo nome() mais parenteses la no meu HTML
    console.log(input.value) // aqui usei o evento onclick
}

function digiteiNoInput(){
    console.log(input.value) // dessa forma estou chamando a função todo vez que se digita no input e pegando o value dele.
}


const element = document.querySelector("h1")

function cliqueiNoBotãoMudeiH1(){
    element.innerHTML = "<h1>Olá Dev</h1>"
}
*/

/* 
---------- addEventListener ----------

Primeiro começo mapeando o que eu quero fazer de evento


const input = document.querySelector("#main-input")
const select = document.querySelector("select")
const button = document.querySelector(".main-button")

//function troqueiValor(event){         // essa é a formula do addEventListener e tudo oque eu preciso para pegar meu evento
//    console.log("troqueiValor")       // 

function troqueiValor(event){             // O evento gera vários dados eles chegam dentro do parenteses na frente da variavel 
    console.log(event)                   // e tudo oque preciso fazer para pegar os dados é usar uma palavra dentro dos () ex:(event)
}

button.addEventListener("click", troqueiValor) // Pode usar para qualquer variável que criei para qualquer elemento.
// addEventListener posso ouvir o evento e dentro chamar a function e dentro do addEventListener não precisa usar () na função
*/

