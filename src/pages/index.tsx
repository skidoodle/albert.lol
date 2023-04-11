import { ThemeSwitcher } from '@/components/ThemeSwitcher';
import { NowPlayingCard } from '@/components/SpotifyCard';
import { SocialLayout } from '@/components/SocialLayout';
import { Toaster } from 'react-hot-toast';
import age from '@/utils/age';
import FadeIn from 'react-fade-in';

export default function Home () {
  return (
    <>
      <ThemeSwitcher />
      <FadeIn>
        <div className='ml-[10%] mr-[10%]'>
          <div className='flex flex-col max-w-3xl mx-auto mb-16 mt-32'>
            <h1 className='text-7xl font-bold'>albert</h1>
            <p className='text-2xl text-gray-600 mt-2 font-semibold'>
              {age()}-year-old sysadmin
            </p>
            <SocialLayout />
            <NowPlayingCard />
            <Toaster position='top-left' />
          </div>
        </div>
      </FadeIn>
    </>
  );
}
