import { ThemeSwitcher } from '@/components/ThemeSwitcher'
import { NowPlayingCard } from '@/components/SpotifyCard'
import { SocialLayout } from '@/components/SocialLayout'
import { AboutMe } from '@/components/AboutMe'
import { Toaster } from 'react-hot-toast'
import FadeIn from 'react-fade-in'

export default function Home() {
  return (
    <>
      <ThemeSwitcher />
      <FadeIn>
        <div className='ml-[10%] mr-[10%]'>
          <div className='mx-auto mt-44 flex max-w-3xl flex-col'>
            <div className='flex flex-col lg:flex-row items-start lg:items-center space-y-10 lg:space-y-5 lg:space-x-10'>
              <div className='flex flex-col items-start max-w-lg'>
                <h1 className='text-[6rem] leading-none font-bold'>albert</h1>
                <SocialLayout />
                <NowPlayingCard />
              </div>
              <AboutMe />
            </div>
          </div>
          <Toaster position='top-left' />
        </div>
      </FadeIn>
    </>
  )
}
