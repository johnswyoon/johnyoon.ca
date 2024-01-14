'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

import type { SocialSectionProps } from './SocialSection';

export default function SocialRow({ icon, link, name }: SocialSectionProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.03, transition: { duration: 0.3 } }}
      whileTap={{ scale: 0.95 }}
    >
      <Link href={link} target="_blank" rel="noopener noreferrer">
        <div className="mb-3 flex items-center justify-center">
          {icon}
          <p className="ml-2 text-xl font-light tracking-wider">{name}</p>
        </div>
      </Link>
    </motion.div>
  );
}
