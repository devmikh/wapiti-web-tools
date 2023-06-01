import styles from './index.module.css'
import logo from '../../../public/logo.svg'

const Navbar = () => {
    return (
        <nav className={styles['navbar']}>
            <img src={logo} alt="logo" height={50} className={styles['logo']}/>
            <h1>Wapiti Web Tools</h1>
        </nav>
    )
}

export default Navbar