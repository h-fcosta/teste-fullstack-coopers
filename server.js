import dotEnv from "dotenv";
import app from "./server/src/app.js";

dotEnv.config();

const port = process.env.PORT || 3001;

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

app.listen(port, () => {
  console.log(`Servidor escutando em http://localhost:${port}`);
});