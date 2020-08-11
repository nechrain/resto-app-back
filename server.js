//Définition des modules
const express = require("express");
const mongoose = require("mongoose");
const productrouter = require("./routers/product");
const cors = require("cors");

const app = express();
app.use(cors());

app.use(express.json());
// const cors= require ('cors')pour connecter la partie back au front//

//On définit notre objet express nommé app

//mongoose mongodb connexion
const uri =
  "mongodb+srv://NessrineChammakhi:NessrineChammakhi@nesscluster.dieq5.mongodb.net/restoapp?retryWrites=true&w=majority";
mongoose
  .connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("mongoDB Connected…");
  })
  .catch((err) => console.log(err));

//use//
app.use("/restoapp/product", productrouter);

//Définition et mise en place du port d'écoute
const port = 8085;
app.listen(port, () => console.log(`Listening on port ${port}`));
