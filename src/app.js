import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { Home, Company, DataCenters, Services, Support } from './components/layout'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'

class App extends Component {
	render(){
		return(
			<div>
				<Router history={browserHistory}>
					<Route path="/" component={Home} />
					<Route path="/company" component={Company} />
					<Route path="/datacenters" component={DataCenters} />
					<Route path="/services" component={Services} />
					<Route path="/support" component={Support} />
				</Router>
				<Home />
			</div>
		)
	}
}

ReactDOM.render(<App />, document.getElementById('root'))