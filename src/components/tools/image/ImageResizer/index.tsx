import { useState } from 'react'
import usePageTitle from '../../../../hooks/usePageTitle'
import Button from '../../../core/Button'
import FileUploader from '../../../core/FileUploader'
import Textfield from '../../../core/Textfield'
import Checkbox from '../../../core/Checkbox'
import styles from './index.module.css'

export default function ImageResizer() {
    const [src, setSrc] = useState<string | ArrayBuffer | null>(null)
    const [fileName, setFileName] = useState<string>('')
    const [error, setError] = useState<string>('')
    const [maintainAR, setMaintainAR] = useState<boolean>(true)
    const [resizedImage, setResizedImage] = useState<string>('')
    const [width, setWidth] = useState<number>(0)
    const [height, setHeight] = useState<number>(0)
    const [initialWidth, setInitialWidth] = useState<number>(0)
    const [initialHeight, setInitialHeight] = useState<number>(0)    

    const handleFileUpload = (files: FileList | null) => {
        if (files && files.length > 0) {
            const reader = new FileReader()
            reader.addEventListener('load', () => {
                const image = new Image()
                image.src = reader.result as string
                image.onload = () => {
                    setSrc(image.src)
                    setFileName(files[0].name)
                    setInitialWidth(image.width)
                    setInitialHeight(image.height)
                    setWidth(image.width)
                    setHeight(image.height)
                    setResizedImage(reader.result as string)
                }
            })
            reader.readAsDataURL(files[0])
        }
    }

    const handleDragOver = (e: React.DragEvent<HTMLInputElement>) => {
        e.preventDefault()
    }
    
    const handleDrop = (e: React.DragEvent<HTMLInputElement>) => {
        e.preventDefault()
        handleFileUpload(e.dataTransfer.files)
    }

    const handleWidthChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const newWidth = Number(event.target.value)
        if (newWidth > 5000 || newWidth < 1 || isNaN(newWidth)) {
            setError('Please enter value that is between 1 and 5000')
        } else {
            setError('')
        }
        setWidth(newWidth)
        if (maintainAR) {
            const aspectRatio = initialWidth / initialHeight
            const newHeight = Math.round(newWidth * aspectRatio)
            setHeight(newHeight)
        }
    }
    
    const handleHeightChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const newHeight = Number(event.target.value)
        if (newHeight > 5000 || newHeight < 1 || isNaN(newHeight)) {
            setError('Please enter value that is between 1 and 5000')
        } else {
            setError('')
        }
        setHeight(newHeight)
        if (maintainAR) {
            const aspectRatio = initialWidth / initialHeight
            const newWidth = Math.round(newHeight * aspectRatio)
            setWidth(newWidth)
        }
    }

    const resetImage = () => {
        if (src) {
            setError('')
            setWidth(initialWidth)
            setHeight(initialHeight)
            resizeImage(initialWidth, initialHeight)
        }
    }

    const resizeImage = (width: number, height: number) => {
        if (src) {
            const img = new Image()
            img.src = src as string
            img.onload = () => {
                const canvas = document.createElement('canvas')
                canvas.width = width
                canvas.height = height
                const ctx = canvas.getContext('2d')
                if (ctx) {
                    ctx.drawImage(img, 0, 0, width, height)
                    const resizedDataURL = canvas.toDataURL('image/png')
                    setResizedImage(resizedDataURL)
                }
            }
        }
    }

    const downloadImage = () => {
        const link = document.createElement('a')
        link.href = resizedImage
        link.download = `resized_${fileName}`
        link.click()
    }

    usePageTitle('Image Resizer | Wapiti Web Tools')

    return (
        <div className={`tool-container ${styles['container']}`} onDrop={handleDrop} onDragOver={handleDragOver}>
            <h1 className='tool-title'>Image Resizer</h1>
            <FileUploader
                type='image'
                src={src as string}
                firstPrompt='Upload image'
                secondPrompt='Upload another image'
                handleFileUpload={handleFileUpload}
            />
            {src && <>
                <div className={styles['settings-container']}>
                    <span className={styles['error']}>{error}</span>
                    <div className={styles['textfields-container']}>
                        <Textfield
                            short
                            type='number'
                            prompt='Width'
                            value={width.toString()}
                            onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleWidthChange(e)}
                        />
                        
                        <Textfield
                            short
                            type='number'
                            prompt='Height'
                            value={height.toString()}
                            onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleHeightChange(e)}
                        />
                    </div>
                    <Checkbox
                            id='maintain-ar'
                            name='maintain-ar'
                            checked={maintainAR}
                            onChange={() => setMaintainAR(prev => !prev)}
                            label='Maintain aspect ratio'
                        />
                    <div className={styles['buttons-container']}>
                        <Button
                            label='Resize'
                            onClick={() => resizeImage(width, height)}
                            color='primary'
                            disabled={error ? true : false}
                        />
                        <Button
                            label='Reset'
                            onClick={resetImage}
                        />
                        <Button
                            label='Download'
                            onClick={downloadImage}
                            color='primary'
                            disabled={error ? true : false}
                        />
                    </div>
                </div>
                <div className={styles['preview-container']}>
                    <div className={styles['preview-image-container']}>
                        <img src={resizedImage} className={styles['preview-image']} />
                    </div>
                </div>
            </>}
        </div>
    )
}
