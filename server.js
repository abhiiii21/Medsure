const express = require("express");
const path = require("path");

const app = express();

// 👇 THIS LINE SERVES YOUR WEBSITE FILES
app.use(express.static(__dirname));

const medicines = {
  "Crocin": {
    composition: "Paracetamol 500mg",
    alternatives: ["Calpol", "Pacimol"],
    priceRange: "₹15–20"
  },
  "Dolo": {
    composition: "Paracetamol 650mg",
    alternatives: ["Pacimol 650"],
    priceRange: "₹25–30"
  },
  "Augmentin": {
    composition: "Amoxicillin + Clavulanic Acid 625mg",
    alternatives: ["Moxikind-CV", "Clavam"],
    priceRange: "₹120–150"
  },
  "Amlodipine": {
    composition: "Amlodipine 5mg",
    alternatives: ["Amlokind", "Amlovas"],
    priceRange: "₹25–40"
  },
  "Metformin": {
    composition: "Metformin 500mg",
    alternatives: ["Glycomet", "Cetapin"],
    priceRange: "₹20–35"
  }
};

app.get("/search", (req, res) => {
  const name = req.query.medicine;

  const med = Object.keys(medicines).find(
    key => key.toLowerCase() === name.toLowerCase()
  );

  if (!med) return res.send({ message: "Medicine not found" });

  res.send(medicines[med]);
});

app.listen(3000, "0.0.0.0", () => {
  console.log("Server running");
});




