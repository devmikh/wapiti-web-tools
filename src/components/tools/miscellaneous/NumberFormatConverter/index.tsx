import { useState } from 'react'
import usePageTitle from '../../../../hooks/usePageTitle'
import Textfield from '../../../core/Textfield'
import { convertNumber } from '../../../../utils/number'
import styles from './index.module.css'

export default function NumberFormatConverter() {

    const [decimal, setDecimal] = useState<string>('')
    const [binary, setBinary] = useState<string>('')
    const [octal, setOctal] = useState<string>('')
    const [hexadecimal, setHexadecimal] = useState<string>('')

    const handleInputChange = (
            event: React.ChangeEvent<HTMLInputElement>,
            format: 'decimal' | 'binary' | 'octal' | 'hexadecimal') => {
        const value = event.target.value
        setValues(format, value)
    }

    const setValues = (format: string, value: string) => {
        setDecimal(convertNumber(format, 'decimal', value))
        setBinary(convertNumber(format, 'binary', value))
        setOctal(convertNumber(format, 'octal', value))
        setHexadecimal(convertNumber(format, 'hexadecimal', value))
    }

    usePageTitle('Number Format Converter | Wapiti Web Tools')

    return (
        <div className={`tool-container ${styles['container']}`}>
            <h1 className='tool-title'>Number Format Converter</h1>
            <Textfield
                prompt='Decimal (Base-10)'
                value={decimal}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleInputChange(e, 'decimal')} />
            <Textfield
                prompt='Binary (Base-2)'
                value={binary}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleInputChange(e, 'binary')} />
            <Textfield
                prompt='Octal (Base-8)'
                value={octal}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleInputChange(e, 'octal')} />
            <Textfield
                prompt='Hexadecimal (Base-16)'
                value={hexadecimal}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleInputChange(e, 'hexadecimal')} />
        </div>
    )
}
