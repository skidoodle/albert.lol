import { HiMusicNote } from 'react-icons/hi'
import { truncate } from '@/utils/truncate'
import { useEffect, useState } from 'react'
import io from 'socket.io-client'
import Image from 'next/image'
import Link from 'next/link'

interface SpotifyData {
  is_playing?: boolean
  title: string
  artists: { name: string[] }
  album: { image: string }
  url: string
  progress: number
  duration: number
}

export const NowPlayingCard = () => {
  const [spotify, setSpotify] = useState<SpotifyData>()

  useEffect(() => {
    const socket = io('wss://ws.albert.lol')

    socket.on('nowPlayingData', (data) => {
      setSpotify(data as SpotifyData)
    })

    return () => {
      socket.disconnect()
    }
  }, [])

  return (
    <div className='mt-5 flex max-w-sm transform flex-row rounded-md border border-gray-800 p-3 shadow transition duration-300 ease-in-out hover:scale-105 focus:outline-none'>
      {spotify?.is_playing ? (
        <>
          <Image
            height={45}
            width={45}
            alt='Song cover art'
            quality={100}
            className='select-none rounded-md'
            draggable={false}
            src={spotify.album.image}
          />
          <div className='my-auto ml-4'>
            <div className='text-l sm:text-regular font-semibold'>
              <Link href={`${spotify.url}`} target='_blank'>
                <h1 className='text-[#1ED760] hover:text-[#1DB954]'>
                  {truncate(`${spotify.title}`, 30)}
                </h1>
              </Link>
              <h2 className='text-xs'>
                {truncate(
                  spotify.artists?.name.map((artist) => artist).join(', '),
                  30
                )}
              </h2>
            </div>
            <div className='mt-2 bg-gray-200 rounded-full h-1 dark:bg-gray-700 bg-fixed flex w-44'>
              <div
                className='bg-[#1DB954] h-1 rounded-full transition-width duration-300 ease-in-out'
                style={{
                  width: (spotify.progress / spotify.duration) * 100 + '%',
                }}
              ></div>
            </div>
          </div>
        </>
      ) : (
        <>
          <HiMusicNote size={45} className='p-2.5' />
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
