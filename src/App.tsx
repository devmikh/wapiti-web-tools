import { Route, Routes } from 'react-router-dom'
import { Provider } from 'react-redux'

import store from '../src/store/store'

import Navbar from './components/Navbar'
import Toolbar from './components/Toolbar'
import HomePage from './components/HomePage'
import CharacterCounter from './components/tools/CharacterCounter'
import CaseConverter from './components/tools/CaseConverter'
import DummyTextGenerator from './components/tools/DummyTextGenerator'
import ColorFormatConverter from './components/tools/ColorFormatConverter'
import TintShadeGenerator from './components/tools/TintShadeGenerator'
import ImageCropper from './components/tools/ImageCropper'

export default function App() {
    return (
        <Provider store={store}>
            <div className='app-container'>
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
                        <Route path='/image-cropper' element={<ImageCropper />}/>
                    </Routes>
                </div>
            </div>
        </Provider>
    )
}
