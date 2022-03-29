import { GetServerSideProps } from 'next'
import Head from 'next/head'
import Body from 'components/Body'
import Footer from 'components/Footer'
import Icon from 'components/Icon'
import IconLayout from 'components/IconLayout'
import MainLayout from 'components/MainLayout'
import Spotify from 'components/Spotify'
import Time from 'components/Time'
import Weather from 'components/Weather'

const Home = ({data}: any) => {
    return(
        <>
            <Head>
                <title>albert</title>
            </Head>
            <Body>
                <MainLayout />
                <IconLayout>
                    <Icon icon={['fab', 'discord']} reference={'albert#8838'} copy={true} />
                    <Icon icon={['fab', 'steam']} reference={'https://steamcommunity.com/id/_albert'} copy={false} />
                    <Icon icon={['fab', 'github']} reference={'https://github.com/skidoodle'} copy={false} />
                    <Icon icon={['fa', 'envelope']} reference={'hello@albrt.hu'} copy={true} />
                    <Icon icon={['fab', 'instagram']} reference={'https://instagram.com/albertadam_'} copy={false} />
                </IconLayout>
                <Time />
                <Weather data={data}/>
                <Spotify />
            </Body>
            <Footer />
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
