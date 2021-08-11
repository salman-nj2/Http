const express = require("express");

const app = express();

app.get("/", (req, res) => {
  return res.send("welcome to the homepage");
});

app.get("/users", (req, res) => {
  return res.send({
    data: {
      id: 1001,
      first_name: "Test First Name",
      last_name: "Test Last Name",
      email: "ydalesco0@test.com",
      gender: "Genderfluid",
      ip_address: "164.215.194.36",
      age: 65,
    },
  });
});

app.listen(2345, () => {
  console.log("lstening to port 2345");
});

app.post("/users/:id", function (req, res) {
  return res.send({
    data: {
      id: 1001,
      first_name: "Salman",
      last_name: "Shaikh",
      email: "salman@test.com",
      gender: "male",
      ip_address: "164.215.194.36",
      age: 23,
    },
  });
});

app.delete("/users/:id", function (req, res) {
  return res.send({
    data: {
      id: 1001,
      first_name: "Salman",
      last_name: "Shaikh",
      email: "salman@test.com",
      gender: "male",
      ip_address: "164.215.194.36",
      age: 23,
    },
  });
});
