import { useState, useEffect } from 'react'
import { LoremIpsum } from 'lorem-ipsum'
import CopyButton from '../../../core/CopyButton'
import Textarea from '../../../core/Textarea'
import Range from '../../../core/Range'
import { copyToClipboard } from '../../../../utils/text'
import styles from './index.module.css'

export default function DummyTextGenerator() {

    const [state, setState] = useState({
        text: '',
        format: 'p',
        amount: 4,
        maxAmount: 50
    })

    const handleAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setState(prev => ({ ...prev, amount: Number(e.target.value)}))
    }

    const handleFormatChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        let maxAmount: number
        let amount: number
        switch(e.target.value) {
            case 'p':
                maxAmount = 50
                break
            case 's':
                maxAmount = 250
                break
            case 'w':
                maxAmount = 1000
                break
            default:
                maxAmount = 50
                break
        }
        if (state.amount > maxAmount) {
            amount = maxAmount
        } else {
            amount = state.amount
        }
        setState(prev => ({ ...prev, format: e.target.value, amount: amount, maxAmount: maxAmount }))
    }

    useEffect(() => {
        document.title = 'Dummy Text Generator'
    }, [])

    useEffect(() => {
        const lorem = new LoremIpsum({
            sentencesPerParagraph: {
              max: 8,
              min: 4
            },
            wordsPerSentence: {
              max: 8,
              min: 4
            }
        })
        
        setState((prev) => {
            let generatedText
            switch(prev.format) {
                case 'p':
                    generatedText = lorem.generateParagraphs(prev.amount)
                    break
                case 's':
                    generatedText = lorem.generateSentences(prev.amount)
                    break
                case 'w':
                    generatedText = lorem.generateWords(prev.amount)
                    break
                default:
                    generatedText = lorem.generateSentences(prev.amount)
                    break
            }
            return { 
                ...prev,
                text: generatedText
            }
        })
    }, [state.amount, state.format])

    return (
        <div className={styles['container']}>
            <h1 className='tool-title'>Dummy Text Generator</h1>
            <CopyButton label='Copy Text' onClick={() => copyToClipboard(state.text)} />
            <Textarea value={state.text} readOnly={true} />
            <form className={styles['form']}>
                <Range
                    prompt='Quantity'
                    min={1}
                    max={state.maxAmount}
                    value={state.amount}
                    onChange={handleAmountChange} />
                <div className={styles['format-container']}>
                    <div>
                        <input type='radio' id='p' name='format' value='p' checked={state.format === 'p'} onChange={handleFormatChange} />
                        <label htmlFor='p'>Paragraphs</label>
                    </div>
                    <div>
                        <input type='radio' id='s' name='format' value='s' checked={state.format === 's'} onChange={handleFormatChange} />
                        <label htmlFor='s'>Sentences</label>
                    </div>
                    <div>
                        <input type='radio' id='w' name='format' value='w' checked={state.format === 'w'} onChange={handleFormatChange} />
                        <label htmlFor='w'>Words</label>
                    </div>
                </div>
            </form>
        </div>
    )
}
