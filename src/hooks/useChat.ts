'use client';

import { useState, useCallback, useRef, useEffect } from 'react';

export interface Message {
  id: string;
  type: 'user' | 'bot';
  content: string;
  timestamp: Date;
  suggestedPages?: Array<{
    title: string;
    path: string;
  }>;
  suggestedQuestions?: Array<{
    text: string;
    id: string;
  }>;
}

export function useChat() {
  const { suggestedQuestions } = require('@/data/chatbot-qa');

  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      type: 'bot',
      content: `Hi! 👋 I'm here to help you learn more about Tulasi. Ask me about:`,
      timestamp: new Date(),
      suggestedQuestions,
    },
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = useCallback(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, []);

  useEffect(() => {
    scrollToBottom();
  }, [messages, scrollToBottom]);

  const addMessage = useCallback(
    (
      type: 'user' | 'bot',
      content: string,
      suggestedPages?: Message['suggestedPages'],
      suggestedQuestions?: Message['suggestedQuestions'],
    ) => {
      const newMessage: Message = {
        id: Date.now().toString(),
        type,
        content,
        timestamp: new Date(),
        suggestedPages,
        suggestedQuestions,
      };
      setMessages((prev) => [...prev, newMessage]);
      return newMessage;
    },
    [],
  );

  const sendMessage = useCallback(
    async (userMessage: string) => {
      if (!userMessage.trim()) return;

      // Add user message
      addMessage('user', userMessage);
      setInput('');
      setIsLoading(true);

      // Simulate bot response delay
      await new Promise((resolve) => setTimeout(resolve, 300));

      // Get bot response
      try {
        const { findBestMatch } = require('@/data/chatbot-qa');
        const match = findBestMatch(userMessage);

        if (match) {
          addMessage('bot', match.answer, match.suggestedPages);
        } else {
          addMessage(
            'bot',
            `I'm not sure how to answer that. You can ask me about:\n• My skills and experience\n• Projects and portfolio\n• How to contact me\n• My background and education\n\nOr check out the pages above for more detailed information!`,
          );
        }
      } catch (error) {
        addMessage('bot', 'Sorry, something went wrong. Please try again.');
      }

      setIsLoading(false);
    },
    [addMessage],
  );

  return {
    messages,
    input,
    setInput,
    isLoading,
    sendMessage,
    messagesEndRef,
  };
}
