import styles from './index.module.css'

type RangeProps = {
    prompt: string,
    min: number,
    max: number,
    step?: number,
    value: number,
    onChange: Function
}

export default function Range(props: RangeProps) {

    const { prompt, min, max, step, value, onChange } = props

    return (
        <div className={styles['container']}>
            <div className={styles['title']}>
                <label className={styles['prompt']}>{prompt}</label>
                <span className={styles['value']}>{value}</span>
            </div>
            <input
                type='range'
                min={min}
                max={max}
                step={step ? step : 1}
                value={value}
                onChange={(e) => onChange(e)}
                className={styles['range']} />
        </div>
    )
}
