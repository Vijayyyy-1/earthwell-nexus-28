// components/DemoChatbot.tsx
import { useState, useRef, useEffect } from "react";
import { MessageSquare, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const DemoChatbot = () => {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<string[]>([]);
  const [input, setInput] = useState("");
  const messagesEndRef = useRef<HTMLDivElement | null>(null);

  // Scroll to bottom whenever messages change
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const sendMessage = () => {
    if (!input.trim()) return;

    // Add user message
    setMessages((prev) => [...prev, input]);
    setInput("");

    // Simulate bot response after a short delay
    setTimeout(() => {
      setMessages((prev) => [...prev, "Bot: This is a demo response!"]);
    }, 500);
  };

  return (
    <div
      className="fixed right-4 z-50 flex flex-col items-end"
      style={{ bottom: "6rem" }}
    >
      {/* Chat panel */}
      {open && (
        <div className="w-80 bg-card rounded-xl shadow-xl overflow-hidden mb-2 border border-border transform transition-all duration-300 scale-100">
          {/* Header */}
          <div className="flex justify-between items-center p-2 border-b border-border">
            <h4 className="font-bold text-foreground">Chatbot Demo</h4>
            <button onClick={() => setOpen(false)}>
              <X className="w-4 h-4 text-muted-foreground" />
            </button>
          </div>

          {/* Messages */}
          <div className="p-2 h-60 overflow-y-auto flex flex-col space-y-2">
            {messages.length === 0 && (
              <p className="text-sm text-muted-foreground">
                Hi! This is a demo chatbot.
              </p>
            )}
            {messages.map((msg, i) => (
              <div
                key={i}
                className={`px-3 py-1 rounded-lg max-w-[70%] break-words ${
                  i % 2 === 0
                    ? "bg-primary/20 text-primary self-end"
                    : "bg-muted/20 text-foreground self-start"
                }`}
              >
                {msg}
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="p-2 border-t border-border flex space-x-2">
            <Input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && sendMessage()}
              placeholder="Type a message..."
              className="flex-1 h-8"
            />
            <Button size="sm" onClick={sendMessage}>
              Send
            </Button>
          </div>
        </div>
      )}

      {/* Floating button */}
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
};

export default DemoChatbot;
