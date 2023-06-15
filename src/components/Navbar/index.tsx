import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { useAppDispatch } from '../../hooks/useAppDispatch'
import { switchActive } from '../../store/features/toolbarSlice'
import styles from './index.module.css'
import logo from '../../assets/icons/logo.svg'
import themeIcon from '../../assets/icons/theme.svg'
import hamburgerIcon from '../../assets/icons/hamburger.svg'


export default function Navbar() {
    
    const dispatch = useAppDispatch()
    const toolbarIsActive = useSelector((state: any) => state.toolbar.active)

    const handleClick = () => {
        if (toolbarIsActive) {
            dispatch(switchActive())
        }
    }

    const switchTheme = () => {
        document.body.classList.toggle('dark');
        const theme = document.body.classList.contains('dark') ? 'dark' : '';
        localStorage.setItem('theme', theme);
    }

    const switchToolbarActive = () => {
        document.querySelector('.mobile-toolbar')?.classList.toggle('active')
        dispatch(switchActive())
    }

    return (
        <nav className={styles['navbar']}>
            <div className={styles['hamburger-icon-container']} onClick={switchToolbarActive}>
                <img src={hamburgerIcon} alt="hamburger-icon" height={30} className={styles['hamburger-icon']}/>
            </div>
            <Link to='/' className={styles['link']} onClick={handleClick}>
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
