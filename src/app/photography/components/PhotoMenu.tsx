'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function PhotoMenu({
  name,
  slug,
}: {
  name: string;
  slug: string;
}) {
  return (
    <motion.div
      whileHover={{ scale: 1.02, transition: { duration: 0.3 } }}
      whileTap={{ scale: 0.95 }}
      key={slug}
    >
      <Link href={`/photography/${slug}`}>
        <h2 className="text-3xl font-light">{name}</h2>
      </Link>
    </motion.div>
  );
}
