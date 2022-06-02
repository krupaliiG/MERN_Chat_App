const { response } = require("express");
const express = require("express");
const dotenv = require("dotenv");
const chats = require("./data/data");
const app = express();

dotenv.config();

app.get("/", (request, response) => {
  response.send("Hello");
});

app.get("/api/chat", (request, response) => {
  console.log("Hii....");
  response.send(chats);
});

app.get("/api/chat/:id", (request, response) => {
  const singleChat = chats.find(
    (eachChat) => (eachChat._id = request.params.id)
  );
  response.send(singleChat);
});

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log(`server started on port ${PORT}`);
});
