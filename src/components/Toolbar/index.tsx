import ToolCategory from '../ToolCategory'
import ToolLink from '../ToolLink'
import styles from './index.module.css'

export default function Toolbar() {
    return (
        <div className={styles['toolbar-container']}>
            <ToolCategory title='Text'>
                <ToolLink name='Character Counter' link='/character-counter' />
                <ToolLink name='Case Converter' link='/case-converter' />
                <ToolLink name='Dummy Text Generator' link='/dummy-text-generator' />
            </ToolCategory>
            <ToolCategory title='Color'>
                <ToolLink name='Color Format Converter' link='/color-format-converter' />
            </ToolCategory>
        </div>
    )
}
