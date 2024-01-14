'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export function Memoji() {
  return (
    <motion.div
      whileHover={{ scale: 1.03, transition: { duration: 0.3 } }}
      whileTap={{ scale: 0.95 }}
    >
      <Image
        src="/memoji.png"
        alt="John's Memoji"
        priority={true}
        height={400}
        width={400}
      />
    </motion.div>
  );
}
