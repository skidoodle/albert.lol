import Link from 'next/link';
import toast from 'react-hot-toast';
import copy from 'copy-to-clipboard';
import { socials } from '@/components/data/Socials';

type Icon = {
  children: any;
  reference: string;
  copyValue?: boolean;
};

const notify = () => {
  toast.remove(),
    toast.success('Copied to clipboard', {
      style: {
        background: '#0f1012',
        color: '#fff',
        fontSize: '1em',
      },
    });
};

export const Icon = ({ children, reference, copyValue }: Icon) => {
  if (copyValue) {
    return (
      <Link
        href={''}
        className={`cursor-pointer`}
        aria-label={
          socials.find((social) => social.ref === reference)?.ariaLabel
        }
        onClick={() => {
          notify(), copy(reference);
        }}
      >
        {children}
      </Link>
    );
  }

  return (
    <Link
      href={reference}
      target='_blank'
      className={'cursor-pointer'}
      aria-label={socials.find((social) => social.ref === reference)?.ariaLabel}
    >
      {children}
    </Link>
  );
};
