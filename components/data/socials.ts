import { IconType } from 'react-icons/lib'
import { FaDiscord, FaEnvelope, FaGithub, FaInstagram, FaSteam } from 'react-icons/fa'

type Socials = {
    id: number,
    name: string
    ref: string
    icon: IconType,
    copyValue?: boolean,
}

export const socials: Array<Socials> = [
    {
        id: 1,
        name: 'Github',
        ref: 'https://github.com/skidoodle',
        icon: FaGithub,
    },
    {
        id: 2,
        name: 'Steam',
        ref: 'https://steamcommunity.com/id/_albert',
        icon: FaSteam,
    },
    {
        id: 3,
        name: 'Email',
        ref: 'contact@albert.lol',
        icon: FaEnvelope,
        copyValue: true,
    },
    {
        id: 4,
        name: 'Instagram',
        ref: 'https://www.instagram.com/albertadam_/',
        icon: FaInstagram,
    },
    {
        id: 5,
        name: 'Discord',
        ref: 'albert#8838',
        icon: FaDiscord,
        copyValue: true,
    }
]