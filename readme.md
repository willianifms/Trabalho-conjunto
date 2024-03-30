# Notícias em Destaque

Carregando as últimas notícias da API

## Descrição

Este projeto demonstra como consumir dados de uma API JSON e exibi-los em um site de forma dinâmica e interativa. O foco principal está em destacar uma notícia principal e apresentar uma lista de outras notícias relevantes.

## Funcionalidades

1. **Exibição de Notícias:**
   - O código busca artigos de notícias na API.
   - Ele cria uma classe personalizada `Noticia` para representar cada artigo.
   - Os artigos são exibidos com título, fonte, data de publicação, autor, descrição e um link para o artigo completo.

2. **Tratamento de Erros:**
   - O código inclui uma classe `ErroCustomizado` para lidar com erros personalizados.
   - Se algum dado necessário estiver ausente na resposta da API, um erro é lançado.

3. **Destaque para Notícias Principais:**
   - A classe `NoticiaDestaque` estende `Noticia` e adiciona um campo de imagem.
   - O principal artigo de notícias (primeiro na resposta da API) é exibido com destaque, incluindo uma imagem.


## Tecnologias utilizadas

- JavaScript
- XMLHttpRequest
- Classes e objetos
- Manipulação do DOM
- Tratamento de erros
  
## Como usar

Clone o repositório para o seu computador.
- Abra o arquivo index.html em um navegador web.
- Verifique se a API está disponível e funcionando corretamente.
- Se necessário, ajuste o código JavaScript para personalizar a aparência e o comportamento do site.
