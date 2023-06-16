import { useState } from 'react'
import { copyToClipboard } from '../../../utils/text'
import styles from './index.module.css'
import copyIcon from '../../../assets/icons/copy.svg'
import checkIcon from '../../../assets/icons/check.svg'

type CopyButtonPropsType = {
    value: string,
    buttonLook?: boolean,
    small?: boolean,
    style?: {},
}

export default function CopyButton(props: CopyButtonPropsType) {
    
    const { value, buttonLook = false, small = false, style } = props

    const [ copied, setCopied ] = useState(false)

    const handleClick = () => {
        copyToClipboard(value)
        setCopied(true)
        setTimeout(() => {
            setCopied(false)
        }, 2250)
    }

    return (
        (buttonLook ?
        <div className={styles['copy-button-container']} onClick={handleClick}>
            
            <div className={styles['copy-button']} style={style}>
                {copied ?
                    <img src={checkIcon} width={20} className={styles['check-icon']} /> :
                    <img src={copyIcon} width={20} className={styles['copy-icon']}/>}
            </div>
            <span>Copy</span>
        </div> :
        <div className={styles['copy-button']} onClick={handleClick} style={style}>
                {copied ?
                    <img src={checkIcon} width={small ? 18 : 28} className={styles['check-icon']} /> :
                    <img src={copyIcon} width={small ? 18 : 28} className={styles['copy-icon']}/>}
        </div>)
    )
}
