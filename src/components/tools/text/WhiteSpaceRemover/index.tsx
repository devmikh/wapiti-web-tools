import { useState } from 'react'
import usePageTitle from '../../../../hooks/usePageTitle'
import Button from '../../../core/Button'
import CopyButton from '../../../core/CopyButton'
import Textarea from '../../../core/Textarea'
import { removeWhiteSpace } from '../../../../utils/text'
import styles from './index.module.css'

export default function WhiteSpaceRemover() {
    
    const [text, setText] = useState('')

    usePageTitle('White Space Remover | Wapiti Web Tools')

    return (
        <div className={`tool-container ${styles['container']}`}>
            <h1 className='tool-title'>White Space Remover</h1>
            <Button
                color='primary'
                label='Remove White Space'
                onClick={() => setText(() => removeWhiteSpace(text))}
                size='large'/>
            <div className={styles['button-container']}>
                <Button label='Clear' onClick={() => setText(() => '')} />
                <CopyButton value={text} buttonLook />
            </div>
            <Textarea
                value={text}
                readOnly={false}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setText(e.target.value)}
                placeholder='Enter Text...'/>
        </div>
    )
}
