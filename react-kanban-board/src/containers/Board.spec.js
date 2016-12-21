import React from 'react'
import { Component } from 'react'
import { connect } from 'react-redux'
import * as actions from '../actions'

export class Board extends Component {
  render() {
    return (
      <div>
	  	<h1>Scrumb Board</h1>
	  </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => ({
	...state
})

export default connect(mapStateToProps, actions)(Board)
