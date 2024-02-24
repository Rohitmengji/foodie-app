const express = require("express");
const app = express();
const port = 5000;

// Array of allowed origins
const allowedOrigins = [
  "http://localhost:3000",
  "https://foodie-app-zeta.vercel.app",
];

app.use((req, res, next) => {
  const origin = req.headers.origin;

  // Check if the request's origin is in the allowedOrigins array
  if (allowedOrigins.includes(origin)) {
    res.setHeader("Access-Control-Allow-Origin", origin);
  }

  // Set other CORS headers
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );

  // Continue to the next middleware
  next();
});

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use("/api/auth", require("./Routes/Auth"));

app.listen(port, () => {
  console.log(`Example app listening on http://localhost:${port}`);
});
