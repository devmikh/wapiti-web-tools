import usePageTitle from "../../../../hooks/usePageTitle"
import styles from './index.module.css'

export default function Stopwatch() {

    usePageTitle('Stopwatch | Wapiti Web Tools')

    return (
        <div className={`tool-container ${styles['container']}`}>
            <h1 className="tool-title">Stopwatch</h1>
        </div>
    )
}
