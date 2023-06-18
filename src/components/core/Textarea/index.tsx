import styles from './index.module.css'

type TextareaProps = {
    value: string,
    readOnly: boolean,
    placeholder?: string, 
    onChange?: Function
}

export default function Textarea(props: TextareaProps) {

    const { value, readOnly, placeholder, onChange } = props

    return (
        <textarea
            value={value}
            onChange={onChange && ((e) => onChange(e))}
            placeholder={placeholder}
            readOnly={readOnly}
            spellCheck={false}
            className={styles['textarea']} />
    )
}
