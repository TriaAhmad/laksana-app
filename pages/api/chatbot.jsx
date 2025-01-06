import { OpenAI } from "openai"; // Gunakan OpenAI sebagai default import

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY, // Pastikan API Key Anda disimpan dengan benar di .env
});

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { prompt } = req.body;

    try {
      const response = await openai.chat.completions.create({
        model: "gpt-3.5-turbo", // Atau model yang sesuai
        messages: [{ role: "user", content: prompt }],
      });

      res.status(200).json({ message: response.choices[0].message.content });
    } catch (error) {
      console.error("Error communicating with OpenAI:", error); // Menampilkan error di console
      res.status(500).json({ error: "Error communicating with OpenAI", details: error.message });
    }
  } else {
    res.setHeader("Allow", ["POST"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
