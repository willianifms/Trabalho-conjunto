let requestURL= "https://www.luizpicolo.com.br/api.json"
let request = new XMLHttpRequest()
request.open("GET", requestURL)
request.responseType = "json"
request.send()
request.onload = function(){
  let resposta = request.response;
  let noticias = resposta.articles;
  noticias.forEach(function(noticia){
  console.log(noticia)
})
}
  /*class Noticia{
  constructor (title, publishedAt, author, description){
    this.title = titulo;
    this.publishedAt = data;
    this.author = autor;
    this.description = descricao;
  }
  mostrarNoticia()
  {
    return resposta;
  }
}
let noticia = new Noticia()
console.log(noticia)
}*/
//console.log (json)


//console.log(noticia.title)

  //document.getElementById("listar");
  //element.insertAdjacentHTML("afterbegin", "teste");

  //element.insertAdjacentHTML("afterbegin", "<h1>titulo</h1>");  isso vai escrever o texto no html, a noticia vem do mostrarNoticia
 