import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from "./components/Navbar"
import News from './components/News';
import About from './components/About';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route exact path='/about' element={<About />} />

        {/* key="general" => only by this key the app will redirect me to that particular category of the news getting from the newsapi */}
        <Route path='/' element={<News key="general" pageSize={5} country={'us'} category="general" />} />
        <Route exact path='/business' element={<News key="business" pageSize={5} country={'us'} category="business" />} />
        <Route exact path='/science' element={<News key="science" pageSize={5} country={'us'} category="science" />} />
        <Route exact path='/technology' element={<News key="technology" pageSize={5} country={'us'} category="technology" />} />
        <Route exact path='/sports' element={<News key="sports" pageSize={5} country={'us'} category="sports" />} />
        <Route exact path='/entertainment' element={<News key="entertainment" pageSize={5} country={'us'} category="entertainment" />} />
        <Route exact path='/health' element={<News key="health" pageSize={5} country={'us'} category="health" />} />

      </Routes>
    </div>
  );
}

export default App;
