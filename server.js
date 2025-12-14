const express = require("express");
const multer = require("multer");
const Obfuscator = require("javascript-obfuscator");
const cors = require("cors");

const app = express();
const upload = multer();
app.use(cors());
app.use(express.json());

const LICENSE_KEY = "enc-2025";
const ALLOWED_DOMAIN = "yourdomain.com"; // ganti setelah deploy

app.post("/api/obfuscate", upload.array("files"), (req, res) => {
  const license = req.headers["x-license-key"];
  const origin = req.headers.origin || "";

  if (license !== LICENSE_KEY || !origin.includes(ALLOWED_DOMAIN)) {
    return res.status(403).json({ error: "License or domain invalid" });
  }

  const results = {};

  req.files.forEach(file => {
    const code = file.buffer.toString();
    const obfuscated = Obfuscator.obfuscate(code, {
      compact: true,
      controlFlowFlattening: true,
      deadCodeInjection: true,
      stringArray: true,
      stringArrayEncoding: ["rc4"],
      rotateStringArray: true,
      selfDefending: true,
      debugProtection: true,
      debugProtectionInterval: true
    });

    results[file.originalname] = obfuscated.getObfuscatedCode();
  });

  res.json(results);
});

app.listen(3000, () => {
  console.log("SaaS Obfuscator running on port 3000");
});

