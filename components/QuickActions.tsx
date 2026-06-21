'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { FolderOpen, Zap, Mail, Smile } from 'lucide-react';

const ACTIONS = [
  { label: 'Me',       photo: '/me.jpeg',  message: 'Tell me about yourself — who is Ana Flor?' },
  { label: 'Projects', Icon: FolderOpen,   message: 'Show me your best projects.' },
  { label: 'Skills',   Icon: Zap,          message: 'What skills and tools do you use?' },
  { label: 'Contact',  Icon: Mail,         message: 'How can I contact you?' },
  { label: 'Fun',      Icon: Smile,        message: 'Tell me a fun fact about yourself!' },
] as const;

interface Props {
  onSelect: (msg: { role: 'user'; content: string }, label: string) => void;
}

export default function QuickActions({ onSelect }: Props) {
  return (
    <div className="flex gap-1.5 pb-1 justify-center">
      {ACTIONS.map((action, i) => (
        <motion.button
          key={action.label}
          onClick={() => onSelect({ role: 'user', content: action.message }, action.label)}
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: i * 0.06, duration: 0.3 }}
          whileHover={{ scale: 1.06, y: -1 }}
          whileTap={{ scale: 0.94 }}
          className="flex flex-col items-center justify-center gap-0.5 rounded-md transition-colors duration-200"
          style={{
            background: 'var(--surface)',
            border: '1px solid var(--border-color)',
            color: 'var(--muted)',
            width: 44,
            height: 44,
            flexShrink: 0,
          }}
        >
          {'photo' in action ? (
            <div style={{ width: 24, height: 24, borderRadius: '50%', overflow: 'hidden', border: '1.5px solid var(--accent)', flexShrink: 0 }}>
              <Image src={action.photo} alt="Ana Flor" width={24} height={24} className="object-cover object-top" />
            </div>
          ) : (
            <action.Icon size={12} style={{ color: 'var(--accent)' }} />
          )}
          <span className="text-[8px] font-medium">{action.label}</span>
        </motion.button>
      ))}
    </div>
  );
}
