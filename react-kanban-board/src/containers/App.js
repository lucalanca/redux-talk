import React from 'react'
import { Component } from 'react'
import { connect } from 'react-redux'
import * as actions from '../actions'

import { Link } from 'react-router';


export class App extends Component {
  render() {
		const { currentUser, children } = this.props;
    return (
			<div className="l-app">
        {/*
				<div>
					<span>Current User:</span>
					<select defaultValue={currentUser && currentUser.id} onChange={evt => this.props.setCurrentUser({ ...this.props.users[evt.target.value], id: evt.target.value })}>
						{Object.keys(this.props.users).map(uId =>
							<option key={`u-${uId}`} value={uId}>
								{this.props.users[uId].name}
							</option>
						)}
					</select>
				</div>
				<div>
					<Link to="/">Board</Link>
					<Link to="/timeline">Timeline</Link>
				</div>
        */}
				<div className="l-app__container">
					{children}
				</div>
			</div>

    )
  }
}

const mapStateToProps = (state, ownProps) => ({
	...state
})

export default connect(mapStateToProps, actions)(App)
