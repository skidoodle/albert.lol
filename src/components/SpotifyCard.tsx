import { useEffect, useState, useCallback, useMemo } from 'react'
import type { SpotifyData } from '@/utils/types'
import { HiMusicNote } from 'react-icons/hi'
import { truncate } from '@/utils'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'

const useSpotify = (): SpotifyData | undefined => {
  const [spotify, setSpotify] = useState<SpotifyData | undefined>(undefined)

  useEffect(() => {
    const socket = new WebSocket(
      process.env.NEXT_PUBLIC_SPOTIFY_WS || 'ws://localhost:3001'
    )

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

  const progressPercentage = useMemo(() => {
    if (spotify && spotify.is_playing && spotify.item) {
      return (spotify.progress_ms / spotify.item.duration_ms) * 100
    }
    return 0
  }, [spotify])

  const renderSpotify = useCallback(() => {
    if (!spotify) {
      return (
        <div className='flex items-center'>
          <HiMusicNote size={50} className='p-2.5' />
          <div className='ml-4 text-left'>
            <h1 className='font-semibold text-l'>Loading...</h1>
          </div>
        </div>
      )
    }

    if (!spotify.is_playing) {
      return (
        <div className='flex items-center text-[1.2rem]'>
          <HiMusicNote size={75} className='p-2.5' />
          <div className='ml-4 text-left'>
            <h1 className='font-semibold text-l'>Not listening to anything</h1>
          </div>
        </div>
      )
    }

    const song = spotify.item
    const artists =
      song.artists?.map((artist) => artist.name).join(', ') || 'Unknown artist'
    const albumImage =
      song.album.images[0]?.url || 'https://placehold.co/50x50.webp'

    return (
      <div className='flex items-center'>
        <div className='w-[75px] h-[75px]'>
          <Image
            priority={true}
            width={75}
            height={75}
            alt='Song cover art'
            className='rounded-md'
            draggable={false}
            src={albumImage}
            quality={100}
          />
        </div>
        <div className='ml-4 flex-1 text-left text-[1.2rem]'>
          <Link href={song.external_urls.spotify || '/'}>
            <h1 className='font-semibold text-[#1ED760] hover:text-[#1DB954]'>
              {truncate(song.name, 19)}
            </h1>
          </Link>
          <h2 className='text-xs'>{truncate(artists, 35)}</h2>
          <motion.div
            className='mt-2 bg-gray-200 rounded-full h-1 dark:bg-gray-700'
            initial={{ width: 0 }}
            animate={{ width: `${progressPercentage}%` }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
          >
            <div className='bg-[#1DB954] h-1 rounded-full'></div>
          </motion.div>
        </div>
      </div>
    )
  }, [spotify, progressPercentage])

  return (
    <motion.div
      className='mt-5 max-w-sm w-[350px] h-[100px] rounded-md shadow-lg p-3 dark:bg-[#1E1E1E] bg-[#F5F5F5]'
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: 'easeInOut' }}
    >
      {renderSpotify()}
    </motion.div>
  )
}
