import styles from './index.module.css'

type RadioPropsType = {
    id: string,
    name: string,
    value: any,
    checked: boolean,
    onChange: Function,
    label: string
}

export default function Radio(props: RadioPropsType) {

    const { id, name, value, checked, onChange, label } = props

    return (
        <div className={styles['container']}>
            <input
                id={id}
                type='radio'
                name={name}
                value={value}
                checked={checked}
                onChange={(e) => onChange(e)}
                className={styles['radio']} />
            <label htmlFor={id} className={styles['label']}>{label}</label>
        </div>
    )
}
