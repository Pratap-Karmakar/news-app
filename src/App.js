// import { Route, Routes } from 'react-router-dom';
// import './App.css';
// import Navbar from "./components/Navbar"
// import News from './components/News';
// import About from './components/About';

// function App() {
//   return (
//     <div className="App">
//       <Navbar />
//       <Routes>
//         <Route exact path='/about' element={<About />} />

//         {/* key="general" => only by this key the app will redirect me to that particular category of the news getting from the newsapi */}
//         <Route path='/' element={<News key="general" pageSize={this.newsKeys.pageSize} country={this.newsKeys.country} category="general" />} />
//         <Route exact path='/business' element={<News key="business" pageSize={this.newsKeys.pageSize} country={this.newsKeys.country} category="business" />} />
//         <Route exact path='/science' element={<News key="science" pageSize={this.newsKeys.pageSize} country={this.newsKeys.country} category="science" />} />
//         <Route exact path='/technology' element={<News key="technology" pageSize={this.newsKeys.pageSize} country={this.newsKeys.country} category="technology" />} />
//         <Route exact path='/sports' element={<News key="sports" pageSize={this.newsKeys.pageSize} country={this.newsKeys.country} category="sports" />} />
//         <Route exact path='/entertainment' element={<News key="entertainment" pageSize={this.newsKeys.pageSize} country={this.newsKeys.country} category="entertainment" />} />
//         <Route exact path='/health' element={<News key="health" pageSize={this.newsKeys.pageSize} country={this.newsKeys.country} category="health" />} />

//       </Routes>
//     </div>
//   );
// }

// export default App;


import React, { Component } from 'react'
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from "./components/Navbar"
import News from './components/News';
import About from './components/About';

export class App extends Component {

  newsKeys={
    pageSize: 10,
    country: 'us',
  }

  render() {
    return (
      <div>
        <Navbar />
      <Routes>

        <Route exact path='/about' element={<About />} />

        {/* key="general" => only by this key the app will redirect me to that particular category of the news getting from the newsapi */}
        <Route path='/' element={<News key="general" pageSize={this.newsKeys.pageSize} country={this.newsKeys.country} category="general" />} />
        <Route exact path='/business' element={<News key="business" pageSize={this.newsKeys.pageSize} country={this.newsKeys.country} category="business" />} />
        <Route exact path='/science' element={<News key="science" pageSize={this.newsKeys.pageSize} country={this.newsKeys.country} category="science" />} />
        <Route exact path='/technology' element={<News key="technology" pageSize={this.newsKeys.pageSize} country={this.newsKeys.country} category="technology" />} />
        <Route exact path='/sports' element={<News key="sports" pageSize={this.newsKeys.pageSize} country={this.newsKeys.country} category="sports" />} />
        <Route exact path='/entertainment' element={<News key="entertainment" pageSize={this.newsKeys.pageSize} country={this.newsKeys.country} category="entertainment" />} />
        <Route exact path='/health' element={<News key="health" pageSize={this.newsKeys.pageSize} country={this.newsKeys.country} category="health" />} />

      </Routes>
      </div>
    )
  }
}

export default App




