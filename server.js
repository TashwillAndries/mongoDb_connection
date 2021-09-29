const express = require("express");
const connectDB = require("./config/db");
const app = express();

connectDB();
app.get("/", (req, res) =>
  res.send({ msg: "Welcome to the contact keeper API.." })
);

//init middleware
app.use(express.json({ extended: false }));

// define routes
app.use("/api/users", require("./routes/users"));
app.use("/api/auth", require("./routes/auth"));
app.use("/api/contacts", require("./routes/contact"));

const PORT = process.env.PORT || 5001;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
