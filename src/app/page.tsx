import HomepageH1 from '@/components/HomepageH1';
import HomepageTam from '@/components/HomepageTam';
import GalaxyBackground from '@/components/layout/GalaxyBackground';

export default function Home() {
  return (
    <>
      <div className='flex flex-col justify-between w-full pt-32'>
        <HomepageH1 />
        <HomepageTam />
      </div>
      <GalaxyBackground />
    </>
  );
}
