import { Bars3Icon } from '@heroicons/react/20/solid';
import Image from 'next/image';
import bilesim_logo from '../../public/images/logo/bilesim_logo.png';
import tam_logo from '../../public/images/logo/tam_logo.png';
import linkedin_logo from '../../public/images/logo/linkedin_logo.png';

export default function Home() {
  return (
    <div
      className='flex px-8 py-4 flex-col justify-between h-screen bg-[length:2300px] bg-[top_-50px_left_-900px]'
      style={{
        backgroundImage: `url('/images/galaksi_arkaplan.jpg')`,
      }}
    >
      <div>
        <nav className='flex py-4 items-center justify-between gap-36'>
          <div>
            <Image src={bilesim_logo} alt='Bileşim Logo' />
          </div>
          <div className='bg-[#404040] backdrop-blur-[20px] bg-opacity-30 rounded-xl p-3'>
            <Bars3Icon className='text-white w-6 h-6' />
          </div>
        </nav>

        <h1 className='font-black text-6xl mt-36 tracking-tight leading-[60px]'>
          GELİŞİM
          <br />
          ODAKLI
          <br />
          DEĞİŞİM
        </h1>
      </div>

      <div className='flex flex-col gap-4'>
        <div className='bg-[#404040] flex justify-center px-6 gap-8 py-3 backdrop-blur-[20px] items-center rounded-xl bg-opacity-30'>
          <div className='mt-2'>
            <Image src={tam_logo} alt='TAM Logo' width='120' />
          </div>
          <h2 className='text-center leading-6 text-lg'>
            {`Türkiye'nin`}
            <br />
            ATM Merkezi
          </h2>
        </div>

        <footer className='flex px-1 justify-between items-center justify-self-end pb-4 text-xs text-gray-500'>
          <span>2023 Bilesim A.Ş. Tüm Hakları Saklıdır </span>
          <div>
            <Image src={linkedin_logo} alt='Linkedin Logo' width='20' />
          </div>
        </footer>
      </div>
    </div>
  );
}
