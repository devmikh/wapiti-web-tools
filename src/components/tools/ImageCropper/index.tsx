import { useState } from 'react'

import ReactCrop, { Crop } from 'react-image-crop'
import 'react-image-crop/dist/ReactCrop.css'
import styles from './index.module.css'

export default function ImageCropper() {

    const [src, setSrc] = useState<string | ArrayBuffer | null>(null)
    const [crop, setCrop] = useState<Crop>()
    const [image, setImage] = useState<any>(null)
    const [output, setOutput] = useState<string | null>(null)
    
    const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files.length > 0) {
          const reader = new FileReader()
          reader.addEventListener('load', () => {
            setSrc(reader.result)
          })
          reader.readAsDataURL(e.target.files[0])
        }
    }

    const cropImage = () => {
        if (crop) {
            const canvas = document.createElement('canvas')
            const scaleX = image.naturalWidth / image.width
            const scaleY = image.naturalHeight / image.height
            canvas.width = crop.width
            canvas.height = crop.height
            const ctx = canvas.getContext('2d')
    
            const pixelRatio = window.devicePixelRatio
            canvas.width = crop!.width * pixelRatio
            canvas.height = crop!.height * pixelRatio
            ctx!.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0)
            ctx!.imageSmoothingQuality = 'high'
    
            ctx!.drawImage(
                image,
                crop.x * scaleX,
                crop.y * scaleY,
                crop.width * scaleX,
                crop.height * scaleY,
                0,
                0,
                crop.width,
                crop.height,
            )
    
            // Converting to base64
            const base64Image = canvas.toDataURL('image/jpeg')
            setOutput(base64Image)
        }
        
    };

    return (
        <div className={styles['container']}>
            <h1 className='tool-title'>Image Cropper</h1>
            <div className={styles['file-input-container']}>
                <input type="file" accept="image/*" onChange={handleFileUpload}/>
            </div>
            
            <div className={styles['cropper-container']}>
                <div className={styles['input-container']}>
                    {src ? (
                    <ReactCrop
                        crop={crop}
                        onChange={c => setCrop(c)}
                        onComplete={cropImage}
                        className={styles['cropper']}>
                            <img src={src as string} onLoad={e => setImage(e.target)}  className={styles['input-image']} />
                    </ReactCrop>) : 'Please upload an image'}
                </div>
                <div className={styles['output-container']}>
                    {output && <img src={output} />}
                </div>
                {output && <a href={output} download='cropped-image.png'>Download</a>}
            </div>
        </div>
    )
}
