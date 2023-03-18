import React, { useState } from 'react'
import Navbar from './components/Navbar'
import News from './components/News'
import About from './components/About'
import { Routes, Route } from 'react-router-dom'
import LoadingBar from 'react-top-loading-bar'


const App = () => {

  const apiKey = process.env.REACT_APP_NEWS_API
  const country = 'in';
  const pageSize = 9
  const [progress, setProgress] = useState(0);


  return (
    <div>
      <Navbar />
      <LoadingBar
        // color='#f11946'
        color='yellow'
        progress={progress}
      />
      <Routes>
        <Route exact path="/about" element={<About heading={'About Page'} setProgress={setProgress} apiKey={apiKey} />} />
        <Route exact path="/entertainment" element={<News setProgress={setProgress} apiKey={apiKey} key='entertainment' country={country} pageSize={pageSize} category={'entertainment'} />} />
        <Route exact path="/business" element={<News setProgress={setProgress} apiKey={apiKey} key='business' country={country} pageSize={pageSize} category={'business'} />} />
        <Route exact path="/sports" element={<News setProgress={setProgress} apiKey={apiKey} key='sports' country={country} pageSize={pageSize} category={'sports'} />} />
        <Route exact path="/health" element={<News setProgress={setProgress} apiKey={apiKey} key='health' country={country} pageSize={pageSize} category={'health'} />} />
        <Route exact path="/science" element={<News setProgress={setProgress} apiKey={apiKey} key='science' country={country} pageSize={pageSize} category={'science'} />} />
        <Route exact path="/technology" element={<News setProgress={setProgress} apiKey={apiKey} key='technology' country={country} pageSize={pageSize} category={'technology'} />} />
        <Route exact path="/" element={<News setProgress={setProgress} apiKey={apiKey} key='general' country={country} pageSize={pageSize} category={'general'} />} />
      </Routes>
    </div>
  )
}


export default App;