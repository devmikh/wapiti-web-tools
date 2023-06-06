import styles from './index.module.css'

type TextfieldPropsType = {
    prompt: string,
    value: string,
    onChange: Function
}

export default function Textfield(props: TextfieldPropsType) {

    const { value, onChange, prompt } = props

    return (
        <div className={styles['textfield']}>
            <span className={styles['prompt']}>{prompt}</span>
            <input
                value={value}
                onChange={(e) => onChange(e)}
                className={styles['input']}/>
        </div>
    )
}
