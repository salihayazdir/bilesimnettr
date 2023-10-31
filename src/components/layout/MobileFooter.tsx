'use client';

import { motion } from 'framer-motion';
import linkedin_logo from '../../../public/images/logo/linkedin_logo.png';
import Image from 'next/image';

export default function MobileFooter() {
  return (
    <motion.footer
      initial={{ y: 10, opacity: 0 }}
      animate={{
        y: 0,
        opacity: 1,
        transition: {
          ease: 'easeInOut',
          duration: 1,
          delay: 1,
        },
      }}
      className='flex px-1 justify-between items-center justify-self-end py-4 text-xs text-gray-500'
    >
      <span>2023 Bilesim A.Ş. Tüm Hakları Saklıdır </span>
      <div>
        <Image src={linkedin_logo} alt='Linkedin Logo' width='20' />
      </div>
    </motion.footer>
  );
}
