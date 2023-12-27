import { HiMusicNote } from 'react-icons/hi'
import { truncate } from '@/utils/truncate'
import { useEffect, useState } from 'react'
import io from 'socket.io-client'
import Image from 'next/image'
import Link from 'next/link'

interface SpotifyData {
  song?: {
    artist: string[]
    title: string
    url: string
    image: string
  }
}

export const NowPlayingCard = () => {
  const [spotify, setSpotify] = useState<SpotifyData>({})

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
      {spotify.song ? (
        <Image
          height={45}
          width={45}
          alt='Song cover art'
          quality={100}
          className='select-none rounded-md'
          draggable={false}
          src={spotify.song.image}
        />
      ) : (
        <HiMusicNote size={45} className='p-2.5' />
      )}
      <div className='my-auto ml-4'>
        <div className='text-l sm:text-regular font-semibold'>
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
  )
}
