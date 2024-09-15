import { ThemeSwitcher } from '@/components/ThemeSwitcher'
import { motion } from 'framer-motion'
import Link from 'next/link'

export default function NotFound() {
  return (
    <>
      <ThemeSwitcher />
      <div className='ml-[10%] mr-[10%]'>
        <div className='mx-auto mb-16 mt-32 max-w-3xl flex flex-col'>
          <motion.h1
            className='text-7xl font-bold'
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: 'easeInOut' }}
          >
            404
          </motion.h1>
          <motion.div
            className='text-2xl font-semibold text-gray-600'
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: 'easeInOut', delay: 0.3 }}
          >
            <p className='mt-2'>This page could not be found.</p>
            <p className='mt-8'>
              <Link href='/'>
                <span className='hover:underline cursor-pointer'>
                  {'<-- Home'}
                </span>
              </Link>
            </p>
          </motion.div>
        </div>
      </div>
    </>
  )
}
