import { useState, useEffect } from 'react'
import Textfield from '../../../core/Textfield'
import { formatColor, calculateContrastRatio } from '../../../../utils/color'
import usePageTitle from '../../../../hooks/usePageTitle'
import switchIcon from '../../../../assets/icons/switch.svg'
import switchHorizontalIcon from '../../../../assets/icons/switch-horizontal.svg'
import { descriptions } from '../../../../assets/descriptions'
import styles from './index.module.css'

export default function ContrastChecker() {
    
    const [ textColor, setTextColor ] = useState('#000000')
    const [ backgroundColor, setBackgroundColor ] = useState('#ffffff')
    const [ ratio, setRatio ] = useState<number | null>(null)
    const [ ratioColor, setRatioColor ] = useState('')
    const [ smallTextAA, setSmallTextAA] = useState(false)
    const [ smallTextAAA, setSmallTextAAA] = useState(false)
    const [ largeTextAA, setLargeTextAA] = useState(false)
    const [ largeTextAAA, setLargeTextAAA] = useState(false)

    const handleTextColorChange = (color: string) => {
        setTextColor(color)
    }

    const handleBackgroundColorChange = (color: string) => {
        setBackgroundColor(color)
    }

    const switchColors = () => {
        setTextColor(backgroundColor)
        setBackgroundColor(textColor)
    }

    useEffect(() => {
        const ratio = calculateContrastRatio(textColor, backgroundColor)
        let ratioColor = 'var(--status-green)'
        if (ratio >= 7) {
            setSmallTextAA(true)
            setSmallTextAAA(true)
            setLargeTextAA(true)
            setLargeTextAAA(true)
            ratioColor = 'var(--status-green)'
        } else if (ratio < 7 && ratio >= 4.5) {
            setSmallTextAA(true)
            setSmallTextAAA(false)
            setLargeTextAA(true)
            setLargeTextAAA(true)
            ratioColor = 'var(--status-yellow)'
        } else if (ratio < 4.5 && ratio >= 3) {
            setSmallTextAA(false)
            setSmallTextAAA(false)
            setLargeTextAA(true)
            setLargeTextAAA(false)
            ratioColor = 'var(--status-orange)'
        } else {
            setSmallTextAA(false)
            setSmallTextAAA(false)
            setLargeTextAA(false)
            setLargeTextAAA(false)
            ratioColor = 'var(--status-red)'
        }
        setRatio(ratio)
        setRatioColor(ratioColor)
    }, [textColor, backgroundColor])

    usePageTitle('Contrast Checker | Wapiti Web Tools')

    return (
        <>
            <div className={`tool-container ${styles['container']}`}>
                <h1 className='tool-title'>Contrast Checker</h1>

                {/* Color Inputs */}
                <div className={styles['textfields-container']}>
                    <Textfield
                        prompt='Text Color'
                        value={textColor}
                        includeColorPicker
                        onChange={(color: string) => handleTextColorChange(color)}
                    />
                    <button className={styles['switch-button']} onClick={switchColors}>
                        <img src={switchHorizontalIcon} height={16} className={styles['switch-horizontal']} />
                        <img src={switchIcon} height={16} className={styles['switch-vertical']} />
                    </button>
                    <Textfield
                        prompt='Background Color'
                        value={backgroundColor}
                        includeColorPicker
                        onChange={(color: string) => handleBackgroundColorChange(color)}
                    />
                </div>
                
                {/* Preview text */}
                <div className={`${styles['preview']} ${styles['small']}`} style={{ backgroundColor: formatColor(backgroundColor, 'hex') }}>
                    <span style={{ color: formatColor(textColor, 'hex') }}>Small text preview</span>
                </div>
                <div className={`${styles['preview']} ${styles['large']}`} style={{ backgroundColor: formatColor(backgroundColor, 'hex') }}>
                    <span style={{ color: formatColor(textColor, 'hex') }}>Large text preview</span>
                </div>

                {/* Ratio */}
                <div className={styles['ratio-container']}>
                    <span>Contrast Ratio</span>
                    <div className={styles['ratio-value-container']} style={{ backgroundColor: ratioColor}}>{ratio}</div>
                </div>
                

                {/* Guidelines Compliance Table */}
                <div className={styles['guide-table-container']}>
                    <span className={styles['guide-table-title']}>
                        <a href='https://www.w3.org/WAI/standards-guidelines/wcag/' target='_blank'>WCAG 2.1</a> Compliance Table:
                    </span>
                    <table className={styles['guide-table']}>
                        <tbody>
                            <tr>
                                <th className={styles['guide-table-type']}>Type</th>
                                <th className={styles['guide-table-standard']}>
                                    <a href='https://www.w3.org/TR/UNDERSTANDING-WCAG20/visual-audio-contrast-contrast.html' target='_blank'>AA</a>
                                </th>
                                <th className={styles['guide-table-standard']}>
                                    <a href='https://www.w3.org/TR/UNDERSTANDING-WCAG20/visual-audio-contrast7.html' target='_blank'>AAA</a>
                                </th>
                            </tr>
                            <tr>
                                <td className={styles['guide-table-type']}>Small text</td>
                                <td
                                    className={styles['guide-table-result']}
                                    style={{ backgroundColor: smallTextAA ? 'var(--status-green)' : 'var(--status-red)'}}
                                    >
                                    {smallTextAA ? 'Pass' : 'Fail'}
                                </td>
                                <td
                                    className={styles['guide-table-result']}
                                    style={{ backgroundColor: smallTextAAA ? 'var(--status-green)' : 'var(--status-red)'}}
                                    >
                                    {smallTextAAA ? 'Pass' : 'Fail'}  
                                </td>
                            </tr>
                            <tr>
                                <td className={styles['guide-table-type']}>Large text</td>
                                <td
                                    className={styles['guide-table-result']}
                                    style={{ backgroundColor: largeTextAA ? 'var(--status-green)' : 'var(--status-red)'}}
                                    >
                                    {largeTextAA ? 'Pass' : 'Fail'}  
                                </td>
                                <td
                                    className={styles['guide-table-result']}
                                    style={{ backgroundColor: largeTextAAA ? 'var(--status-green)' : 'var(--status-red)'}}
                                    >
                                    {largeTextAAA ? 'Pass' : 'Fail'} 
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <div className='description-container'>
                <h2 className='description-title'>Overview</h2>
                <p className='overview'>{descriptions.contrast_checker.overview}</p>
                <h2 className='description-title'>How To Use</h2>
                <ol className='instructions-list'>
                    {descriptions.contrast_checker.instructions.map((point, index) => (
                        <li key={index}>{point}</li>
                    ))}
                </ol>
            </div>
        </>
    )
}
