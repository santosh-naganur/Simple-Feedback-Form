const express = require("express");
const app = express();
app.use(express.json());

let feedbackList = [];

app.post("/feedback", (req, res) => {
  feedbackList.push(req.body);
  res.json({ success: true, message: "Feedback submitted successfully" });
});

app.get("/feedback", (req, res) => {
  res.json(feedbackList);
});

app.listen(5000, () => console.log("Server running on port 5000"));
