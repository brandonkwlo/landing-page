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
fs.copyFileSync(
  "/assests/img/bg-signup.jpg",
  path.join(publicDir, "/assests/img/bg-signup.jpg")
);
fs.copyFileSync(
  "/assests/favicon.ico",
  path.join(publicDir, "/assests/favicon.ico")
);
fs.copyFileSync("/css/styles.css", path.join(publicDir, "/css/styles.css"));
