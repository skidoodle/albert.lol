import { truncate } from '@/utils/truncate';
import Image from 'next/image';
import useSWR from 'swr';
import SongImage from '@/public/song.webp';
import Link from 'next/link';
import { HiMusicNote } from 'react-icons/hi';

export const fetcher = (url: RequestInfo) => fetch(url).then((r) => r.json());

export const NowPlayingCard = () => {
  var { data: spotify } = useSWR('/api/spotify', fetcher, {
    refreshInterval: 3000,
    fallbackData: 'loading',
  });

  return (
    <div className='mt-5 focus:outline-none transition duration-300 ease-in-out transform hover:scale-105 p-3 rounded-md border border-gray-800 shadow flex flex-row max-w-sm'>
      {spotify.song ? (
        <Image
          height={45}
          width={45}
          alt='Song cover art'
          src={spotify.song?.image}
        />
      ) : (
        <HiMusicNote size={45} className='p-2.5' />
      )}
      <div className='my-auto ml-4'>
        <div className='font-semibold text-l sm:text-regular'>
          Listening to{' '}
          {spotify.song ? (
            <Link href={`${spotify.song.url}`} target='_blank'>
              {truncate(`${spotify.song.title}`, 20)}
            </Link>
          ) : (
            <span>nothing</span>
          )}
        </div>
      </div>
    </div>
  );
};
