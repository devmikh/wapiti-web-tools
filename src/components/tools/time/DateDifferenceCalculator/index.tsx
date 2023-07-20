import { useState, useEffect } from 'react'
import Datepicker from '../../../core/Datepicker'
import usePageTitle from "../../../../hooks/usePageTitle"
import { getTimeDifference } from '../../../../utils/time'
import { descriptions } from '../../../../assets/descriptions'
import styles from './index.module.css'

export default function DateDifferenceCalculator() {
    
    const [firstDate, setFirstDate] = useState<Date>(new Date())
    const [secondDate, setSecondDate] = useState<Date>(new Date())
    const [result, setResult] = useState<string>('')

    useEffect(() => {
        setResult(getTimeDifference(firstDate, secondDate))
    }, [firstDate, secondDate])

    usePageTitle('Date Difference Calculator | Wapiti Web Tools')

    return (
        <>
            <div className={`tool-container ${styles['container']}`}>
                <h1 className='tool-title'>Date Difference Calculator</h1>
                <div className={styles['datepickers-container']}>
                    <Datepicker value={firstDate} onChange={(date: Date) => setFirstDate(date)} prompt='First Date' />
                    <Datepicker value={secondDate} onChange={(date: Date) => setSecondDate(date)} prompt='Second Date' />
                </div>
                <div className={styles['result-container']}>
                    <span>{result}</span>
                </div>
            </div>
            <div className='description-container'>
                <h2 className='description-title'>Overview</h2>
                <p className='overview'>{descriptions.date_difference_calculator.overview}</p>
                <h2 className='description-title'>How To Use</h2>
                <ol className='instructions-list'>
                    {descriptions.date_difference_calculator.instructions.map((point, index) => (
                        <li key={index}>{point}</li>
                    ))}
                </ol>
            </div>
        </>
        
    )
}
