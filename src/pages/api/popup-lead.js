import { savePopupLead } from "@/lib/leadStore";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed." });
  }

  const { email, source = "popup-offer" } = req.body || {};

  if (!email) {
    return res.status(400).json({ message: "Please enter your email address." });
  }

  await savePopupLead({ email, source });

  return res.status(200).json({
    message:
      "You&apos;re in. The 20% offer has been saved and Fotogracia will follow up at info@fotogracia.com.",
  });
}
