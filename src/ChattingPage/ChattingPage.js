import  { useEffect, useState } from 'react';
import { io } from 'socket.io-client';
const ChattingPage = () => {
  const [username, setUsername] = useState('');
  const [registered, setRegistered] = useState(false);
  const [message, setMessage] = useState('');
  const [chat, setChat] = useState([]);

  const socket = io('http://localhost:5000');
  /* 
// src/socket.js
import { io } from 'socket.io-client';

// Connect to backend server (change to your actual backend URL)
export const socket = io('http://localhost:5000');
  
  */
  useEffect(() => {
    socket.on('new_message', (data) => {
      setChat((prev) => [...prev, data]);
    });

    return () => socket.off('new_message');
  }, []);

  const register = () => {
    if (username.trim()) {
      socket.emit('set_username', username);
      setRegistered(true);
    }
  };

  const handleSend = () => {
    if (message.trim()) {
      const msg = { text: message };
      socket.emit('send_message', msg);
      setMessage('');
    }
  };

  if (!registered) {
    return (
      <div className="p-4 max-w-md mx-auto">
        <h2 className="text-xl mb-2">Enter your name</h2>
        <input
          defaultValue={username}
          // value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="border p-2 w-full mb-2"
          placeholder="Your name"
        />
        <button
          onClick={register}
          className="bg-blue-600 text-white px-4 py-2 rounded"
        >
          Join Chat
        </button>
      </div>
    );
  }

  return (
    <div className="p-4 max-w-md mx-auto">
      <h1 className="text-2xl mb-4">Welcome, {username}</h1>

      <div className="space-y-2 mb-4">
        {chat.map((msg, i) => {
          const isMe = msg.senderId === socket.id;
          return (
            <div
              key={i}
              className={`p-2 rounded max-w-[70%] ${
                isMe
                  ? 'bg-blue-500 text-white ml-auto text-right'
                  : 'bg-gray-200 text-black mr-auto text-left'
              }`}
            >
              <div className="text-sm font-bold">{msg.username}</div>
              <div>{msg.text}</div>
              <div className="text-xs mt-1">{msg.time}</div>
            </div>
          );
        })}
      </div>

      <div className="flex">
        <input
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="border p-2 flex-1 mr-2"
          placeholder="Type message..."
        />
        <button
          onClick={handleSend}
          className="bg-blue-600 text-white px-4 py-2 rounded"
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default ChattingPage;