import styles from './index.module.css'


export default function ImageCropper() {
    return (
        <div className={styles['container']}>
            <h1 className='tool-title'>Image Cropper</h1>
            
            <div className={styles['image-container']}>

            </div>
        </div>
    )
}