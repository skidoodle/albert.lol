import { Socials } from '@/components/data/Socials'
import copy from 'copy-to-clipboard'
import toast from 'react-hot-toast'
import Link from 'next/link'
import type { IconType } from '@/utils/types'

const notify = () => {
  toast.remove()
  toast.success('Copied to clipboard', {
    style: {
      background: '#0f1012',
      color: '#fff',
      fontSize: '1em',
    },
  })
}

export const Icon = ({ children, reference, copyValue }: IconType) => {
  const social = Socials.find((social) => social.ref === reference)

  const handleCopy = () => {
    notify()
    copy(reference)
  }

  return (
    <Link
      href={copyValue ? '' : reference}
      target={copyValue ? undefined : '_blank'}
      className='cursor-pointer'
      aria-label={social?.ariaLabel}
      onClick={copyValue ? handleCopy : undefined}
    >
      {children}
    </Link>
  )
}
