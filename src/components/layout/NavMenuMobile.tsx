'use client';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/20/solid';
import * as Dialog from '@radix-ui/react-dialog';
import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';

export default function NavMenuMobile() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Dialog.Root open={open} onOpenChange={setOpen}>
        <Dialog.Trigger asChild>
          <button className='bg-gri backdrop-blur-[20px] bg-opacity-30 rounded-xl p-3'>
            {open ? (
              <XMarkIcon className='text-white w-6 h-6' />
            ) : (
              <Bars3Icon className='text-white w-6 h-6' />
            )}
          </button>
        </Dialog.Trigger>
        <AnimatePresence>
          {open ? (
            <Dialog.Portal forceMount>
              <Dialog.Content asChild>
                <motion.div
                  initial={{ opacity: 0, y: '50vh' }}
                  animate={{
                    opacity: 1,
                    y: 0,
                    transition: {
                      ease: 'easeInOut',
                      duration: 0.3,
                    },
                  }}
                  exit={{
                    opacity: 0,
                    y: 250,
                    transition: { ease: 'easeInOut', duration: 0.3 },
                  }}
                  transition={{}}
                  className='fixed top-28 left-0 w-full bg-[#060A14] text-gri-500 flex flex-col text-3xl font-medium pt-10 px-8 gap-8 h-[calc(100vh-112px)] border-2 border-white border-opacity-10 py-3 backdrop-blur-[20px] rounded-t-3xl bg-opacity-30'
                >
                  <ul>
                    <li className='text-left'>Hakkımızda</li>
                    <li className='text-left'>Hakkımızda</li>
                    <li className='text-left'>Hakkımızda</li>
                    <li className='text-left'>Hakkımızda</li>
                  </ul>
                </motion.div>

                {/* <Dialog.Title />
            <Dialog.Description />
        <Dialog.Close /> */}
              </Dialog.Content>
            </Dialog.Portal>
          ) : null}
        </AnimatePresence>
      </Dialog.Root>
    </>
  );
}
