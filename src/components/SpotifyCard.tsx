import type { SpotifyData } from '@/utils/types'
import { HiMusicNote } from 'react-icons/hi'
import { truncate } from '@/utils/truncate'
import { useEffect, useState } from 'react'
import io from 'socket.io-client'
import Image from 'next/image'
import Link from 'next/link'

export const NowPlayingCard = () => {
  const [spotify, setSpotify] = useState<SpotifyData | undefined>()

  useEffect(() => {
    const socket = io('wss://ws.albert.lol')

    socket.on('nowPlayingData', (data: string) => {
      const parsedData = JSON.parse(data) as SpotifyData
      setSpotify(parsedData)
    })

    return () => {
      socket.disconnect()
    }
  }, [])

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
              src={spotify.album.image ?? 'https://placehold.co/50x50.webp'}
            />
          </div>
          <div className='my-auto ml-4'>
            <div className='text-l sm:text-regular font-semibold'>
              <Link
                href={spotify.url ?? '/'}
                target={spotify.url ? '_blank' : '_self'}
              >
                <h1 className='text-[#1ED760] hover:text-[#1DB954]'>
                  {truncate(spotify.title, 30)}
                </h1>
              </Link>
              <h2 className='text-xs'>
                {spotify.artists?.name?.some((artist) => artist.trim())
                  ? truncate(spotify.artists.name.join(', '), 30)
                  : 'Unknown artist'}
              </h2>
            </div>
            <div className='mt-2 bg-gray-200 rounded-full h-1 dark:bg-gray-700 bg-fixed flex w-48'>
              <div
                className='bg-[#1DB954] h-1 rounded-full transition-width duration-300 ease-in-out'
                style={{
                  width: `${(spotify.progress / spotify.duration) * 100}%`,
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
