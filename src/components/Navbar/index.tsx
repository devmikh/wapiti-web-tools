import { Link } from 'react-router-dom'
import styles from './index.module.css'
import logo from '../../../public/logo.svg'

export default function Navbar() {
    return (
        <nav className={styles['navbar']}>
            <Link to='/'><img src={logo} alt="logo" height={50} className={styles['logo']}/></Link>
            <h1>Wapiti Web Tools</h1>
        </nav>
    )
}
