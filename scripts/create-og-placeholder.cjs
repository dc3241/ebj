const fs = require("node:fs");
const path = require("node:path");

const publicDir = path.join(__dirname, "..", "public");
const jpg = Buffer.from(
  "/9j/4AAQSkZJRgABAQEASABIAAD/2wBDAAUDBAQEAwUEBAQFBQUGBwwIBwcHBw8LCwkMEQ8SFhEVERYYGiMcHR0fHx8PDy0nLS0xNDE0NjI4OjI4NTUxMTL/2wBDAQUDAwQEAwUEBAQFBQUGBwwIBwcHBw8LCwkMEQ8SFhEVERYYGiMcHR0fHx8PDy0nLS0xNDE0NjI4OjI4NTUxMTL/wAARCAABAAEDAREAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k=",
  "base64",
);

fs.writeFileSync(path.join(publicDir, "og-image.jpg"), jpg);
console.log("Created public/og-image.jpg placeholder");
