import React, { Component } from 'react'
import update from 'immutability-helper'
import math from 'mathjs'
import './GetYourOrder.css'
import DisplayOrder from './DisplayOrder'
import Button from './Button'
import Buttons from './Buttons'

class GetYourOrder extends Component {
  constructor() {
    super()
    this.state = { operations: [] }
  }

  calculateOperations = () => {
    let result = this.state.operations.join('')
    if (result) {
      result = math.eval(result)
      result = math.format(result, { precision: 14 })
      result = String(result)
      this.setState({
        operations: [result],
      })
    }
  }
  handleClick = e => {
    const value = e.target.getAttribute('data-value')
    switch (value) {
      case 'clear':
        this.setState({
          operations: [],
        })
        break
      case 'equal':
        this.calculateOperations()
        break
      default:
        const newOperations = update(this.state.operations, {
          $push: [value],
        })
        this.setState({
          operations: newOperations,
        })
        break
    }
  }
  render() {
    return (
      <div className="App">
        <DisplayOrder data={this.state.operations} />
        <Buttons>
          <Button onClick={this.handleClick} label="C" value="clear" />
          <Button onClick={this.handleClick} label="Café A" value="5" />
          <Button onClick={this.handleClick} label="Café L" value="7" />
          <Button onClick={this.handleClick} label="Swandich" value="10" />
          <Button onClick={this.handleClick} label="Jugo" value="7" />

          <Button onClick={this.handleClick} label="Hamb S" value="10" />
          <Button onClick={this.handleClick} label="Ham D" value="15" />
          <Button onClick={this.handleClick} label="Papas" value="5" />
          <Button onClick={this.handleClick} label="Onion" value="5" />
          <Button onClick={this.handleClick} label="Agua C" value="5" />

          <Button onClick={this.handleClick} label="Agua G" value="8" />
          <Button onClick={this.handleClick} label="Refresco C" value="7" />
          <Button onClick={this.handleClick} label="Refresco G" value="10" />
          <Button onClick={this.handleClick} label="Queso" value="1" />
          <Button onClick={this.handleClick} label="Huevo" value="1" />

          <Button onClick={this.handleClick} label="-" value="-" />
          <Button onClick={this.handleClick} label="+" size="2" value="+" />
          <Button onClick={this.handleClick} label="=" size="2" value="equal" />
        </Buttons>
      </div>
    )
  }
}

export default GetYourOrder;
