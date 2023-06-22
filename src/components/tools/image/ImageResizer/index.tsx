import { useState } from 'react'
import usePageTitle from "../../../../hooks/usePageTitle"
import FileUploader from "../../../core/FileUploader"
import styles from './index.module.css'

export default function ImageResizer() {

    const [src, setSrc] = useState<string | ArrayBuffer | null>(null)
    const [fileName, setFileName] = useState<string>('')

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
            <div>{fileName}</div>
        </div>
    )
}
