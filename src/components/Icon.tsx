import copy from 'copy-to-clipboard'
import toast from 'react-hot-toast'
import Link from 'next/link'
import { motion } from 'framer-motion'
import type { IconType } from '@/utils/types'

export const Icon = ({
  children,
  reference,
  copyValue,
  ariaLabel,
}: IconType) => {
  const handleCopy = () => {
    toast.remove()
    toast.success('Copied to clipboard', {
      style: {
        background: '#0f1012',
        color: '#fff',
        fontSize: '1em',
      },
    })
    copy(reference)
  }

  return (
    <motion.div
      className='cursor-pointer transition-transform duration-200 ease-in-out hover:scale-110'
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      role={copyValue ? 'button' : undefined}
      aria-label={ariaLabel}
      onClick={copyValue ? handleCopy : undefined}
    >
      <Link
        href={copyValue ? '' : reference}
        target={copyValue ? undefined : '_blank'}
      >
        {children}
      </Link>
    </motion.div>
  )
}
