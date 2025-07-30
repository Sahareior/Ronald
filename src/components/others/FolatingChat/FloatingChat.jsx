import { useState } from 'react';
import { FaRobot, FaTimes, FaPaperPlane } from 'react-icons/fa';
import './Floating.css';

const FloatingChat = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([
    { text: "Hi there! 👋", sender: "bot" },
    { text: "Hey!", sender: "user" },
    { text: "How can I help you today?", sender: "bot" }
  ]);

  const handleSend = () => {
    if (message.trim()) {
      setMessages([...messages, { text: message, sender: "user" }]);
      setMessage('');
    }
  };

  return (
    <>
      <div className="floating-chat-button w-56" onClick={() => setIsOpen(!isOpen)}>
        <FaRobot className="floating-chat-button-icon" size={20} />
        <span className='text-[#CBA135]'>Chat Assistant</span>
      </div>

      <div className={`floating-chat-window ${isOpen ? '' : 'hidden'}`}>
        <div className="chat-header">
          <span>Support</span>
          <FaTimes onClick={() => setIsOpen(false)} style={{ cursor: 'pointer' }} />
        </div>

        <div className="chat-body">
          {messages.map((msg, index) => (
            <div key={index} className={`chat-message ${msg.sender}`}>
              {msg.text}
            </div>
          ))}
        </div>

        <div className="chat-footer flex gap-10 items-center">
          <input
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleSend()}
            placeholder="Type your message..."
            className="chat-input"
          />
          <button onClick={handleSend} className=" send-button">
            <FaPaperPlane size={12} />
          </button>
        </div>
      </div>
    </>
  );
};

export default FloatingChat;
