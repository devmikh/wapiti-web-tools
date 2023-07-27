import { useState, useEffect } from 'react'
import Button from '../../../core/Button'
import usePageTitle from '../../../../hooks/usePageTitle'
import { descriptions } from '../../../../assets/descriptions'
import styles from './index.module.css'

export default function Stopwatch() {

    const [isRunning, setIsRunning] = useState(false)
    const [elapsedTime, setElapsedTime] = useState(0)
    const [hours, setHours] = useState(0)
    const [minutes, setMinutes] = useState(0)
    const [seconds, setSeconds] = useState(0)
    const [milliseconds, setMilliseconds] = useState(0)

    useEffect(() => {
        let interval: NodeJS.Timeout
    
        if (isRunning) {
            const startTime = Date.now() - elapsedTime
            interval = setInterval(() => {
                setElapsedTime(Date.now() - startTime)
                formatTime(Date.now() - startTime)
            }, 10)
        }
        return () => clearInterval(interval)
    }, [isRunning, elapsedTime])

    const startTimer = () => {
        if (!isRunning) {
            setIsRunning(true)
        }
    }

    const stopTimer = () => {
        if (isRunning) {
            setIsRunning(false)
        }
    }

    const resetTimer = () => {
        stopTimer()
        setElapsedTime(0)
        setHours(0)
        setMinutes(0)
        setSeconds(0)
        setMilliseconds(0)
    }

    const formatTime = (time: number) => {
        setHours(Math.floor(time / 3600000))
        setMinutes(Math.floor((time % 3600000) / 60000))
        setSeconds(Math.floor((time % 60000) / 1000))
        setMilliseconds(Math.floor((time % 1000) / 10))
    }

    usePageTitle('Stopwatch | Wapiti Web Tools')

    return (
        <>
            <div className={`tool-container ${styles['container']}`}>
                <h1 className="tool-title">Stopwatch</h1>
                <div className={styles['stopwatch-container']}>
                    <div className={styles['time-container']}>
                        <span className={styles['time-container-value']}>{hours}</span>
                        <span className={styles['time-container-type']}>h</span>
                    </div>
                    <div className={styles['time-container']}>
                        <span className={styles['time-container-value']}>{minutes}</span>
                        <span className={styles['time-container-type']}>m</span>
                    </div>
                    <div className={styles['time-container']}>
                        <span className={styles['time-container-value']}>{seconds}</span>
                        <span className={styles['time-container-type']}>s</span>
                    </div>
                    <div className={styles['time-container']}>
                        <span className={styles['time-container-value-ms']}>{milliseconds}</span>
                        <span className={styles['time-container-type']}>ms</span>
                    </div>
                </div>
                <div className={styles['button-container']}>
                    <Button
                        onClick={startTimer}
                        label='Start'
                        disabled={isRunning}
                        color='primary'
                    />
                    <Button
                        onClick={stopTimer}
                        label='Pause'
                        disabled={!isRunning}
                    />
                    <Button
                        onClick={resetTimer}
                        label='Reset'
                    />
                </div>
            </div>
            <div className='description-container'>
                <h2 className='description-title'>Overview</h2>
                <p className='overview'>{descriptions.stopwatch.overview}</p>
                <h2 className='description-title'>How To Use</h2>
                <ol className='instructions-list'>
                    {descriptions.stopwatch.instructions.map((point, index) => (
                        <li key={index}>{point}</li>
                    ))}
                </ol>
            </div>
        </>
        
    )
}
