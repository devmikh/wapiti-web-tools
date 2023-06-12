import { useState, useEffect } from 'react'
import Checkbox from '../../core/Checkbox'
import Range from '../../core/Range'
import { generatePassword } from '../../../utils/randomizers'

export default function RandomPasswordGenerator() {

    const [options, setOptions] = useState({
        lower: true,
        upper: true,
        numbers: true,
        symbols: true,
        length: 10
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
        <div>
            <h1 className="tool-title">Random Password Generator</h1>
            <Checkbox
                id='lower'
                name='lower'
                checked={options.lower}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleCheckboxChange(e)}
                label='Include lowercase letters'
            />
            <Checkbox
                id='upper'
                name='upper'
                checked={options.upper}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleCheckboxChange(e)}
                label='Include uppercase letters'
            />
            <Checkbox
                id='numbers'
                name='numbers'
                checked={options.numbers}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleCheckboxChange(e)}
                label='Include numbers'
            />
            <Checkbox
                id='symbols'
                name='symbols'
                checked={options.symbols}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleCheckboxChange(e)}
                label='Include symbols'
            />
            <Range
                prompt='Password Length'
                min={5}
                max={30}
                value={options.length}
                onChange={handleLengthChange}
            />
            <div>{password}</div>
            <button
                onClick={() => setPassword(generatePassword(options.lower, options.upper, options.numbers, options.symbols, options.length))}
                >Generate</button>
        </div>
    )
}
