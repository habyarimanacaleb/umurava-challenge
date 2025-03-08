const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(bodyParser.json());

mongoose.connect("mongodb://localhost:27017/skill-challenge", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const challengeSchema = new mongoose.Schema({
  imageUrl: String,
  title: { type: String, required: true },
  date: { type: Date, required: true },
  duration: { type: String, required: true },
  prize: { type: String, required: true },
  contact: { type: String, required: true },
  projectDescription: { type: String, required: true, maxlength: 250 },
  projectBrief: { type: String, required: true, maxlength: 50 },
  projectTasks: { type: String, required: true, maxlength: 500 },
});

const Challenge = mongoose.model("Challenge", challengeSchema);

app.get("/api/challenges/:id", async (req, res) => {
  try {
    const challenge = await Challenge.findById(req.params.id);
    res.json(challenge);
  } catch (error) {
    res.status(500).send("Server error");
  }
});

app.put("/api/challenges/:id", async (req, res) => {
  try {
    const challenge = await Challenge.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.json(challenge);
  } catch (error) {
    res.status(500).send("Server error");
  }
});

app.delete("/api/challenges/:id", async (req, res) => {
  try {
    await Challenge.findByIdAndDelete(req.params.id);
    res.send("Challenge deleted");
  } catch (error) {
    res.status(500).send("Server error");
  }
});

app.listen(5000, () => {
  console.log("Server is running on port 5000");
});
