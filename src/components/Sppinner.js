import React, { Component } from 'react'
import LoadingSpinner from '../LoadingSpinner.gif';

export class Sppinner extends Component {
  render() {
    return (
      <div className='text-center'>
        <img src={LoadingSpinner} alt="LoadingSpinner" />
      </div>
    )
  }
}

export default Sppinner