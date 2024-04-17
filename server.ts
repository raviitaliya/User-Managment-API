import app from "./app";

const startServer = () => {
  const port = 3000;

  app.listen(port, () => {
    console.log(`server runing on ${port}`);
  });
};

startServer();
