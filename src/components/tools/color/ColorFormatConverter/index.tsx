import { useState, useEffect } from 'react'
import { HexAlphaColorPicker } from 'react-colorful'
import tinycolor from 'tinycolor2'
import CopyButton from '../../../core/CopyButton'
import Textfield from '../../../core/Textfield'
import { copyToClipboard } from '../../../../utils/text'

import styles from './index.module.css'

export default function ColorFormatConverter() {

    const [state, setState] = useState({
        inputColor: '#ff0000',
        rgb: 'rgb(255, 0, 0)',
        hex: '#ff0000',
        hsl: 'hsl(0, 100%, 50%)',
        hsv: 'hsv(0, 100%, 100%)'
    })

    const handleChange = (input: string) => {
        setState(prev => {
            const t = tinycolor(input)
            return { ...prev,
                inputColor: input,
                rgb: t.toRgbString(),
                hex: t.toHexString(),
                hsl: t.toHslString(),
                hsv: t.toHsvString()
            }
        })
    }

    useEffect(() => {
        document.title = 'Color Format Converter'
    }, [])

    return (
        <div className={styles['container']}>
            <h1 className='tool-title'>Color Format Converter</h1>
            <Textfield
                value={state.inputColor}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleChange(e.target.value)}
                prompt='Color' />
            <div className={styles['bottom-container']}>
                <HexAlphaColorPicker color={state.hex} onChange={color => handleChange(color)} />
                <div className={styles['colors-container']}>
                    <div className={styles['color-container']}>
                        <span className={styles['color-container-title']}>Hex</span>
                        <div className={styles['color-container-value']}>{state.hex}</div>
                        <CopyButton label='Copy' onClick={() => copyToClipboard(state.hex)} isSmall={true} />
                    </div>
                    <div className={styles['color-container']}>
                        <span className={styles['color-container-title']}>RGBA</span>
                        <div className={styles['color-container-value']}>{state.rgb}</div>
                        <CopyButton label='Copy' onClick={() => copyToClipboard(state.rgb)} isSmall={true} />
                    </div>
                    <div className={styles['color-container']}>
                        <span className={styles['color-container-title']}>HSLA</span>
                        <div className={styles['color-container-value']}>{state.hsl}</div>
                        <CopyButton label='Copy' onClick={() => copyToClipboard(state.hsl)} isSmall={true} />
                    </div>
                    <div className={styles['color-container']}>
                        <span className={styles['color-container-title']}>HSVA</span>
                        <div className={styles['color-container-value']}>{state.hsv}</div>
                        <CopyButton label='Copy' onClick={() => copyToClipboard(state.hsv)} isSmall={true} />
                    </div>
                </div>
            </div> 
        </div>
    )
}
