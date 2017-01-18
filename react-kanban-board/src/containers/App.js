import React from 'react'
import { Component } from 'react'

export class App extends Component {
  render() {
		const { children } = this.props;
    return (
			<div className="l-app">
				<div className="l-app__container">
					{children}
				</div>
			</div>

    )
  }
}

export default App
