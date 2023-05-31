import { useState, useEffect } from "react"
import Button from '../../Button';
import { countWords } from "../../../utils/text"
import styles from './index.module.css'

export default function CharacterCounter() {
    const [ text, setText ] = useState('')
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
    
    return (
        <div className={styles['container']}>
            <h1>Character Counter</h1>
            <Button label='Clear Text' clickHandler={() => setText(() => '')} />
            <textarea value={text} onChange={handleChange} className={styles['textarea']} />
            <div className={styles['counters-container']}>
                <div className={styles['counter']}><span>characters</span><div className={styles['counter-number']}>{characterCounter}</div></div>
                <div className={styles['counter']}><span>words</span><div className={styles['counter-number']}>{wordCounter}</div></div>
            </div>
            
        </div>
    )
}