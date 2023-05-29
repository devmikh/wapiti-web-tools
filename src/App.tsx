import { Route, Routes } from 'react-router-dom'

import Navbar from './components/Navbar'
import Toolbar from './components/Toolbar'
import LetterCounter from './components/tools/LetterCounter'

function App() {
    return (
        <div className='app-container'>
            <Navbar />
            <div className='main-container'>
                <Toolbar />
                <Routes>
                    <Route path='/' element={<h1>Home</h1>}/>
                    <Route path='/letter-counter' element={<LetterCounter />}/>
                    <Route path='/dummy-text-generator' element={<h1>Dummy Text Generator</h1>}/>
                    <Route path='/case-converter' element={<h1>Case Converter</h1>}/>
                    <Route path='/password-generator' element={<h1>Password Generator</h1>}/>
                    <Route path='/css-gradient-generator' element={<h1>CSS Gradient Generator</h1>}/>
                </Routes>
            </div>
        </div>
    )
}

export default App
