import mongoose from "mongoose";

const user = 'JuampaVLB';

const password = 'TlThRUmQWNVA785n';

const URI = `mongodb+srv://${user}:${password}@cluster0.ktoxf8e.mongodb.net/escuela`;

// Local
// mongodb://0.0.0.0:27017/escuela

mongoose
  .connect(URI)
  .then(() => console.log("BASE DE DATOS CONECTADA!"))
  .catch((e) => console.log(e));
