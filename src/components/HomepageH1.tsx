'use client';
import { motion } from 'framer-motion';

export default function HomepageH1() {
  return (
    <h1 className='font-black flex flex-col text-6xl tracking-tight'>
      <motion.div
        className='leading-[10px]'
        initial={{ y: -10, opacity: 0 }}
        animate={{
          y: 0,
          opacity: 1,
          transition: {
            ease: 'easeInOut',
            duration: 1,
          },
        }}
      >
        GELİŞİM
      </motion.div>
      <br />
      <motion.div
        className='leading-[10px]'
        initial={{ y: -10, opacity: 0 }}
        animate={{
          y: 0,
          opacity: 1,
          transition: {
            ease: 'easeInOut',
            duration: 1,
            delay: 0.25,
          },
        }}
      >
        ODAKLI
      </motion.div>
      <br />
      <motion.div
        className='leading-[10px]'
        initial={{ y: -10, opacity: 0 }}
        animate={{
          y: 0,
          opacity: 1,
          transition: {
            ease: 'easeInOut',
            duration: 1,
            delay: 0.5,
          },
        }}
      >
        DEĞİŞİM
      </motion.div>
    </h1>
  );
}
