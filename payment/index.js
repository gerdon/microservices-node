const express = require("express");

const app = express();
const port = 8082;

app.get("/payment-list", (request, response) => {
  let payload = {
    data: {
      item: [
        {
          id: 1,
          name: 'Payment-1'
        },
        {
          id: 2,
          name: 'Payment-2'
        }
      ]
    }
  };

  response.status(200).json(payload);
});

app.get("/", (request, response) => {
  response.send("Payment called");
});

app.listen(port, () => {
  console.log("Listening at localhost", port);
});
