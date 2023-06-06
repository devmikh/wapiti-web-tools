import { useState, useEffect } from 'react'
import { HexColorPicker } from 'react-colorful'
import { generateTintsAndShades, formatColor } from '../../../utils/color'
import styles from './index.module.css'

export default function TintShadeGenerator() {

    const [state, setState] = useState({
        inputColor: 'ff0000',
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

    return (
        <div className={styles['container']}>
            <h1>Tint & Shade Generator</h1>
            <input value={state.inputColor} onChange={(e) => handleColorChange(e.target.value)} />
            <div>
                <label>Number of Tints & Shades</label>
                <input type='range' min={3} max={9} step={2} value={state.quantity} onChange={(e) => handleQuantityChange(e.target.value)}/>
                <span>{state.quantity}</span>
            </div>
            <div>
                <label>Tint Percentage</label>
                <input type='range' min={5} max={20} value={state.percentage} onChange={(e) => handlePercentageChange(e.target.value)} />
                <span>{state.percentage}%</span>
            </div>
            <div>
                <input id='hex' type='radio' name='format' value='hex' checked={state.format === 'hex'} onChange={(e) => handleFormatChange(e.target.value)}/>
                <label htmlFor='hex'>Hex</label>
                <input id='rgb' type='radio' name='format' value='rgb' checked={state.format === 'rgb'} onChange={(e) => handleFormatChange(e.target.value)}/>
                <label htmlFor='rgb'>RGB</label>
                <input id='hsl' type='radio' name='format' value='hsl' checked={state.format === 'hsl'} onChange={(e) => handleFormatChange(e.target.value)}/>
                <label htmlFor='hsl'>HSL</label>
                <input id='hsv' type='radio' name='format' value='hsv' checked={state.format === 'hsv'} onChange={(e) => handleFormatChange(e.target.value)}/>
                <label htmlFor='hsv'>HSV</label>
            </div>
            
            <HexColorPicker color={state.hex} onChange={color => handleColorChange(color)} />
            <div className={styles['colors-container']}>
                {state.resultArray.map((color: { value: string, displayValue: string}) => {
                    return (
                        <div className={styles['color-container']}>
                            <div style={{ backgroundColor: color.value }} className={styles['color-square']}></div>
                            <div className={styles['color-value-container']}>{color.displayValue}</div>
                        </div>   
                    )
                })}
            </div>
        </div>
    )
}
