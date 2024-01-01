import { ThemeSwitcher } from '@/components/ThemeSwitcher'
import FadeIn from 'react-fade-in'
import Link from 'next/link'
import type { ErrorProps } from '@/utils/interface'
import type { GetServerSideProps, GetServerSidePropsContext } from 'next'

const ErrorPage: React.FC<ErrorProps> = ({ statusCode }) => {
  return (
    <>
      <ThemeSwitcher />
      <FadeIn>
        <div className='ml-[10%] mr-[10%]'>
          <div className='mx-auto mb-16 mt-32 flex max-w-3xl flex-col'>
            <h1 className='text-7xl font-bold'>{statusCode}</h1>
            <div className='text-2xl font-semibold text-gray-600'>
              {statusCode === 404 ? (
                <>
                  <p className='mt-2'>This page could not be found.</p>
                  <p className='mt-8'>
                    <Link href='/'>{'<-- Home'}</Link>
                  </p>
                </>
              ) : (
                <>
                  <p className='mt-2'>An unexpected error occurred.</p>
                  <p className='mt-8'>
                    <Link href='/'>{'<-- Home'}</Link>
                  </p>
                </>
              )}
            </div>
          </div>
        </div>
      </FadeIn>
    </>
  )
}

export const getServerSideProps: GetServerSideProps<ErrorProps> = async (
  context: GetServerSidePropsContext
) => {
  const statusCode = context.res ? context.res.statusCode : 404
  return { props: { statusCode } }
}

export default ErrorPage
