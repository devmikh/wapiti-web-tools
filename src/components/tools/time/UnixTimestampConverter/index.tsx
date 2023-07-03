import { useState, useEffect } from 'react'
import Textfield from '../../../core/Textfield'
import CopyButton from '../../../core/CopyButton'
import usePageTitle from '../../../../hooks/usePageTitle'
import { convertUnixToDate } from '../../../../utils/time'
import styles from './index.module.css'

export default function UnixTimestampConverter() {

    const [currentUnixTime, setCurrentUnixTime] = useState<number>(Math.floor(Date.now() / 1000))
    const [unixInput, setUnixInput] = useState<string>('')
    const [result, setResult] = useState<string>('')
    const [error, setError] = useState<boolean>(false)

    useEffect(() => {
        const intervalId = setInterval(() => {
            const timestamp = Math.floor(Date.now() / 1000)
            setCurrentUnixTime(timestamp)
        }, 1000)
    
        return () => clearInterval(intervalId)
    }, [])

    useEffect(() => {
        const result = convertUnixToDate(unixInput)
        if (result === 'Invalid timestamp') {
            setError(true)
        } else {
            setError(false)
        }
        setResult(result)
    }, [unixInput])

    usePageTitle('Unix Timestamp Converter | Wapiti Web Tools')

    return (
        <div className={`tool-container ${styles['container']}`}>
            <h1 className='tool-title'>Unix Timestamp Converter</h1>
            <div className={styles['display-container']}>
                <span className={styles['display-container-label']}>Current Unix Time</span>
                <div className={styles['display-container-value-container']}>
                    <span className={styles['display-container-value']}>{currentUnixTime}</span>
                    <div className={styles['display-container-button']}><CopyButton value={currentUnixTime.toString()} /></div>
                </div>
                
            </div>
            <div className={styles['form-container']}>
                <Textfield
                    type='number'
                    prompt='Input Timestamp'
                    value={unixInput}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setUnixInput(e.target.value)}/>
                <div className={`${styles['output-container']} ${!error ? styles['success'] : styles['error']}`}>
                    <span className={styles['output-container-label']}>Output Date</span>
                    <span className={styles['output-container-value']}>{result}</span>
                </div>
            </div>
        </div>
    )
}
