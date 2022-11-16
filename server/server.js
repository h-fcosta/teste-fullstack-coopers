import dotEnv from "dotenv";
import app from "./src/app.js";

dotEnv.config();

const port = process.env.PORT || 3001;

if(process.env.NODE_ENV === 'production'){
  app.use(express.static('client/build'));
}

app.listen(port, () => {
  console.log(`Servidor escutando em http://localhost:${port}`);
});
