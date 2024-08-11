import { Socials } from '@/components/data/Socials'
import { Icon } from '@/components/Icon'
import React, { memo } from 'react'

export const SocialLayout = memo(() => {
  return (
    <div className='mt-3 grid w-fit grid-flow-col gap-8 pl-1 text-[1.7rem] leading-none'>
      {Socials.map(({ id, ref, copyValue, icon: IconComponent, ariaLabel }) => (
        <Icon
          key={id}
          reference={ref}
          copyValue={copyValue}
          ariaLabel={ariaLabel}
        >
          <IconComponent
            className='fill-current transition-transform duration-300 ease-in-out hover:text-[#ad87ed] hover:scale-105 focus:outline-none'
            aria-hidden='true'
          />
        </Icon>
      ))}
    </div>
  )
})
