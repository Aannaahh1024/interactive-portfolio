'use client';

import { motion } from 'framer-motion';
import { Clock, Zap, TrendingUp, MessageSquare, Users, FileText, MousePointer, GitBranch } from 'lucide-react';

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
      <text x="68" y="18" fill="#555" fontSize="7" fontFamily="monospace">GoHighLevel — Workflow Builder</text>

      {/* ── Left: actual workflow steps ── */}

      {/* Step 1: Form Submitted */}
      <rect x="14" y="33" width="104" height="18" rx="3" fill="#0a1a0a" stroke="#22c55e" strokeWidth="0.7" />
      <text x="19" y="42" fill="#22c55e" fontSize="6.5" fontFamily="sans-serif" fontWeight="bold">Form Submitted</text>
      <text x="19" y="48.5" fill="#444" fontSize="5.5" fontFamily="sans-serif">Form: &quot;Get 15% Off Your ...&quot;</text>
      <line x1="66" y1="51" x2="66" y2="57" stroke="#2a2a2a" strokeWidth="1" />

      {/* Step 2: Luma Lead (tag) */}
      <rect x="14" y="57" width="104" height="13" rx="3" fill="#0d0d20" stroke="#818cf8" strokeWidth="0.7" />
      <text x="19" y="66.5" fill="#818cf8" fontSize="6.5" fontFamily="sans-serif" fontWeight="bold">Luma Lead</text>
      <line x1="66" y1="70" x2="66" y2="76" stroke="#2a2a2a" strokeWidth="1" />

      {/* Step 3: Email */}
      <rect x="14" y="76" width="104" height="13" rx="3" fill="#0a1a0a" stroke="#22c55e" strokeWidth="0.7" />
      <text x="19" y="85.5" fill="#22c55e" fontSize="6.5" fontFamily="sans-serif" fontWeight="bold">Email</text>
      <line x1="66" y1="89" x2="66" y2="95" stroke="#2a2a2a" strokeWidth="1" />

      {/* Step 4: Wait */}
      <rect x="14" y="95" width="104" height="13" rx="3" fill="#150a24" stroke="#a78bfa" strokeWidth="0.7" />
      <text x="19" y="104.5" fill="#a78bfa" fontSize="6.5" fontFamily="sans-serif" fontWeight="bold">Wait</text>
      <line x1="66" y1="108" x2="66" y2="114" stroke="#2a2a2a" strokeWidth="1" />

      {/* Step 5: Email 2 */}
      <rect x="14" y="114" width="104" height="13" rx="3" fill="#0a1a0a" stroke="#22c55e" strokeWidth="0.7" />
      <text x="19" y="123.5" fill="#22c55e" fontSize="6.5" fontFamily="sans-serif" fontWeight="bold">Email</text>
      <line x1="66" y1="127" x2="66" y2="132" stroke="#2a2a2a" strokeWidth="1" />

      {/* END node */}
      <circle cx="66" cy="137" r="5" fill="#1a1a1a" stroke="#3a3a3a" strokeWidth="0.7" />
      <text x="66" y="139.5" fill="#555" fontSize="4.5" fontFamily="sans-serif" textAnchor="middle">END</text>

      {/* ── Right: detail panel ── */}
      <line x1="130" y1="33" x2="130" y2="142" stroke="#1a1a2e" strokeWidth="0.5" />

      <text x="138" y="45" fill="#00E5FF" fontSize="7.5" fontFamily="sans-serif" fontWeight="bold">Lead Capture Flow</text>
      <text x="138" y="54" fill="#555" fontSize="5.5" fontFamily="sans-serif">DTC Skincare · GoHighLevel</text>

      <line x1="138" y1="59" x2="267" y2="59" stroke="#1a1a2e" strokeWidth="0.5" />

      <text x="138" y="69" fill="#777" fontSize="6" fontFamily="sans-serif">Form opt-in triggers workflow</text>
      <text x="138" y="79" fill="#777" fontSize="6" fontFamily="sans-serif">→ Tag &quot;Luma Lead&quot; applied</text>
      <text x="138" y="89" fill="#777" fontSize="6" fontFamily="sans-serif">→ Welcome email sent immediately</text>
      <text x="138" y="99" fill="#777" fontSize="6" fontFamily="sans-serif">→ Wait step (delay)</text>
      <text x="138" y="109" fill="#777" fontSize="6" fontFamily="sans-serif">→ Follow-up email auto-sent</text>
      <text x="138" y="119" fill="#777" fontSize="6" fontFamily="sans-serif">→ Workflow ends</text>

      <line x1="138" y1="124" x2="267" y2="124" stroke="#1a1a2e" strokeWidth="0.5" />

      <rect x="138" y="128" width="128" height="11" rx="2" fill="#00E5FF11" />
      <text x="142" y="136" fill="#00E5FF" fontSize="6" fontFamily="monospace">100% automated · Zero manual steps</text>
    </svg>
  );
}

function ChatbotPreview() {
  return (
    <svg viewBox="0 0 280 145" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
      <rect width="280" height="145" fill="#060614" />
      {/* Header bar */}
      <rect x="0" y="0" width="280" height="28" fill="#0d0d1e" />
      <circle cx="12" cy="14" r="4" fill="#ff5f57" />
      <circle cx="24" cy="14" r="4" fill="#febc2e" />
      <circle cx="36" cy="14" r="4" fill="#28c840" />
      <text x="68" y="18" fill="#555" fontSize="7" fontFamily="monospace">GoHighLevel — AI Chatbot · Cosmetics Clinic</text>

      {/* "Test Your Bot" title strip */}
      <rect x="0" y="28" width="280" height="18" fill="#0d0d20" />
      <text x="16" y="40" fill="#e0e0ff" fontSize="8" fontFamily="sans-serif" fontWeight="bold">✦  Test Your Bot</text>
      <rect x="254" y="31" width="12" height="12" rx="3" fill="#1a1a2e" stroke="#333" strokeWidth="0.5" />
      <text x="260" y="40" fill="#555" fontSize="8" fontFamily="sans-serif" textAnchor="middle">↺</text>

      {/* User "hello" bubble — blue, right-aligned */}
      <rect x="208" y="50" width="58" height="18" rx="9" fill="#2563eb" />
      <text x="237" y="62" fill="#ffffff" fontSize="8" fontFamily="sans-serif" textAnchor="middle">hello</text>

      {/* AI Bot label */}
      <text x="34" y="78" fill="#777" fontSize="6" fontFamily="sans-serif">AI Bot</text>

      {/* Bot sparkle icon + green online dot */}
      <circle cx="21" cy="88" r="8" fill="#1a1a2e" stroke="#818cf8" strokeWidth="0.6" />
      <text x="21" y="91.5" fill="#a78bfa" fontSize="9" fontFamily="sans-serif" textAnchor="middle">✦</text>
      <circle cx="27" cy="94" r="2.5" fill="#22c55e" stroke="#060614" strokeWidth="1" />

      {/* AI Bot response bubble */}
      <rect x="34" y="80" width="232" height="48" rx="10" fill="#0d1228" stroke="#818cf820" strokeWidth="0.5" />
      <text x="44" y="93" fill="#c8c8f0" fontSize="6.5" fontFamily="sans-serif">Hey there! What can I help you with today?</text>
      <text x="44" y="104" fill="#c8c8f0" fontSize="6.5" fontFamily="sans-serif">If you&apos;ve got questions about our treatments,</text>
      <text x="44" y="115" fill="#c8c8f0" fontSize="6.5" fontFamily="sans-serif">pricing, or hours — I&apos;m happy to help!</text>

      {/* Stat bar */}
      <rect x="14" y="133" width="252" height="10" rx="2" fill="#a78bfa11" />
      <text x="18" y="140.5" fill="#a78bfa" fontSize="6" fontFamily="monospace">90% queries auto-resolved · 24/7 · No human needed</text>
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
      <text x="68" y="18" fill="#555" fontSize="7" fontFamily="monospace">Notion — Client Pipeline Tracker</text>

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

function MakePreview() {
  return (
    <svg viewBox="0 0 280 145" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
      <rect width="280" height="145" fill="#060614" />
      {/* Header bar */}
      <rect x="0" y="0" width="280" height="28" fill="#0d0d1e" />
      <circle cx="12" cy="14" r="4" fill="#ff5f57" />
      <circle cx="24" cy="14" r="4" fill="#febc2e" />
      <circle cx="36" cy="14" r="4" fill="#28c840" />
      <text x="68" y="18" fill="#555" fontSize="7" fontFamily="monospace">Make.com — Multi-Branch Automation</text>

      {/* Google Forms node */}
      <circle cx="28" cy="80" r="12" fill="#7c3aed" />
      <text x="28" y="78" fill="white" fontSize="7" fontFamily="sans-serif" textAnchor="middle" fontWeight="bold">G</text>
      <text x="28" y="86" fill="rgba(255,255,255,0.8)" fontSize="4.5" fontFamily="sans-serif" textAnchor="middle">Forms</text>
      <text x="28" y="96" fill="#555" fontSize="5" fontFamily="sans-serif" textAnchor="middle">Watch</text>
      <line x1="40" y1="80" x2="50" y2="80" stroke="#2a2a2a" strokeWidth="1" strokeDasharray="2,2" />

      {/* Google Sheets node */}
      <circle cx="62" cy="80" r="12" fill="#16a34a" />
      <text x="62" y="78" fill="white" fontSize="7" fontFamily="sans-serif" textAnchor="middle" fontWeight="bold">G</text>
      <text x="62" y="86" fill="rgba(255,255,255,0.8)" fontSize="4.5" fontFamily="sans-serif" textAnchor="middle">Sheets</text>
      <text x="62" y="96" fill="#555" fontSize="5" fontFamily="sans-serif" textAnchor="middle">Add row</text>
      <line x1="74" y1="80" x2="86" y2="80" stroke="#2a2a2a" strokeWidth="1" strokeDasharray="2,2" />

      {/* Router node */}
      <circle cx="98" cy="80" r="12" fill="#22c55e" />
      <text x="98" y="84" fill="white" fontSize="11" fontFamily="sans-serif" textAnchor="middle">{'→'}</text>
      <text x="98" y="96" fill="#555" fontSize="5" fontFamily="sans-serif" textAnchor="middle">Router</text>

      {/* Branch lines from router to Slack circles */}
      <line x1="110" y1="80" x2="159" y2="46" stroke="#2a2a2a" strokeWidth="0.8" strokeDasharray="3,2" />
      <line x1="110" y1="80" x2="159" y2="80" stroke="#2a2a2a" strokeWidth="0.8" strokeDasharray="3,2" />
      <line x1="110" y1="80" x2="159" y2="114" stroke="#2a2a2a" strokeWidth="0.8" strokeDasharray="3,2" />

      {/* Branch 1: Coaching (y=46) */}
      <text x="112" y="42" fill="#22c55e" fontSize="5.5" fontFamily="monospace">1st Coaching</text>
      <circle cx="168" cy="46" r="9" fill="#4a1d96" />
      <text x="168" y="50" fill="white" fontSize="8" fontFamily="sans-serif" textAnchor="middle" fontWeight="bold">S</text>
      <line x1="177" y1="46" x2="215" y2="46" stroke="#2a2a2a" strokeWidth="0.8" strokeDasharray="2,2" />
      <circle cx="224" cy="46" r="9" fill="#dc2626" />
      <text x="224" y="50" fill="white" fontSize="8" fontFamily="sans-serif" textAnchor="middle" fontWeight="bold">M</text>
      <text x="168" y="58" fill="#555" fontSize="4.5" fontFamily="sans-serif" textAnchor="middle">Slack</text>
      <text x="224" y="58" fill="#555" fontSize="4.5" fontFamily="sans-serif" textAnchor="middle">Gmail</text>

      {/* Branch 2: Partnership (y=80) */}
      <text x="112" y="76" fill="#22c55e" fontSize="5.5" fontFamily="monospace">2nd Partnership</text>
      <circle cx="168" cy="80" r="9" fill="#4a1d96" />
      <text x="168" y="84" fill="white" fontSize="8" fontFamily="sans-serif" textAnchor="middle" fontWeight="bold">S</text>
      <line x1="177" y1="80" x2="215" y2="80" stroke="#2a2a2a" strokeWidth="0.8" strokeDasharray="2,2" />
      <circle cx="224" cy="80" r="9" fill="#dc2626" />
      <text x="224" y="84" fill="white" fontSize="8" fontFamily="sans-serif" textAnchor="middle" fontWeight="bold">M</text>
      <text x="168" y="92" fill="#555" fontSize="4.5" fontFamily="sans-serif" textAnchor="middle">Slack</text>
      <text x="224" y="92" fill="#555" fontSize="4.5" fontFamily="sans-serif" textAnchor="middle">Gmail</text>

      {/* Branch 3: General Question (y=114) */}
      <text x="112" y="110" fill="#22c55e" fontSize="5.5" fontFamily="monospace">3rd General Q.</text>
      <circle cx="168" cy="114" r="9" fill="#4a1d96" />
      <text x="168" y="118" fill="white" fontSize="8" fontFamily="sans-serif" textAnchor="middle" fontWeight="bold">S</text>
      <line x1="177" y1="114" x2="215" y2="114" stroke="#2a2a2a" strokeWidth="0.8" strokeDasharray="2,2" />
      <circle cx="224" cy="114" r="9" fill="#dc2626" />
      <text x="224" y="118" fill="white" fontSize="8" fontFamily="sans-serif" textAnchor="middle" fontWeight="bold">M</text>
      <text x="168" y="126" fill="#555" fontSize="4.5" fontFamily="sans-serif" textAnchor="middle">Slack</text>
      <text x="224" y="126" fill="#555" fontSize="4.5" fontFamily="sans-serif" textAnchor="middle">Gmail</text>

      {/* Bottom stat strip */}
      <rect x="14" y="132" width="252" height="11" rx="2" fill="#22c55e11" />
      <text x="18" y="140" fill="#22c55e" fontSize="6" fontFamily="monospace">3 branches · Slack alert + email out in seconds · Zero manual sorting</text>
    </svg>
  );
}

/* ─── Data ─────────────────────────────────────────────────────── */

interface Metric {
  icon: React.ReactNode;
  label: string;
}

interface ProjectLink {
  label: string;
  url: string;
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
  links?: ProjectLink[];
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
    caseStudyUrl: 'https://precious-gymnast-805.notion.site/AI-Chatbot-for-Customer-Inquiries-Cosmetics-Clinic-3855273f5fc581978bd7c608c29d4467',
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
    caseStudyUrl: 'https://precious-gymnast-805.notion.site/Notion-AI-Client-Pipeline-Tracker-Real-Estate-3855273f5fc58197812bd4811cb2717d',
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
    caseStudyLabel: 'Funnel pages',
    links: [
      { label: 'Sales Page', url: 'https://sites.leadconnectorhq.com/preview/oMJEAg33NVpqO2OGVJAw?notrack=true' },
      { label: 'Order Page', url: 'https://sites.leadconnectorhq.com/preview/jpa2oHV1lYKYX4qtJoHd?notrack=true' },
      { label: 'Upsell Page', url: 'https://sites.leadconnectorhq.com/preview/6ZQj8tiY9M5kMXE0oi0B?notrack=true' },
      { label: 'Thank You Page', url: 'https://sites.leadconnectorhq.com/preview/hhRO8juTWBDTX3gad0bY?notrack=true' },
    ],
  },
  {
    id: 5,
    title: 'Automated Lead Intake & Multi-Branch Notifications',
    category: 'Online Course Creator · Consultant',
    description:
      'Built an end-to-end inquiry system that logs every form submission, routes it by request type (coaching, partnership, or general), fires a Slack alert to the team, and sends a personalized confirmation email to the requester. All in seconds, with zero manual sorting.',
    metrics: [
      { icon: <GitBranch size={11} />, label: '3 routing branches' },
      { icon: <Zap size={11} />, label: 'Instant Slack + email' },
      { icon: <TrendingUp size={11} />, label: 'Zero manual sorting' },
    ],
    tags: ['Make.com', 'Google Forms', 'Google Sheets', 'Slack', 'Gmail'],
    accentColor: '#22c55e',
    Preview: MakePreview,
    caseStudyLabel: 'Live scenario on Make.com',
    caseStudyUrl: 'https://us2.make.com/public/shared-scenario/mPKlKwOUYow/integration-google-forms-google-sheets',
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
              {project.links ? (
                <div className="flex flex-wrap gap-1.5">
                  {project.links.map(({ label, url }) => (
                    <a
                      key={label}
                      href={url}
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
                      ✦ {label} ↗
                    </a>
                  ))}
                </div>
              ) : project.caseStudyUrl ? (
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
