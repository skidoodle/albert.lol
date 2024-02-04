import { Socials } from '@/components/data/Socials'
import copy from 'copy-to-clipboard'
import toast from 'react-hot-toast'
import Link from 'next/link'
import type { IconType } from '@/utils/types'

const notify = () => {
  toast.remove(),
    toast.success('Copied to clipboard', {
      style: {
        background: '#0f1012',
        color: '#fff',
        fontSize: '1em',
      },
    })
}

export const Icon = ({ children, reference, copyValue }: IconType) => {
  if (copyValue) {
    return (
      <Link
        href={''}
        className={`cursor-pointer`}
        aria-label={
          Socials.find((social) => social.ref === reference)?.ariaLabel
        }
        onClick={() => {
          notify(), copy(reference)
        }}
      >
        {children}
      </Link>
    )
  }

  return (
    <Link
      href={reference}
      target='_blank'
      className={'cursor-pointer'}
      aria-label={Socials.find((social) => social.ref === reference)?.ariaLabel}
    >
      {children}
    </Link>
  )
}
