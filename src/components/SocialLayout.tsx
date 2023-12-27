import { socials } from '@/components/data/Socials'
import { Icon } from '@/components/Icon'
import React from 'react'

export const SocialLayout = () => {
  return (
    <div className='mt-3 grid w-48 grid-flow-col space-x-8 pl-1 text-2xl'>
      {socials.map((social) => (
        <Icon
          key={social.id}
          reference={social.ref}
          copyValue={social.copyValue}
        >
          {React.createElement(social.icon, {
            className:
              'fill-current focus:outline-none transition duration-300 ease-in-out hover:text-[#ad87ed]',
          })}
        </Icon>
      ))}
    </div>
  )
}
