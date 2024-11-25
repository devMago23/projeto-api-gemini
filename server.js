import express from "express";  // Importa o módulo Express para criar o servidor web.
import conectarAoBanco from "./src/config/dbConfig.js"; // Importa a função para conectar ao banco de dados.
import routes from "./src/routes/postsRoutes.js";

const app= express(); // Cria uma instância do Express para iniciar o servidor.
app.use(express.static("uploads"))
routes(app)

// Inicia o servidor na porta 3000 e exibe uma mensagem no console.
app.listen(3000, ()=>{
    console.log("testando aqui");
});

//const buscarIdDePosts= (id) => {
   // return posts.findIndex((post)=>{
      //  return post.id === Number(id)
   // })
//};

//essa parte de bacho vai fazer voce selecionar o item do id esecifico bastza dar / na ultima posiçao da url e colocar o numero do id
/*app.get("/posts/:id", (req, res)=>{
    const index= buscarIdDePosts(req.params.id) // aqui a reqisicao  vai pegar os parametros do id
    res.status(200).json(posts[index]); // aqui no json vai pegar a posição do   index
}); */

