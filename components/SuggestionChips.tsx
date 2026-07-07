'use client';

import { motion, AnimatePresence } from 'framer-motion';

const CHIPS = [
  { label: 'Why should I hire you?', emoji: '💼' },
  { label: "What's your availability and timezone?", emoji: '🌏' },
  { label: 'How do you charge for projects?', emoji: '💬' },
  { label: 'What industries do you work with?', emoji: '🏢' },
  { label: 'What does a typical engagement look like?', emoji: '📋' },
];

interface Props {
  onSelect: (message: { role: 'user'; content: string }) => void;
  visible: boolean;
}

export default function SuggestionChips({ onSelect, visible }: Props) {
  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 8, scale: 0.97 }}
          transition={{ duration: 0.25 }}
          className="flex flex-wrap justify-center gap-2 py-3"
        >
          {CHIPS.map((chip, i) => (
            <motion.button
              key={chip.label}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.05 + i * 0.07 }}
              whileHover={{ scale: 1.04, y: -2 }}
              whileTap={{ scale: 0.96 }}
              onClick={() => onSelect({ role: 'user', content: chip.label })}
              className="px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200"
              style={{
                background: 'var(--surface)',
                border: '1px solid var(--border-color)',
                color: 'var(--muted)',
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLButtonElement).style.borderColor = 'var(--accent)';
                (e.currentTarget as HTMLButtonElement).style.color = 'var(--accent)';
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLButtonElement).style.borderColor = 'var(--border-color)';
                (e.currentTarget as HTMLButtonElement).style.color = 'var(--muted)';
              }}
            >
              {chip.emoji} {chip.label}
            </motion.button>
          ))}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
