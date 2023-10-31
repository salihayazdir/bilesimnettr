'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import background from '../../../public/images/galaksi_arkaplan.jpg';

export default function GalaxyBackground() {
  return (
    <motion.div
      initial={{ y: 100, x: 100, scale: 0.6, opacity: 1, rotate: -40 }}
      animate={{
        y: 0,
        x: 0,
        scale: 1,
        opacity: 1,
        rotate: 0,
        transition: {
          // repeat: Infinity,
          ease: 'easeOut',
          duration: 15,
        },
      }}
      className='h-screen w-full bg-[length:2300px] bg-[top_200px_left_200px] -ml-[1500px] pl-[1500px] -mr-[1500px] pr-[1500px] -mt-[1500px] pt-[1500px] -mb-[1500px] pb-[1500px] fixed top-0 right-0 -z-10'
      style={{
        backgroundImage: `url('/images/galaksi_arkaplan.jpg')`,
      }}
    ></motion.div>
    // <motion.div
    //   className='absolute top-0 right-0 -z-10'
    //   initial={{ y: 100, x: 100, scale: 0.3, opacity: 0, rotate: -45 }}
    //   animate={{
    //     y: 0,
    //     x: 0,
    //     scale: 1,
    //     opacity: 1,
    //     rotate: 0,
    //     transition: {
    //       // repeat: Infinity,
    //       ease: 'easeOut',
    //       duration: 15,
    //     },
    //   }}
    // >
    //   <Image
    //     className=' top-0 right-0 -z-10'
    //     src={background}
    //     alt='background'
    //   />
    // </motion.div>
  );
}
