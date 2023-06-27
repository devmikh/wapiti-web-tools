import { useState, useEffect } from 'react'
import usePageTitle from '../../../../hooks/usePageTitle'
import Textfield from '../../../core/Textfield'
import Range from '../../../core/Range'
import DisplayField from '../../../core/DisplayField'
import styles from './index.module.css'

export default function GradientGenerator() {
    
    const [firstColor, setFirstColor] = useState('#ff0000')
    const [secondColor, setSecondColor] = useState('#0000ff')
    const [angle, setAngle] = useState(0)
    const [gradientCSS, setGradientCSS] = useState('linear-gradient(0deg, #ff0000, #0000ff)')
    const [resultString, setResultString] = useState('background: linear-gradient(0deg, #ff0000, #0000ff)')

    useEffect(() => {
        setGradientCSS(`linear-gradient(${angle}deg, ${firstColor}, ${secondColor})`)
        setResultString(`background: linear-gradient(${angle}deg, ${firstColor}, ${secondColor})`)
    }, [firstColor, secondColor, angle])

    usePageTitle('Gradient Generator | Wapiti Web Tools')

    return (
        <div className={`tool-container ${styles['container']}`}>
            <h1 className='tool-title'>Gradient Generator</h1>
            <div className={styles['textfields-container']}>
                <Textfield
                    prompt='First Color'
                    value={firstColor}
                    onChange={setFirstColor}
                    includeColorPicker />
                <Textfield
                    prompt='Second Color'
                    value={secondColor}
                    onChange={setSecondColor}
                    includeColorPicker />
            </div>
            <Range
                prompt='Angle'
                min={0}
                max={360}
                value={angle}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setAngle(Number(e.target.value))}
                />
            <div className={styles['preview']} style={{ background: gradientCSS }}></div>
            <div className={styles['display-container']}>
                <DisplayField
                    label='CSS'
                    value={resultString}
                    size='large'
                    includeCopyButton />
            </div>
        </div>
    )
}
