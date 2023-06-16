import { useState, useEffect } from 'react'
import Button from '../../../core/Button'
import CopyButton from '../../../core/CopyButton'
import Textarea from '../../../core/Textarea'
import { toTitleCase } from '../../../../utils/text'
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
        <div className={`tool-container ${styles['container']}`}>
            <h1 className='tool-title'>Case Converter</h1>
            <div className={styles['top-button-container']}>
                <Button label='Clear' onClick={() => setText(() => '')} />
                <CopyButton value={text} buttonLook />
            </div>
            <div className={styles['bottom-button-container']}>
                <Button color='primary' label='UPPERCASE' onClick={() => setText(() => text.toUpperCase())} />
                <Button color='primary' label='lowercase' onClick={() => setText(() => text.toLowerCase())} />
                <Button color='primary' label='Title Case' onClick={() => setText(() => toTitleCase(text))} />
            </div>
            <Textarea value={text} readOnly={false} onChange={handleChange} />
        </div>
    )
}
