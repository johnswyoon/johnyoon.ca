'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export function ProfilePicture() {
  return (
    <motion.div
      whileHover={{ scale: 1.03, transition: { duration: 0.3 } }}
      whileTap={{ scale: 0.95 }}
    >
      <Image
        src="/profile.jpg"
        alt="John's Profile Picture"
        className="mb-10 rounded-full"
        style={{ boxShadow: '0 0px 50px -20px rgba(0, 0, 0, 0.5)' }}
        height={250}
        width={250}
      />
    </motion.div>
  );
}
