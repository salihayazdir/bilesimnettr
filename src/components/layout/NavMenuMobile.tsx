'use client';
import { Bars3Icon } from '@heroicons/react/20/solid';
import * as Dialog from '@radix-ui/react-dialog';

export default function NavMenuMobile() {
  return (
    <>
      <Dialog.Root>
        <Dialog.Trigger asChild>
          <button className='bg-gri backdrop-blur-[20px] bg-opacity-30 rounded-xl p-3'>
            <Bars3Icon className='text-white w-6 h-6' />
          </button>
        </Dialog.Trigger>
        <Dialog.Portal>
          <Dialog.Content className='fixed top-28 left-0 w-full'>
            <div className='flex flex-col gap-4 justify-self-end'>
              <ul className='bg-[#060A14] text-gri-500 flex flex-col text-3xl font-medium pt-10 px-8 gap-8 h-[calc(100vh-112px)] border border-white border-opacity-10 py-3 backdrop-blur-[20px] rounded-t-3xl bg-opacity-30'>
                <li className='text-left'>Hakkımızda</li>
                <li className='text-left'>Hakkımızda</li>
                <li className='text-left'>Hakkımızda</li>
                <li className='text-left'>Hakkımızda</li>
              </ul>
            </div>

            <Dialog.Title />
            <Dialog.Description />
            <Dialog.Close />
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
    </>
  );
}
