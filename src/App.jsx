import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import NavBar   from './components/navbar/' 
import Home     from './components/page-home/'
import Unity    from './components/page-unity/'
import WebDev   from './components/page-webdev'
import './App.css'

function App() {
  return (
    <div className='App'>
      <NavBar/>
      <Router>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/Unity" element={<Unity/>}/>
          <Route path="/WebDev" element={<WebDev/>}/>
        </Routes>
      </Router>
    </div>
  )
}

export default App