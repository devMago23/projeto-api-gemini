import express from "express";
import { listarPosts, postarNovoPost, uploadImagem, atualizarNovoPost} from "../controllers/postsControlers.js";
import multer from "multer";
import cors from "cors";
// configuração para integrar o front-end com o back-end
const corsOptions = {
    origin: "http://localhost:8000",
    optionsSuccessStatus: 200
}
//função responsavel por fazer o tratamento de imagens no windows dando o nome da imagem  impedindo que retorne um monte de numeros 
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/');
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname);
    }
  })

const upload= multer({dest: "./uploads", storage})
// função contendo o app e responsavel por listarpost, criarpost e colocar imagem no post
const routes = (app) => {
    app.use(express.json()); // Habilita o parser JSON para lidar com requisições com corpo em formato JSON.
    //rota para integrar o back end com front end
    app.use(cors(corsOptions))
    // Rota GET para obter todos os posts.
    app.get("/posts/", listarPosts);
    //rota para criar um novo post
    app.post("/posts", postarNovoPost) // chama a função controladora para ceiar um novo post
    //rota para criação de imagens (assumindo uma unica imagem chamada "imagem")
    app.post("/upload", upload.single("imagem"),uploadImagem ) //chama a função controladora para processamento de  imagem 
    app.put("/upload/:id", atualizarNovoPost)
}

export default routes;

