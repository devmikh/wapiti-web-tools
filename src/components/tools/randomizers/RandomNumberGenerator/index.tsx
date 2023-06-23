import { useState } from 'react'
import Textfield from '../../../core/Textfield'
import Button from '../../../core/Button'
import usePageTitle from '../../../../hooks/usePageTitle'
import { generateRandomNumber } from '../../../../utils/randomizers'
import styles from './index.module.css'

const MIN_VALUE = 0;
const MAX_VALUE = 999999999;

export default function RandomNumberGenerator() {

    const [min, setMin] = useState<number>(1)
    const [max, setMax] = useState<number>(10)
    const [result, setResult] = useState<number>(generateRandomNumber(1, 10))

    const handleChangeMin = (e: React.ChangeEvent<HTMLInputElement>) => {
        let value = Number(e.target.value)
        if (value < MIN_VALUE) {
            setMin(prev => prev)
        } else if (value > MAX_VALUE) {
            setMin(prev => prev)
        } else {
            setMin(value)
        }
    }
    
    const handleChangeMax = (e: React.ChangeEvent<HTMLInputElement>) => {
        let value = Number(e.target.value)
        if (value < MIN_VALUE) {
            setMax(prev => prev)
        } else if (value > MAX_VALUE) {
            setMax(prev => prev)
        } else {
            setMax(value)
        }
    }

    const handleClick = () => {
        if (min > max) {
            setMin(max)
            setMax(min)
            setResult(generateRandomNumber(max, min))
        } else {
            setResult(generateRandomNumber(min, max))
        }
    }

    usePageTitle('Random Number Generator | Wapiti Web Tools')

    return (
        <div className={`tool-container ${styles['container']}`}>
            <h1 className="tool-title">Random Number Generator</h1>
            <Textfield
                short
                type='number'
                prompt='Min'
                value={min.toString()}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleChangeMin(e)}
            />
            <Textfield
                short
                type='number'
                prompt='Max'
                value={max.toString()}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleChangeMax(e)}
            />
            <div className={styles['result-container']}>
                <span>{result}</span>
            </div>
            <Button
                label='Generate'
                onClick={handleClick}
                color='primary'
            />
        </div>
    )
}
