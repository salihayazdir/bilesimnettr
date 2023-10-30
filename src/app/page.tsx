import Image from 'next/image';
import tam_logo from '../../public/images/logo/tam_logo.png';

export default function Home() {
  return (
    <>
      <div className='flex flex-col justify-between w-full pt-36'>
        <h1 className='font-black text-6xl tracking-tight leading-[60px]'>
          GELİŞİM
          <br />
          ODAKLI
          <br />
          DEĞİŞİM
        </h1>

        <div className='flex flex-col gap-4 justify-self-end'>
          <div className='bg-gri flex justify-center px-6 gap-8 py-3 backdrop-blur-[20px] items-center rounded-xl bg-opacity-30'>
            <div className='mt-2'>
              <Image src={tam_logo} alt='TAM Logo' width='120' />
            </div>
            <h2 className='text-center leading-6 text-lg'>
              {`Türkiye'nin`}
              <br />
              ATM Merkezi
            </h2>
          </div>
        </div>
      </div>

      <div
        className='h-screen w-full bg-[length:2300px] bg-[top_-50px_left_-900px] fixed top-0 right-0 -z-10'
        style={{
          backgroundImage: `url('/images/galaksi_arkaplan.jpg')`,
        }}
      ></div>
    </>
  );
}
