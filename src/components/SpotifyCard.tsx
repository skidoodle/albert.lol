import { useEffect, useState } from 'react'
import type { SpotifyData } from '@/utils/types'
import { HiMusicNote } from 'react-icons/hi'
import { truncate } from '@/utils/truncate'
import Image from 'next/image'
import Link from 'next/link'

const useSpotify = () => {
  const [spotify, setSpotify] = useState<SpotifyData | undefined>()

  useEffect(() => {
    const socket = new WebSocket('wss://ws.albert.lol')

    const handleMessage = (e: MessageEvent) => {
      try {
        const data = JSON.parse(e.data)
        setSpotify(data)
      } catch (error) {
        console.error('Error parsing WebSocket message:', error)
      }
    }

    socket.addEventListener('message', handleMessage)

    return () => {
      socket.removeEventListener('message', handleMessage)
      socket.close()
    }
  }, [])

  return spotify
}

export const NowPlayingCard = () => {
  const spotify = useSpotify()

  return (
    <div className='mt-5 flex max-w-sm transform flex-row rounded-md p-3 shadow-lg w-[300px] h-[80px]'>
      {spotify ? (
        spotify.is_playing ? (
          <>
            <div className='w-[50px] h-[50px] select-none'>
              <Image
                priority={true}
                width={256}
                height={256}
                alt='Song cover art'
                quality={100}
                className='w-[50px] h-[50px] rounded-md'
                draggable={false}
                src={
                  spotify.item.album.images[0]?.url ??
                  'https://placehold.co/50x50.webp'
                }
              />
            </div>
            <div className='my-auto ml-4 min-w-48'>
              <div className='text-l sm:text-regular font-semibold'>
                <Link
                  href={spotify.item.external_urls.spotify ?? '/'}
                  target='_blank'
                >
                  <h1 className='text-[#1ED760] hover:text-[#1DB954]'>
                    {truncate(spotify.item.name, 20)}
                  </h1>
                </Link>
                <h2 className='text-xs'>
                  {spotify.item.artists?.length > 0
                    ? truncate(
                        spotify.item.artists
                          .map((artist) => artist.name)
                          .join(', '),
                        20
                      )
                    : 'Unknown artist'}
                </h2>
              </div>
              <div className='mt-2 bg-gray-200 rounded-full h-1 dark:bg-gray-700 bg-fixed flex'>
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
            <div className='w-[50px] h-[50px] select-none'>
              <HiMusicNote size={50} className='pl-1 p-2.5' />
            </div>
            <div className='my-auto ml-4 min-w-48'>
              <div className='text-l sm:text-regular font-semibold'>
                <h1>Not listening to anything</h1>
              </div>
            </div>
          </>
        )
      ) : (
        <>
          <div className='w-[50px] h-[50px] select-none'>
            <HiMusicNote size={50} className='pl-1 p-2.5' />
          </div>
          <div className='my-auto ml-4 min-w-48'>
            <div className='text-l sm:text-regular font-semibold'>
              <h1>Loading...</h1>
            </div>
          </div>
        </>
      )}
    </div>
  )
}
