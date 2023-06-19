import { Route, Routes } from 'react-router-dom'
import { Provider } from 'react-redux'

import store from '../src/store/store'

import Navbar from './components/layout/Navbar'
import Toolbar from './components/layout/Toolbar'
import MobileToolbar from './components/layout/MobileToolbar'
import HomePage from './components/layout/HomePage'
import CharacterCounter from './components/tools/text/CharacterCounter'
import CaseConverter from './components/tools/text/CaseConverter'
import DummyTextGenerator from './components/tools/text/DummyTextGenerator'
import ColorFormatConverter from './components/tools/color/ColorFormatConverter'
import TintShadeGenerator from './components/tools/color/TintShadeGenerator'
import ContrastChecker from './components/tools/color/ContrastChecker'
import ImageCropper from './components/tools/image/ImageCropper'
import RandomPasswordGenerator from './components/tools/randomizers/RandomPasswordGenerator'
import { useEffect } from 'react'

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
                <MobileToolbar />
                <Navbar />
                <Toolbar />
                <div className='main-container'>
                    <Routes>
                        <Route path='/' element={<HomePage />}/>
                        <Route path='/character-counter' element={<CharacterCounter />}/>
                        <Route path='/case-converter' element={<CaseConverter />}/>
                        <Route path='/dummy-text-generator' element={<DummyTextGenerator />}/>
                        <Route path='/color-format-converter' element={<ColorFormatConverter />}/>
                        <Route path='/tint-shade-generator' element={<TintShadeGenerator />}/>
                        <Route path='/contrast-checker' element={<ContrastChecker />}/>
                        <Route path='/image-cropper' element={<ImageCropper />}/>
                        <Route path='/random-password-generator' element={<RandomPasswordGenerator />}/>
                    </Routes>
                </div>
            </div>
        </Provider>
    )
}
