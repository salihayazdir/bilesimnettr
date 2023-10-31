import Image from 'next/image';
import bilesim_logo from '../../../public/images/logo/bilesim_logo.png';
import linkedin_logo from '../../../public/images/logo/linkedin_logo.png';
import { cn } from '@/lib/tailwindMerge';
import NavMenuMobile from './NavMenuMobile';
import { uni } from '@/lib/uniFont';
import { motion } from 'framer-motion';
import MobileHeader from './MobileHeader';
import MobileFooter from './MobileFooter';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <body
      className={cn(
        uni.variable,
        ' font-sans min-h-screen flex px-8 py-4 flex-col justify-between'
      )}
    >
      <MobileHeader />
      <main className='flex-1 h-full flex w-full'>{children}</main>

      <MobileFooter />
    </body>
  );
}
