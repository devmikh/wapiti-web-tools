import { useState, useEffect } from 'react'
import usePageTitle from '../../../../hooks/usePageTitle'
import Textfield from '../../../core/Textfield'
import Range from '../../../core/Range'
import DisplayField from '../../../core/DisplayField'
import { descriptions } from '../../../../assets/descriptions'
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
        <>
            <div className={`tool-container ${styles['container']}`}>
                <h1 className='tool-title'>Gradient Generator</h1>
                <div className={styles['textfields-container']}>
                    <Textfield
                        prompt='Color #1'
                        value={firstColor}
                        onChange={setFirstColor}
                        includeColorPicker />
                    <Textfield
                        prompt='Color #2'
                        value={secondColor}
                        onChange={setSecondColor}
                        includeColorPicker />
                </div>
                <Range
                    measurementUnitLabel='°'
                    prompt='Angle:'
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
                        includeCopyButton />
                </div>
            </div>
            <div className='description-container'>
                <h2 className='description-title'>Overview</h2>
                <p className='overview'>{descriptions.gradient_generator.overview}</p>
                <h2 className='description-title'>How To Use</h2>
                <ol className='instructions-list'>
                    {descriptions.gradient_generator.instructions.map((point, index) => (
                        <li key={index}>{point}</li>
                    ))}
                </ol>
            </div>
        </>
        
    )
}
