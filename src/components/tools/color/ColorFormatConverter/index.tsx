import { useState } from 'react'
import { HexAlphaColorPicker } from 'react-colorful'
import tinycolor from 'tinycolor2'
import Textfield from '../../../core/Textfield'
import DisplayField from '../../../core/DisplayField'
import usePageTitle from '../../../../hooks/usePageTitle'
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

    usePageTitle('Color Format Converter | Wapiti Web Tools')

    return (
        <div className={`tool-container ${styles['container']}`}>
            <h1 className='tool-title'>Color Format Converter</h1>
            <Textfield
                value={state.inputColor}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleChange(e.target.value)}
                prompt='Color' />
            <div className={styles['bottom-container']}>
                <HexAlphaColorPicker color={state.hex} onChange={color => handleChange(color)} />
                <div className={styles['colors-container']}>
                    <DisplayField 
                        value={state.hex}
                        label='Hex'
                        includeCopyButton
                    />
                    <DisplayField 
                        value={state.rgb}
                        label='RGB'
                        includeCopyButton
                    />
                    <DisplayField 
                        value={state.hsl}
                        label='HSLA'
                        includeCopyButton
                    />
                    <DisplayField 
                        value={state.hsv}
                        label='HSVA'
                        includeCopyButton
                    />
                </div>
            </div> 
        </div>
    )
}
