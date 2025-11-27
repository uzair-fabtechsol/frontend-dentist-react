import { useState, useRef, useEffect } from 'react'

const Chat = () => {
  const [messages, setMessages] = useState([
    {
      id: 1,
      type: 'ai',
      content: {
        greeting: 'Hi Doctor! 👋',
        intro: "I'm Vicky, your AI learning companion. I'm here to help you succeed in the Architect's Edition program!",
        capabilities: [
          'Understanding tax strategies',
          'Implementation guidance',
          'Quiz preparation',
          'Progress tracking',
          'Resource recommendations'
        ],
        question: 'How can I help you today?'
      }
    }
  ])
  const [inputValue, setInputValue] = useState('')
  const chatMessagesRef = useRef(null)

  // Scroll to bottom when messages change
  useEffect(() => {
    if (chatMessagesRef.current) {
      chatMessagesRef.current.scrollTop = chatMessagesRef.current.scrollHeight
    }
  }, [messages])

  const addUserMessage = (text) => {
    const newMessage = {
      id: Date.now(),
      type: 'user',
      content: text
    }
    setMessages(prev => [...prev, newMessage])

    // Simulate AI response after delay
    setTimeout(() => {
      addAIResponse("Thanks for your question! I'm processing your request. In a production environment, I would provide a detailed, personalized response based on your progress and situation. For now, I recommend reviewing the relevant week's materials or reaching out to Norman Dotch during the next Q&A session. 😊")
    }, 1000)
  }

  const addAIResponse = (text) => {
    const newMessage = {
      id: Date.now(),
      type: 'ai',
      content: text
    }
    setMessages(prev => [...prev, newMessage])
  }

  const handleSendMessage = () => {
    const message = inputValue.trim()
    if (message) {
      addUserMessage(message)
      setInputValue('')
    }
  }

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSendMessage()
    }
  }

  const handleQuickAction = (question) => {
    addUserMessage(question)
  }

  const renderMessageContent = (message) => {
    if (message.type === 'ai' && typeof message.content === 'object') {
      return (
        <>
          <p><strong>{message.content.greeting}</strong></p>
          <p style={{ marginTop: '0.5rem' }}>{message.content.intro}</p>
          <p style={{ marginTop: '0.5rem' }}>I can help you with:</p>
          <ul style={{ marginLeft: '1.5rem', marginTop: '0.5rem' }}>
            {message.content.capabilities.map((cap, idx) => (
              <li key={idx}>{cap}</li>
            ))}
          </ul>
          <p style={{ marginTop: '0.5rem' }}>{message.content.question}</p>
        </>
      )
    }
    return <p>{message.content}</p>
  }

  return (
    <div className="container">
      <div className="card fade-in">
        <div className="chat-container">
          <div className="chat-header">
            <h2>🤖 Vicky - Your AI Learning Companion</h2>
            <p style={{ marginTop: '0.5rem', fontSize: '0.9rem' }}>
              24/7 support • Ask anything about the curriculum
            </p>
          </div>

          <div className="chat-messages" ref={chatMessagesRef}>
            {messages.map((message) => (
              <div key={message.id} className={`message ${message.type}`}>
                <div className="message-avatar">
                  {message.type === 'ai' ? 'V' : 'DR'}
                </div>
                <div className="message-content">
                  {renderMessageContent(message)}
                </div>
              </div>
            ))}

            <div className="quick-actions">
              <button 
                className="quick-action-btn" 
                onClick={() => handleQuickAction('How does S-Corp election save me money?')}
              >
                💡 S-Corp Benefits
              </button>
              <button 
                className="quick-action-btn" 
                onClick={() => handleQuickAction('What should I focus on next?')}
              >
                📚 Next Steps
              </button>
              <button 
                className="quick-action-btn" 
                onClick={() => handleQuickAction('Show me my projected tax savings')}
              >
                💰 My Savings
              </button>
              <button 
                className="quick-action-btn" 
                onClick={() => handleQuickAction('I need help implementing a strategy')}
              >
                🔧 Implementation Help
              </button>
            </div>
          </div>

          <div className="chat-input-container">
            <input 
              type="text" 
              className="chat-input" 
              placeholder="Type your question here..."
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyPress={handleKeyPress}
            />
            <button className="send-button" onClick={handleSendMessage}>
              Send ➤
            </button>
          </div>
        </div>
      </div>

      <div className="card mt-4">
        <h2 className="card-title">💡 Popular Questions</h2>
        <ul className="list-styled mt-3">
          <li>
            <a 
              href="#" 
              style={{ color: 'var(--accent-blue)' }}
              onClick={(e) => {
                e.preventDefault()
                handleQuickAction('How do I know which strategies to implement first?')
              }}
            >
              How do I know which strategies to implement first?
            </a>
          </li>
          <li>
            <a 
              href="#" 
              style={{ color: 'var(--accent-blue)' }}
              onClick={(e) => {
                e.preventDefault()
                handleQuickAction('Can you calculate my potential tax savings?')
              }}
            >
              Can you calculate my potential tax savings?
            </a>
          </li>
          <li>
            <a 
              href="#" 
              style={{ color: 'var(--accent-blue)' }}
              onClick={(e) => {
                e.preventDefault()
                handleQuickAction('What documents do I need for my CPA meeting?')
              }}
            >
              What documents do I need for my CPA meeting?
            </a>
          </li>
          <li>
            <a 
              href="#" 
              style={{ color: 'var(--accent-blue)' }}
              onClick={(e) => {
                e.preventDefault()
                handleQuickAction('How do I set up a meeting with a specialist?')
              }}
            >
              How do I set up a meeting with a specialist?
            </a>
          </li>
          <li>
            <a 
              href="#" 
              style={{ color: 'var(--accent-blue)' }}
              onClick={(e) => {
                e.preventDefault()
                handleQuickAction('What are the risks of each strategy?')
              }}
            >
              What are the risks of each strategy?
            </a>
          </li>
        </ul>
      </div>

      <div className="alert alert-info mt-4">
        <strong>🔒 Your Privacy Matters</strong><br />
        All conversations with Vicky are encrypted and confidential. We never share your personal information or strategy discussions.
      </div>
    </div>
  )
}

export default Chat