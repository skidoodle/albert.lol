import { ThemeSwitcher } from '@/components/ThemeSwitcher';
import { NowPlayingCard } from '@/components/SpotifyCard';
import { SocialLayout } from '@/components/SocialLayout';
import { Toaster } from 'react-hot-toast';
import FadeIn from 'react-fade-in';

export const MainLayout = () => {
  return (
    <>
      <ThemeSwitcher />
      <FadeIn>
        <div className='ml-[10%] mr-[10%]'>
          <div className='flex flex-col max-w-3xl mx-auto mb-16 mt-32'>
            <h1 className='text-7xl font-bold'>albert</h1>
            <p className='text-2xl text-gray-600 mt-2 font-semibold'>
              {Math.floor(
                (new Date().getTime() - new Date('2004-07-22').getTime()) /
                  (1000 * 60 * 60 * 24 * 365.25),
              )}
              -year-old system administrator
            </p>
            <SocialLayout />
            <NowPlayingCard />
            <Toaster position='bottom-center' reverseOrder={false} />
          </div>
        </div>
      </FadeIn>
    </>
  );
};
