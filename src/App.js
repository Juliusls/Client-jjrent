import React from 'react'
import { useQuery } from '@apollo/client'
import './styles.css'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles'

import Navbar from './components/Navigation/Navbar'
import Phones from './components/Phones'
import Laptops from './components/Laptops'
import Jumbotron from './components/Jumbotron'
import PhonesComponent from './components/PhonesComponent'


import Container from '@material-ui/core/Container'

import { ALL_PHONES } from './queries'

const useStyles = makeStyles({
	root: {
		paddingLeft: 75,
		paddingRight: 75,
	},
})

const App = () => {
	const classes = useStyles()
	const result = useQuery(ALL_PHONES)

	if (result.loading)  {
		return <div>loading...</div>
	}

	return (
		<Router>
			<Container maxWidth='xl' className={classes.root}>
				<Navbar />
				<Jumbotron />
				<PhonesComponent />
				<PhonesComponent />
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
