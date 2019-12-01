import React, { Component } from 'react'
import { placeholderContent } from './placeholderContent'
import logo from '../resources/img/5StarWeb_logo.png'
export default class Content extends Component {


  constructor(props) {
    super(props)
    this.state = {
      blankContent: ""
    }
  }
  handleChange(event) {
    this.setState(
      {
        [event.target.name]
          : event.target.value
      }
    )
  }
  render() {
    const elements = [this.props.start5, this.props.start5, this.props.start5, this.props.start5, this.props.start5, this.props.start5, this.props.start5, this.props.start5, this.props.start5, this.props.start5, this.props.start5, this.props.start5, this.props.start5];

    return <div
      className="content-container">
      <img class={this.props.logo} src={logo} alt="Logo" />

      <div className="project">
        <ul>
          {elements.map((value, index) => {
            return <li key={index}>{value}</li>
          })}
        </ul>
      </div>
    </div>

  }
}