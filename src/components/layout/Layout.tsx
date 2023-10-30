import Image from 'next/image';
import bilesim_logo from '../../../public/images/logo/bilesim_logo.png';
import linkedin_logo from '../../../public/images/logo/linkedin_logo.png';
import { cn } from '@/lib/tailwindMerge';
import NavMenuMobile from './NavMenuMobile';
import { uni } from '@/lib/uniFont';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <body
      className={cn(
        uni.variable,
        ' font-sans min-h-screen flex px-8 py-4 flex-col justify-between'
      )}
    >
      <header className='flex py-4 items-center justify-between gap-36'>
        <div>
          <Image src={bilesim_logo} alt='Bileşim Logo' />
        </div>
        <nav>
          <NavMenuMobile />
        </nav>
      </header>

      <main className='flex-1 h-full flex w-full'>{children}</main>

      <footer className='flex px-1 justify-between items-center justify-self-end py-4 text-xs text-gray-500'>
        <span>2023 Bilesim A.Ş. Tüm Hakları Saklıdır </span>
        <div>
          <Image src={linkedin_logo} alt='Linkedin Logo' width='20' />
        </div>
      </footer>
    </body>
  );
}
