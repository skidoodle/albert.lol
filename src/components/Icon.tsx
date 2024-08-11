import copy from 'copy-to-clipboard'
import toast from 'react-hot-toast'
import Link from 'next/link'
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
    <Link
      href={copyValue ? '' : reference}
      target={copyValue ? undefined : '_blank'}
      className='cursor-pointer transition-transform duration-200 ease-in-out hover:scale-110'
      role={copyValue ? 'button' : undefined}
      aria-label={ariaLabel}
      onClick={copyValue ? handleCopy : undefined}
    >
      {children}
    </Link>
  )
}
