import { useState } from 'react'
import Button from '../../../core/Button'
import CopyButton from '../../../core/CopyButton'
import Textarea from '../../../core/Textarea'
import { toTitleCase } from '../../../../utils/text'
import usePageTitle from '../../../../hooks/usePageTitle'
import { descriptions } from '../../../../assets/descriptions'
import styles from './index.module.css'

export default function CaseConverter() {
    
    const [text, setText] = useState('')

    const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setText(() => e.target.value)
    }

    usePageTitle('Case Converter | Wapiti Web Tools')

    return (
        <>
            <div className={`tool-container ${styles['container']}`}>
                <h1 className='tool-title'>Case Converter</h1>
                <div className={styles['editor']}>
                    <div className={styles['buttons']}>
                        <div className={styles['top-button-container']}>
                            <Button color='primary' label='UPPERCASE' onClick={() => setText(() => text.toUpperCase())} />
                            <Button color='primary' label='lowercase' onClick={() => setText(() => text.toLowerCase())} />
                            <Button color='primary' label='Title Case' onClick={() => setText(() => toTitleCase(text))} />
                        </div>
                        <div className={styles['bottom-button-container']}>
                            <Button label='Clear' onClick={() => setText(() => '')} />
                            <CopyButton value={text} buttonLook />
                        </div>
                    </div>
                    <div className={styles['input']}>
                        <Textarea value={text} readOnly={false} onChange={handleChange} placeholder='Enter Text...'/>
                    </div>
                </div>
                
                
            </div>
            <div className='description-container'>
                <h2 className='description-title'>Overview</h2>
                <p className='overview'>{descriptions.case_converter.overview.brief_overview}</p>
                <p className='options-title'>{descriptions.case_converter.overview.options_title}</p>
                <ul className='options-list'>
                    {descriptions.case_converter.overview.options.map((point, index) => (
                        <li key={index}>{point}</li>
                    ))}
                </ul>
                <h2 className='description-title'>How To Use</h2>
                <ol className='instructions-list'>
                    {descriptions.case_converter.instructions.map((point, index) => (
                        <li key={index}>{point}</li>
                    ))}
                </ol>
            </div>
        </>
        
    )
}
