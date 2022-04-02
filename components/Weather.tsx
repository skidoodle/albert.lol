import styles from 'styles/Home.module.scss'
import { FaSun, FaMoon, FaCloudSun, FaCloudMoon, FaCloud, FaCloudShowersHeavy } from 'react-icons/fa'
import { BsCloudDrizzleFill, BsCloudsFill, BsCloudLightningFill, BsCloudSnowFill, BsCloudFogFill } from 'react-icons/bs' 

const Weather = ({data}: {data: any}) => {
    const { temp: temperature } = data.main
    const { icon: weatherIcon, description: weatherDescription} = data.weather[0]

    const icons: any = {
<<<<<<< HEAD
        _01d: <FaSun />, _01n: <FaMoon />,
        _02d: <FaCloudSun />, _02n: <FaCloudMoon />,
        _03d: <FaCloud />, _03n: <FaCloud />,
        _04d: <BsCloudsFill />, _04n: <BsCloudsFill />,
        _09d: <BsCloudDrizzleFill />, _09n: <BsCloudDrizzleFill />,
        _10d: <FaCloudShowersHeavy />, _10n: <FaCloudShowersHeavy />,
        _11d: <BsCloudLightningFill />, _11n: <BsCloudLightningFill />,
        _13d: <BsCloudSnowFill />, _13n: <BsCloudSnowFill />,
        _50d: <BsCloudFogFill />, _50n: <BsCloudFogFill />
=======
        _01d: ['fas', 'sun'], _01n: ['fas', 'moon'],
        _02d: ['fas', 'cloud-sun'], _02n: ['fas', 'cloud-moon'],
        _03d: ['fas', 'cloud'], _03n: ['fas', 'cloud'],
        _04d: ['fas', 'clouds'], _04n: ['fas', 'clouds'],
        _09d: ['fas', 'cloud-showers-heavy'], _09n: ['fas', 'cloud-showers-heavy'],
        _10d: ['fas', 'cloud-showers-heavy'], _10n: ['fas', 'cloud-showers-heavy'],
        _11d: ['fas', 'cloud-bolt-sun'], _11n: ['fas', 'cloud-bolt-moon'],
        _13d: ['fas', 'snow-flake'], _13n: ['fas', 'snow-flake'],
        _50d: ['fas', 'cloud-fog'], _50n: ['fas', 'cloud-fog']
>>>>>>> ce3c841bfc958c99053e0a03c56b5cbc56dff70f
    }

    return (
        <div className={styles.weather}>
            {icons[`_${weatherIcon}`]} <p>It&apos;s currently <b>{parseInt(temperature)} °C</b> <span>({weatherDescription})</span> in <a href='https://weather.com/en-GB/weather/today/l/b979f874d2f515646f37e2bb434a85cc04869c5a35c6bdf1c6fba26f659313f0' target="_blank" rel='noopener noreferrer'><b>Budapest</b></a></p>
        </div>
    )
}

export default Weather