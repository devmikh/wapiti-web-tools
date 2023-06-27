import { useState, useEffect } from 'react'
import { HexColorPicker } from 'react-colorful'
import Textfield from '../../../core/Textfield'
import DisplayField from '../../../core/DisplayField'
import Range from '../../../core/Range'
import Radio from '../../../core/Radio'
import usePageTitle from '../../../../hooks/usePageTitle'
import { generateTintsAndShades, formatColor } from '../../../../utils/color'
import styles from './index.module.css'

type GeneratedTint = {
    value: string,
    displayValue: string
}

type TintAndShadeGeneratorState = {
    inputColor: string,
    hex: string,
    quantity: number,
    percentage: number,
    format: string,
    resultArray: GeneratedTint[]
}

export default function TintShadeGenerator() {

    const [state, setState] = useState<TintAndShadeGeneratorState>({
        inputColor: '#ff0000',
        hex: '#ff0000',
        quantity: 7,
        percentage: 10,
        format: 'hex',
        resultArray: []
    })

    const handleColorChange = (input: string) => {
        setState((prev) => {
            const hex = formatColor(input, 'hex')
            return { ...prev,
                inputColor: input,
                hex: hex
            }
        })
    }

    const handleQuantityChange = (input: number) => {
        setState(prev => ({ ...prev, quantity: input}))
    }

    const handlePercentageChange = (input: number) => {
        setState(prev => ({ ...prev, percentage: input}))
    }

    const handleFormatChange = (input: string) => {
        setState(prev => ({ ...prev, format: input }))
    }

    useEffect(() => {
        setState(prev => {
            return { ...prev, resultArray: generateTintsAndShades(prev.hex, prev.quantity, prev.percentage, prev.format)}
        })
        
    }, [state.inputColor, state.quantity, state.percentage, state.format])

    usePageTitle('Tint & Shade Generator | Wapiti Web Tools')

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
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleQuantityChange(Number(e.target.value))} />
                    <Range
                        measurementUnitLabel='%'
                        prompt='Tint:'
                        min={5}
                        max={20}
                        value={state.percentage}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => handlePercentageChange(Number(e.target.value))} />
                </div>
            </div>
            <div className={styles['colors-container']}>
                {state.resultArray.map((color: { value: string, displayValue: string}, index) => {
                    return (
                        <div key={index} className={styles['color-container']}>
                            <div style={{ backgroundColor: color.value }} className={styles['color-square']}></div>
                            <DisplayField
                                value={color.displayValue}
                                includeCopyButton
                                size='small' />
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
