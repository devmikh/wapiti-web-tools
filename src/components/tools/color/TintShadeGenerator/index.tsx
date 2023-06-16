import { useState, useEffect } from 'react'
import { HexColorPicker } from 'react-colorful'
import Textfield from '../../../core/Textfield'
import DisplayField from '../../../core/DisplayField'
import Range from '../../../core/Range'
import Radio from '../../../core/Radio'
import { generateTintsAndShades, formatColor } from '../../../../utils/color'
import styles from './index.module.css'

export default function TintShadeGenerator() {

    const [state, setState] = useState({
        inputColor: '#ff0000',
        hex: '#ff0000',
        quantity: '7',
        percentage: '10',
        format: 'hex',
        resultArray: []
    })

    const handleColorChange = (input: string) => {
        setState((prev: any) => {
            const hex = formatColor(input, 'hex')
            return { ...prev,
                inputColor: input,
                hex: hex
            }
        })
    }

    const handleQuantityChange = (input: string) => {
        setState(prev => ({ ...prev, quantity: input}))
    }

    const handlePercentageChange = (input: string) => {
        setState(prev => ({ ...prev, percentage: input}))
    }

    const handleFormatChange = (input: string) => {
        setState(prev => ({ ...prev, format: input }))
    }

    useEffect(() => {
        setState((prev: any) => {
            return { ...prev, resultArray: generateTintsAndShades(prev.hex, prev.quantity, prev.percentage, prev.format)}
        })
        
    }, [state.inputColor, state.quantity, state.percentage, state.format])

    useEffect(() => {
        document.title = 'Tint & Shade Generator | Wapiti Web Tools'
    }, [])

    return (
        <div className={`tool-container ${styles['container']}`}>
            <h1 className='tool-title'>Tint & Shade Generator</h1>
            <Textfield
                value={state.inputColor}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleColorChange(e.target.value)}
                prompt='Base color' />
            <div className={styles['form']}>
                <HexColorPicker color={state.hex} onChange={color => handleColorChange(color)} />
                <div className={styles['ranges-container']}>
                    <Range
                        prompt='Number of Tints and Shades:'
                        min={3}
                        max={9}
                        step={2}
                        value={state.quantity}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleQuantityChange(e.target.value)} />
                    <Range
                        prompt='Tint %:'
                        min={5}
                        max={20}
                        value={state.percentage}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => handlePercentageChange(e.target.value)} />
                </div>
            </div>
            <div className={styles['colors-container']}>
                {state.resultArray.map((color: { value: string, displayValue: string}) => {
                    return (
                        <div className={styles['color-container']}>
                            <div style={{ backgroundColor: color.value }} className={styles['color-square']}></div>
                            <DisplayField
                                value={color.displayValue}
                                includeCopyButton
                                small />
                        </div>   
                    )
                })}
            </div>
            <div className={styles['radios-container']}>
                <Radio
                    id="hex"
                    name="format"
                    value="hex"
                    checked={state.format === 'hex'}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleFormatChange(e.target.value)}
                    label='Hex' />
                <Radio
                    id="rgb"
                    name="format"
                    value="rgb"
                    checked={state.format === 'rgb'}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleFormatChange(e.target.value)}
                    label='RGB' />
                <Radio
                    id="hsl"
                    name="format"
                    value="hsl"
                    checked={state.format === 'hsl'}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleFormatChange(e.target.value)}
                    label='HSL' />
                <Radio
                    id="hsv"
                    name="format"
                    value="hsv"
                    checked={state.format === 'hsv'}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleFormatChange(e.target.value)}
                    label='HSV' />
            </div>
        </div>
    )
}
