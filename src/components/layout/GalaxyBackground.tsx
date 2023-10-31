'use client';

import { motion } from 'framer-motion';

export default function GalaxyBackground() {
  return (
    <>
      <div className=' bg-laci-koyu fixed top-0 left-0 -z-20 h-full w-full'></div>
      <motion.div
        initial={{ y: 200, x: -250, scale: 0.6, opacity: 0, rotate: -45 }}
        animate={{
          y: 0,
          x: 0,
          scale: 1,
          opacity: [0, 1, 1, 1],
          rotate: 0,
          transition: {
            // repeat: Infinity,
            ease: 'easeOut',
            duration: 10,
          },
        }}
        className='h-screen w-full bg-[length:2300px] bg-[top_230px_left_200px] -ml-[1500px] pl-[1500px] -mr-[1500px] pr-[1500px] -mt-[1500px] pt-[1500px] -mb-[1500px] pb-[1500px] fixed top-0 right-0 -z-10'
        style={{
          backgroundImage: `url('/images/galaksi_arkaplan.jpg')`,
        }}
      ></motion.div>
    </>
  );
}
