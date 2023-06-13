import { useState, useEffect, useRef } from 'react'
import Cropper, { Area } from 'react-easy-crop'
import html2canvas from 'html2canvas';

import Button from '../../../core/Button';
import uploadIcon from '../../../../assets/icons/upload.svg'

import styles from './index.module.css'

const Output = ({ croppedArea, src, aspect }: any) => {
    const outputRef = useRef<HTMLDivElement>(null)

    const scale = 100 / croppedArea.width
    const transform = {
        x: `${-croppedArea.x * scale}%`,
        y: `${-croppedArea.y * scale}%`,
        scale,
        width: "calc(100% + 0.5px)",
        height: "auto"
    }

    const imageStyle = {
        transform: `translate3d(${transform.x}, ${transform.y}, 0) scale3d(${transform.scale},${transform.scale},1)`,
        width: transform.width,
        height: transform.height
    }

    const handleDownload = () => {
        if (outputRef.current) {
            html2canvas(outputRef.current).then((canvas: any) => {
                const url = canvas.toDataURL('image/png')
                const link = document.createElement('a')
                link.href = url
                link.download = 'cropped_image.png'
                link.click()
            })
        }
    }

    return (<>
                <div
                    className={styles['output']}
                    style={{ paddingBottom: `${100 / aspect}%` }}
                    ref={outputRef}
                >
                    <img src={src} alt="" style={imageStyle} />
                </div>
                <Button
                    label='Download'
                    color='primary'
                    onClick={handleDownload} />
            </>
    )
}

export default function ImageCropper() {
    
    const [src, setSrc] = useState<string | ArrayBuffer | null>(null)
    const [crop, setCrop] = useState({ x: 0, y: 0 })
    const [zoom, setZoom] = useState(1)
    const [aspect, setAspect] = useState(1 / 1)
    const [croppedArea, setCroppedArea] = useState<Area | null>(null)

    const aspectRatioOptions = [
        { label: '1:1', value: 1 / 1 },
        { label: '16:9', value: 16 / 9 },
        { label: '4:3', value: 4 / 3 },
        { label: '3:4', value: 3 / 4 },
        { label: '9:16', value: 9 / 16 },
    ]

    const handleFileUpload = (files: FileList | null) => {
        if (files && files.length > 0) {
            const reader = new FileReader()
            reader.addEventListener('load', () => {
                setSrc(reader.result)
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

    useEffect(() => {
        document.title = 'Image Cropper'
    }, [])

    return (
        <div className={styles['container']} onDrop={handleDrop} onDragOver={handleDragOver}>
            <h1 className='tool-title'>Image Cropper</h1>
            <label htmlFor='cropper-input-file' className={styles['cropper-input']}>
                <img src={uploadIcon} height='30' />
                <span>{src ? 'Upload another image' : 'Upload image to start cropping'}</span>
                <input type='file' accept="image/*" id='cropper-input-file' onChange={(e) => handleFileUpload(e.target.files)} className={styles['cropper-input-file']} />
            </label>
            {src &&
                <div>
                    <select value={aspect} onChange={(e: any) => setAspect(e.target.value)}>
                        {aspectRatioOptions.map((option) => (
                            <option key={option.value} value={option.value}>
                            {option.label}
                            </option>
                        ))}
                    </select>
                </div>}
            <div className={styles['cropper']}>
                {src && <Cropper
                image={src as string}
                aspect={aspect}
                crop={crop}
                zoom={zoom}
                objectFit='contain'
                onCropChange={setCrop}
                onZoomChange={setZoom}
                onCropAreaChange={(croppedArea) => {
                    setCroppedArea(croppedArea);
                }} />}
            </div>
            
            <div className={styles['viewer']}>
                <div>{croppedArea && <Output croppedArea={croppedArea} src={src as string} aspect={aspect} />}</div>
            </div>
        </div>
    )
}
