'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import tam_logo from '../../public/images/logo/tam_logo.png';

function HomepageTam() {
  return (
    <motion.div
      initial={{ y: 10, opacity: 0 }}
      animate={{
        y: 0,
        opacity: 1,
        transition: {
          ease: 'easeInOut',
          duration: 1,
          delay: 1.25,
        },
      }}
      className='flex flex-col gap-4 justify-self-end'
    >
      <div className='bg-slate-400 flex justify-center px-6 gap-8 py-3 backdrop-blur-[5px] items-center rounded-xl bg-opacity-10'>
        <div className='mt-2'>
          <Image src={tam_logo} alt='TAM Logo' width='120' />
        </div>
        <h2 className='text-center leading-6 text-lg'>
          {`Türkiye'nin`}
          <br />
          ATM Merkezi
        </h2>
      </div>
    </motion.div>
  );
}

export default HomepageTam;
