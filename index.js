const express = require("express");
const app = express();

app.use(express.json());

FANCY_DB = [
  {
    id: 1,
    name: "Phillip",
  },
];

app.get("/", function (request, response) {
  response.send("hello!");
});

app.get("/data", function (req, res) {
  res.json(FANCY_DB);
});

app.post("/data", function (request, response) {
  FANCY_DB.push(request.body);
  response.json(request.body);
});

app.patch("/data/:id", function (request, response) {
  FANCY_DB.forEach(function (i) {
    if (i["id"] == request.params.id) {
      i["name"] = request.body.name;
    }
  });
  response.json(request.body);
});

app.delete("/data/:id", function (request, response) {
  FANCY_DB.forEach(function (i) {
    if (i["id"] == request.params.id) {
      var index = FANCY_DB.indexOf(i);
      FANCY_DB.splice(index, 1);
    }
  });
  response.json("Deleted");
});

app.listen(process.env.PORT || 3000);
