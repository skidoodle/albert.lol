import styles from '@/styles/Home.module.scss'

const IconLayout = ({children}: {children: any}) => {
    return(
        <>
            <div className={styles.iconLayout}>
                {children}
            </div>
        </>
    )
}

export default IconLayout