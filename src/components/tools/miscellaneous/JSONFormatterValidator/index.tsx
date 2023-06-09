import { useState, useEffect } from 'react'
import Textarea from '../../../core/Textarea'
import Button from '../../../core/Button'
// import CopyButton from '../../../core/CopyButton'
import usePageTitle from '../../../../hooks/usePageTitle'
import { formatAndValidateJSON } from '../../../../utils/misc'
import styles from './index.module.css'

export default function JSONFormatterValidator() {

    const [input, setInput] = useState('')
    const [output, setOutput] = useState<string | null>('')
    const [statusColor, setStatusColor] = useState('')

    useEffect(() => {
        setOutput(formatAndValidateJSON(input))
    }, [input])

    useEffect(() => {
        if (output === 'Invalid JSON') {
            setStatusColor('red')
        } else if (output === '') {
            setStatusColor('')
        } else {
            setStatusColor('green')
        }
    }, [output])

    usePageTitle('JSON Formatter & Validator | Wapiti Web Tools')

    return (
        <div className={`tool-container ${styles['container']}`}>
            <h1 className='tool-title'>JSON Formatter & Validator</h1>
            <div className={styles['buttons-container']}>
                <Button label='Clear' onClick={() => setInput('')} />
                <Button copyButton copyValue={output ? output : ''} label='Copy' />
            </div>
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
