import usePageTitle from '../../../../hooks/usePageTitle'
import styles from './index.module.css'

export default function UnixTimestampConverter() {

    usePageTitle('Unix Timestamp Converter | Wapiti Web Tools')

    return (
        <div className={`tool-container ${styles['container']}`}>
            <h1 className='tool-title'>Unix Timestamp Converter</h1>
        </div>
    )
}
