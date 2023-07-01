import { useState, useEffect } from 'react'
import Button from '../../../core/Button'
import Range from '../../../core/Range'
import FileUploader from '../../../core/FileUploader'
import usePageTitle from '../../../../hooks/usePageTitle'
import styles from './index.module.css'

export default function ImageFilters() {
    
    const [src, setSrc] = useState<string | ArrayBuffer | null>(null)
    const [fileName, setFileName] = useState<string>('')
    const [settings, setSettings] = useState({
        blur: 0,
        brightness: 100,
        contrast: 100,
        grayscale: 0,
        hueRotate: 0,
        invert: 0,
        opacity: 100,
        saturate: 100,
        sepia: 0
    })
    const [style, setStyle] = useState({
        filter: ''
    })

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSettings(prevSettings => ({ ...prevSettings, [e.target.name]: e.target.value }))
    }

    const handleFileUpload = (files: FileList | null) => {
        if (files && files.length > 0) {
            const reader = new FileReader()
            reader.addEventListener('load', () => {
                setSrc(reader.result)
            })
            reader.readAsDataURL(files[0])
            setFileName(files[0].name)
        }
    }

    const handleDragOver = (e: React.DragEvent<HTMLInputElement>) => {
        e.preventDefault()
    }
    
    const handleDrop = (e: React.DragEvent<HTMLInputElement>) => {
        e.preventDefault()
        handleFileUpload(e.dataTransfer.files)
    }

    const handleDownload = () => {
        if (src) {

            const image = new Image()
            image.src = src as string

            image.onload = () => {
                const canvas = document.createElement('canvas')
                canvas.width = image.width
                canvas.height = image.height

                const ctx = canvas.getContext('2d')
                if (ctx) {
                    ctx.filter = `
                        blur(${settings.blur}px)
                        brightness(${settings.brightness}%)
                        contrast(${settings.contrast}%)
                        grayscale(${settings.grayscale}%)
                        hue-rotate(${settings.hueRotate}deg)
                        invert(${settings.invert}%)
                        opacity(${settings.opacity}%)
                        saturate(${settings.saturate}%)
                        sepia(${settings.sepia}%)`

                    ctx.drawImage(image, 0, 0)
                    const editedImageURL = canvas.toDataURL('image/png')
                    const link = document.createElement('a')
                    link.href = editedImageURL
                    link.download = `edited_${fileName}`
                    link.click()
                }
            }
        }
    }

    const resetSettings = () => {
        setSettings({
            blur: 0,
            brightness: 100,
            contrast: 100,
            grayscale: 0,
            hueRotate: 0,
            invert: 0,
            opacity: 100,
            saturate: 100,
            sepia: 0
        })
    }

    useEffect(() => {
        setStyle({
            filter: `
                blur(${settings.blur}px)
                brightness(${settings.brightness}%)
                contrast(${settings.contrast}%)
                grayscale(${settings.grayscale}%)
                hue-rotate(${settings.hueRotate}deg)
                invert(${settings.invert}%)
                opacity(${settings.opacity}%)
                saturate(${settings.saturate}%)
                sepia(${settings.sepia}%)
            `
        })
    }, [settings])

    usePageTitle('Image Filters | Wapiti Web Tools')

    return (
        <div className={`tool-container ${styles['container']}`} onDrop={handleDrop} onDragOver={handleDragOver}>
            <h1 className='tool-title'>Image Filters</h1>
            <FileUploader
                type='image'
                src={src as string}
                firstPrompt='Upload image'
                secondPrompt='Upload another image'
                handleFileUpload={handleFileUpload} />
            <div className={styles['editor-container']}>
                <div className={styles['settings-container']}>
                    <div className={styles['ranges-container']}>
                        <Range
                            disabled={src ? false : true}
                            name='blur'
                            measurementUnitLabel='px'
                            prompt='Blur:'
                            min={0}
                            max={10}
                            value={settings.blur}
                            onChange={handleChange} />
                        <Range
                            disabled={src ? false : true}
                            name='brightness'
                            measurementUnitLabel='%'
                            prompt='Brightness:'
                            min={0}
                            max={200}
                            value={settings.brightness}
                            onChange={handleChange} />
                        <Range
                            disabled={src ? false : true}
                            name='contrast'
                            measurementUnitLabel='%'
                            prompt='Contrast:'
                            min={0}
                            max={200}
                            value={settings.contrast}
                            onChange={handleChange} />
                        <Range
                            disabled={src ? false : true}
                            name='grayscale'
                            measurementUnitLabel='%'
                            prompt='Grayscale:'
                            min={0}
                            max={100}
                            value={settings.grayscale}
                            onChange={handleChange} />
                        <Range
                            disabled={src ? false : true}
                            name='hueRotate'
                            measurementUnitLabel='°'
                            prompt='Hue Rotate:'
                            min={0}
                            max={360}
                            value={settings.hueRotate}
                            onChange={handleChange} />
                        <Range
                            disabled={src ? false : true}
                            name='invert'
                            measurementUnitLabel='%'
                            prompt='Invert:'
                            min={0}
                            max={100}
                            value={settings.invert}
                            onChange={handleChange} />
                        <Range
                            disabled={src ? false : true}
                            name='opacity'
                            measurementUnitLabel='%'
                            prompt='Opacity:'
                            min={0}
                            max={100}
                            value={settings.opacity}
                            onChange={handleChange} />
                        <Range
                            disabled={src ? false : true}
                            name='saturate'
                            measurementUnitLabel='%'
                            prompt='Saturate:'
                            min={0}
                            max={200}
                            value={settings.saturate}
                            onChange={handleChange} />
                        <Range
                            disabled={src ? false : true}
                            name='sepia'
                            measurementUnitLabel='%'
                            prompt='Sepia:'
                            min={0}
                            max={100}
                            value={settings.sepia}
                            onChange={handleChange} />
                    </div>
                    <div className={styles['buttons-container']}>
                        <Button
                            disabled={src ? false : true}
                            label='Reset'
                            onClick={resetSettings}
                            />
                        <Button
                            disabled={src ? false : true}
                            color='primary'
                            label='Download'
                            onClick={handleDownload}
                            />
                    </div>
                </div>
                <div className={styles['preview-container']}>
                    <div className={styles['preview-image-container']}>
                        <img src={src as string} className={styles['preview-image']} style={style} />
                    </div>
                </div>
            </div>
        </div>
    )
}
