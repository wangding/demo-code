const express = require("express");
const redis = require("redis");

const app = express();
const redisClient = redis.createClient(6379);
const MOCK_API = "https://jsonplaceholder.typicode.com/users/";

app.get("/users", (req, res) => {
  const email = req.query.email;

  try {
    fetch(`${MOCK_API}?email=${email}`)
      .then(response => response.json())
      .then(data => {
        console.log("User successfully retrieved from the API");
        res.status(200).send(data);
      });
  } catch (err) {
    res.status(500).send({ error: err.message });
  }
});

app.get("/cached-users", (req, res) => {
  const email = req.query.email;

  try {
    redisClient.get(email, (err, data) => {
      if (err) {
        console.error(err);
        throw err;
      }

      if (data) {
        console.log("User successfully retrieved from Redis");
        res.status(200).send(JSON.parse(data));
      } else {
        fetch(`${MOCK_API}?email=${email}`)
          .then(response => response.json())
          .then(data => {
            redisClient.setex(email, 600, JSON.stringify(data));
            console.log("User successfully retrieved from the API");
            res.status(200).send(data);
          });
      }
    });
  } catch (err) {
    res.status(500).send({ error: err.message });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server started at port: ${PORT}`);
});
