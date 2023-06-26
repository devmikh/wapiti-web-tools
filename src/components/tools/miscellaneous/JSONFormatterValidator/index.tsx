import { useState, useEffect } from 'react'
import Textarea from '../../../core/Textarea'
import Button from '../../../core/Button'
import CopyButton from '../../../core/CopyButton'
import usePageTitle from '../../../../hooks/usePageTitle'
import { formatAndValidateJSON } from '../../../../utils/misc'
import styles from './index.module.css'

export default function JSONFormatterValidator() {

    const [input, setInput] = useState('')
    const [output, setOutput] = useState<string | null>('')
    const [error, setError] = useState('')
    const [statusColor, setStatusColor] = useState('')

    useEffect(() => {
        setOutput(formatAndValidateJSON(input))
    }, [input])

    useEffect(() => {
        if (output === null) {
            setError('Invalid JSON')
            setStatusColor('red')
        } else if (output === '') {
            setError('')
            setStatusColor('')
        } else {
            setError('')
            setStatusColor('green')
        }
    }, [output])

    usePageTitle('JSON Formatter & Validator | Wapiti Web Tools')

    return (
        <div className={`tool-container ${styles['container']}`} style={{ gap: '0'}}>
            <h1 className='tool-title'>JSON Formatter & Validator</h1>
            <div className={styles['buttons-container']}>
                <Button label='Clear' onClick={() => setInput('')} />
                <CopyButton value={output ? output : ''} buttonLook />
            </div>
            <span className={styles['error']}>{error}</span>
            <div className={styles['textareas-container']}>
                <Textarea
                    value={input}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setInput(e.target.value)}
                    placeholder='Enter raw JSON'/>
                <Textarea
                    value={output ? output : ''}
                    readOnly
                    statusColor={statusColor} />
            </div>
        </div>
    )
}
