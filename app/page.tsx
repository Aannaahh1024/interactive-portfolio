'use client';

import { useChat } from 'ai/react';
import { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
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
  const [showMeCard, setShowMeCard] = useState(false);

  const { messages, input, handleInputChange, handleSubmit, isLoading, error, append, setMessages } = useChat({
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

  useEffect(() => {
    if (isLoading) messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [isLoading, messages.at(-1)?.content]);

  const handleChipSelect = (msg: { role: 'user'; content: string }, label?: string) => {
    if (label === 'Me') setShowMeCard(true);
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
                    onClick={() => { setMessages([]); setShowMeCard(false); }}
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
                    Ana Flor · AI Automation Specialist
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto py-2 space-y-1">

            {/* Me photo card — appears when the Me button is clicked */}
            <AnimatePresence>
              {showMeCard && (
                <motion.div
                  initial={{ opacity: 0, y: 12, scale: 0.96 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4, type: 'spring', stiffness: 200, damping: 24 }}
                  className="flex items-center gap-3 px-4 py-3 rounded-2xl mb-2"
                  style={{
                    background: 'var(--avatar-bubble)',
                    border: '1px solid var(--avatar-bubble-border)',
                  }}
                >
                  <div style={{ width: 56, height: 56, borderRadius: '50%', overflow: 'hidden', border: '2px solid var(--accent)', flexShrink: 0 }}>
                    <Image src="/me.jpeg" alt="Ana Flor Delfin" width={56} height={56} className="object-cover object-top" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold" style={{ color: 'var(--foreground)' }}>Ana Flor Delfin</p>
                    <p className="text-xs mt-0.5" style={{ color: 'var(--accent)' }}>AI-Powered Virtual Assistant</p>
                    <p className="text-xs mt-0.5" style={{ color: 'var(--muted)' }}>Naval, Biliran PH</p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

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
                    className="px-4 py-3 rounded-2xl rounded-bl-sm avatar-bubble-glow flex items-center gap-2"
                    style={{
                      background: 'var(--avatar-bubble)',
                      border: '1px solid var(--avatar-bubble-border)',
                    }}
                  >
                    <span className="text-xs" style={{ color: 'var(--muted)' }}>Ana is typing</span>
                    <div className="flex items-center gap-1">
                      <span className="typing-dot w-1.5 h-1.5 rounded-full" style={{ background: 'var(--accent)' }} />
                      <span className="typing-dot w-1.5 h-1.5 rounded-full" style={{ background: 'var(--accent)' }} />
                      <span className="typing-dot w-1.5 h-1.5 rounded-full" style={{ background: 'var(--accent)' }} />
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Error fallback — shown if the AI API fails */}
            <AnimatePresence>
              {error && (
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className="flex justify-start mb-4"
                >
                  <div
                    className="px-4 py-3 rounded-2xl rounded-bl-sm text-xs"
                    style={{
                      background: 'var(--surface)',
                      border: '1px solid var(--border-color)',
                      color: 'var(--muted)',
                    }}
                  >
                    Something went wrong connecting to Ana&apos;s avatar. Please try again in a moment.
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            <div ref={messagesEndRef} />
          </div>

          {/* Suggestion chips */}
          <SuggestionChips onSelect={handleChipSelect} visible={!hasMessages} />

          {/* Quick action buttons — always visible */}
          <QuickActions onSelect={(msg, label) => handleChipSelect(msg, label)} />

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
