const fs = require("fs");
const path = require("path");

// Create public directory if it doesn't exist
const publicDir = path.join(__dirname, "public");
if (!fs.existsSync(publicDir)) {
  fs.mkdirSync(publicDir);
}

// Function to copy file or directory
function copyRecursive(src, dest) {
  if (fs.lstatSync(src).isDirectory()) {
    if (!fs.existsSync(dest)) {
      fs.mkdirSync(dest);
    }
    fs.readdirSync(src).forEach((childItemName) => {
      copyRecursive(
        path.join(src, childItemName),
        path.join(dest, childItemName)
      );
    });
  } else {
    fs.copyFileSync(src, dest);
  }
}

// Copy your HTML, CSS, and other assets to the public directory
copyRecursive("css", path.join(publicDir, "css"));
copyRecursive("assets", path.join(publicDir, "assets"));
fs.copyFileSync("index.html", path.join(publicDir, "index.html"));

// Replace PostHog API key in index.html
let html = fs.readFileSync(path.join(publicDir, "index.html"), "utf8");
const newHtml = html.replace("%POSTHOG_API_KEY%", process.env.POSTHOG_API_KEY);
fs.writeFileSync(path.join(publicDir, "index.html"), newHtml);
