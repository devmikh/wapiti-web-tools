import { Link } from 'react-router-dom'
import styles from './index.module.css'
import logo from '../../assets/icons/logo.svg'

export default function Navbar() {
    return (
        <nav className={styles['navbar']}>
            <div className={styles['logo-container']}>
                <Link to='/'><img src={logo} alt="logo" height={40} className={styles['logo']}/></Link>
                <h1>Wapiti</h1>
            </div>
        </nav>
    )
}
