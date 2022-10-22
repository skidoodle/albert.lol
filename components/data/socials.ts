import {IconType} from 'react-icons/lib';
import {
  FaDiscord,
  FaEnvelope,
  FaGithub,
  FaInstagram,
  FaSteam,
} from 'react-icons/fa';

type Socials = {
  id: number;
  ref: string;
  icon: IconType;
  copyValue?: boolean;
};

export const socials: Array<Socials> = [
  {
    id: 1,
    ref: 'https://github.com/skidoodle',
    icon: FaGithub,
  },
  {
    id: 2,
    ref: 'https://steamcommunity.com/id/_albert',
    icon: FaSteam,
  },
  {
    id: 3,
    ref: 'contact@albert.lol',
    icon: FaEnvelope,
    copyValue: true,
  },
  {
    id: 4,
    ref: 'https://www.instagram.com/albertadam_/',
    icon: FaInstagram,
  },
  {
    id: 5,
    ref: 'albert#8838',
    icon: FaDiscord,
    copyValue: true,
  },
];
