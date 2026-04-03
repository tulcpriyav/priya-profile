'use client';

import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { useChat } from '@/hooks/useChat';
import styles from './Chatbot.module.css';

export function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const { messages, input, setInput, isLoading, sendMessage, messagesEndRef } =
    useChat();
  const inputRef = useRef<HTMLInputElement>(null);

  // Focus input when modal opens
  useEffect(() => {
    if (isOpen && inputRef.current) {
      setTimeout(() => inputRef.current?.focus(), 0);
    }
  }, [isOpen]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    sendMessage(input);
  };

  const handleSuggestedQuestion = (questionId: string) => {
    const question =
      {
        who: 'Who are you?',
        skills: 'What are your skills?',
        projects: 'Tell me about your projects',
        contact: 'How can I contact you?',
      }[questionId] || '';
    if (question) {
      sendMessage(question);
    }
  };

  return (
    <>
      {/* Floating Button */}
      <button
        className={styles.floatingButton}
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Open chatbot"
        title="Ask me about Tulasi's profile!"
      >
        <svg
          className={styles.chatIcon}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
        </svg>
        {isOpen && <span className={styles.closeIcon}>×</span>}
      </button>

      {/* Modal Backdrop */}
      {isOpen && (
        <div className={styles.backdrop} onClick={() => setIsOpen(false)} />
      )}

      {/* Chat Modal */}
      {isOpen && (
        <div className={styles.modal}>
          {/* Header */}
          <div className={styles.header}>
            <h2 className={styles.title}>Chat with me!</h2>
            <button
              className={styles.closeButton}
              onClick={() => setIsOpen(false)}
              aria-label="Close chatbot"
            >
              ×
            </button>
          </div>

          {/* Messages */}
          <div className={styles.messagesContainer}>
            {messages.map((message) => (
              <div key={message.id}>
                <div className={`${styles.message} ${styles[message.type]}`}>
                  <div className={styles.messageContent}>{message.content}</div>
                </div>

                {/* Suggested Questions */}
                {message.suggestedQuestions &&
                  message.suggestedQuestions.length > 0 && (
                    <div className={styles.suggestedQuestionsContainer}>
                      {message.suggestedQuestions.map((q) => (
                        <button
                          key={q.id}
                          className={styles.suggestedButton}
                          onClick={() => handleSuggestedQuestion(q.id)}
                        >
                          {q.text}
                        </button>
                      ))}
                    </div>
                  )}

                {/* Suggested Pages */}
                {message.suggestedPages &&
                  message.suggestedPages.length > 0 && (
                    <div className={styles.suggestedPagesContainer}>
                      <div className={styles.pageSuggestionLabel}>Explore:</div>
                      {message.suggestedPages.map((page, idx) =>
                        page.path.startsWith('http') ? (
                          <a
                            key={idx}
                            href={page.path}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={styles.pageLink}
                          >
                            {page.title} ↗
                          </a>
                        ) : (
                          <Link
                            key={idx}
                            href={page.path}
                            className={styles.pageLink}
                            onClick={() => setIsOpen(false)}
                          >
                            {page.title} →
                          </Link>
                        ),
                      )}
                    </div>
                  )}
              </div>
            ))}

            {isLoading && (
              <div className={`${styles.message} ${styles.bot}`}>
                <div className={styles.messageContent}>
                  <span className={styles.typingIndicator}>
                    <span></span>
                    <span></span>
                    <span></span>
                  </span>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input Form */}
          <form className={styles.inputForm} onSubmit={handleSubmit}>
            <input
              ref={inputRef}
              type="text"
              className={styles.input}
              placeholder="Ask me something..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              disabled={isLoading}
            />
            <button
              type="submit"
              className={styles.sendButton}
              disabled={isLoading || !input.trim()}
              aria-label="Send message"
            >
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M16.6915026,12.4744748 L3.50612381,13.2599618 C3.19218622,13.2599618 3.03521743,13.4170592 3.03521743,13.5741566 L1.15159189,20.0151496 C0.8376543,20.8006365 0.99,21.89 1.77946707,22.52 C2.41,22.99 3.50612381,23.1 4.13399899,22.8429026 L21.714504,14.0454487 C22.6563168,13.5741566 23.1272231,12.6315722 22.9702544,11.6889879 L4.13399899,1.16200178 C3.34915502,0.9 2.40734225,0.9 1.77946707,1.4430206 C0.994623095,2.0844446 0.837654326,3.17396987 1.15159189,3.95946907 L3.03521743,10.4066621 C3.03521743,10.5637595 3.19218622,10.7208569 3.50612381,10.7208569 L16.6915026,11.5063438 C16.6915026,11.5063438 17.1624089,11.5063438 17.1624089,12.0493645 C17.1624089,12.4744748 16.6915026,12.4744748 16.6915026,12.4744748 Z" />
              </svg>
            </button>
          </form>
        </div>
      )}
    </>
  );
}
