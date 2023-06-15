import styles from './index.module.css'

type TextfieldPropsType = {
    prompt: string,
    value: string,
    onChange?: Function,
    disabled?: boolean
}

export default function Textfield(props: TextfieldPropsType) {

    const { value, onChange, prompt, disabled } = props

    return (
        <div className={styles['textfield']}>
            <span className={styles['prompt']}>{prompt}</span>
            <input
                disabled={disabled}
                value={value}
                onChange={onChange && ((e) => onChange(e))}
                className={styles['input']}/>
        </div>
    )
}
