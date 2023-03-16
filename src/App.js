import React, { Component } from 'react'
import Navbar from './components/Navbar'
import News from './components/News'
import About from './components/About'
import { Routes, Route } from 'react-router-dom'
import LoadingBar from 'react-top-loading-bar'


export default class App extends Component {
  state = {
    country: 'in',
    pageSize: 9,
    progress: 0,
    apiKey: process.env.REACT_APP_NEWS_API

  }
  setProgress=(progress)=>{
    this.setState({
      progress: progress
    })
  }

  render() {
    return (
      <div>
        <Navbar />
        <LoadingBar
        // color='#f11946'
        color='yellow'
        progress={this.state.progress}
      />
        <Routes>
          <Route exact path="/about" element={<About heading={'About Page'} setProgress={this.setProgress} apiKey={this.state.apiKey} />} />
          <Route exact path="/entertainment" element={<News setProgress={this.setProgress} apiKey={this.state.apiKey} key='entertainment' country={this.state.country} pageSize={this.state.pageSize} category={'entertainment'} />} />
          <Route exact path="/business" element={<News setProgress={this.setProgress} apiKey={this.state.apiKey} key='business' country={this.state.country} pageSize={this.state.pageSize} category={'business'} />} />
          <Route exact path="/sports" element={<News setProgress={this.setProgress} apiKey={this.state.apiKey} key='sports' country={this.state.country} pageSize={this.state.pageSize} category={'sports'} />} />
          <Route exact path="/health" element={<News setProgress={this.setProgress} apiKey={this.state.apiKey} key='health' country={this.state.country} pageSize={this.state.pageSize} category={'health'} />} />
          <Route exact path="/science" element={<News setProgress={this.setProgress} apiKey={this.state.apiKey} key='science' country={this.state.country} pageSize={this.state.pageSize} category={'science'} />} />
          <Route exact path="/technology" element={<News setProgress={this.setProgress} apiKey={this.state.apiKey} key='technology' country={this.state.country} pageSize={this.state.pageSize} category={'technology'} />} />
          <Route exact path="/" element={<News setProgress={this.setProgress} apiKey={this.state.apiKey} key='general' country={this.state.country} pageSize={this.state.pageSize} category={'general'} />} />
        </Routes>
      </div>
    )
  }
}