import { useState, useEffect } from 'react'
import Button from '../../../core/Button'
import CopyButton from '../../../core/CopyButton'
import Checkbox from '../../../core/Checkbox'
import Range from '../../../core/Range'
import { copyToClipboard } from '../../../../utils/text'
import { generatePassword } from '../../../../utils/randomizers'
import styles from  './index.module.css'

export default function RandomPasswordGenerator() {

    const [options, setOptions] = useState({
        lower: true,
        upper: true,
        numbers: true,
        symbols: true,
        length: 16
    })

    const [password, setPassword] = useState('')

    const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, checked } = e.target;
        const { lower, upper, numbers, symbols } = options;

        // Don't uncheck the last checked option
        const numChecked = [lower, upper, numbers, symbols].filter((checkbox) => checkbox).length;
        if (numChecked === 1 && !checked) {
            return;
        }

        setOptions((prev) => {
            return {
                ...prev,
                [name]: checked
            }
        })
    }

    const handleLengthChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setOptions(prev => ({ ...prev, length: Number(e.target.value)}))
    }

    useEffect(() => {
        setPassword(generatePassword(options.lower, options.upper, options.numbers, options.symbols, options.length))
    }, [options])

    useEffect(() => {
        document.title = 'Random Password Generator'
    }, [])

    return (
        <div className={styles['container']}>
            <h1 className='tool-title'>Random Password Generator</h1>
            <div className={styles['checkboxes-container']}>
                <div className={styles['checkbox-container']}>
                    <Checkbox
                        id='lower'
                        name='lower'
                        checked={options.lower}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleCheckboxChange(e)}
                        label='Lowercase letters'
                    />
                    <div className={`${styles['charset']} ${options.lower && styles['active']}`}>abcdefghijklmnopqrstuvwxyz</div>
                </div>
                <div className={styles['checkbox-container']}>
                    <Checkbox
                        id='upper'
                        name='upper'
                        checked={options.upper}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleCheckboxChange(e)}
                        label='Uppercase letters'
                    />
                    <div className={`${styles['charset']} ${options.upper && styles['active']}`}>ABCDEFGHIJKLMNOPQRSTUVWXYZ</div>
                </div>
                
                <div className={styles['checkbox-container']}>
                    <Checkbox
                        id='numbers'
                        name='numbers'
                        checked={options.numbers}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleCheckboxChange(e)}
                        label='Numbers'
                    />
                    <div className={`${styles['charset']} ${options.numbers && styles['active']}`}>0123456789</div>
                </div>
                
                <div className={styles['checkbox-container']}>
                    <Checkbox
                        id='symbols'
                        name='symbols'
                        checked={options.symbols}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleCheckboxChange(e)}
                        label='Symbols'
                    />
                    <div className={`${styles['charset']} ${options.symbols && styles['active']}`}>!@#$%^&*()_-+=</div>
                </div>
                
            </div>
            
            <Range
                prompt='Length:'
                min={5}
                max={30}
                value={options.length}
                onChange={handleLengthChange}
            />
            <div className={styles['password-container']}>{password}</div>
            <div className={styles['buttons-container']}>
                <Button
                    label='Generate'
                    color='primary'
                    onClick={() => setPassword(generatePassword(options.lower, options.upper, options.numbers, options.symbols, options.length))}
                />
                <CopyButton 
                    label='Copy'
                    onClick={() => copyToClipboard(password)}
                    />
            </div>
            
        </div>
    )
}
