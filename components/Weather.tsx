import styles from 'styles/Home.module.scss'
import { FaSun, FaMoon, FaCloudSun, FaCloudMoon, FaCloud, FaCloudShowersHeavy } from 'react-icons/fa'
import { BsCloudDrizzleFill, BsCloudsFill, BsCloudLightningFill, BsCloudSnowFill, BsCloudFogFill } from 'react-icons/bs' 

const Weather = ({data}: {data: any}) => {
    const { temp: temperature } = data.main
    const { icon: weatherIcon, description: weatherDescription} = data.weather[0]

    const icons: any = {
        _01d: <FaSun />, _01n: <FaMoon />,
        _02d: <FaCloudSun />, _02n: <FaCloudMoon />,
        _03d: <FaCloud />, _03n: <FaCloud />,
        _04d: <BsCloudsFill />, _04n: <BsCloudsFill />,
        _09d: <BsCloudDrizzleFill />, _09n: <BsCloudDrizzleFill />,
        _10d: <FaCloudShowersHeavy />, _10n: <FaCloudShowersHeavy />,
        _11d: <BsCloudLightningFill />, _11n: <BsCloudLightningFill />,
        _13d: <BsCloudSnowFill />, _13n: <BsCloudSnowFill />,
        _50d: <BsCloudFogFill />, _50n: <BsCloudFogFill />
    }

    return (
        <div className={styles.weather}>
            {icons[`_${weatherIcon}`]} <p>It&apos;s currently <b>{parseInt(temperature)} °C</b> <span>({weatherDescription})</span> in <a href='https://weather.com/en-GB/weather/today/l/b979f874d2f515646f37e2bb434a85cc04869c5a35c6bdf1c6fba26f659313f0' target="_blank" rel='noopener noreferrer'><b>Budapest</b></a></p>
        </div>
    )
}

export default Weather