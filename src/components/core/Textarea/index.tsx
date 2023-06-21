import styles from './index.module.css'

type TextareaProps = {
    value: string,
    readOnly?: boolean,
    placeholder?: string, 
    onChange?: Function,
    small?: boolean
    maxLength?: number
}

export default function Textarea(props: TextareaProps) {

    const { value, readOnly = false, placeholder, onChange, small = false, maxLength } = props

    return (
        <textarea
            value={value}
            onChange={onChange && ((e) => onChange(e))}
            placeholder={placeholder}
            readOnly={readOnly}
            spellCheck={false}
            className={styles['textarea']}
            style={small ? {height: '10rem'} : {}}
            maxLength={maxLength}/>
    )
}
