import { ThemeSwitcher } from '@/components/ThemeSwitcher'
import FadeIn from 'react-fade-in'
import Link from 'next/link'

export default function Error() {
  return (
    <>
      <ThemeSwitcher />
      <FadeIn>
        <div className='ml-[10%] mr-[10%]'>
          <div className='mx-auto mb-16 mt-32 flex max-w-3xl flex-col'>
            <h1 className='text-7xl font-bold'>404</h1>
            <div className='text-2xl font-semibold text-gray-600'>
              <p className='mt-2'>This page could not be found.</p>
              <p className='mt-8'>
                <Link href='/'>{'<-- Home'}</Link>
              </p>
            </div>
          </div>
        </div>
      </FadeIn>
    </>
  )
}
