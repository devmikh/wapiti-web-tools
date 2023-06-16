import { useEffect } from 'react'
import styles from './index.module.css'
import logo from '../../assets/icons/logo.svg'

export default function HomePage() {
    
    useEffect(() => {
        document.title = 'Homepage | Wapiti Web Tools'
    }, [])

    return (
        <div className={styles['container']}>
            <img src={logo} alt='logo' height={100} className={styles['logo']} />
            <h1>Wapiti</h1>
            <p className={styles['description']}>Ultimate collection of essential web tools at your fingertips.<br/>Start browsing by choosing a category in the menu.</p>
        </div>
    )
}
