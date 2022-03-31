import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
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
            <p><FontAwesomeIcon icon={['fas', 'clock']} /> {date.toLocaleString('en-GB', {
                timeZone: 'Europe/Budapest',
                hour12: true
            }).toUpperCase()}</p>
        </div>
    )
}

export default Timer