import { buildFeebackPath, extractFeedback } from ".";

function handler(req, res) {
  const feedbackId = req.query.feedbackId;
  const filePath = buildFeebackPath();
  const data = extractFeedback(filePath);
  const selectedFeedback = data.find((item) => item.id === feedbackId);

  res.status(200).json({ feedback: selectedFeedback });
}

export default handler;
