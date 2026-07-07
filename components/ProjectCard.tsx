'use client';

import { motion } from 'framer-motion';
import { Clock, Zap, TrendingUp, MessageSquare, Users, FileText, MousePointer, GitBranch } from 'lucide-react';

/* ─── SVG Preview Components ─────────────────────────────────── */

function InboxTriagePreview() {
  return (
    <svg viewBox="0 0 280 145" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
      <rect width="280" height="145" fill="#060614" />
      {/* Header bar */}
      <rect x="0" y="0" width="280" height="28" fill="#0d0d1e" />
      <circle cx="12" cy="14" r="4" fill="#ff5f57" />
      <circle cx="24" cy="14" r="4" fill="#febc2e" />
      <circle cx="36" cy="14" r="4" fill="#28c840" />
      <text x="68" y="18" fill="#555" fontSize="7" fontFamily="monospace">Make.com · AI Inbox Triage</text>

      {/* Row 1: Urgent */}
      <rect x="14" y="34" width="252" height="19" rx="3" fill="#1a0a0a" stroke="#ef4444" strokeWidth="0.7" />
      <rect x="19" y="39" width="30" height="9" rx="4" fill="#ef444422" />
      <text x="34" y="46" fill="#ef4444" fontSize="5.5" fontFamily="sans-serif" textAnchor="middle" fontWeight="bold">URGENT</text>
      <text x="58" y="46" fill="#ccc" fontSize="6" fontFamily="sans-serif">Contract expires today, needs signature</text>

      {/* Row 2: Inquiry */}
      <rect x="14" y="56" width="252" height="19" rx="3" fill="#0a1428" stroke="#38bdf8" strokeWidth="0.7" />
      <rect x="19" y="61" width="32" height="9" rx="4" fill="#38bdf822" />
      <text x="35" y="68" fill="#38bdf8" fontSize="5.5" fontFamily="sans-serif" textAnchor="middle" fontWeight="bold">INQUIRY</text>
      <text x="58" y="68" fill="#ccc" fontSize="6" fontFamily="sans-serif">Question about your onboarding package</text>

      {/* Row 3: Complaint */}
      <rect x="14" y="78" width="252" height="19" rx="3" fill="#1a1206" stroke="#f59e0b" strokeWidth="0.7" />
      <rect x="19" y="83" width="40" height="9" rx="4" fill="#f59e0b22" />
      <text x="39" y="90" fill="#f59e0b" fontSize="5.5" fontFamily="sans-serif" textAnchor="middle" fontWeight="bold">COMPLAINT</text>
      <text x="65" y="90" fill="#ccc" fontSize="6" fontFamily="sans-serif">Delivery was 3 days late, not happy</text>

      {/* Row 4: Spam */}
      <rect x="14" y="100" width="252" height="16" rx="3" fill="#111111" stroke="#3a3a3a" strokeWidth="0.7" />
      <rect x="19" y="104" width="24" height="8" rx="4" fill="#3a3a3a55" />
      <text x="31" y="110.5" fill="#666" fontSize="5.5" fontFamily="sans-serif" textAnchor="middle" fontWeight="bold">SPAM</text>
      <text x="50" y="110.5" fill="#555" fontSize="6" fontFamily="sans-serif">You&apos;ve won a prize, claim now</text>

      {/* Draft panel */}
      <rect x="14" y="123" width="252" height="12" rx="2" fill="#00E5FF11" />
      <text x="18" y="131" fill="#00E5FF" fontSize="6" fontFamily="monospace">AI-drafted reply saved to Gmail Drafts, awaiting approval</text>
    </svg>
  );
}

function PodcastRepurposePreview() {
  return (
    <svg viewBox="0 0 280 145" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
      <rect width="280" height="145" fill="#060614" />
      {/* Header bar */}
      <rect x="0" y="0" width="280" height="28" fill="#0d0d1e" />
      <circle cx="12" cy="14" r="4" fill="#ff5f57" />
      <circle cx="24" cy="14" r="4" fill="#febc2e" />
      <circle cx="36" cy="14" r="4" fill="#28c840" />
      <text x="68" y="18" fill="#555" fontSize="7" fontFamily="monospace">n8n · Podcast Repurposing Engine</text>

      {/* Drive node */}
      <circle cx="26" cy="60" r="11" fill="#0ea5e9" />
      <text x="26" y="64" fill="white" fontSize="9" fontFamily="sans-serif" textAnchor="middle">▲</text>
      <text x="26" y="78" fill="#666" fontSize="5" fontFamily="sans-serif" textAnchor="middle">Transcript</text>
      <line x1="37" y1="60" x2="50" y2="60" stroke="#2a2a2a" strokeWidth="1" strokeDasharray="2,2" />

      {/* Gemini chain node */}
      <circle cx="62" cy="60" r="12" fill="#a78bfa" />
      <text x="62" y="64" fill="white" fontSize="9" fontFamily="sans-serif" textAnchor="middle">✦</text>
      <text x="62" y="80" fill="#666" fontSize="5" fontFamily="sans-serif" textAnchor="middle">Gemini chain</text>

      {/* Branch lines to outputs */}
      <line x1="74" y1="55" x2="96" y2="38" stroke="#a78bfa" strokeWidth="0.7" strokeDasharray="2,2" opacity="0.7" />
      <line x1="74" y1="58" x2="96" y2="52" stroke="#a78bfa" strokeWidth="0.7" strokeDasharray="2,2" opacity="0.7" />
      <line x1="74" y1="62" x2="96" y2="66" stroke="#a78bfa" strokeWidth="0.7" strokeDasharray="2,2" opacity="0.7" />
      <line x1="74" y1="66" x2="96" y2="80" stroke="#a78bfa" strokeWidth="0.7" strokeDasharray="2,2" opacity="0.7" />
      <line x1="74" y1="68" x2="96" y2="94" stroke="#a78bfa" strokeWidth="0.7" strokeDasharray="2,2" opacity="0.7" />

      {/* Output chips */}
      <rect x="98" y="32" width="80" height="12" rx="3" fill="#0d1224" stroke="#f472b620" strokeWidth="0.6" />
      <text x="103" y="40.5" fill="#f472b6" fontSize="6" fontFamily="sans-serif">Show notes + timestamps</text>

      <rect x="98" y="46" width="72" height="12" rx="3" fill="#0d1224" stroke="#f472b620" strokeWidth="0.6" />
      <text x="103" y="54.5" fill="#f472b6" fontSize="6" fontFamily="sans-serif">SEO title + blog post</text>

      <rect x="98" y="60" width="62" height="12" rx="3" fill="#0d1224" stroke="#f472b620" strokeWidth="0.6" />
      <text x="103" y="68.5" fill="#f472b6" fontSize="6" fontFamily="sans-serif">LinkedIn post</text>

      <rect x="98" y="74" width="70" height="12" rx="3" fill="#0d1224" stroke="#f472b620" strokeWidth="0.6" />
      <text x="103" y="82.5" fill="#f472b6" fontSize="6" fontFamily="sans-serif">Instagram caption</text>

      <rect x="98" y="88" width="66" height="12" rx="3" fill="#0d1224" stroke="#f472b620" strokeWidth="0.6" />
      <text x="103" y="96.5" fill="#f472b6" fontSize="6" fontFamily="sans-serif">Tweet thread</text>

      {/* Arrow to Notion */}
      <line x1="178" y1="64" x2="196" y2="64" stroke="#2a2a2a" strokeWidth="1" strokeDasharray="2,2" />

      {/* Notion card */}
      <rect x="198" y="42" width="68" height="44" rx="4" fill="#0d0d1e" stroke="#666666" strokeWidth="0.8" />
      <text x="232" y="56" fill="#e0e0ff" fontSize="6" fontFamily="sans-serif" textAnchor="middle" fontWeight="bold">Notion</text>
      <rect x="204" y="61" width="56" height="10" rx="2" fill="#f59e0b18" />
      <text x="232" y="68" fill="#f59e0b" fontSize="5" fontFamily="sans-serif" textAnchor="middle">Needs Review</text>
      <text x="232" y="80" fill="#666" fontSize="4.5" fontFamily="sans-serif" textAnchor="middle">Email alert sent</text>

      {/* Stat bar */}
      <rect x="14" y="123" width="252" height="12" rx="2" fill="#f472b611" />
      <text x="18" y="131" fill="#f472b6" fontSize="6" fontFamily="monospace">1 transcript → 6 content pieces · Human-approved before posting</text>
    </svg>
  );
}

function OnboardingPreview() {
  return (
    <svg viewBox="0 0 280 145" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
      <rect width="280" height="145" fill="#060614" />
      {/* Header bar */}
      <rect x="0" y="0" width="280" height="28" fill="#0d0d1e" />
      <circle cx="12" cy="14" r="4" fill="#ff5f57" />
      <circle cx="24" cy="14" r="4" fill="#febc2e" />
      <circle cx="36" cy="14" r="4" fill="#28c840" />
      <text x="68" y="18" fill="#555" fontSize="7" fontFamily="monospace">Make.com · Client Onboarding Automation</text>

      {/* ── Main flow nodes ── */}

      {/* Google Sheets */}
      <circle cx="20" cy="78" r="10" fill="#16a34a" />
      <text x="20" y="82" fill="white" fontSize="9" fontFamily="sans-serif" textAnchor="middle" fontWeight="bold">G</text>
      <text x="20" y="96" fill="#666" fontSize="5" fontFamily="sans-serif" textAnchor="middle">Sheets</text>
      <line x1="30" y1="78" x2="36" y2="78" stroke="#2a2a2a" strokeWidth="1" strokeDasharray="2,2" />

      {/* Google Drive */}
      <circle cx="46" cy="78" r="10" fill="#0ea5e9" />
      <text x="46" y="82" fill="white" fontSize="9" fontFamily="sans-serif" textAnchor="middle">▲</text>
      <text x="46" y="96" fill="#666" fontSize="5" fontFamily="sans-serif" textAnchor="middle">Drive</text>
      <line x1="56" y1="78" x2="62" y2="78" stroke="#2a2a2a" strokeWidth="1" strokeDasharray="2,2" />

      {/* Google Docs */}
      <circle cx="72" cy="78" r="10" fill="#4285f4" />
      <text x="72" y="82" fill="white" fontSize="9" fontFamily="sans-serif" textAnchor="middle" fontWeight="bold">D</text>
      <text x="72" y="96" fill="#666" fontSize="5" fontFamily="sans-serif" textAnchor="middle">Docs</text>
      <line x1="82" y1="78" x2="88" y2="78" stroke="#2a2a2a" strokeWidth="1" strokeDasharray="2,2" />

      {/* GoHighLevel Search Contacts */}
      <circle cx="98" cy="78" r="10" fill="#f97316" />
      <text x="98" y="81" fill="white" fontSize="5.5" fontFamily="sans-serif" textAnchor="middle" fontWeight="bold">GHL</text>
      <text x="98" y="96" fill="#666" fontSize="5" fontFamily="sans-serif" textAnchor="middle">Search</text>
      <line x1="108" y1="78" x2="113" y2="78" stroke="#2a2a2a" strokeWidth="1" strokeDasharray="2,2" />

      {/* Router */}
      <circle cx="124" cy="78" r="11" fill="#22c55e" />
      <text x="124" y="83" fill="white" fontSize="12" fontFamily="sans-serif" textAnchor="middle">→</text>
      <text x="124" y="97" fill="#555" fontSize="5" fontFamily="sans-serif" textAnchor="middle">Router</text>

      {/* Branch lines */}
      <line x1="135" y1="78" x2="143" y2="52" stroke="#22c55e" strokeWidth="0.8" strokeDasharray="2,2" opacity="0.7" />
      <line x1="135" y1="78" x2="143" y2="104" stroke="#f59e0b" strokeWidth="0.8" strokeDasharray="2,2" opacity="0.7" />

      {/* Branch labels */}
      <text x="136" y="49" fill="#22c55e" fontSize="5" fontFamily="monospace">New client</text>
      <text x="136" y="119" fill="#f59e0b" fontSize="5" fontFamily="monospace">Returning</text>

      {/* GHL Create Contact */}
      <circle cx="152" cy="52" r="9" fill="#f97316" />
      <text x="152" y="55" fill="white" fontSize="5.5" fontFamily="sans-serif" textAnchor="middle" fontWeight="bold">GHL</text>
      <text x="152" y="65" fill="#666" fontSize="5" fontFamily="sans-serif" textAnchor="middle">Create</text>
      <line x1="161" y1="52" x2="172" y2="78" stroke="#2a2a2a" strokeWidth="0.8" strokeDasharray="2,2" />

      {/* Skip */}
      <circle cx="152" cy="104" r="9" fill="#1a1a1a" stroke="#3a3a3a" strokeWidth="0.7" />
      <text x="152" y="108" fill="#777" fontSize="6" fontFamily="sans-serif" textAnchor="middle">Skip</text>
      <line x1="161" y1="104" x2="172" y2="78" stroke="#2a2a2a" strokeWidth="0.8" strokeDasharray="2,2" />

      {/* Notion */}
      <circle cx="182" cy="78" r="10" fill="#1a1a1a" stroke="#666" strokeWidth="0.7" />
      <text x="182" y="82" fill="white" fontSize="9" fontFamily="sans-serif" textAnchor="middle" fontWeight="bold">N</text>
      <text x="182" y="96" fill="#666" fontSize="5" fontFamily="sans-serif" textAnchor="middle">Notion</text>
      <line x1="192" y1="78" x2="200" y2="78" stroke="#2a2a2a" strokeWidth="1" strokeDasharray="2,2" />

      {/* Gmail */}
      <circle cx="210" cy="78" r="10" fill="#dc2626" />
      <text x="210" y="82" fill="white" fontSize="9" fontFamily="sans-serif" textAnchor="middle" fontWeight="bold">M</text>
      <text x="210" y="96" fill="#666" fontSize="5" fontFamily="sans-serif" textAnchor="middle">Gmail</text>
      <line x1="220" y1="78" x2="228" y2="78" stroke="#2a2a2a" strokeWidth="1" strokeDasharray="2,2" />

      {/* Slack */}
      <circle cx="238" cy="78" r="10" fill="#4a1d96" />
      <text x="238" y="82" fill="white" fontSize="9" fontFamily="sans-serif" textAnchor="middle" fontWeight="bold">S</text>
      <text x="238" y="96" fill="#666" fontSize="5" fontFamily="sans-serif" textAnchor="middle">Slack</text>

      {/* Bottom stat */}
      <rect x="14" y="123" width="252" height="11" rx="2" fill="#22c55e11" />
      <text x="18" y="131" fill="#22c55e" fontSize="6" fontFamily="monospace">9 apps · Smart duplicate check · Fully onboarded in seconds</text>
    </svg>
  );
}

function GrowthSystemPreview() {
  return (
    <svg viewBox="0 0 280 145" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
      <rect width="280" height="145" fill="#060614" />
      {/* Header bar */}
      <rect x="0" y="0" width="280" height="28" fill="#0d0d1e" />
      <circle cx="12" cy="14" r="4" fill="#ff5f57" />
      <circle cx="24" cy="14" r="4" fill="#febc2e" />
      <circle cx="36" cy="14" r="4" fill="#28c840" />
      <text x="68" y="18" fill="#555" fontSize="7" fontFamily="monospace">GoHighLevel · Growth System</text>

      {/* Panel 1: Funnel */}
      <rect x="14" y="35" width="78" height="80" rx="4" fill="#0d0d1e" stroke="#f59e0b" strokeWidth="0.8" />
      <text x="53" y="50" fill="#f59e0b" fontSize="6.5" fontFamily="sans-serif" textAnchor="middle" fontWeight="bold">Funnel</text>
      <rect x="22" y="56" width="62" height="9" rx="2" fill="#f59e0b18" />
      <text x="53" y="62.5" fill="#f59e0b" fontSize="5" fontFamily="sans-serif" textAnchor="middle">Sales Page</text>
      <rect x="22" y="68" width="62" height="9" rx="2" fill="#1a1608" />
      <text x="53" y="74.5" fill="#888" fontSize="5" fontFamily="sans-serif" textAnchor="middle">Order + Upsell</text>
      <rect x="22" y="80" width="62" height="9" rx="2" fill="#1a1608" />
      <text x="53" y="86.5" fill="#888" fontSize="5" fontFamily="sans-serif" textAnchor="middle">Thank You Page</text>
      <text x="53" y="104" fill="#666" fontSize="4.5" fontFamily="sans-serif" textAnchor="middle">$47 + $97 upsell</text>

      {/* Panel 2: AI Chatbot */}
      <rect x="101" y="35" width="78" height="80" rx="4" fill="#0d0d1e" stroke="#a78bfa" strokeWidth="0.8" />
      <text x="140" y="50" fill="#a78bfa" fontSize="6.5" fontFamily="sans-serif" textAnchor="middle" fontWeight="bold">AI Chatbot</text>
      <circle cx="140" cy="66" r="9" fill="#1a1a2e" stroke="#a78bfa" strokeWidth="0.6" />
      <text x="140" y="69.5" fill="#a78bfa" fontSize="8" fontFamily="sans-serif" textAnchor="middle">✦</text>
      <rect x="109" y="80" width="62" height="20" rx="4" fill="#0d1228" stroke="#818cf820" strokeWidth="0.5" />
      <text x="140" y="88" fill="#c8c8f0" fontSize="4.8" fontFamily="sans-serif" textAnchor="middle">Pricing, hours,</text>
      <text x="140" y="95" fill="#c8c8f0" fontSize="4.8" fontFamily="sans-serif" textAnchor="middle">FAQs answered</text>
      <text x="140" y="108" fill="#666" fontSize="4.5" fontFamily="sans-serif" textAnchor="middle">24/7, no staff</text>

      {/* Panel 3: Lead Automation */}
      <rect x="188" y="35" width="78" height="80" rx="4" fill="#0d0d1e" stroke="#22c55e" strokeWidth="0.8" />
      <text x="227" y="50" fill="#22c55e" fontSize="6.5" fontFamily="sans-serif" textAnchor="middle" fontWeight="bold">Leads</text>
      <rect x="196" y="58" width="62" height="10" rx="4" fill="#22c55e18" />
      <text x="227" y="65" fill="#22c55e" fontSize="5" fontFamily="sans-serif" textAnchor="middle">Auto-tagged by source</text>
      <line x1="227" y1="68" x2="227" y2="74" stroke="#2a2a2a" strokeWidth="1" />
      <rect x="196" y="74" width="62" height="10" rx="4" fill="#22c55e18" />
      <text x="227" y="81" fill="#22c55e" fontSize="5" fontFamily="sans-serif" textAnchor="middle">Welcome sequence</text>
      <line x1="227" y1="84" x2="227" y2="90" stroke="#2a2a2a" strokeWidth="1" />
      <rect x="196" y="90" width="62" height="10" rx="4" fill="#22c55e18" />
      <text x="227" y="97" fill="#22c55e" fontSize="5" fontFamily="sans-serif" textAnchor="middle">Routed to pipeline</text>

      {/* Stat bar */}
      <rect x="14" y="123" width="252" height="12" rx="2" fill="#f59e0b11" />
      <text x="18" y="131" fill="#f59e0b" fontSize="6" fontFamily="monospace">One connected system · Zero leads go cold</text>
    </svg>
  );
}

function NotionPipelinePreview() {
  return (
    <svg viewBox="0 0 280 145" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
      <rect width="280" height="145" fill="#060614" />
      {/* Header bar */}
      <rect x="0" y="0" width="280" height="28" fill="#0d0d1e" />
      <circle cx="12" cy="14" r="4" fill="#ff5f57" />
      <circle cx="24" cy="14" r="4" fill="#febc2e" />
      <circle cx="36" cy="14" r="4" fill="#28c840" />
      <text x="68" y="18" fill="#555" fontSize="7" fontFamily="monospace">Notion · Client Pipeline Tracker</text>

      {/* Table header row */}
      <rect x="14" y="31" width="252" height="11" fill="#0d1224" />
      <text x="17" y="39" fill="#555" fontSize="5.5" fontFamily="sans-serif" fontWeight="bold">CLIENT NAME</text>
      <text x="82" y="39" fill="#555" fontSize="5.5" fontFamily="sans-serif" fontWeight="bold">STAGE</text>
      <text x="140" y="39" fill="#555" fontSize="5.5" fontFamily="sans-serif" fontWeight="bold">LAST CONTACT</text>
      <text x="202" y="39" fill="#555" fontSize="5.5" fontFamily="sans-serif" fontWeight="bold">NEXT ACTION</text>

      {/* Column dividers */}
      <line x1="78" y1="31" x2="78" y2="90" stroke="#1a1a2e" strokeWidth="0.5" />
      <line x1="135" y1="31" x2="135" y2="90" stroke="#1a1a2e" strokeWidth="0.5" />
      <line x1="197" y1="31" x2="197" y2="90" stroke="#1a1a2e" strokeWidth="0.5" />

      {/* Row 1: Tan Family — Showing */}
      <line x1="14" y1="42" x2="266" y2="42" stroke="#1a1a2e" strokeWidth="0.5" />
      <text x="17" y="51" fill="#ccc" fontSize="6" fontFamily="sans-serif">Tan Family</text>
      <rect x="81" y="44" width="34" height="10" rx="3" fill="#00E5FF18" />
      <text x="83" y="51.5" fill="#00E5FF" fontSize="5.5" fontFamily="sans-serif">Showing</text>
      <text x="139" y="51" fill="#666" fontSize="5.5" fontFamily="sans-serif">Jun 18, 2026</text>
      <text x="201" y="51" fill="#666" fontSize="5.5" fontFamily="sans-serif">Send 3 new listings</text>

      {/* Row 2: Reyes-Cruz — New Lead */}
      <line x1="14" y1="55" x2="266" y2="55" stroke="#1a1a2e" strokeWidth="0.5" />
      <text x="17" y="64" fill="#ccc" fontSize="6" fontFamily="sans-serif">Reyes-Cruz</text>
      <rect x="81" y="57" width="42" height="10" rx="3" fill="#f59e0b18" />
      <text x="83" y="64.5" fill="#f59e0b" fontSize="5.5" fontFamily="sans-serif">New Lead</text>
      <text x="139" y="64" fill="#666" fontSize="5.5" fontFamily="sans-serif">Jun 15, 2026</text>
      <text x="201" y="64" fill="#666" fontSize="5.5" fontFamily="sans-serif">Schedule intro call</text>

      {/* Row 3: Mendoza — Offer */}
      <line x1="14" y1="68" x2="266" y2="68" stroke="#1a1a2e" strokeWidth="0.5" />
      <text x="17" y="77" fill="#ccc" fontSize="6" fontFamily="sans-serif">Mendoza</text>
      <rect x="81" y="70" width="26" height="10" rx="3" fill="#a78bfa18" />
      <text x="83" y="77.5" fill="#a78bfa" fontSize="5.5" fontFamily="sans-serif">Offer</text>
      <text x="139" y="77" fill="#666" fontSize="5.5" fontFamily="sans-serif">Jun 17, 2026</text>
      <text x="201" y="77" fill="#666" fontSize="5.5" fontFamily="sans-serif">Follow up counter-offer</text>

      {/* Row 4: Santos — Closed */}
      <line x1="14" y1="81" x2="266" y2="81" stroke="#1a1a2e" strokeWidth="0.5" />
      <text x="17" y="90" fill="#ccc" fontSize="6" fontFamily="sans-serif">Santos</text>
      <rect x="81" y="83" width="30" height="10" rx="3" fill="#34d39918" />
      <text x="83" y="90.5" fill="#34d399" fontSize="5.5" fontFamily="sans-serif">Closed</text>
      <text x="139" y="90" fill="#666" fontSize="5.5" fontFamily="sans-serif">Jun 10, 2026</text>
      <text x="201" y="90" fill="#666" fontSize="5.5" fontFamily="sans-serif">Send closing gift</text>

      {/* Divider */}
      <line x1="14" y1="95" x2="266" y2="95" stroke="#1a1a2e" strokeWidth="1" />

      {/* AI Meeting Notes section */}
      <text x="14" y="105" fill="#34d399" fontSize="6.5" fontFamily="sans-serif" fontWeight="bold">AI-Summarized Meeting Notes</text>
      <circle cx="18" cy="114" r="3" fill="#a78bfa" />
      <text x="26" y="116" fill="#666" fontSize="5.5" fontFamily="sans-serif">Raw: &quot;Met with Tan family. 3BR Lahug, ~8M. Follow up Thursday.&quot;</text>
      <circle cx="18" cy="124" r="3" fill="#34d399" />
      <text x="26" y="126" fill="#b0f0d8" fontSize="5.5" fontFamily="sans-serif">AI: Client · 3BR ~P8M · Pre-approved · Action: 3 listings by Fri</text>

      {/* Stat bar */}
      <rect x="14" y="131" width="252" height="11" rx="2" fill="#34d39911" />
      <text x="18" y="139" fill="#34d399" fontSize="6" fontFamily="monospace">4 clients tracked · Notion AI auto-summarized meeting notes</text>
    </svg>
  );
}

function AirtablePreview() {
  return (
    <svg viewBox="0 0 280 145" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
      <rect width="280" height="145" fill="#060614" />
      {/* Header bar */}
      <rect x="0" y="0" width="280" height="28" fill="#0d0d1e" />
      <circle cx="12" cy="14" r="4" fill="#ff5f57" />
      <circle cx="24" cy="14" r="4" fill="#febc2e" />
      <circle cx="36" cy="14" r="4" fill="#28c840" />
      <text x="68" y="18" fill="#555" fontSize="7" fontFamily="monospace">Airtable · Task Completed Notification</text>

      {/* TRIGGER label */}
      <text x="140" y="42" fill="#444" fontSize="5.5" fontFamily="sans-serif" textAnchor="middle">TRIGGER</text>

      {/* Trigger node */}
      <circle cx="140" cy="51" r="7" fill="#0d1224" stroke="#22c55e" strokeWidth="1" />
      <polyline points="136,51 139.5,54.5 145,47.5" fill="none" stroke="#22c55e" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <line x1="140" y1="58" x2="140" y2="63" stroke="#1a1a2e" strokeWidth="1" />

      {/* Trigger card */}
      <rect x="60" y="63" width="160" height="18" rx="3" fill="#0d1224" stroke="#1e3a5f" strokeWidth="0.8" />
      <rect x="65" y="66" width="8" height="11" rx="1" fill="#1e3a8a" />
      <line x1="67" y1="70" x2="71" y2="70" stroke="#3b82f6" strokeWidth="0.7" />
      <line x1="67" y1="73" x2="71" y2="73" stroke="#3b82f6" strokeWidth="0.7" />
      <text x="78" y="71.5" fill="#e0e0ff" fontSize="5.5" fontFamily="sans-serif" fontWeight="bold">When a record is updated</text>
      <text x="78" y="78" fill="#555" fontSize="5" fontFamily="sans-serif">Status</text>
      <line x1="140" y1="81" x2="140" y2="86" stroke="#1a1a2e" strokeWidth="1" />

      {/* ACTIONS label */}
      <text x="140" y="94" fill="#444" fontSize="5.5" fontFamily="sans-serif" textAnchor="middle">ACTIONS</text>

      {/* Action node */}
      <circle cx="140" cy="103" r="7" fill="#0d1224" stroke="#22c55e" strokeWidth="1" />
      <polyline points="136,103 139.5,106.5 145,99.5" fill="none" stroke="#22c55e" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <line x1="140" y1="110" x2="140" y2="115" stroke="#1a1a2e" strokeWidth="1" />

      {/* Action card */}
      <rect x="45" y="115" width="190" height="20" rx="3" fill="#0d1224" stroke="#1e3a5f" strokeWidth="0.8" />
      <rect x="45" y="115" width="3" height="20" rx="1.5" fill="#14b8a6" />
      <text x="53" y="124" fill="#9ca3af" fontSize="5" fontFamily="sans-serif">If Status is</text>
      <rect x="78" y="118.5" width="34" height="8" rx="4" fill="#0d3d3a" stroke="#14b8a6" strokeWidth="0.5" />
      <text x="95" y="124" fill="#2dd4bf" fontSize="5" fontFamily="sans-serif" textAnchor="middle" fontWeight="bold">Completed</text>
      <line x1="53" y1="127" x2="231" y2="127" stroke="#1a1a2e" strokeWidth="0.8" />
      <rect x="53" y="129" width="10" height="6" rx="1" fill="#1e3a8a" />
      <polyline points="53,129 58,132 63,129" fill="none" stroke="#3b82f6" strokeWidth="0.7" />
      <text x="67" y="133.5" fill="#ccc" fontSize="5" fontFamily="sans-serif">Send an email · vadelfinanaflor28@gmail.com</text>

      {/* Stat bar */}
      <rect x="14" y="138" width="252" height="10" rx="2" fill="#3b82f611" />
      <text x="18" y="145.5" fill="#3b82f6" fontSize="6" fontFamily="monospace">Automation ON · Triggers on Status = Completed</text>
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
  caseStudyUrl: string;
}

const PROJECTS: Project[] = [
  {
    id: 0,
    title: 'AI Inbox Triage & Draft-Reply System',
    category: 'Service Business · Founder Ops',
    description:
      "A founder's inbox mixed urgent client issues, sales inquiries, complaints, and spam in one stream, so important emails surfaced hours late. Every incoming Gmail is now classified by an LLM into Inquiry, Urgent, Complaint, or Spam, auto-labeled, and given an AI-drafted, tone-matched reply saved to Drafts for approval. Full error handling and a manual-review fallback mean nothing is ever lost, and nothing sends without a human click.",
    metrics: [
      { icon: <Zap size={11} />, label: 'Auto-classified & labeled' },
      { icon: <Clock size={11} />, label: 'Urgent items surface instantly' },
      { icon: <MessageSquare size={11} />, label: 'Draft-ready replies, human-approved' },
    ],
    tags: ['Make.com', 'Gmail', 'Google Gemini', 'Prompt Engineering', 'Router Logic', 'Error Handling'],
    accentColor: '#00E5FF',
    Preview: InboxTriagePreview,
    caseStudyLabel: 'Watch the Loom walkthrough',
    caseStudyUrl: 'https://www.loom.com/share/a0dcbe3cffa74251b99294aeb899a172',
  },
  {
    id: 1,
    title: 'Podcast Content Repurposing Engine',
    category: 'Podcaster · Content Creator',
    description:
      'A creator published weekly episodes with no time left to write show notes, blog posts, or social content. Dropping a transcript into Google Drive now triggers an n8n pipeline, built with Claude Code and the n8n MCP, that runs a Gemini chain producing show notes, an SEO blog post, a LinkedIn post, an Instagram caption, and a tweet thread, each filed as a Needs Review card in a Notion content calendar for human approval before posting.',
    metrics: [
      { icon: <FileText size={11} />, label: 'One transcript, a week of content' },
      { icon: <Clock size={11} />, label: 'Drafted in minutes, not hours' },
      { icon: <Users size={11} />, label: 'Human-approved before posting' },
    ],
    tags: ['n8n', 'Claude Code + MCP', 'Google Drive', 'Google Gemini', 'Notion API', 'Gmail'],
    accentColor: '#f472b6',
    Preview: PodcastRepurposePreview,
    caseStudyLabel: 'Watch the Loom walkthrough',
    caseStudyUrl: 'https://www.loom.com/share/cd7472e2b3054fb6b987e56ff924baf7',
  },
  {
    id: 2,
    title: 'Client Onboarding Automation',
    category: 'Coaching / Service-Based Business',
    description:
      'Eliminated every manual onboarding step. One Google Form submission fires a Make.com pipeline: data logged to Sheets, a client folder created in Drive, a Service Agreement generated from a Docs template, a Router that checks GoHighLevel for duplicate contacts, then a Notion board update, a Gmail welcome email, and a Slack notification to the team, all in seconds with zero manual data entry.',
    metrics: [
      { icon: <GitBranch size={11} />, label: 'Smart duplicate check' },
      { icon: <Zap size={11} />, label: 'Zero manual data entry' },
      { icon: <TrendingUp size={11} />, label: 'Fully onboarded in seconds' },
    ],
    tags: ['Make.com', 'Google Forms', 'Google Sheets', 'Google Drive', 'Google Docs', 'GoHighLevel CRM', 'Notion', 'Gmail', 'Slack'],
    accentColor: '#22c55e',
    Preview: OnboardingPreview,
    caseStudyLabel: 'Watch the Loom walkthrough',
    caseStudyUrl: 'https://www.loom.com/share/b6c041cacb0048bdb36f437da56c6798',
  },
  {
    id: 3,
    title: 'GoHighLevel Growth System',
    category: 'Funnel + AI Chatbot + Lead Automation · Online Coach',
    description:
      'A business with no sales infrastructure: a course to sell but no funnel or checkout, staff buried in repetitive pricing and FAQ questions, and new leads going cold with no follow-up. Built the complete GoHighLevel stack end-to-end: a 4-page payment-ready funnel (Sales, Order, $97 Upsell, Thank You), a Conversation AI chatbot trained on a custom knowledge base to answer pricing, hours, and FAQs 24/7, and a lead capture workflow that auto-tags, welcomes, and routes every new lead within seconds.',
    metrics: [
      { icon: <MousePointer size={11} />, label: 'Funnel, chatbot & lead automation' },
      { icon: <Clock size={11} />, label: '24/7 AI-answered FAQs' },
      { icon: <TrendingUp size={11} />, label: 'Zero leads go cold' },
    ],
    tags: ['GoHighLevel', 'Funnel Builder', 'Order Forms', 'Conversation AI', 'Workflows', 'CRM'],
    accentColor: '#f59e0b',
    Preview: GrowthSystemPreview,
    caseStudyLabel: 'Watch the Loom walkthrough',
    caseStudyUrl: 'https://www.loom.com/share/4bf59a1b2d4041a09a4fc2b916b0d7e2',
  },
  {
    id: 4,
    title: 'Notion AI Client Pipeline Tracker',
    category: 'Real Estate Agent',
    description:
      "A real estate agent's buyer pipeline (showings, offers, follow-ups) was scattered across notes, emails, and memory. Now it lives in one connected Notion workspace, with Notion AI auto-summarizing raw meeting notes into clean action items and automated reminders ensuring zero dropped follow-ups. Saves roughly 1-2 hours of manual write-ups per week.",
    metrics: [
      { icon: <FileText size={11} />, label: 'AI meeting summaries' },
      { icon: <Users size={11} />, label: 'Full pipeline visibility' },
      { icon: <TrendingUp size={11} />, label: 'Zero dropped follow-ups' },
    ],
    tags: ['Notion', 'Notion AI', 'Pipeline Management'],
    accentColor: '#34d399',
    Preview: NotionPipelinePreview,
    caseStudyLabel: 'Watch the Loom walkthrough',
    caseStudyUrl: 'https://www.loom.com/share/4700d8c7c4dc46bda71a28f966551c86',
  },
  {
    id: 5,
    title: 'Relational Airtable Project & Task Tracker',
    category: 'Marketing / Multi-Client Operations',
    description:
      'Replaced flat spreadsheets with a relational Airtable system: linked Projects, Tasks, and Clients tables with lookup fields for cross-table visibility, a formula-driven overdue flag, a filtered at-risk tasks view, and two automations (deadline reminder and completion notification) with dynamic email content.',
    metrics: [
      { icon: <GitBranch size={11} />, label: '3 linked tables' },
      { icon: <Zap size={11} />, label: 'Auto overdue flagging' },
      { icon: <TrendingUp size={11} />, label: 'Zero manual tracking' },
    ],
    tags: ['Airtable', 'Linked Records', 'Lookup Fields', 'Formula Fields', 'Filtered Views', 'Automations'],
    accentColor: '#3b82f6',
    Preview: AirtablePreview,
    caseStudyLabel: 'Watch the Loom walkthrough',
    caseStudyUrl: 'https://www.loom.com/share/4eccf6d5a65648a4bdafd0f98afe63fb',
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

            {/* Tags + Loom walkthrough link */}
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
              <a
                href={project.caseStudyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[10px] font-mono px-2 py-0.5 rounded transition-opacity duration-150 hover:opacity-100"
                style={{
                  color: project.accentColor,
                  opacity: 0.85,
                  textDecoration: 'none',
                  background: `${project.accentColor}12`,
                  border: `1px solid ${project.accentColor}30`,
                }}
              >
                ✦ {project.caseStudyLabel} ↗
              </a>
            </div>
          </div>
        </motion.div>
      ))}

    </div>
  );
}
