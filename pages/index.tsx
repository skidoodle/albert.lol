import { GetServerSideProps } from 'next'
import FadeIn from 'react-fade-in'
import Body from 'components/Body'
import Icon from 'components/Icon'
import IconLayout from 'components/IconLayout'
import MainLayout from 'components/MainLayout'
import Spotify from 'components/Spotify'
import Weather from 'components/Weather'
import { FaSteam, FaGithub, FaEnvelope } from 'react-icons/fa'
import { RiInstagramFill } from 'react-icons/ri'
import { SiDiscord } from 'react-icons/si'
import dynamic from 'next/dynamic'
const Time = dynamic(() => import('components/Time'), {
    ssr: false,
})

const Home = ({data}: any) => {
    return (
        <>
            <Body>
                <FadeIn>
                    <MainLayout />
                        <IconLayout>
                            <Icon icon={<FaGithub />} reference={'https://github.com/skidoodle'} copy={false} />
                            <Icon icon={<FaSteam />} reference={'https://steamcommunity.com/id/_albert'} copy={false} />
                            <Icon icon={<FaEnvelope />} reference={'hello@albrt.hu'} copy={true} />
                            <Icon icon={<RiInstagramFill />} reference={'https://instagram.com/albertadam_'} copy={false} />
                            <Icon icon={<SiDiscord />} reference={'albert#8838'} copy={true} />
                        </IconLayout>
                    <Time />
                    <Weather data={data} />
                    <Spotify />
                </FadeIn>
            </Body>
        </>
    )
}

export const getServerSideProps: GetServerSideProps = async () => {
    const response = await fetch('https://api.openweathermap.org/data/2.5/weather?lat=47.51&lon=19.04&appid=1b3c10c18e894eaf1fd63eedde53fa54&units=metric')
    const data = await response.json()

    return {
        props: { data }
    }
}

export default Home
