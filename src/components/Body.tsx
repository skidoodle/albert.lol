import styles from '../styles/Home.module.scss'

const Body = ({children}: {children: any}) => {
    return(
        <div className={styles.bodySection}>
            {children}
        </div>
    )
}

export default Body