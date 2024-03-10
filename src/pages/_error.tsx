import { ThemeSwitcher } from '@/components/ThemeSwitcher'
import FadeIn from 'react-fade-in'
import Link from 'next/link'
import type { ErrorProps } from '@/utils/types'
import type { GetServerSideProps, GetServerSidePropsContext } from 'next'

const ErrorPage: React.FC<ErrorProps> = ({ statusCode }) => {
  const errorMessage =
    statusCode === 404
      ? 'This page could not be found.'
      : 'An unexpected error occurred.'

  return (
    <>
      <ThemeSwitcher />
      <FadeIn>
        <div className='mx-auto mb-16 mt-32 max-w-3xl flex flex-col'>
          <h1 className='text-7xl font-bold'>{statusCode}</h1>
          <div className='text-2xl font-semibold text-gray-600'>
            <p className='mt-2'>{errorMessage}</p>
            <p className='mt-8'>
              <Link href='/'>{'<-- Home'}</Link>
            </p>
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
