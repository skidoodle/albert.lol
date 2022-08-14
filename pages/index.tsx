import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

import { socials } from 'components/data/socials'
import { Icon } from 'components/Icon' 
import { Footer } from 'components/Footer'

import { Toaster } from 'react-hot-toast'
import { FaSpotify } from 'react-icons/fa'

import { GetServerSideProps } from 'next'

export default function({ spotify }: any) {
    return(
        <>
            <div className='px-8 w-11/12 m-auto rounded-lg max-w-4xl'>
                <div className='flex flex-col justify-center items-center mt-32 md:mt-56'>
                    <Image src='https://cdn.discordapp.com/avatars/637745537369767936/9cc2e60b7df282b5be9fa701660c651d.webp?size=512' className="rounded-full text-center" height={100} width={100}/>
                    <h1 className='text-4xl font-bold -mt-1'>albert</h1>

                    <p className='text-[#9ca3af] text-xl flex flex-wrap items-center justify-center whitespace-pre-wrap'>
                        { Math.floor((new Date().getTime() - new Date('2004.07.22').getTime()) / (1000 * 60 * 60 * 24 * 365.25)) } 
                            yrs old <b className='font-semibold'>system administrator</b> and student from <b className='font-bold'>Hungary</b>
                    </p>
                </div>

                <hr className='border-t-[#727277] w-4/5 md:w-2/5 m-auto mt-5 md:mt-8'/>

                <div className='mt-3 flex justify-center items-center'>
                    <FaSpotify className='text-[#32a866]' />&nbsp;

                    <p className='font-semibold'>Listening to
                        {
                            spotify.song
                            ?   <Link href={`${spotify.song.url}`}>
                                    <a className='text-[#32a866]'> { spotify.song.artist + ' - ' + spotify.song.title }</a>
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
        </>
    )
}

export const getServerSideProps: GetServerSideProps = async () => {
    const spotify = await fetch(`${process.env.PRODUCTION}/api/spotify`, {
        method: 'GET'
    }).then((res) => res.json())

    return {
        props: { spotify }
    }
}