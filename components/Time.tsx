import { FaClock } from 'react-icons/fa';
import { useEffect, useState } from 'react'
import styles from 'styles/Home.module.scss'

const Timer = () => {
    const [date, setDate] = useState(new Date())
    
    useEffect(() => {      
        const interval = setInterval(() => {
            setDate(new Date())
        }, 1000)
        return () => clearInterval(interval)
    })

    return(
        <div className={styles.time}>
            <p><FaClock /> {date.toLocaleDateString('en-GB', { dateStyle: 'short' }) + ' • ' + date.toLocaleTimeString('en-GB', { timeStyle: 'medium', hour12: true,  timeZone: 'Europe/Budapest'}).toUpperCase()}</p>
        </div>
    )
}

export default Timer