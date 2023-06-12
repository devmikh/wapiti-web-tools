import { Link } from 'react-router-dom'
import styles from './index.module.css'
import logo from '../../assets/icons/logo.svg'

export default function Navbar() {
    return (
        <nav className={styles['navbar']}>
            <Link to='/' className={styles['link']}>
                <div className={styles['logo-container']}>
                    <img src={logo} alt="logo" height={40} className={styles['logo']}/>
                    <h1 className={styles['logo-title']}>Wapiti</h1>
                </div>
            </Link>
        </nav>
    )
}
