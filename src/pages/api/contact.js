import { saveContactInquiry } from "@/lib/leadStore";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed." });
  }

  const { name, email, shootType, preferredDate = "", message = "" } = req.body || {};

  if (!name || !email || !shootType) {
    return res
      .status(400)
      .json({ message: "Please complete the required inquiry details before submitting." });
  }

  await saveContactInquiry({
    name,
    email,
    shootType,
    preferredDate,
    message,
  });

  return res.status(200).json({
    message:
      "Inquiry received. Fotogracia will get back to you shortly with availability and next steps.",
  });
}
