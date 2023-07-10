import { useState } from 'react'
import tinycolor from 'tinycolor2'
import Textfield from '../../../core/Textfield'
import DisplayField from '../../../core/DisplayField'
import usePageTitle from '../../../../hooks/usePageTitle'
import { descriptions } from '../../../../assets/descriptions'
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
        <>
            <div className={`tool-container ${styles['container']}`}>
                <h1 className='tool-title'>Color Format Converter</h1>
                <Textfield
                    includeColorPicker
                    value={state.inputColor}
                    onChange={(color: string) => handleChange(color)}
                    prompt='Color' />
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
                        label='HSL'
                        includeCopyButton
                    />
                    <DisplayField 
                        value={state.hsv}
                        label='HSV'
                        includeCopyButton
                    />
                </div>
            </div>
            <div className='description-container'>
                <h2 className='description-title'>Overview</h2>
                <p className='overview'>{descriptions.color_format_converter.overview.brief_overview}</p>
                <p className='options-title'>{descriptions.color_format_converter.overview.options_title}</p>
                <ul className='options-list'>
                    {descriptions.color_format_converter.overview.options.map((point, index) => (
                        <li key={index}><span className='emphasized'>{point}</span></li>
                    ))}
                </ul>
                <h2 className='description-title'>How To Use</h2>
                <ol className='instructions-list'>
                    {descriptions.color_format_converter.instructions.map((point, index) => (
                        <li key={index}>{point}</li>
                    ))}
                </ol>
            </div>
        </>
        
    )
}
