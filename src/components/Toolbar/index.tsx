import ToolCategory from '../ToolCategory'
import ToolLink from '../ToolLink'
import styles from './index.module.css'

const Toolbar = () => {
    return (
        <div className={styles['toolbar-container']}>
            <ToolCategory title='Text'>
                <ToolLink name='Letter Counter' link='/letter-counter' />
                <ToolLink name='Dummy Text Generator' link='/dummy-text-generator' />
                <ToolLink name='Case Converter' link='/case-converter' />
            </ToolCategory>
            <ToolCategory title='Other'>
                <ToolLink name='Password Generator' link='/password-generator' />
                <ToolLink name='CSS Gradient Generator' link='/css-gradient-generator' />
            </ToolCategory>
        </div>
    )
}

export default Toolbar