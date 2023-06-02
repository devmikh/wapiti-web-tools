import { useState } from 'react'
import styles from './index.module.css'

export default function CopyButton(props: { label: string, onClick: Function, isSmall?: boolean }) {

    const { label, onClick, isSmall } = props
    const [ copied, setCopied ] = useState(false)

    const handleClick = () => {
        onClick()
        setCopied(() => {
            return true
        })
        setTimeout(() => {
            setCopied(() => {
                return false
            })
        }, 3000)
    }

    return (
        <button onClick={handleClick} className={`${styles['button']} ${isSmall ? styles['small'] : ''}`}>{copied ? 'Copied!' : label}</button>
    )
}
