import { Route, Routes } from 'react-router-dom'

import Navbar from './components/Navbar'
import Toolbar from './components/Toolbar'
import HomePage from './components/HomePage'
import CharacterCounter from './components/tools/CharacterCounter'
import CaseConverter from './components/tools/CaseConverter'
import DummyTextGenerator from './components/tools/DummyTextGenerator'
import ColorFormatConverter from './components/tools/ColorFormatConverter'

export default function App() {
    return (
        <div className='app-container'>
            <Navbar />
            <div className='main-container'>
                <Toolbar />
                <Routes>
                    <Route path='/' element={<HomePage />}/>
                    <Route path='/character-counter' element={<CharacterCounter />}/>
                    <Route path='/case-converter' element={<CaseConverter />}/>
                    <Route path='/dummy-text-generator' element={<DummyTextGenerator />}/>
                    <Route path='/color-format-converter' element={<ColorFormatConverter />}/>
                </Routes>
            </div>
        </div>
    )
}
