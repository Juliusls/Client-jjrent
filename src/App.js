import React from 'react'
import { useQuery } from '@apollo/client'
import './styles.css'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import Navbar from './components/Navigation/Navbar'
import Phones from './components/Phones'
import Laptops from './components/Laptops'

import Container from '@material-ui/core/Container'

import { ALL_PHONES } from './queries'

const App = () => {
	const result = useQuery(ALL_PHONES)

	if (result.loading)  {
		return <div>loading...</div>
	}

	return (
		<Router>
			<Container maxWidth="xl">
				<Navbar />
				<Switch>
					<Route path='/laptops'>
						<Laptops />
					</Route>
					<Route path='/phones'>
						<Phones />
					</Route>
				</Switch>
			</Container>
		</Router>

	)
}

export default App
