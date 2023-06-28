import { useState } from 'react'
import usePageTitle from '../../../../hooks/usePageTitle'
import styles from './index.module.css'

export default function ImageFilters() {
    
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

    usePageTitle('Image Filters | Wapiti Web Tools')

    return (
        <div className={`tool-container ${styles['container']}`} onDrop={handleDrop} onDragOver={handleDragOver}>
            <h1 className='tool-title'>Image Filters</h1>
        </div>
    )
}
