import { Icon } from '@/components/Icon';
import { socials } from '@/components/data/Socials';
import React from 'react';

export const SocialLayout = () => {
  return (
    <div className='grid grid-flow-col w-48 mt-3 text-2xl space-x-8 pl-1'>
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
  );
};
