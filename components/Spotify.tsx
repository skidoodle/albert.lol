import { useLastFM } from 'use-last-fm'
import { FaSpotify } from 'react-icons/fa'
import styles from 'styles/Home.module.scss'

const Spotify = () => {
    const lastFM = useLastFM('albrtadam', 'f6d19bc25ca340225c70c3d386cd4eab');

    return(
        <div className={styles.spotify}>
            {lastFM.status === 'playing'
                ?
                <>
                    <a href={lastFM.song.url} target='_blank' rel='noopener noreferrer'>
                        <img src={lastFM.song.art} width={50} height={50} alt=""/>
                        <p>Listening to <b>{lastFM.song.name}</b></p>
                    </a>
                </>
                :
                <>
                    <img src='song_art.png' width={50} height={50} alt=""/>
                    <p>Not listening to anything</p>
                </>
            }
            <div className={styles.tinyText}>
                <FaSpotify /> Spotify
            </div>
        </div>
    )
}

export default Spotify