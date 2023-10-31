'use client';

import { motion } from 'framer-motion';
import NavMenuMobile from './NavMenuMobile';
import bilesim_logo from '../../../public/images/logo/bilesim_logo.png';
import Image from 'next/image';

export default function MobileHeader() {
  return (
    <motion.header
      initial={{ y: -10, opacity: 0 }}
      animate={{
        y: 0,
        opacity: 1,
        transition: {
          ease: 'easeInOut',
          duration: 1,
          delay: 1,
        },
      }}
      className='flex py-4 items-center justify-between gap-36'
    >
      <div>
        <Image src={bilesim_logo} alt='Bileşim Logo' />
      </div>
      <nav>
        <NavMenuMobile />
      </nav>
    </motion.header>
  );
}
