import usePageTitle from "../../../../hooks/usePageTitle"
import styles from './index.module.css'

export default function TimeCalculator() {
    
    usePageTitle('Time Calculator')

    return (
        <div className={`tool-container ${styles['container']}`}>
            <h1 className='tool-title'>Time Calculator</h1>
        </div>
    )
}
