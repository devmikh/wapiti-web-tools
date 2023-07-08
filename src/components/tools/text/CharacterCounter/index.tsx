import { useState, useEffect } from 'react'
import Button from '../../../core/Button'
import Textarea from '../../../core/Textarea'
import { countWords } from '../../../../utils/text'
import usePageTitle from '../../../../hooks/usePageTitle'
import { descriptions } from '../../../../assets/descriptions'
import styles from './index.module.css'

export default function CharacterCounter() {
    const [text, setText] = useState('')
    const [characterCounter, setCharacterCounter] = useState(0)
    const [wordCounter, setWordCounter] = useState(0)

    const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setText(() => e.target.value)
    }

    useEffect(() => {
        setCharacterCounter(text.length)
        if (text.length === 0) {
            setWordCounter(0) 
        } else {
            setWordCounter(countWords(text))
        }
    }, [text])
    
    usePageTitle('Character Counter | Wapiti Web Tools')

    return (
        <>
            <div className={`tool-container ${styles['container']}`}>
                <h1 className='tool-title'>Character Counter</h1>
                <Button label='Clear' onClick={() => setText(() => '')} />
                
                <Textarea value={text} readOnly={false} onChange={handleChange} placeholder='Enter Text...' />
                <div className={styles['counters-container']}>
                    <div className={styles['counter']}><span>characters</span><div className={styles['counter-number']}>{characterCounter}</div></div>
                    <div className={styles['counter']}><span>words</span><div className={styles['counter-number']}>{wordCounter}</div></div>
                </div>
            </div>
            <div className='description-container'>
                <h2 className='description-title'>Overview</h2>
                <p className='overview'>{descriptions.character_counter.overview}</p>
                <h2 className='description-title'>How To Use</h2>
                <ol className='instructions-list'>
                    {descriptions.character_counter.instructions.map((point, index) => (
                        <li key={index}>{point}</li>
                    ))}
                </ol>
            </div>
        </>
    )
}
