export default function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed." });
  }

  const { name, email, message } = req.body || {};

  if (!name || !email || !message) {
    return res.status(400).json({ message: "Please complete the contact form before submitting." });
  }

  return res.status(200).json({
    message:
      "Message received. Fotogracia will get back to you soon with next steps.",
  });
}
