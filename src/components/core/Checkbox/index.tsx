import styles from './index.module.css'

type CheckboxPropsType = {
    id: string,
    name: string,
    checked: boolean,
    onChange: Function,
    label: string
}

export default function Checkbox(props: CheckboxPropsType) {

    const { id, name, checked, onChange, label } = props

    return (
        <div className={styles['container']}>
            <input
                id={id}
                type='checkbox'
                name={name}
                checked={checked}
                onChange={(e) => onChange(e)}
                className={styles['checkbox']} />
            <label htmlFor={id} className={styles['label']}>{label}</label>
        </div>
    )
}
