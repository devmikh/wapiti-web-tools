import usePageTitle from '../../../../hooks/usePageTitle'
import styles from './index.module.css'

export default function GradientGenerator() {
    
    usePageTitle('Gradient Generator | Wapiti Web Tools')

    return (
        <div className={`tool-container ${styles['container']}`}>
            <h1 className='tool-title'>Gradient Generator</h1>
        </div>
    )
}
