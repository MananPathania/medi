import { useState } from "react";
import ReactMarkdown from "react-markdown";
import "./AI.css";

function AI() {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [loading, setLoading] = useState(false);

  const askAI = async () => {
    if (!question.trim()) return;

    setLoading(true);
    setAnswer("");

    try {
      const res = await fetch("http://localhost:5000/api/ai/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ message: question }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Something went wrong");
      }

      setAnswer(data.reply || "No response from AI.");
    } catch (err) {
      setAnswer("Error talking to AI. Please try again.");
    } finally {
      setLoading(false);
      setQuestion("");
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      askAI();
    }
  };

  return (
    <div className="ai-container">
      <h2 className="ai-title">AI Assistant</h2>

      <div className="ai-input-group">
        <input
          type="text"
          className="ai-input"
          placeholder="Ask something..."
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
          onKeyDown={handleKeyDown}
        />

        <button
          className="ai-button"
          onClick={askAI}
          disabled={loading}
        >
          {loading ? "Thinking..." : "Ask"}
        </button>
      </div>

      <div className="ai-response">
        {loading ? (
          <p className="ai-loading">🤖 AI is thinking...</p>
        ) : (
          <ReactMarkdown>{answer}</ReactMarkdown>
        )}
      </div>
    </div>
  );
}

export default AI;
