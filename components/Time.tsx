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
<<<<<<< HEAD
            <p><FaClock /> {date.toLocaleDateString('en-GB', { dateStyle: 'short' }) + ' • ' + date.toLocaleTimeString('en-GB', { timeStyle: 'medium', hour12: true,  timeZone: 'Europe/Budapest'}).toUpperCase()}</p>
=======
            <p><FontAwesomeIcon icon={['fas', 'clock']} /> {date.toLocaleString('en-GB', {
                timeZone: 'Europe/Budapest',
                hour12: true
            }).toUpperCase()}</p>
>>>>>>> ce3c841bfc958c99053e0a03c56b5cbc56dff70f
        </div>
    )
}

export default Timer