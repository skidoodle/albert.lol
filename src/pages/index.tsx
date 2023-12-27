import { ThemeSwitcher } from '@/components/ThemeSwitcher'
import { NowPlayingCard } from '@/components/SpotifyCard'
import { SocialLayout } from '@/components/SocialLayout'
import { Toaster } from 'react-hot-toast'
import FadeIn from 'react-fade-in'
import age from '@/utils/age'

export default function Home() {
  return (
    <>
      <ThemeSwitcher />
      <FadeIn>
        <div className='ml-[10%] mr-[10%]'>
          <div className='mx-auto mb-16 mt-32 flex max-w-3xl flex-col'>
            <h1 className='text-7xl font-bold'>albert</h1>
            <p className='mt-2 text-2xl font-semibold text-gray-600'>
              {age()}-year-old sysadmin
            </p>
            <SocialLayout />
            <NowPlayingCard />
            <Toaster position='top-left' />
          </div>
        </div>
      </FadeIn>
    </>
  )
}
