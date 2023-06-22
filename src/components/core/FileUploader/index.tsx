import uploadIcon from '../../../assets/icons/upload.svg'
import styles from './index.module.css'

type FileUploaderProps = {
    type?: string,
    src: string,
    firstPrompt: string,
    secondPrompt: string,
    handleFileUpload: Function
}

export default function FileUploader(props: FileUploaderProps) {

    const { type, src, firstPrompt, secondPrompt, handleFileUpload } = props

    return(
        <label htmlFor='input-file' className={styles['input']}>
                <img src={uploadIcon} height='30' />
                <span>{src ? secondPrompt : firstPrompt}</span>
                <input
                    type='file'
                    accept={`${type === 'image' ? "image/*" : ''}`}
                    id='input-file'
                    onChange={(e) => handleFileUpload(e.target.files)}
                    className={styles['input-file']} />
        </label>
    )
}
