import app from "./src/app";
import { config } from "./src/config/config";
import connect from "./src/config/db";

const startServer = async() => {

    await connect();
  const port =config.port || 3000;

  app.listen(port, () => {
    console.log(`server runing on ${port}`);
  });
};

startServer();
