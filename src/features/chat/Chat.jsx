import { useState, useRef, useEffect } from "react";

const Chat = () => {
  const [messages, setMessages] = useState([
    {
      id: 1,
      type: "ai",
      content: {
        greeting: "Hi Doctor! 👋",
        intro:
          "I'm Vicky, your AI learning companion. I'm here to help you succeed in the Architect's Edition program!",
        capabilities: [
          "Understanding tax strategies",
          "Implementation guidance",
          "Quiz preparation",
          "Progress tracking",
          "Resource recommendations",
        ],
        question: "How can I help you today?",
      },
    },
  ]);
  const [inputValue, setInputValue] = useState("");
  const chatMessagesRef = useRef(null);

  // Scroll to bottom when messages change
  useEffect(() => {
    if (chatMessagesRef.current) {
      chatMessagesRef.current.scrollTop = chatMessagesRef.current.scrollHeight;
    }
  }, [messages]);

  const addUserMessage = (text) => {
    const newMessage = {
      id: Date.now(),
      type: "user",
      content: text,
    };
    setMessages((prev) => [...prev, newMessage]);

    // Simulate AI response after delay
    setTimeout(() => {
      addAIResponse(
        "Thanks for your question! I'm processing your request. In a production environment, I would provide a detailed, personalized response based on your progress and situation. For now, I recommend reviewing the relevant week's materials or reaching out to Norman Dotch during the next Q&A session. 😊"
      );
    }, 1000);
  };

  const addAIResponse = (text) => {
    const newMessage = {
      id: Date.now(),
      type: "ai",
      content: text,
    };
    setMessages((prev) => [...prev, newMessage]);
  };

  const handleSendMessage = () => {
    const message = inputValue.trim();
    if (message) {
      addUserMessage(message);
      setInputValue("");
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSendMessage();
    }
  };

  const handleQuickAction = (question) => {
    addUserMessage(question);
  };

  const renderMessageContent = (message) => {
    if (message.type === "ai" && typeof message.content === "object") {
      return (
        <>
          <p>
            <strong>{message.content.greeting}</strong>
          </p>
          <p className="mt-2">{message.content.intro}</p>
          <p className="mt-2">I can help you with:</p>
          <ul className="ml-6 mt-2 list-disc">
            {message.content.capabilities.map((cap, idx) => (
              <li key={idx}>{cap}</li>
            ))}
          </ul>
          <p className="mt-2">{message.content.question}</p>
        </>
      );
    }
    return <p>{message.content}</p>;
  };

  return (
    <div className="max-w-[1400px] mx-auto my-8">
      <div className="bg-white rounded-lg p-8 mb-6 shadow-md hover:-translate-y-0.5 hover:shadow-lg transition-all duration-300 animate-[fadeIn_0.5s_ease-in]">
        {/* Chat Container */}
        <div className="flex flex-col h-[600px] md:h-[500px] sm:h-[450px] bg-white rounded-lg overflow-hidden">
          {/* Chat Header */}
          <div className="bg-gradient-to-br from-[#4a90e2] to-[#d4af37] text-white p-6 text-center">
            <h2 className="font-semibold">
              🤖 Vicky - Your AI Learning Companion
            </h2>
            <p className="mt-2 text-[0.9rem] opacity-90">
              24/7 support • Ask anything about the curriculum
            </p>
          </div>

          {/* Chat Messages */}
          <div
            className="flex-1 overflow-y-auto p-6 bg-[#e8eaed]"
            ref={chatMessagesRef}
          >
            {messages.map((message) => (
              <div
                key={message.id}
                className={`mb-4 flex gap-4 ${
                  message.type === "user" ? "flex-row-reverse" : ""
                }`}
              >
                {/* Avatar */}
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center font-bold flex-shrink-0 ${
                    message.type === "ai"
                      ? "bg-gradient-to-br from-[#4a90e2] to-[#d4af37] text-white"
                      : "bg-[#1a2332] text-white"
                  }`}
                >
                  {message.type === "ai" ? "V" : "DR"}
                </div>
                {/* Message Content */}
                <div
                  className={`max-w-[70%] md:max-w-[85%] sm:max-w-[90%] p-4 rounded-xl ${
                    message.type === "ai"
                      ? "bg-white border border-[#c0c5ce] text-[#2c3e50]"
                      : "bg-[#1a2332] text-white"
                  }`}
                >
                  {renderMessageContent(message)}
                </div>
              </div>
            ))}

            {/* Quick Actions */}
            <div className="flex gap-2 flex-wrap mb-4">
              <button
                className="py-2 px-4 bg-white border border-[#c0c5ce] rounded-full cursor-pointer text-[0.9rem] transition-all duration-300 hover:bg-[#4a90e2] hover:text-white hover:border-[#4a90e2]"
                onClick={() =>
                  handleQuickAction("How does S-Corp election save me money?")
                }
              >
                💡 S-Corp Benefits
              </button>
              <button
                className="py-2 px-4 bg-white border border-[#c0c5ce] rounded-full cursor-pointer text-[0.9rem] transition-all duration-300 hover:bg-[#4a90e2] hover:text-white hover:border-[#4a90e2]"
                onClick={() =>
                  handleQuickAction("What should I focus on next?")
                }
              >
                📚 Next Steps
              </button>
              <button
                className="py-2 px-4 bg-white border border-[#c0c5ce] rounded-full cursor-pointer text-[0.9rem] transition-all duration-300 hover:bg-[#4a90e2] hover:text-white hover:border-[#4a90e2]"
                onClick={() =>
                  handleQuickAction("Show me my projected tax savings")
                }
              >
                💰 My Savings
              </button>
              <button
                className="py-2 px-4 bg-white border border-[#c0c5ce] rounded-full cursor-pointer text-[0.9rem] transition-all duration-300 hover:bg-[#4a90e2] hover:text-white hover:border-[#4a90e2]"
                onClick={() =>
                  handleQuickAction("I need help implementing a strategy")
                }
              >
                🔧 Implementation Help
              </button>
            </div>
          </div>

          {/* Chat Input Container */}
          <div className="p-4 bg-white border-t border-[#e8eaed] flex gap-4">
            <input
              type="text"
              className="flex-1 py-3 px-4 border-2 border-solid border-[#c0c5ce] rounded-full text-base transition-colors duration-300 focus:outline-none focus:border-[#4a90e2] shadow-none appearance-none bg-white"
              placeholder="Type your question here..."
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyPress={handleKeyPress}
            />
            <button
              className="py-3 px-6 bg-[#4a90e2] text-white border-none rounded-full cursor-pointer font-bold transition-colors duration-300 hover:bg-[#d4af37]"
              onClick={handleSendMessage}
            >
              Send ➤
            </button>
          </div>
        </div>
      </div>

      {/* Popular Questions */}
      <div className="bg-white rounded-lg p-8 mb-6 shadow-md hover:-translate-y-0.5 hover:shadow-lg transition-all duration-300 mt-8">
        <h2 className="text-[#1a2332] text-[1.75rem] font-semibold">
          💡 Popular Questions
        </h2>
        <ul className="list-none p-0 mt-6">
          <li className="py-3 pl-6 relative border-b border-[#e8eaed] before:content-['✓'] before:absolute before:left-0 before:text-[#28a745] before:font-bold">
            <a
              href="#"
              className="text-[#4a90e2] hover:underline"
              onClick={(e) => {
                e.preventDefault();
                handleQuickAction(
                  "How do I know which strategies to implement first?"
                );
              }}
            >
              How do I know which strategies to implement first?
            </a>
          </li>
          <li className="py-3 pl-6 relative border-b border-[#e8eaed] before:content-['✓'] before:absolute before:left-0 before:text-[#28a745] before:font-bold">
            <a
              href="#"
              className="text-[#4a90e2] hover:underline"
              onClick={(e) => {
                e.preventDefault();
                handleQuickAction(
                  "Can you calculate my potential tax savings?"
                );
              }}
            >
              Can you calculate my potential tax savings?
            </a>
          </li>
          <li className="py-3 pl-6 relative border-b border-[#e8eaed] before:content-['✓'] before:absolute before:left-0 before:text-[#28a745] before:font-bold">
            <a
              href="#"
              className="text-[#4a90e2] hover:underline"
              onClick={(e) => {
                e.preventDefault();
                handleQuickAction(
                  "What documents do I need for my CPA meeting?"
                );
              }}
            >
              What documents do I need for my CPA meeting?
            </a>
          </li>
          <li className="py-3 pl-6 relative border-b border-[#e8eaed] before:content-['✓'] before:absolute before:left-0 before:text-[#28a745] before:font-bold">
            <a
              href="#"
              className="text-[#4a90e2] hover:underline"
              onClick={(e) => {
                e.preventDefault();
                handleQuickAction(
                  "How do I set up a meeting with a specialist?"
                );
              }}
            >
              How do I set up a meeting with a specialist?
            </a>
          </li>
          <li className="py-3 pl-6 relative border-b-0 before:content-['✓'] before:absolute before:left-0 before:text-[#28a745] before:font-bold">
            <a
              href="#"
              className="text-[#4a90e2] hover:underline"
              onClick={(e) => {
                e.preventDefault();
                handleQuickAction("What are the risks of each strategy?");
              }}
            >
              What are the risks of each strategy?
            </a>
          </li>
        </ul>
      </div>

      {/* Privacy Alert */}
      <div className="py-4 px-6 rounded-md mb-6 border-0 border-solid border-l-4 bg-[#d1ecf1] border-[#0c5460] text-[#0c5460] mt-8">
        <strong>🔒 Your Privacy Matters</strong>
        <br />
        All conversations with Vicky are encrypted and confidential. We never
        share your personal information or strategy discussions.
      </div>
    </div>
  );
};

export default Chat;
