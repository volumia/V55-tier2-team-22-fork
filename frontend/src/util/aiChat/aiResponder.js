import { GoogleGenAI } from "@google/genai";

const aiContext =
  "You are a helper bot for a search engine application. Prefer short responses. Be professional. " +
  "Use the following context information to answer the next question: " +
  "1. The purpose of this app is help users find developer resources in an organized manner. " +
  "2. The user can filter resources by title or author by using the search bar at the top of the page." +
  "3. The user can also filter resources by tag type by using the tag dropdown at the top of the page. ";

export class AiResponser {
  constructor() {
    this.ai = new GoogleGenAI({ apiKey: import.meta.env.VITE_GEMINI_API_KEY });
  }

  async getResponse(prompt) {
    const response = await this.ai.models.generateContent({
      model: "gemini-2.0-flash-001",
      contents: aiContext.concat(" ", prompt)
    });

    return response.text;
  }
}
