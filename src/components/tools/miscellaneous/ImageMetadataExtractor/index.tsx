import { useState, useEffect } from 'react'
import exifr  from 'exifr'
import FileUploader from '../../../core/FileUploader'
import DisplayField from '../../../core/DisplayField'
import styles from './index.module.css'

export default function ImageMetadataExtractor() {

    const [inputFile, setInputFile] = useState<string | ArrayBuffer | null>(null)
    const [fileName, setFileName] = useState<string | null>(null)
    const [metadata, setMetadata] = useState<any>(null)
    const [notFound, setNotFound] = useState<boolean>(false)

    const handleFileUpload = (files: FileList | null) => {
        if (files && files.length > 0) {
            const reader = new FileReader()
            reader.addEventListener('load', () => {
                setInputFile(reader.result)
            })
            reader.readAsDataURL(files[0])
            setFileName(files[0].name)
        }
    }

    const extractMetadata = async(file: string) => {
        const metadata = await exifr.parse(file)
        return metadata
    }

    useEffect(() => {
        const fetchMetadata = async () => {
            if (inputFile) {
                setMetadata(null)
                const extractedMetadata = await extractMetadata(inputFile as string)
                if (extractedMetadata) {
                    setNotFound(false)
                    setMetadata(extractedMetadata)
                } else {
                    setNotFound(true)
                }
              
            }
        }
        fetchMetadata()
    }, [inputFile])

    return (
        <div className={`tool-container ${styles['container']}`}>
            <h1 className="tool-title">Image Metadata Extractor</h1>
            <FileUploader
                src={inputFile as string}
                type='image'
                firstPrompt='Upload Image'
                secondPrompt='Upload Another Image'
                handleFileUpload={handleFileUpload}   
            />
            {notFound &&
                <div className={styles['not-found-container']}>
                    <span>{fileName}</span>
                    <span className={styles['not-found-message']}>Metadata not found</span>
                </div>
                }
            {metadata &&
                <div className={styles['metadata-container']}>
                    <span>{fileName}</span>
                    <div className={styles['metadata-entries-container']}>
                    {Object.keys(metadata).map((key) => {
                        const tag = key.toString()
                        let value
                        if (!metadata[key]) {
                            value = 'undefined'
                        } else {
                            value = metadata[key].toString()
                        }
                        return (
                                <DisplayField
                                    key={key}
                                    label={tag}
                                    value={value}
                                    size='large'
                                />
                            )
                    })}
                    </div>
                </div>}
        </div>
    )
}
