import React, { Component } from 'react'
import { init } from 'ityped'

export default class MainTyped extends Component {
  componentDidMount(){
    const myElement = document.querySelector('#myElement')
    init(myElement, { showCursor: false, strings: ['Coding and everything IT!', 'His stinky wife', ] })
  }
  render(){
    return <div id="myElement"></div>
  }
}