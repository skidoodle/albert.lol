import { ThemeSwitcher } from '@/components/ThemeSwitcher'
import FadeIn from 'react-fade-in'
import Link from 'next/link'

export default function InternalServerError() {
  return (
    <>
      <ThemeSwitcher />
      <FadeIn>
        <div className='ml-[10%] mr-[10%]'>
          <div className='mx-auto mb-16 mt-32 max-w-3xl flex flex-col'>
            <h1 className='text-7xl font-bold'>500</h1>
            <div className='text-2xl font-semibold text-gray-600'>
              <p className='mt-2'>An internal server error occured.</p>
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
