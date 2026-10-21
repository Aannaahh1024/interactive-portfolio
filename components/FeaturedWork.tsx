'use client';

import { motion, useReducedMotion } from 'framer-motion';
import { PROJECTS } from '@/components/ProjectCard';

const SHORT_TITLES = [
  'Inbox Triage',
  'Podcast Repurposing',
  'AI Reel Factory',
  'Client Onboarding',
  'GoHighLevel Growth',
  'Notion Pipeline',
  'Airtable Tracker',
];

export default function FeaturedWork() {
  const reduceMotion = useReducedMotion();

  return (
    <div className="mt-5 max-w-lg mx-auto">
      <p className="text-xs mb-2" style={{ color: 'var(--muted)' }}>
        Seven working builds, each with a video walkthrough
      </p>
      <div className="flex flex-wrap justify-center gap-1.5">
        {PROJECTS.map((project, i) => (
          <motion.a
            key={project.id}
            href={project.caseStudyUrl}
            target="_blank"
            rel="noopener noreferrer"
            initial={reduceMotion ? false : { opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 + i * 0.05, duration: 0.3 }}
            whileHover={reduceMotion ? undefined : { y: -2 }}
            className="px-2.5 py-1 rounded-full text-xs font-medium focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
            style={{
              color: project.accentColor,
              background: `${project.accentColor}12`,
              border: `1px solid ${project.accentColor}30`,
              textDecoration: 'none',
              outlineColor: project.accentColor,
            }}
          >
            {SHORT_TITLES[i] ?? project.title} ↗
          </motion.a>
        ))}
      </div>
    </div>
  );
}
