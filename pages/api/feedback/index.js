import fs from "fs";
import path from "path";

export function buildFeebackPath() {
  return path.join(process.cwd(), "data", "feedback.json");
}

export function extractFeedback(path) {
  const fileData = fs.readFileSync(path);
  return JSON.parse(fileData);
}

function handler(req, res) {
  if (req.method === "POST") {
    const { email, text } = req.body;

    const newFeedback = {
      id: new Date().toISOString(),
      email,
      text,
    };

    const filePath = buildFeebackPath();
    const data = extractFeedback(filePath);
    data.push(newFeedback);
    fs.writeFileSync(filePath, JSON.stringify(data));
    res.status(201).json({ message: "Success", feedback: newFeedback });
  } else {
    const filePath = buildFeebackPath();
    const data = extractFeedback(filePath);
    res.status(200).json({ feedback: data });
  }
}

export default handler;
