import type { SpotifyData } from '@/utils/types'
import { HiMusicNote } from 'react-icons/hi'
import { truncate } from '@/utils/truncate'
import { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

export const NowPlayingCard = () => {
  const [spotify, setSpotify] = useState<SpotifyData | undefined>()

  useEffect(() => {
    const socket = new WebSocket('wss://ws.albert.lol');

    socket.onopen = () => {
      console.log('WebSocket connected');
    };

    socket.onmessage = (e) => {
      try {
        const data = JSON.parse(e.data);
        setSpotify(data)
      } catch (error) {
        console.error('Error parsing WebSocket message:', error);
      }
    };

    socket.onclose = () => {
      console.log('WebSocket closed');
    };

    socket.onerror = (error) => {
      console.error('WebSocket error:', error);
    };

    return () => {
      socket.close();
    };
  }, []);

  return (
    <div className='mt-5 flex max-w-sm transform flex-row rounded-md border border-gray-800 p-3 shadow transition duration-300 ease-in-out hover:scale-105 focus:outline-none'>
      {spotify?.is_playing ? (
        <>
          <div className='w-[50px] h-[50px] rounded-md bg-gray-800 dark:bg-gray-200'>
            <Image
              priority={true}
              width={50}
              height={50}
              alt='Song cover art'
              quality={100}
              className='select-none rounded-md w-auto h-auto'
              draggable={false}
              src={spotify.item.album.images[0]?.url ?? 'https://placehold.co/50x50.webp'}
            />
          </div>
          <div className='my-auto ml-4'>
            <div className='text-l sm:text-regular font-semibold'>
              <Link
                href={spotify.item.url ?? '/'}
                target={spotify.item.url ? '_blank' : '_self'}
              >
                <h1 className='text-[#1ED760] hover:text-[#1DB954]'>
                  {truncate(spotify.item.name, 30)}
                </h1>
              </Link>
              <h2 className='text-xs'>
                {spotify.item.artists?.name?.some((artist) => artist.trim())
                  ? truncate(spotify.item.artists.name.join(', '), 30)
                  : 'Unknown artist'}
              </h2>
            </div>
            <div className='mt-2 bg-gray-200 rounded-full h-1 dark:bg-gray-700 bg-fixed flex w-48'>
              <div
                className='bg-[#1DB954] h-1 rounded-full transition-width duration-300 ease-in-out'
                style={{
                  width: `${(spotify.progress_ms / spotify.item.duration_ms) * 100}%`,
                }}
              ></div>
            </div>
          </div>
        </>
      ) : (
        <>
          <HiMusicNote size={50} className='pl-1 p-2.5' />
          <div className='my-auto ml-4'>
            <div className='text-l sm:text-regular font-semibold'>
              Not listening to anything
            </div>
          </div>
        </>
      )}
    </div>
  )
}
