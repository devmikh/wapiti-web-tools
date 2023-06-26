import { useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from '../src/store/store'
import Navbar from './components/layout/Navbar'
import Toolbar from './components/layout/Toolbar'
import MobileToolbar from './components/layout/MobileToolbar'
import ScrollToTop from './components/core/ScrollToTop'
import HomePage from './components/layout/HomePage'
import CharacterCounter from './components/tools/text/CharacterCounter'
import CaseConverter from './components/tools/text/CaseConverter'
import DummyTextGenerator from './components/tools/text/DummyTextGenerator'
import WhiteSpaceRemover from './components/tools/text/WhiteSpaceRemover'
import ColorFormatConverter from './components/tools/color/ColorFormatConverter'
import TintShadeGenerator from './components/tools/color/TintShadeGenerator'
import ContrastChecker from './components/tools/color/ContrastChecker'
import ImageCropper from './components/tools/image/ImageCropper'
import ImageResizer from './components/tools/image/ImageResizer'
import ImageMetadataExtractor from './components/tools/image/ImageMetadataExtractor'
import RandomPasswordGenerator from './components/tools/randomizers/RandomPasswordGenerator'
import RandomNumberGenerator from './components/tools/randomizers/RandomNumberGenerator'
import DateDifferenceCalculator from './components/tools/time/DateDifferenceCalculator'
import Stopwatch from './components/tools/time/Stopwatch'
import JSONFormatterValidator from './components/tools/miscellaneous/JSONFormatterValidator'
import QRCodeGenerator from './components/tools/miscellaneous/QRCodeGenerator'


export default function App() {

    useEffect(() => {
        const theme = localStorage.getItem('theme')
        if (theme === 'dark') {
            document.body.classList.add('dark')
        } else if (theme === 'light') {
            document.body.classList.remove('dark')
        } else {
            localStorage.setItem('theme', 'dark')
            document.body.classList.add('dark')
        }
    }, [])

    return (
        <Provider store={store}>
            <div className='app-container'>
                <ScrollToTop />
                <MobileToolbar />
                <Navbar />
                <Toolbar />
                <div className='main-container'>
                    <Routes>
                        <Route path='/' element={<HomePage />}/>
                        <Route path='/character-counter' element={<CharacterCounter />}/>
                        <Route path='/case-converter' element={<CaseConverter />}/>
                        <Route path='/dummy-text-generator' element={<DummyTextGenerator />}/>
                        <Route path='/white-space-remover' element={<WhiteSpaceRemover />}/>
                        <Route path='/color-format-converter' element={<ColorFormatConverter />}/>
                        <Route path='/tint-shade-generator' element={<TintShadeGenerator />}/>
                        <Route path='/contrast-checker' element={<ContrastChecker />}/>
                        <Route path='/image-cropper' element={<ImageCropper />}/>
                        <Route path='/image-resizer' element={<ImageResizer />}/>
                        <Route path='/image-metadata-extractor' element={<ImageMetadataExtractor />}/>
                        <Route path='/random-password-generator' element={<RandomPasswordGenerator />}/>
                        <Route path='/random-number-generator' element={<RandomNumberGenerator />}/>
                        <Route path='/date-difference-calculator' element={<DateDifferenceCalculator />}/>
                        <Route path='/stopwatch' element={<Stopwatch />}/>
                        <Route path='/json-formatter-validator' element={<JSONFormatterValidator />}/>
                        <Route path='/qr-code-generator' element={<QRCodeGenerator />}/>
                    </Routes>
                </div>
            </div>
        </Provider>
    )
}
