import { useState, useEffect } from 'react'
import Button from '../../core/Button'
import Textarea from '../../core/Textarea'
import { toTitleCase, copyToClipboard } from '../../../utils/text'
import styles from './index.module.css'

export default function CaseConverter() {
    
    const [text, setText] = useState('')

    const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setText(() => e.target.value)
    }

    useEffect(() => {
        document.title = 'Case Converter'
    }, []);

    return (
        <div className={styles['container']}>
            <h1>Case Converter</h1>
            <div className={styles['button-container']}>
                <Button label='Copy Text' onClick={() => copyToClipboard(text)} />
                <Button label='Clear Text' onClick={() => setText(() => '')} />
            </div>
            <Textarea value={text} readOnly={false} onChange={handleChange} />
            <div className={styles['button-container']}>
                <Button label='UPPERCASE' onClick={() => setText(() => text.toUpperCase())} />
                <Button label='lowercase' onClick={() => setText(() => text.toLowerCase())} />
                <Button label='Title Case' onClick={() => setText(() => toTitleCase(text))} />
            </div>
        </div>
    )
}
