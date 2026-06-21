'use client';

import { motion } from 'framer-motion';
import { User, FolderOpen, Zap, Mail, Smile } from 'lucide-react';

const ACTIONS = [
  { label: 'Me',       Icon: User,       message: 'Tell me about yourself — who is Ana Flor?' },
  { label: 'Projects', Icon: FolderOpen, message: 'Show me your best projects.' },
  { label: 'Skills',   Icon: Zap,        message: 'What skills and tools do you use?' },
  { label: 'Contact',  Icon: Mail,       message: 'How can I contact you?' },
  { label: 'Fun',      Icon: Smile,      message: 'Tell me a fun fact about yourself!' },
];

interface Props {
  onSelect: (msg: { role: 'user'; content: string }) => void;
}

export default function QuickActions({ onSelect }: Props) {
  return (
    <div className="flex gap-1.5 pb-1 justify-center">
      {ACTIONS.map(({ label, Icon, message }, i) => (
        <motion.button
          key={label}
          onClick={() => onSelect({ role: 'user', content: message })}
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
          <Icon size={12} style={{ color: 'var(--accent)' }} />
          <span className="text-[8px] font-medium">{label}</span>
        </motion.button>
      ))}
    </div>
  );
}
