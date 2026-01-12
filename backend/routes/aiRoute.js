const express = require("express");
const router = express.Router();

router.post("/chat", async (req, res) => {
  const { message } = req.body;
  if (!message) return res.status(400).json({ error: "message is required" });

  try {
    const response = await fetch(
      "https://api.groq.com/openai/v1/chat/completions",
      {
        method: "POST",
        headers: {
          "Authorization": `Bearer ${process.env.GROQ_API_KEY}`,
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          model: "llama-3.1-8b-instant",
          messages: [
            {
              role: "system",
              content: "Respond using clean markdown formatting with headings, bullet points, and code blocks when helpful."
            },
            {
              role: "user",
              content: message
            }
          ]
        })
      }
    );

    const data = await response.json();

    return res.json({
      reply: data.choices?.[0]?.message?.content || "No content"
    });

  } catch (err) {
    console.error("GROQ ERROR:", err);
    return res.status(500).json({ error: "AI request failed" });
  }
});

module.exports = router;