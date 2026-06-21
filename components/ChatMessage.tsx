'use client';

import { motion } from 'framer-motion';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import type { Message } from 'ai';
import ProjectCards from './ProjectCard';

interface Props {
  message: Message;
  isStreaming?: boolean;
}

export default function ChatMessage({ message, isStreaming = false }: Props) {
  const isUser = message.role === 'user';

  const rawContent = message.content ?? '';
  const hasProjects = !isUser && rawContent.includes('[SHOW_PROJECTS]');
  const displayContent = rawContent.replace('[SHOW_PROJECTS]', '').trim();

  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, ease: 'easeOut' }}
      className={`flex w-full mb-4 ${isUser ? 'justify-end' : 'justify-start'}`}
    >
      <div className={`flex flex-col gap-2 ${isUser ? 'items-end' : 'items-start'} max-w-[85%]`}>
        {/* Bubble */}
        {displayContent && (
          <div
            className={`relative px-4 py-3 rounded-2xl text-sm leading-relaxed ${
              isUser
                ? 'rounded-br-sm'
                : 'rounded-bl-sm avatar-bubble-glow'
            }`}
            style={
              isUser
                ? {
                    background: 'var(--user-bubble)',
                    color: 'var(--foreground)',
                    border: '1px solid var(--border-color)',
                  }
                : {
                    background: 'var(--avatar-bubble)',
                    color: 'var(--foreground)',
                    border: '1px solid var(--avatar-bubble-border)',
                  }
            }
          >
            {isUser ? (
              <p>{displayContent}</p>
            ) : (
              <div className="prose-chat">
                <ReactMarkdown remarkPlugins={[remarkGfm]}>
                  {displayContent}
                </ReactMarkdown>
                {isStreaming && (
                  <span
                    className="inline-block w-0.5 h-4 ml-0.5 align-middle rounded-sm"
                    style={{
                      background: 'var(--accent)',
                      animation: 'pulse 1s ease-in-out infinite',
                    }}
                  />
                )}
              </div>
            )}
          </div>
        )}

        {/* Typing indicator — shown when streaming starts but no content yet */}
        {!isUser && !displayContent && isStreaming && (
          <div
            className="px-4 py-3 rounded-2xl rounded-bl-sm avatar-bubble-glow flex items-center gap-1"
            style={{
              background: 'var(--avatar-bubble)',
              border: '1px solid var(--avatar-bubble-border)',
            }}
          >
            <span className="typing-dot w-2 h-2 rounded-full" style={{ background: 'var(--accent)', opacity: 0.5 }} />
            <span className="typing-dot w-2 h-2 rounded-full" style={{ background: 'var(--accent)', opacity: 0.5 }} />
            <span className="typing-dot w-2 h-2 rounded-full" style={{ background: 'var(--accent)', opacity: 0.5 }} />
          </div>
        )}

        {/* Inline project cards */}
        {hasProjects && !isStreaming && (
          <div className="w-full">
            <ProjectCards />
          </div>
        )}
      </div>
    </motion.div>
  );
}
