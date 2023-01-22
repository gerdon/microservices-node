const express = require("express");

const app = express();
const port = 8081;

app.get("/order-list", (request, response) => {
  let payload = {
    data: {
      item: [
        {
          id: 1,
          name: 'order-1'
        },
        {
          id: 2,
          name: 'order-2'
        }
      ]
    }
  };

  response.status(200).json(payload);
});

app.get("/", (request, response) => {
  response.send("Order called");
});

app.listen(port, () => {
  console.log("Listening at localhost", port);    
});
