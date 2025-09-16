// backend/server.js
import express from "express";
import cors from "cors";
import fetch from "node-fetch";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

/**
 * POST /chat
 * body: { message: string, compareList?: Array }
 */
app.post("/chat", async (req, res) => {
  try {
    const { message, compareList } = req.body;

    // Summarize properties to keep payload small
    // const summarized = (Array.isArray(compareList) ? compareList : []).map(
    //   (p) => ({
    //     id: p.id,
    //     title: p.title,
    //     price: p.price,
    //     sqft: p.sqft,
    //     capRate: p?.financials?.capRate ?? null,
    //     location: p?.location ?? null,
    //   })
    // );
// Use full property objects from compareList
const fullProperties = Array.isArray(compareList) ? compareList : [];


    const prompt = `
You are an expert commercial real-estate advisor.
Properties JSON:
${JSON.stringify(fullProperties, null, 2)}

User question: ${message}

➡️ Return the answer in **Markdown format**:
 Instructions for your reply:
- Keep the answer **short and to the point** (3–5 sentences max).
- Use **plain text only** (no headings, no markdown formatting).
- Focus only on the most relevant factors.
- If asked for comparison, give a **brief verdict** (e.g., "Property A is better for rental because...").
- Avoid long explanations or repeating the property JSON.

Final Answer:
`;

    // Call Gemini API
    const response = await fetch(
      "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "X-goog-api-key": process.env.GEMINI_API_KEY,
        },
        body: JSON.stringify({
          contents: [{ parts: [{ text: prompt }] }],
        }),
      }
    );

    const data = await response.json();
    console.log("Gemini API response:", data);

    // Extract model reply
    const reply =
      data?.candidates?.[0]?.content?.parts?.[0]?.text?.trim() ||
      "Sorry, I couldn't generate a reply.";

    res.json({ reply });
  } catch (err) {
    console.error("Chat error:", err);
    res.status(500).json({ error: "Server error" });
  }
});

app.listen(PORT, () => {
  console.log(`✅ Chat backend listening on port ${PORT}`);
});
