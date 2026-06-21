'use client';

import { motion } from 'framer-motion';
import { Clock, Zap, TrendingUp, MessageSquare, Users, FileText } from 'lucide-react';

/* ─── SVG Preview Components ─────────────────────────────────── */

function LeadCapturePreview() {
  return (
    <svg viewBox="0 0 280 145" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
      <rect width="280" height="145" fill="#060614" />
      {/* Header bar */}
      <rect x="0" y="0" width="280" height="28" fill="#0d0d1e" />
      <circle cx="12" cy="14" r="4" fill="#ff5f57" />
      <circle cx="24" cy="14" r="4" fill="#febc2e" />
      <circle cx="36" cy="14" r="4" fill="#28c840" />
      <text x="90" y="18" fill="#555" fontSize="7" fontFamily="monospace">GoHighLevel — Workflow Builder</text>

      {/* Step 1 */}
      <rect x="14" y="38" width="66" height="30" rx="4" fill="#0f1a2e" stroke="#00E5FF" strokeWidth="0.8" />
      <text x="22" y="51" fill="#00E5FF" fontSize="6.5" fontFamily="sans-serif" fontWeight="bold">Lead Opts In</text>
      <text x="22" y="61" fill="#555" fontSize="5.5" fontFamily="sans-serif">Form / Ad / DM</text>

      {/* Arrow */}
      <line x1="80" y1="53" x2="96" y2="53" stroke="#333" strokeWidth="1" />
      <polygon points="94,50 94,56 99,53" fill="#333" />

      {/* Step 2 */}
      <rect x="99" y="38" width="66" height="30" rx="4" fill="#0f1a2e" stroke="#a78bfa" strokeWidth="0.8" />
      <text x="107" y="51" fill="#a78bfa" fontSize="6.5" fontFamily="sans-serif" fontWeight="bold">Auto-Tag</text>
      <text x="107" y="61" fill="#555" fontSize="5.5" fontFamily="sans-serif">Source + Interest</text>

      {/* Arrow */}
      <line x1="165" y1="53" x2="181" y2="53" stroke="#333" strokeWidth="1" />
      <polygon points="179,50 179,56 184,53" fill="#333" />

      {/* Step 3 */}
      <rect x="184" y="38" width="80" height="30" rx="4" fill="#0f1a2e" stroke="#34d399" strokeWidth="0.8" />
      <text x="192" y="51" fill="#34d399" fontSize="6.5" fontFamily="sans-serif" fontWeight="bold">Email Sequence</text>
      <text x="192" y="61" fill="#555" fontSize="5.5" fontFamily="sans-serif">Welcome → Nurture</text>

      {/* Email sequence preview */}
      {[0, 1, 2].map((i) => (
        <g key={i}>
          <rect x="14" y={80 + i * 18} width="250" height="13" rx="3" fill="#0d1224" />
          <rect x="18" y={83 + i * 18} width="6" height="6" rx="1"
            fill={['#00E5FF', '#a78bfa', '#34d399'][i]} opacity="0.7" />
          <text x="28" y={90 + i * 18} fill="#aaa" fontSize="6" fontFamily="monospace">
            {['Email 1: Welcome + Brand intro (sent immediately)', 'Email 2: Social proof + FAQ (Day 3)', 'Email 3: CTA — Book a free consult (Day 7)'][i]}
          </text>
          <text x="238" y={90 + i * 18} fill="#34d399" fontSize="5.5" fontFamily="monospace">✓ Auto</text>
        </g>
      ))}

      {/* Bottom stat */}
      <rect x="14" y="132" width="110" height="10" rx="3" fill="#00E5FF11" />
      <text x="18" y="139.5" fill="#00E5FF" fontSize="6" fontFamily="monospace">100% automated · Zero manual steps</text>
    </svg>
  );
}

function ChatbotPreview() {
  return (
    <svg viewBox="0 0 280 145" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
      <rect width="280" height="145" fill="#060614" />
      {/* Header */}
      <rect x="0" y="0" width="280" height="28" fill="#0d0d1e" />
      <circle cx="12" cy="14" r="4" fill="#ff5f57" />
      <circle cx="24" cy="14" r="4" fill="#febc2e" />
      <circle cx="36" cy="14" r="4" fill="#28c840" />
      <text x="80" y="18" fill="#555" fontSize="7" fontFamily="monospace">GHL Conversation AI — Med-Spa Bot</text>

      {/* Bot name + online */}
      <circle cx="20" cy="46" r="9" fill="#a78bfa22" stroke="#a78bfa" strokeWidth="0.8" />
      <text x="16" y="49" fill="#a78bfa" fontSize="7" fontFamily="sans-serif">AI</text>
      <text x="34" y="42" fill="#f0f0f0" fontSize="7.5" fontFamily="sans-serif" fontWeight="bold">Glow Clinic Assistant</text>
      <circle cx="34" cy="49" r="3" fill="#34d399" />
      <text x="40" y="52" fill="#34d399" fontSize="6" fontFamily="sans-serif">Online 24 / 7</text>

      {/* Customer message */}
      <rect x="14" y="60" width="145" height="17" rx="7" fill="#1a1a2e" />
      <text x="21" y="72" fill="#bbb" fontSize="6.5" fontFamily="sans-serif">How much is a lip filler session?</text>

      {/* Bot response */}
      <rect x="60" y="82" width="206" height="28" rx="7" fill="#a78bfa18" stroke="#a78bfa" strokeWidth="0.5" />
      <text x="68" y="93" fill="#c4b5fd" fontSize="6.5" fontFamily="sans-serif">Lip fillers start at ₱8,500 for 1ml 💋</text>
      <text x="68" y="104" fill="#c4b5fd" fontSize="6.5" fontFamily="sans-serif">Book online or DM us to reserve your slot!</text>

      {/* 2nd customer message */}
      <rect x="14" y="115" width="110" height="14" rx="6" fill="#1a1a2e" />
      <text x="21" y="125" fill="#bbb" fontSize="6.5" fontFamily="sans-serif">What are your clinic hours?</text>

      {/* Stat bar */}
      <rect x="172" y="130" width="98" height="10" rx="3" fill="#a78bfa11" />
      <text x="176" y="137.5" fill="#a78bfa" fontSize="6" fontFamily="monospace">90% queries resolved · No human needed</text>
    </svg>
  );
}

function NotionPipelinePreview() {
  const stages = ['Showing Scheduled', 'Offer Made', 'Under Contract', 'Closed'];
  const stageColors = ['#00E5FF', '#a78bfa', '#f59e0b', '#34d399'];

  return (
    <svg viewBox="0 0 280 145" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
      <rect width="280" height="145" fill="#060614" />
      {/* Header */}
      <rect x="0" y="0" width="280" height="28" fill="#0d0d1e" />
      <circle cx="12" cy="14" r="4" fill="#ff5f57" />
      <circle cx="24" cy="14" r="4" fill="#febc2e" />
      <circle cx="36" cy="14" r="4" fill="#28c840" />
      <text x="85" y="18" fill="#555" fontSize="7" fontFamily="monospace">Notion — Buyer Pipeline (AI-Powered)</text>

      {/* AI summary badge */}
      <rect x="14" y="33" width="250" height="16" rx="4" fill="#34d39915" stroke="#34d399" strokeWidth="0.6" />
      <text x="18" y="44" fill="#34d399" fontSize="6.5" fontFamily="monospace">
        ✦ Notion AI summarized today&apos;s meeting → 3 action items created automatically
      </text>

      {/* Kanban columns */}
      {stages.map((stage, col) => (
        <g key={stage}>
          <rect x={14 + col * 66} y={54} width={60} height={10} rx="2" fill={`${stageColors[col]}22`} />
          <text x={18 + col * 66} y={62} fill={stageColors[col]} fontSize="5.5" fontFamily="monospace" fontWeight="bold">
            {stage.toUpperCase()}
          </text>
          {/* Cards in column */}
          {[0, 1].map((row) => (
            col * 2 + row < 6 ? (
              <g key={row}>
                <rect
                  x={14 + col * 66}
                  y={68 + row * 22}
                  width={60}
                  height={18}
                  rx="3"
                  fill="#0d1224"
                  stroke={`${stageColors[col]}33`}
                  strokeWidth="0.6"
                />
                <text x={19 + col * 66} y={77 + row * 22} fill="#888" fontSize="5.5" fontFamily="sans-serif">
                  {['The Santos', 'Rivera Fam', 'J. Mendoza', 'Cruz Family', 'A. Reyes', 'M. Tan'][col * 2 + row]}
                </text>
                <text x={19 + col * 66} y={83 + row * 22} fill={stageColors[col]} fontSize="5" fontFamily="monospace">
                  {['Jun 23', 'Jun 25', 'Jun 24 ✓', 'Pending', 'Done ✓', 'Jul 2'][col * 2 + row]}
                </text>
              </g>
            ) : null
          ))}
        </g>
      ))}

      {/* Action items */}
      <rect x="14" y="116" width="250" height="10" rx="3" fill="#0d1224" />
      <text x="18" y="123.5" fill="#666" fontSize="6" fontFamily="monospace">
        📋 Action items: Follow up Santos · Send offer to Rivera · Schedule walkthrough for Mendoza
      </text>
    </svg>
  );
}

/* ─── Data ─────────────────────────────────────────────────────── */

interface Metric {
  icon: React.ReactNode;
  label: string;
}

interface Project {
  id: number;
  title: string;
  category: string;
  description: string;
  metrics: Metric[];
  tags: string[];
  accentColor: string;
  Preview: React.FC;
  caseStudyLabel: string;
}

const PROJECTS: Project[] = [
  {
    id: 1,
    title: 'Automated Lead Capture & Follow-Up',
    category: 'E-Commerce · DTC Skincare Brand',
    description:
      'Eliminated manual lead follow-up entirely — new leads are auto-tagged, welcomed, and routed the moment they opt in. Full workflow built in GoHighLevel with no manual steps.',
    metrics: [
      { icon: <Zap size={11} />, label: '100% automated intake' },
      { icon: <Clock size={11} />, label: 'Zero manual follow-ups' },
      { icon: <TrendingUp size={11} />, label: 'Immediate lead response' },
    ],
    tags: ['GoHighLevel', 'Workflows', 'Automated Email', 'CRM'],
    accentColor: '#00E5FF',
    Preview: LeadCapturePreview,
    caseStudyLabel: 'Walkthrough on Loom',
  },
  {
    id: 2,
    title: 'AI Chatbot for Customer Inquiries',
    category: 'Cosmetics Clinic · Med-Spa',
    description:
      'Built and trained a warm, accurate AI chatbot to answer pricing, hours, and FAQs for a med-spa — tested for both accuracy and empathetic tone. Handles the full first-response layer 24/7.',
    metrics: [
      { icon: <MessageSquare size={11} />, label: '90% queries auto-resolved' },
      { icon: <Clock size={11} />, label: '24/7 availability' },
      { icon: <Zap size={11} />, label: 'No human needed' },
    ],
    tags: ['GoHighLevel Conversation AI', 'Knowledge Base', 'Prompt Engineering'],
    accentColor: '#a78bfa',
    Preview: ChatbotPreview,
    caseStudyLabel: 'Full case study on Notion',
  },
  {
    id: 3,
    title: 'Notion AI Client Pipeline Tracker',
    category: 'Real Estate Agent',
    description:
      'Organized a real estate agent\'s entire buyer pipeline — showings, offers, follow-ups — into one connected system. Notion AI auto-summarizes meeting notes into action items instantly.',
    metrics: [
      { icon: <FileText size={11} />, label: 'AI meeting summaries' },
      { icon: <Users size={11} />, label: 'Full pipeline visibility' },
      { icon: <TrendingUp size={11} />, label: 'Zero dropped follow-ups' },
    ],
    tags: ['Notion', 'Notion AI', 'Pipeline Management'],
    accentColor: '#34d399',
    Preview: NotionPipelinePreview,
    caseStudyLabel: 'Full case study on Notion',
  },
];

/* ─── Component ─────────────────────────────────────────────────── */

export default function ProjectCards() {
  return (
    <div className="grid grid-cols-1 gap-4 my-3 w-full">
      {PROJECTS.map((project, i) => (
        <motion.div
          key={project.id}
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: i * 0.1, duration: 0.35, ease: 'easeOut' }}
          className="rounded-xl overflow-hidden"
          style={{
            background: 'var(--surface)',
            border: `1px solid ${project.accentColor}1a`,
          }}
        >
          {/* Preview window */}
          <div className="w-full overflow-hidden" style={{ height: 145, background: '#060614' }}>
            <project.Preview />
          </div>

          {/* Card body */}
          <div className="p-4">
            <p
              className="text-[10px] font-mono uppercase tracking-widest mb-1"
              style={{ color: project.accentColor, opacity: 0.8 }}
            >
              {project.category}
            </p>
            <h3 className="font-semibold text-sm mb-2" style={{ color: 'var(--foreground)' }}>
              {project.title}
            </h3>
            <p className="text-xs leading-relaxed mb-3" style={{ color: 'var(--muted)' }}>
              {project.description}
            </p>

            {/* Metrics */}
            <div className="flex flex-wrap gap-1.5 mb-3">
              {project.metrics.map(({ icon, label }) => (
                <span
                  key={label}
                  className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-medium"
                  style={{
                    background: `${project.accentColor}12`,
                    color: project.accentColor,
                    border: `1px solid ${project.accentColor}28`,
                  }}
                >
                  {icon}
                  {label}
                </span>
              ))}
            </div>

            {/* Tags + case study link */}
            <div className="flex items-center justify-between flex-wrap gap-2">
              <div className="flex flex-wrap gap-1.5">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-[10px] px-2 py-0.5 rounded"
                    style={{ background: 'var(--border-color)', color: 'var(--muted)' }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <span
                className="text-[10px] font-mono"
                style={{ color: project.accentColor, opacity: 0.65 }}
              >
                ✦ {project.caseStudyLabel}
              </span>
            </div>
          </div>
        </motion.div>
      ))}

      {/* 4th case study — compact mention */}
      <motion.div
        initial={{ opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.35, duration: 0.3 }}
        className="rounded-xl px-4 py-3 flex items-center gap-3"
        style={{
          background: 'var(--surface)',
          border: '1px solid var(--border-color)',
        }}
      >
        <span className="text-lg">✍️</span>
        <div>
          <p className="text-xs font-semibold" style={{ color: 'var(--foreground)' }}>
            AI-Assisted Client Reply Management
          </p>
          <p className="text-[11px] mt-0.5" style={{ color: 'var(--muted)' }}>
            High-ticket coaching · ChatGPT + Claude · Cut reply time, kept tone on-brand · Case study on Notion
          </p>
        </div>
      </motion.div>
    </div>
  );
}
