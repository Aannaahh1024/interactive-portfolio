'use client';

import { useChat } from 'ai/react';
import { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, Sparkles, ArrowLeft } from 'lucide-react';
import Avatar from '@/components/Avatar';
import type { AvatarState } from '@/components/Avatar';
import ChatMessage from '@/components/ChatMessage';
import SuggestionChips from '@/components/SuggestionChips';
import QuickActions from '@/components/QuickActions';
import ThemeToggle from '@/components/ThemeToggle';
import MouseEffect from '@/components/MouseEffect';

export default function Page() {
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const [inputFocused, setInputFocused] = useState(false);

  const { messages, input, handleInputChange, handleSubmit, isLoading, append, setMessages } = useChat({
    api: '/api/chat',
  });

  const hasMessages = messages.length > 0;

  const avatarState: AvatarState = isLoading
    ? 'thinking'
    : messages.at(-1)?.role === 'assistant'
    ? 'speaking'
    : 'idle';

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleChipSelect = (msg: { role: 'user'; content: string }) => {
    append(msg);
    inputRef.current?.focus();
  };

  return (
    <>
      <MouseEffect />
      <ThemeToggle />

      <div
        className="relative min-h-[100dvh] flex flex-col"
        style={{ color: 'var(--foreground)' }}
      >
        {/* Page layout wrapper */}
        <div className="flex-1 flex flex-col max-w-2xl w-full mx-auto px-4">

          {/* Avatar + Greeting */}
          <div className="flex flex-col items-center pt-5 pb-2">
            <motion.div layout layoutId="avatar" transition={{ duration: 0.5, type: 'spring', stiffness: 200, damping: 30 }}>
              <Avatar
                state={avatarState}
                size={hasMessages ? 80 : 150}
              />
            </motion.div>

            <AnimatePresence>
              {!hasMessages && (
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12, scale: 0.95 }}
                  transition={{ duration: 0.4 }}
                  className="text-center mt-5 mb-2"
                >
                  <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-2">
                    Hey, I&apos;m Ana Flor{' '}
                    <motion.span
                      animate={{ rotate: [0, 14, -8, 14, -4, 10, 0] }}
                      transition={{ delay: 0.8, duration: 1.2 }}
                      style={{ display: 'inline-block', transformOrigin: '70% 70%' }}
                    >
                      👋
                    </motion.span>
                  </h1>
                  <p className="text-base font-medium" style={{ color: 'var(--muted)' }}>
                    AI-Powered Virtual Assistant{' '}
                    <span style={{ color: 'var(--accent)' }}>·</span>{' '}
                    Naval, Biliran PH
                  </p>
                  <p className="text-sm mt-1.5 max-w-sm mx-auto" style={{ color: 'var(--muted)', opacity: 0.7 }}>
                    I cut turnaround by ~60% with AI automation.
                    <br />
                    Ask me anything below.
                  </p>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Compact name + back button when chatting */}
            <AnimatePresence>
              {hasMessages && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="mt-2 flex items-center gap-2"
                >
                  <motion.button
                    onClick={() => setMessages([])}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-medium transition-colors duration-200"
                    style={{
                      background: 'var(--surface)',
                      border: '1px solid var(--border-color)',
                      color: 'var(--muted)',
                    }}
                    aria-label="Back to start"
                  >
                    <ArrowLeft size={11} />
                    Back
                  </motion.button>
                  <p className="text-xs font-medium tracking-wide" style={{ color: 'var(--accent)' }}>
                    Ana Flor · AI-Powered Virtual Assistant
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto py-2 space-y-1">
            <AnimatePresence initial={false}>
              {messages.map((msg, i) => (
                <ChatMessage
                  key={msg.id}
                  message={msg}
                  isStreaming={isLoading && i === messages.length - 1 && msg.role === 'assistant'}
                />
              ))}
            </AnimatePresence>

            {/* Typing indicator when waiting for first chunk */}
            <AnimatePresence>
              {isLoading && (messages.at(-1)?.role !== 'assistant' || !messages.at(-1)?.content) && (
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className="flex justify-start mb-4"
                >
                  <div
                    className="px-4 py-3 rounded-2xl rounded-bl-sm avatar-bubble-glow flex items-center gap-1.5"
                    style={{
                      background: 'var(--avatar-bubble)',
                      border: '1px solid var(--avatar-bubble-border)',
                    }}
                  >
                    <span className="typing-dot w-2 h-2 rounded-full" style={{ background: 'var(--accent)' }} />
                    <span className="typing-dot w-2 h-2 rounded-full" style={{ background: 'var(--accent)' }} />
                    <span className="typing-dot w-2 h-2 rounded-full" style={{ background: 'var(--accent)' }} />
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            <div ref={messagesEndRef} />
          </div>

          {/* Suggestion chips */}
          <SuggestionChips onSelect={handleChipSelect} visible={!hasMessages} />

          {/* Quick action buttons — always visible */}
          <QuickActions onSelect={handleChipSelect} />

          {/* Input bar */}
          <div className="py-3 pb-5">
            <motion.form
              onSubmit={handleSubmit}
              className="relative flex items-center gap-2 rounded-2xl px-4 py-3 transition-all duration-200"
              style={{
                background: 'var(--surface)',
                border: inputFocused
                  ? '1px solid var(--accent)'
                  : '1px solid var(--border-color)',
                boxShadow: inputFocused ? '0 0 0 3px var(--accent-glow)' : 'none',
              }}
              animate={{ boxShadow: inputFocused ? '0 0 0 3px var(--accent-glow)' : '0 0 0 0px transparent' }}
            >
              <Sparkles
                size={16}
                style={{ color: 'var(--accent)', flexShrink: 0, opacity: 0.7 }}
              />
              <input
                ref={inputRef}
                value={input}
                onChange={handleInputChange}
                onFocus={() => setInputFocused(true)}
                onBlur={() => setInputFocused(false)}
                placeholder={
                  hasMessages
                    ? 'Ask a follow-up...'
                    : 'Ask me anything — projects, skills, how I can help...'
                }
                disabled={isLoading}
                className="flex-1 bg-transparent outline-none text-sm placeholder:text-[var(--muted)] disabled:opacity-50"
                style={{ color: 'var(--foreground)' }}
              />
              <motion.button
                type="submit"
                disabled={!input.trim() || isLoading}
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.92 }}
                className="flex-shrink-0 p-1.5 rounded-lg disabled:opacity-30 disabled:cursor-not-allowed transition-colors duration-200"
                style={{
                  background: input.trim() && !isLoading ? 'var(--accent)' : 'transparent',
                  color: input.trim() && !isLoading ? '#050505' : 'var(--muted)',
                }}
              >
                <Send size={15} />
              </motion.button>
            </motion.form>

            {/* Footer note */}
            <p className="text-center text-xs mt-2.5" style={{ color: 'var(--muted)', opacity: 0.5 }}>
              Powered by AI — Ana Flor&apos;s portfolio avatar
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
