import { useState, useRef } from 'react'
import Cropper, { Area } from 'react-easy-crop'
import html2canvas from 'html2canvas'
import Button from '../../../core/Button'
import Radio from '../../../core/Radio'
import FileUploader from '../../../core/FileUploader'
import usePageTitle from '../../../../hooks/usePageTitle'
import { descriptions } from '../../../../assets/descriptions'
import styles from './index.module.css'

type OutputPropsType = {
    croppedArea: Area,
    src: string,
    aspect: number,
    fileName: string
}

const Output = (props: OutputPropsType) => {
    const { croppedArea, src, aspect, fileName } = props
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
            html2canvas(outputRef.current).then((canvas: HTMLCanvasElement) => {
                const url = canvas.toDataURL('image/jpeg')
                const link = document.createElement('a')
                link.href = url
                link.download = `cropped_${fileName}`
                link.click()
            })
        }
    }

    return (<div className={styles['output-container']}>
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
            </div>
    )
}

export default function ImageCropper() {
    
    const [src, setSrc] = useState<string | ArrayBuffer | null>(null)
    const [fileName, setFileName] = useState<string>('')
    const [crop, setCrop] = useState({ x: 0, y: 0 })
    const [zoom, setZoom] = useState(1)
    const [aspect, setAspect] = useState(1 / 1)
    const [croppedArea, setCroppedArea] = useState<Area | null>(null)

    const aspectRatioOptions = [
        { id: 'first-ratio', label: '1:1', value: 1 / 1 },
        { id: 'second-ratio', label: '16:9', value: 16 / 9 },
        { id: 'third-ratio', label: '4:3', value: 4 / 3 },
        { id: 'fourth-ratio', label: '3:4', value: 3 / 4 },
        { id: 'fifth-ratio', label: '9:16', value: 9 / 16 },
    ]

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

    usePageTitle('Image Cropper | Wapiti Web Tools')

    return (
        <>
            <div className={`tool-container ${styles['container']}`} onDrop={handleDrop} onDragOver={handleDragOver}>
                <h1 className='tool-title'>Image Cropper</h1>
                <FileUploader
                    type='image'
                    src={src as string}
                    firstPrompt='Upload image'
                    secondPrompt='Upload another image'
                    handleFileUpload={handleFileUpload}
                />
                {src &&
                    <div className={styles['radios-container']}>
                        {aspectRatioOptions.map((ratio, index) => {
                            return (
                                <Radio
                                    key={index}
                                    id={ratio.id}
                                    name='aspect'
                                    value={ratio.value}
                                    checked={Number(aspect) === ratio.value}
                                    label={ratio.label}
                                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setAspect(Number(e.target.value))}
                                />
                            )
                        })}
                        
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
                
                {croppedArea && <div className={styles['viewer']}>
                    <Output croppedArea={croppedArea} src={src as string} fileName={fileName} aspect={aspect} />
                </div>}
            </div>
            <div className='description-container'>
                <h2 className='description-title'>Overview</h2>
                <p className='overview'>{descriptions.image_cropper.overview}</p>
                <h2 className='description-title'>How To Use</h2>
                <ol className='instructions-list'>
                    {descriptions.image_cropper.instructions.map((point, index) => (
                        <li key={index}>{point}</li>
                    ))}
                </ol>
            </div>
        </>
    )
}
