import { useState } from 'react'
import usePageTitle from '../../../../hooks/usePageTitle'
import Button from '../../../core/Button'
import Textarea from '../../../core/Textarea'
import { removeWhiteSpace } from '../../../../utils/text'
import { descriptions } from '../../../../assets/descriptions'
import styles from './index.module.css'

export default function WhiteSpaceRemover() {
    
    const [text, setText] = useState('')

    usePageTitle('White Space Remover | Wapiti Web Tools')

    return (
        <>
            <div className={`tool-container ${styles['container']}`} style={{ gap: '1rem' }}>
                <h1 className='tool-title'>White Space Remover</h1>
                <Button
                    color='primary'
                    label='Remove White Space'
                    onClick={() => setText(() => removeWhiteSpace(text))} />
                
                <div className={styles['buttons-container']}>
                    <Button label='Clear' onClick={() => setText(() => '')} />
                    <Button copyButton copyValue={text} label='Copy' />
                </div>
                <Textarea
                    value={text}
                    readOnly={false}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setText(e.target.value)}
                    placeholder='Enter Text...'/>
            </div>
            <div className='description-container'>
                <h2 className='description-title'>Overview</h2>
                <p className='overview'>{descriptions.white_space_remover.overview.brief_overview}</p>
                <p className='options-title'>{descriptions.white_space_remover.overview.options_title}</p>
                <ul className='options-list'>
                    {descriptions.white_space_remover.overview.options.map((point, index) => (
                        <li key={index}>{point}</li>
                    ))}
                </ul>
                <h2 className='description-title'>How To Use</h2>
                <ol className='instructions-list'>
                    {descriptions.white_space_remover.instructions.map((point, index) => (
                        <li key={index}>{point}</li>
                    ))}
                </ol>
            </div>
        </>
        
    )
}
