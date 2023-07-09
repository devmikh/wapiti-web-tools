import { useState } from 'react'
import { copyToClipboard } from '../../../utils/text'
import copyIcon from '../../../assets/icons/copy.svg'
import checkIcon from '../../../assets/icons/check.svg'
import styles from './index.module.css'

type ButtonProps = {
    label: string,
    onClick?: Function,
    color?: string,
    disabled?: boolean,
    copyButton?: boolean,
    copyValue?: string
}

export default function Button(props: ButtonProps) {

    const { label, onClick, color, disabled, copyButton, copyValue } = props

    const [ copied, setCopied ] = useState(false)

    const handleCopy = () => {
        if (copyValue) copyToClipboard(copyValue)
        setCopied(true)
        setTimeout(() => {
            setCopied(false)
        }, 2250)
    }

    return (
        (copyButton ?
        <button className={`${styles['copy-button-container']} ${styles['button']}`} onClick={handleCopy}>
            <div className={styles['copy-button']} >
                {copied ?
                    <img src={checkIcon} width={20} className={styles['check-icon']} /> :
                    <img src={copyIcon} width={20} className={styles['copy-icon']}/>}
            </div>
            <span>{label}</span>
        </button> :
        <button
            disabled={disabled}
            onClick={onClick && (() => onClick())}
            className={`
                ${styles['button']}
                ${color && styles[color]}
                ${disabled && styles['disabled']}
            `}
            >
                {label}
        </button>)
    )
}
