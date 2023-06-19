import { useState, useRef, useEffect } from 'react'
import { HexColorPicker } from 'react-colorful'
import { formatColor } from '../../../utils/color'
import styles from './index.module.css'

type TextfieldProps = {
    prompt: string,
    value: string,
    onChange?: Function,
    disabled?: boolean,
    includeColorPicker?: boolean
}

export default function Textfield(props: TextfieldProps) {

    const { value, onChange, prompt, disabled, includeColorPicker = false } = props

    // Code related purely to color picker, if it is included
    const [showColorPicker, setShowColorPicker] = useState(false)
    const colorPickerRef = useRef<HTMLDivElement>(null);

    const handleChange = (color: string) => {
        if (onChange) {
            onChange(color)
        }
    }

    const handleClick = () => {
        setShowColorPicker(prev => !prev);
    }
    
    useEffect(() => {
        function handleClickOutside(event: PointerEvent) {
            if (colorPickerRef.current && !colorPickerRef.current.contains(event.target as Node)) {
                setShowColorPicker(false)
            }
        }
    
        document.addEventListener('pointerdown', handleClickOutside)
        return () => {
            document.removeEventListener('pointerdown', handleClickOutside)
        }
    }, [])
    // End of code, related to color picker

    return (
        <div className={styles['textfield']}>
            <span className={styles['prompt']}>{prompt}</span>
            {includeColorPicker ?
                // With color picker
                <div className={styles['color-input-container']}>
                    <div
                        className={styles['color-button']}
                        style={{ backgroundColor: formatColor(value, 'hex') }}
                        onClick={handleClick}></div>
                    {showColorPicker &&
                        <div ref={colorPickerRef} className={styles['color-picker-container']}>
                            <HexColorPicker color={formatColor(value, 'hex')} onChange={color => handleChange(color)} />
                        </div>}
                    <input
                    disabled={disabled}
                    value={value}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleChange(e.target.value)}
                    className={styles['input']}/>
                </div> :
                // Without color picker
                <input
                    disabled={disabled}
                    value={value}
                    onChange={onChange && ((e) => onChange(e))}
                    className={styles['input']}/>
            }      
        </div>
    )
}
