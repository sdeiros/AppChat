// App.js

import React, { useState, useEffect } from 'react';
import { GiftedChat } from 'react-native-gifted-chat';

const ChatbotApp = () => {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    setMessages([
      {
        _id: 1,
        text: 'Bem-vindo! Como posso ajudar?',
        createdAt: new Date(),
        user: { _id: 2, name: 'Chatbot' },
      },
    ]);
  }, []);

  const onSend = (newMessages = []) => {
    setMessages((prevMessages) =>
      GiftedChat.append(prevMessages, newMessages)
    );
  };

  return (
    <GiftedChat
      messages={messages}
      onSend={(newMessages) => onSend(newMessages)}
      user={{ _id: 1, name: 'Usuário' }}
    />
  );
};

export default ChatbotApp;
