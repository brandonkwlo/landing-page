const fs = require("fs");

const html = fs.readFileSync("index.html", "utf8");
const newHtml = html.replace("%POSTHOG_API_KEY%", process.env.POSTHOG_API_KEY);
fs.writeFileSync("index.html", newHtml);
const path = require("path");

// Create public directory if it doesn't exist
const publicDir = path.join(__dirname, "public");
if (!fs.existsSync(publicDir)) {
  fs.mkdirSync(publicDir);
}

// Copy your HTML, CSS, and other assets to the public directory
fs.copyFileSync("index.html", path.join(publicDir, "index.html"));
