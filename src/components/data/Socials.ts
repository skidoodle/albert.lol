import { FaDiscord, FaEnvelope, FaGithub, FaSteam } from 'react-icons/fa'
import { RiInstagramFill } from 'react-icons/ri'
import type { IconType } from 'react-icons/lib'

type Socials = {
  id: number
  ref: string
  icon: IconType
  copyValue?: boolean
  ariaLabel?: string
}

export const socials: Array<Socials> = [
  {
    id: 1,
    ref: 'https://github.com/skidoodle',
    icon: FaGithub as IconType,
    ariaLabel: 'GitHub',
  },
  {
    id: 2,
    ref: 'https://steamcommunity.com/id/_albert',
    icon: FaSteam as IconType,
    ariaLabel: 'Steam',
  },
  {
    id: 3,
    ref: 'contact@albert.lol',
    icon: FaEnvelope as IconType,
    copyValue: true,
    ariaLabel: 'Email',
  },
  {
    id: 4,
    ref: 'https://www.instagram.com/albertadam_/',
    icon: RiInstagramFill as IconType,
    ariaLabel: 'Instagram',
  },
  {
    id: 5,
    ref: 'albert.lol',
    icon: FaDiscord as IconType,
    copyValue: true,
    ariaLabel: 'Discord',
  },
]
