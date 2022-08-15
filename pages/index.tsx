import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import useSWR from 'swr'
import FadeIn from 'react-fade-in'

import { socials } from 'components/data/socials'
import { Footer } from 'components/Footer' 
import { Icon } from 'components/Icon' 
import { Toaster } from 'react-hot-toast'
import { FaSpotify } from 'react-icons/fa'

import profilePic from '../public/profile.webp'

const fetcher = (url: RequestInfo) => fetch(url).then(r => r.json())

export default function() {
    const { data: spotify } = useSWR('/api/spotify', fetcher, { refreshInterval: 1000 })
    
    if(!spotify) return

    return (
        <FadeIn>
            <div className='px-8 w-11/12 m-auto rounded-lg max-w-4xl'>
                <div className='flex flex-col justify-center items-center mt-32 md:mt-56'>
                    <Image src={profilePic} className="rounded-full text-center" height={150} width={150}/>

                    <h1 className='text-4xl font-bold -mt-1'>albert</h1>

                    <p className='text-[#9ca3af] text-xl flex flex-wrap items-center justify-center whitespace-pre-wrap'>
                        { Math.floor((new Date().getTime() - new Date('2004, 07, 22').getTime()) / (1000 * 60 * 60 * 24 * 365.25)) } 
                            yrs old <b className='font-semibold'>system administrator</b> and student from Hungary
                    </p>
                </div>

                <hr className='border-t-[#727277] w-4/5 md:w-2/5 m-auto mt-5 md:mt-8'/>

                <div className='mt-3 flex justify-center items-center'>
                    <FaSpotify className='text-[#32a866]' />&nbsp;

                    <p className='font-semibold'>Listening to
                        {
                            spotify.song
                            ?   <Link href={`${spotify.song.url}`}>
                                    <a target='_blank' className='text-[#32a866]'> { spotify.song.title || 'nothing' }</a>
                                </Link> 

                            : <a className='text-[#32a866]'> nothing</a>
                        }
                    </p>
                </div>

                <div className='flex justify-between items-center text-3xl mt-11 md:mt-16 max-w-sm m-auto'>
                    { socials.map(social => (
                        <Icon key={ social.id } reference={ social.ref } copyValue={ social.copyValue }>{ React.createElement(social.icon) }</Icon>
                    ))}
                </div>
            </div>
            
            <Footer />
            <Toaster />
        </FadeIn>
    )
}
