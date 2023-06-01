import { Route, Routes } from 'react-router-dom'

import Navbar from './components/Navbar'
import Toolbar from './components/Toolbar'
import CharacterCounter from './components/tools/CharacterCounter'
import CaseConverter from './components/tools/CaseConverter'
import DummyTextGenerator from './components/tools/DummyTextGenerator'

export default function App() {
    return (
        <div className='app-container'>
            <Navbar />
            <div className='main-container'>
                <Toolbar />
                <Routes>
                    <Route path='/' element={<h1>Home</h1>}/>
                    <Route path='/character-counter' element={<CharacterCounter />}/>
                    <Route path='/case-converter' element={<CaseConverter />}/>
                    <Route path='/dummy-text-generator' element={<DummyTextGenerator />}/>
                    <Route path='/password-generator' element={<h1>Password Generator</h1>}/>
                    <Route path='/css-gradient-generator' element={<h1>CSS Gradient Generator</h1>}/>
                </Routes>
            </div>
        </div>
    )
}
