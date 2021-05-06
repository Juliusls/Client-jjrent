import React from 'react'
import { useQuery } from '@apollo/client'
import './styles.css'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles'

import Navbar from './components/Navigation/Navbar'
import Phones from './components/Phones'
import Laptops from './components/Laptops'
import Jumbotron from './components/Jumbotron'
import OneCategory from './components/OneCategory'
import Footer from './components/Footer'
import HowItWorks from './components/HowItWorks'

import { howItWorksData } from './data'

import Container from '@material-ui/core/Container'

import { ALL_PHONES } from './queries'

const useStyles = makeStyles(theme => ({
	root: {
		maxWidth: 3840,
		paddingLeft: 75,
		paddingRight: 75,
		[theme.breakpoints.down('md')]: {
			paddingLeft: 40,
			paddingRight: 40,
		},
		[theme.breakpoints.down('sm')]: {
			paddingLeft: 15,
			paddingRight: 15,
		},
		[theme.breakpoints.down('xs')]: {
			paddingLeft: 10,
			paddingRight: 10,
		},
		[theme.breakpoints.up('xl')]: {
			paddingLeft: 100,
			paddingRight: 100,
		},
	},
	offset: theme.mixins.toolbar,
}))

const App = () => {
	const classes = useStyles()
	const result = useQuery(ALL_PHONES)


	if (result.loading)  {
		return <div>loading...</div>
	}

	return (
		<Router>
			<Container className={classes.root}>
				<Navbar />
				<div className={classes.offset} />
				<div className={classes.offset} />
				<Switch>
					<Route exact path='/'>
						<Jumbotron />
						<OneCategory name='Recommended'/>
						<HowItWorks data={howItWorksData}/>
						<OneCategory name='Phones'/>
						<OneCategory name='Laptops'/>
						<OneCategory name='Smartwatches'/>
						<OneCategory name='Headphones'/>
					</Route>
					<Route path='/laptops'>
						<Laptops />
					</Route>
					<Route path='/phones'>
						<Phones />
					</Route>
				</Switch>
				<Footer />
			</Container>
		</Router>

	)
}

export default App


//TODO work on sidemenu on small screen