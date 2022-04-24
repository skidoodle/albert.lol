import { FaClock } from 'react-icons/fa';
import { dayjs } from 'components/dayjs'
import { useEffect, useState } from 'react'
import styles from 'styles/Home.module.scss'

const now = () => dayjs().tz()

const Time = () => {
  const [date, setDate] = useState(now())

  useEffect(() => {
    const timer = setInterval(() => setDate(now()), 1000)
    return () => clearInterval(timer)
  }, [])

  return (
    <p className={styles.time}>
      <FaClock />
      {' '}{date.format('DD/MM/YYYY • h:mm:ss A')}
    </p>
  )
}

export default Time