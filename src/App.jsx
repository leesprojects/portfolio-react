import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'

import PageLoader from './components/page-loader/loader';
import PageRouter from './components/pagerouter/pagerouter'
import './App.css'

function App() {
  const [loading, setLoading] = useState(false);
  const loadTime = 2500;

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, loadTime);
  }, [])

  return(
    <div className='App'>
      {loading ? (
        /* Page Loader Start*/
        <PageLoader/>
        /* Page Loader End */
      ) : (
          <Router>
            <PageRouter/>
          </Router>
      )}
    </div>
  )
}

export default App