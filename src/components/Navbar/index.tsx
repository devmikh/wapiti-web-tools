import { Link } from 'react-router-dom'
import styles from './index.module.css'
import logo from '../../assets/icons/logo.svg'
import themeIcon from '../../assets/icons/theme.svg'

export default function Navbar() {
    
    const switchTheme = () => {
        document.body.classList.toggle('dark');
        const theme = document.body.classList.contains('dark') ? 'dark' : '';
        localStorage.setItem('theme', theme);
    }

    return (
        <nav className={styles['navbar']}>
            <Link to='/' className={styles['link']}>
                <div className={styles['logo-container']}>
                    <img src={logo} alt="logo" height={40} className={styles['logo']}/>
                    <h1 className={styles['logo-title']}>Wapiti</h1>
                </div>
            </Link>
            <div className={styles['theme-icon-container']} onClick={switchTheme}>
                <img src={themeIcon} alt="theme-icon" height={30} className={styles['theme-icon']}/>
            </div>
        </nav>
    )
}
