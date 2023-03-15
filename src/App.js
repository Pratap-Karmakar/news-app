import React, { Component } from 'react'
import Navbar from './components/Navbar'
import News from './components/News'
import About from './components/About'
import { Routes, Route } from 'react-router-dom'


export default class App extends Component {
  shortcut = {
    country: 'in',
    pageSize: 9
  }

  render() {
    return (
      <div>
        <Navbar />
        <Routes>
          <Route exact path="/about" element={<About heading={'About Page'} />} />
          <Route exact path="/entertainment" element={<News key='entertainment' country={this.shortcut.country} pageSize={this.shortcut.pageSize} category={'entertainment'} />} />
          <Route exact path="/business" element={<News key='business' country={this.shortcut.country} pageSize={this.shortcut.pageSize} category={'business'} />} />
          <Route exact path="/sports" element={<News key='sports' country={this.shortcut.country} pageSize={this.shortcut.pageSize} category={'sports'} />} />
          <Route exact path="/health" element={<News key='health' country={this.shortcut.country} pageSize={this.shortcut.pageSize} category={'health'} />} />
          <Route exact path="/science" element={<News key='science' country={this.shortcut.country} pageSize={this.shortcut.pageSize} category={'science'} />} />
          <Route exact path="/technology" element={<News key='technology' country={this.shortcut.country} pageSize={this.shortcut.pageSize} category={'technology'} />} />
          <Route exact path="/" element={<News key='general' country={this.shortcut.country} pageSize={this.shortcut.pageSize} category={'general'} />} />
        </Routes>
      </div>
    )
  }
}