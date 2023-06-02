import { useState, useEffect } from 'react'
import tinycolor from 'tinycolor2'
import CopyButton from '../../core/CopyButton'
import { copyToClipboard } from '../../../utils/text'

import styles from './index.module.css'

export default function ColorFormatConverter() {

    const [state, setState] = useState({
        inputColor: 'ff0000',
        rgb: 'rgb(255, 0, 0)',
        hex: '#ff0000',
        hsl: 'hsl(0, 100%, 50%)',
        hsv: 'hsv(0, 100%, 100%)'
    })

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setState(prev => {
            const t = tinycolor(e.target.value)
            return { ...prev,
                inputColor: e.target.value,
                rgb: t.toRgbString(),
                hex: t.toHexString(),
                hsl: t.toHslString(),
                hsv: t.toHsvString()
            }
        })
        
    }

    useEffect(() => {
        document.title = 'Color Format Converter'
    }, []);

    return (
        <div className={styles['container']}>
            <h1>Color Format Converter</h1>
            <div className={styles['color-display']} style={{ backgroundColor: state.hex }}>
                <div className={styles['form-container']}>
                    <span className={styles['prompt']}>Enter color in any format</span>
                    <input value={state.inputColor} onChange={handleChange} className={styles['input']} placeholder='Color...'/>
                    <div className={styles['color-container']}>
                        <span className={styles['color-container-title']}>RGB</span>
                        <div className={styles['color-container-value']}>{state.rgb}</div>
                        <CopyButton label='Copy' onClick={() => copyToClipboard(state.rgb)} isSmall={true} />
                    </div>
                    <div className={styles['color-container']}>
                        <span className={styles['color-container-title']}>Hex</span>
                        <div className={styles['color-container-value']}>{state.hex}</div>
                        <CopyButton label='Copy' onClick={() => copyToClipboard(state.hex)} isSmall={true} />
                    </div>
                    <div className={styles['color-container']}>
                        <span className={styles['color-container-title']}>HSL</span>
                        <div className={styles['color-container-value']}>{state.hsl}</div>
                        <CopyButton label='Copy' onClick={() => copyToClipboard(state.hsl)} isSmall={true} />
                    </div>
                    <div className={styles['color-container']}>
                        <span className={styles['color-container-title']}>HSV</span>
                        <div className={styles['color-container-value']}>{state.hsv}</div>
                        <CopyButton label='Copy' onClick={() => copyToClipboard(state.hsv)} isSmall={true} />
                    </div>
                </div>
            </div>
            
        </div>
    )
}
