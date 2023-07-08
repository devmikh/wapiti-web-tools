import { useState } from 'react'
import { copyToClipboard } from '../../../utils/text'
import styles from './index.module.css'
import copyIcon from '../../../assets/icons/copy.svg'
import checkIcon from '../../../assets/icons/check.svg'

type CopyButtonProps = {
    value: string,
    small?: boolean,
    style?: {},
}

export default function CopyButton(props: CopyButtonProps) {
    
    const { value, small = false, style } = props

    const [ copied, setCopied ] = useState(false)

    const handleClick = () => {
        copyToClipboard(value)
        setCopied(true)
        setTimeout(() => {
            setCopied(false)
        }, 2250)
    }

    return (
        <div className={styles['copy-button']} onClick={handleClick} style={style}>
                {copied ?
                    <img src={checkIcon} width={small ? 18 : 28} className={styles['check-icon']} /> :
                    <img src={copyIcon} width={small ? 18 : 28} className={styles['copy-icon']}/>}
        </div>
    )
}
