'use client';

import { motion } from 'framer-motion';
import { Clock, Zap, TrendingUp, MessageSquare, Users, FileText, MousePointer } from 'lucide-react';

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

function SalesFunnelPreview() {
  return (
    <svg viewBox="0 0 280 145" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
      <rect width="280" height="145" fill="#060614" />
      {/* Header bar */}
      <rect x="0" y="0" width="280" height="28" fill="#0d0d1e" />
      <circle cx="12" cy="14" r="4" fill="#ff5f57" />
      <circle cx="24" cy="14" r="4" fill="#febc2e" />
      <circle cx="36" cy="14" r="4" fill="#28c840" />
      <text x="68" y="18" fill="#555" fontSize="7" fontFamily="monospace">GoHighLevel — Funnel Builder</text>

      {/* Card 1: Sales Page */}
      <rect x="14" y="35" width="56" height="72" rx="4" fill="#0d0d1e" stroke="#f59e0b" strokeWidth="0.8" />
      <rect x="18" y="39" width="48" height="3.5" rx="1" fill="#2a2010" />
      <rect x="18" y="44" width="36" height="3" rx="1" fill="#1a1608" />
      <rect x="18" y="49" width="42" height="3" rx="1" fill="#1a1608" />
      <rect x="18" y="57" width="48" height="10" rx="2" fill="#f59e0b" />
      <text x="42" y="63.5" fill="#000" fontSize="5" fontFamily="sans-serif" textAnchor="middle" fontWeight="bold">GET ACCESS — $47</text>
      <rect x="18" y="71" width="48" height="5" rx="1" fill="#1a1608" />
      <text x="42" y="75.5" fill="#666" fontSize="4" fontFamily="sans-serif" textAnchor="middle">Secure · 30-Day Guarantee</text>
      <text x="42" y="103" fill="#f59e0b" fontSize="6" fontFamily="monospace" textAnchor="middle">Sales Page</text>

      {/* Arrow 1 */}
      <line x1="70" y1="71" x2="79" y2="71" stroke="#2a2a2a" strokeWidth="1" />
      <polygon points="77,68 77,74 82,71" fill="#2a2a2a" />

      {/* Card 2: Order Form */}
      <rect x="82" y="35" width="56" height="72" rx="4" fill="#0d0d1e" stroke="#818cf8" strokeWidth="0.8" />
      <text x="110" y="50" fill="#e0e0ff" fontSize="6.5" fontFamily="sans-serif" textAnchor="middle" fontWeight="bold">Place Order</text>
      <rect x="86" y="54" width="48" height="6.5" rx="2" fill="#1a1a2e" />
      <text x="89" y="58.5" fill="#555" fontSize="4.5" fontFamily="sans-serif">Full Name</text>
      <rect x="86" y="63" width="48" height="6.5" rx="2" fill="#1a1a2e" />
      <text x="89" y="67.5" fill="#555" fontSize="4.5" fontFamily="sans-serif">Email Address</text>
      <rect x="86" y="72" width="48" height="9" rx="2" fill="#818cf820" stroke="#818cf840" strokeWidth="0.5" />
      <text x="110" y="77.5" fill="#818cf8" fontSize="4.5" fontFamily="sans-serif" textAnchor="middle">Place My Order</text>
      <text x="110" y="103" fill="#818cf8" fontSize="6" fontFamily="monospace" textAnchor="middle">Order Form</text>

      {/* Arrow 2 */}
      <line x1="138" y1="71" x2="147" y2="71" stroke="#2a2a2a" strokeWidth="1" />
      <polygon points="145,68 145,74 150,71" fill="#2a2a2a" />

      {/* Card 3: Upsell */}
      <rect x="151" y="35" width="56" height="72" rx="4" fill="#0d0d1e" stroke="#f97316" strokeWidth="0.8" />
      <rect x="151" y="35" width="56" height="12" rx="2" fill="#ef444418" />
      <text x="179" y="43" fill="#ef4444" fontSize="5.5" fontFamily="sans-serif" textAnchor="middle" fontWeight="bold">WAIT — Special Offer</text>
      <text x="179" y="57" fill="#f0f0f0" fontSize="6" fontFamily="sans-serif" textAnchor="middle" fontWeight="bold">1-on-1 Strategy</text>
      <text x="179" y="65" fill="#f0f0f0" fontSize="6" fontFamily="sans-serif" textAnchor="middle" fontWeight="bold">Session</text>
      <text x="179" y="73" fill="#f97316" fontSize="6" fontFamily="monospace" textAnchor="middle">$297 → $97</text>
      <rect x="155" y="77" width="48" height="10" rx="2" fill="#f97316" />
      <text x="179" y="83.5" fill="#000" fontSize="4.5" fontFamily="sans-serif" textAnchor="middle" fontWeight="bold">Add to Order — $97</text>
      <text x="179" y="103" fill="#f97316" fontSize="6" fontFamily="monospace" textAnchor="middle">Upsell Page</text>

      {/* Arrow 3 */}
      <line x1="207" y1="71" x2="216" y2="71" stroke="#2a2a2a" strokeWidth="1" />
      <polygon points="214,68 214,74 219,71" fill="#2a2a2a" />

      {/* Card 4: Thank You */}
      <rect x="220" y="35" width="46" height="72" rx="4" fill="#0d0d1e" stroke="#34d399" strokeWidth="0.8" />
      <text x="243" y="53" fill="#facc15" fontSize="13" fontFamily="sans-serif" textAnchor="middle">&#127881;</text>
      <text x="243" y="63" fill="#f0f0f0" fontSize="6" fontFamily="sans-serif" textAnchor="middle" fontWeight="bold">You&apos;re in!</text>
      <text x="243" y="71" fill="#888" fontSize="4.5" fontFamily="sans-serif" textAnchor="middle">Check your email</text>
      <rect x="224" y="75" width="38" height="9" rx="2" fill="#f59e0b18" stroke="#f59e0b40" strokeWidth="0.5" />
      <text x="243" y="80.5" fill="#f59e0b" fontSize="4.5" fontFamily="sans-serif" textAnchor="middle">Access Course</text>
      <text x="243" y="103" fill="#34d399" fontSize="6" fontFamily="monospace" textAnchor="middle">Thank You</text>

      {/* Bottom stat */}
      <rect x="14" y="110" width="252" height="12" rx="3" fill="#0d1224" />
      <text x="18" y="118.5" fill="#f59e0b" fontSize="6" fontFamily="monospace">4-page funnel · End-to-end connected · GoHighLevel Funnel Builder</text>
    </svg>
  );
}

function ClientReplyPreview() {
  return (
    <svg viewBox="0 0 280 145" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
      <rect width="280" height="145" fill="#060614" />
      {/* Header bar */}
      <rect x="0" y="0" width="280" height="28" fill="#0d0d1e" />
      <circle cx="12" cy="14" r="4" fill="#ff5f57" />
      <circle cx="24" cy="14" r="4" fill="#febc2e" />
      <circle cx="36" cy="14" r="4" fill="#28c840" />
      <text x="60" y="18" fill="#555" fontSize="7" fontFamily="monospace">Notion — AI-Assisted Client Reply Mgmt</text>
      {/* Page title */}
      <text x="14" y="40" fill="#e0e0ff" fontSize="8" fontFamily="sans-serif" fontWeight="bold">AI-Assisted Client Reply Management</text>
      <text x="14" y="50" fill="#555" fontSize="6" fontFamily="sans-serif">High-Ticket Coaching · ChatGPT / Claude</text>
      {/* Divider */}
      <line x1="14" y1="55" x2="266" y2="55" stroke="#1a1a2e" strokeWidth="1" />
      {/* Example 1 */}
      <text x="14" y="64" fill="#a0a0c0" fontSize="6.5" fontFamily="sans-serif" fontWeight="bold">Example 1 — Discovery Call Inquiry</text>
      <circle cx="18" cy="73" r="3" fill="#ef4444" />
      <text x="26" y="75" fill="#666" fontSize="6" fontFamily="sans-serif">Raw: saw your ad, what&apos;s included, at $8K/mo stage</text>
      <circle cx="18" cy="83" r="3" fill="#a78bfa" />
      <text x="26" y="85" fill="#666" fontSize="6" fontFamily="sans-serif">AI: 1:1 calls + roadmap + direct access — $4,500 / 3mo</text>
      <circle cx="18" cy="93" r="3" fill="#34d399" />
      <text x="26" y="95" fill="#b0f0d8" fontSize="6" fontFamily="sans-serif">Final: warm, specific, ends with discovery call CTA</text>
      {/* Divider */}
      <line x1="14" y1="102" x2="266" y2="102" stroke="#1a1a2e" strokeWidth="1" />
      {/* Example 2 */}
      <text x="14" y="111" fill="#a0a0c0" fontSize="6.5" fontFamily="sans-serif" fontWeight="bold">Example 2 — Refund Complaint</text>
      <circle cx="18" cy="120" r="3" fill="#ef4444" />
      <text x="26" y="122" fill="#666" fontSize="6" fontFamily="sans-serif">Raw: paid for VIP, only 1 call — wants refund or dispute</text>
      <circle cx="18" cy="130" r="3" fill="#34d399" />
      <text x="26" y="132" fill="#b0f0d8" fontSize="6" fontFamily="sans-serif">Final: acknowledged, booked 2 sessions, offered resolution</text>
      {/* Stat bar */}
      <rect x="14" y="137" width="252" height="7" rx="2" fill="#a78bfa18" />
      <text x="18" y="142.5" fill="#a78bfa" fontSize="5.5" fontFamily="monospace">3 scenarios · Prompt engineering · ChatGPT + Claude AI</text>
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
  caseStudyUrl?: string;
}

const PROJECTS: Project[] = [
  {
    id: 0,
    title: 'AI-Assisted Client Reply Management',
    category: 'High-Ticket Coaching',
    description:
      'Drafted and refined client communications for a premium coaching business — covering discovery calls, refund complaints, and partnership inquiries. Each reply was AI-drafted then tone-matched to sound warm, premium, and on-brand.',
    metrics: [
      { icon: <MessageSquare size={11} />, label: '3 scenarios documented' },
      { icon: <Zap size={11} />, label: 'Reply time cut significantly' },
      { icon: <TrendingUp size={11} />, label: 'Tone kept on-brand' },
    ],
    tags: ['ChatGPT', 'Claude AI', 'Prompt Engineering'],
    accentColor: '#a78bfa',
    Preview: ClientReplyPreview,
    caseStudyLabel: 'Full project on Notion',
    caseStudyUrl: 'https://precious-gymnast-805.notion.site/AI-Assisted-Client-Reply-Management-High-Ticket-Coaching-3855273f5fc58110a312d67280728ec8',
  },
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
    caseStudyUrl: 'https://www.loom.com/share/763523f3d08049dd8ca84eca1c8ae29f',
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
    caseStudyLabel: 'Full project on Notion',
    caseStudyUrl: '',
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
    caseStudyLabel: 'Full project on Notion',
    caseStudyUrl: '',
  },
  {
    id: 4,
    title: 'Complete Sales Funnel Build',
    category: 'Online Business Coach · Digital Course',
    description:
      'Built a full 4-page sales funnel from scratch for a $47 mini-course — Sales Page, Order Form, Upsell ($97 strategy session), and Thank You Page. All pages connected end-to-end with copy, buttons, product setup, and payment configuration.',
    metrics: [
      { icon: <MousePointer size={11} />, label: '4-page funnel built' },
      { icon: <Zap size={11} />, label: 'End-to-end connected' },
      { icon: <TrendingUp size={11} />, label: '$47 + $97 upsell flow' },
    ],
    tags: ['GoHighLevel', 'Funnel Builder', 'Order Form', 'Upsell Page'],
    accentColor: '#f59e0b',
    Preview: SalesFunnelPreview,
    caseStudyLabel: 'Screenshots on request',
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
              {project.caseStudyUrl ? (
                <a
                  href={project.caseStudyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[10px] font-mono transition-opacity duration-150 hover:opacity-100"
                  style={{ color: project.accentColor, opacity: 0.7, textDecoration: 'none' }}
                >
                  ✦ {project.caseStudyLabel} ↗
                </a>
              ) : (
                <span
                  className="text-[10px] font-mono"
                  style={{ color: project.accentColor, opacity: 0.55 }}
                >
                  ✦ {project.caseStudyLabel}
                </span>
              )}
            </div>
          </div>
        </motion.div>
      ))}

    </div>
  );
}
