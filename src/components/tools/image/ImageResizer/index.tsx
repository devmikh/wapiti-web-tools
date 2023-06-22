import usePageTitle from "../../../../hooks/usePageTitle"
import styles from './index.module.css'

export default function ImageResizer() {

    usePageTitle('Image Resizer | Wapiti Web Tools')

    return (
        <div className={`tool-container ${styles['container']}`}>
            <h1 className='tool-title'>Image Resizer</h1>
        </div>
    )
}
