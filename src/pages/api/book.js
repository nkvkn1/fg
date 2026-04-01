export default function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed." });
  }

  const { name, email, shootType, preferredDate } = req.body || {};

  if (!name || !email || !shootType || !preferredDate) {
    return res.status(400).json({ message: "Please complete the required booking fields." });
  }

  return res.status(200).json({
    message:
      "Thanks. Your inquiry is in, and Fotogracia will follow up with confirmation details shortly.",
  });
}
