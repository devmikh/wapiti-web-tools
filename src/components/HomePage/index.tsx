import styles from './index.module.css'
import logo from '../../assets/icons/logo.svg'

export default function HomePage() {
    return (
        <div className={styles['container']}>
            <img src={logo} alt='logo' height={100} className={styles['logo']} />
            <h1>Wapiti</h1>
            <p className={styles['description']}>All essential web tools collected in one place.<br/>
            Start browsing by choosing a tool from the menu on the left.</p>
        </div>
    )
}