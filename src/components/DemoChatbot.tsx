import { useState, useRef, useEffect } from "react";
import { MessageSquare, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import type { Property } from "@/data/properties";
import ReactMarkdown from "react-markdown";

type Msg = { from: "user" | "bot"; text: string };

const API_BASE = import.meta.env.VITE_CHAT_API_URL ?? "http://localhost:5000";

export default function DemoChatbot({
  compareList,
}: {
  compareList?: Property[];
}) {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Msg[]>([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const sendMessage = async () => {
    const text = input.trim();
    if (!text) return;
    setMessages((prev) => [...prev, { from: "user", text }]);
    setInput("");
    setLoading(true);

    try {
      const res = await fetch(`${API_BASE}/chat`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: text, compareList }),
      });
      const data = await res.json();
      setMessages((prev) => [
        ...prev,
        { from: "bot", text: data.reply ?? "No reply" },
      ]);
    } catch (err) {
      console.error(err);
      setMessages((prev) => [
        ...prev,
        { from: "bot", text: "Sorry — backend error." },
      ]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className="fixed right-4 z-50 flex flex-col items-end"
      style={{ bottom: "6rem" }}
    >
      {open && (
        <div className="w-80 bg-card rounded-xl shadow-xl overflow-hidden mb-2 border border-border transform transition-all duration-300">
          <div className="flex justify-between items-center p-2 border-b border-border">
            <h4 className="font-bold text-foreground">Property Assistant</h4>
            <button onClick={() => setOpen(false)}>
              <X className="w-4 h-4 text-muted-foreground" />
            </button>
          </div>

          <div className="p-2 h-60 overflow-y-auto flex flex-col space-y-2">
            {messages.length === 0 && (
              <p className="text-sm text-muted-foreground">
                Ask about these properties — e.g. "Which is best for rental?"
              </p>
            )}
            {messages.map((m, i) => (
              <div
                key={i}
                className={`px-3 py-1 rounded-lg max-w-[70%] break-words ${
                  m.from === "user"
                    ? "bg-primary/20 text-primary self-end"
                    : "bg-muted/20 text-foreground self-start"
                }`}
              >
                {m.from === "bot" ? (
                  <ReactMarkdown>{m.text}</ReactMarkdown>
                ) : (
                  m.text
                )}
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          <div className="p-2 border-t border-border flex space-x-2">
            <Input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && sendMessage()}
              placeholder="Type a question (e.g. 'Which is best for investment?')"
              className="flex-1 h-8"
            />
            <Button size="sm" onClick={sendMessage} disabled={loading}>
              {loading ? "..." : "Send"}
            </Button>
          </div>
        </div>
      )}

      {!open && (
        <button
          className="bg-primary text-white p-4 rounded-full shadow-lg hover:scale-105 transition-transform"
          onClick={() => setOpen(true)}
        >
          <MessageSquare className="w-6 h-6" />
        </button>
      )}
    </div>
  );
}
