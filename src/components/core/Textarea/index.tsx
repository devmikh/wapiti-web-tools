import styles from './index.module.css'

type TextareaProps = {
    value: string,
    readOnly?: boolean,
    placeholder?: string, 
    onChange?: Function,
    small?: boolean
    maxLength?: number,
    statusColor?: string
}

export default function Textarea(props: TextareaProps) {

    const { value, readOnly = false, placeholder, onChange, small = false, maxLength, statusColor = '' } = props

    return (
        <textarea
            value={value}
            onChange={onChange && ((e) => onChange(e))}
            placeholder={placeholder}
            readOnly={readOnly}
            disabled={readOnly}
            spellCheck={false}
            className={`${styles['textarea']} ${styles[statusColor]}`}
            style={small ? {height: '10rem'} : {}}
            maxLength={maxLength}/>
    )
}
