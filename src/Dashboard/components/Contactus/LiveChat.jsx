import React, { useState } from "react";
import "./LiveChat.css";

const LiveChat = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { from: "bot", text: "Hi there! 👋 How can I help you today?" },
  ]);
  const [input, setInput] = useState("");

  const toggleChat = () => setIsOpen(!isOpen);

  const sendMessage = () => {
    if (!input.trim()) return;
    setMessages([
      ...messages,
      { from: "user", text: input },
      { from: "bot", text: "Thanks! We'll get back to you soon." },
    ]);
    setInput("");
  };

  return (
    <div className="chat-wrapper">
      {isOpen && (
        <div className="chat-box">
          <div className="chat-header">
            Live Chat
            <button className="close-btn" onClick={toggleChat}>×</button>
          </div>
          <div className="chat-messages">
            {messages.map((msg, index) => (
              <div key={index} className={`message ${msg.from}`}>
                {msg.text}
              </div>
            ))}
          </div>
          <div className="chat-input">
            <input
              type="text"
              placeholder="Type your message..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && sendMessage()}
            />
            <button onClick={sendMessage}>Send</button>
          </div>
        </div>
      )}

      <button className="chat-toggle" onClick={toggleChat}>
        💬
      </button>
    </div>
  );
};

export default LiveChat;
