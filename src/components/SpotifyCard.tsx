import { truncate } from '@/utils/truncate';
import FadeIn from 'react-fade-in';
import Image from 'next/image';
import useSWR from 'swr';
import SongImage from '@/public/song.webp';
import Link from 'next/link';

export const fetcher = (url: RequestInfo) => fetch(url).then((r) => r.json());

export const NowPlayingCard = () => {
  var { data: spotify } = useSWR('/api/spotify', fetcher, {
    refreshInterval: 3000,
    fallbackData: 'loading',
  });

  return (
    <FadeIn>
      <div className='mt-5 focus:outline-none transition duration-300 ease-in-out transform hover:scale-105 p-3 rounded-md border border-gray-800 shadow flex flex-row max-w-sm'>
        {spotify.song ? (
          <Image
            height={45}
            width={45}
            alt='Song cover art'
            src={spotify.song?.image}
          />
        ) : (
          <Image height={45} width={45} alt='Song cover art' src={SongImage} />
        )}
        <div className='my-auto ml-4'>
          <div className='font-semibold text-l sm:text-regular'>
            Listening to{' '}
            {spotify.song ? (
              <Link
                href={`${spotify.song.url}`}
                target='_blank'
                className='text-[rgb(50,180,100)]'
              >
                {truncate(`${spotify.song.title}`, 20)}
              </Link>
            ) : (
              <span className='text-[rgb(50,180,100)]'>nothing</span>
            )}
          </div>
        </div>
      </div>
    </FadeIn>
  );
};
