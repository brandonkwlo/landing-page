const fs = require("fs");

const html = fs.readFileSync("index.html", "utf8");
const newHtml = html.replace("%POSTHOG_API_KEY%", process.env.POSTHOG_API_KEY);
fs.writeFileSync("index.html", newHtml);
