import React from 'react'
// import { useQuery } from '@apollo/client'
import './styles.css'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles'

import NavBar from './components/Navigation/NavBar'
import Products from './components/ProductsList/Products'
import Jumbotron from './components/Jumbotron'
import OneCategory from './components/Onecategory'
import Footer from './components/Footer'
import HowItWorksComponent from './components/HowItWorks/HowItWorksComponent'
import ProductPage from './components/ProductPage/ProductPage'
import HowItWorks from './components/HowItWorks/HowItWorks'
import Dashboard from './components/ADMIN/Dashboard'

import { howItWorksData } from './data'

import Container from '@material-ui/core/Container'

// import { ALL_PHONES } from './graphql/queries'

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

  
const Layout = ({ children }) => {
	const classes = useStyles()

	return (
		<section>
			<Container className={classes.root}>
				<NavBar />
				<div className={classes.offset} />
				{children}
				<Footer/>
			</Container>
		</section>
	)
  
}

const App = () => {
	// const result = useQuery(ALL_PHONES)

	// if (result.loading)  {
	// 	return <div>loading...</div>
	// }

	// console.log(result.data.allPhones)

	return (
		<Router>
			<Switch>
				<Route exact path='/admin/dashboard'>
					<Dashboard />
				</Route>
				<Layout>
					<Route exact path='/'>
						<Jumbotron />
						<OneCategory name='Recommended'/>
						<HowItWorksComponent data={howItWorksData}/>
						<OneCategory name='Phones'/>
						<OneCategory name='Laptops'/>
						<OneCategory name='Smartwatches'/>
						<OneCategory name='Headphones'/>
					</Route>
					<Route path='/products'>
						<Products name='Laptops'/>
					</Route>
					<Route path='/product/12345'>
						<ProductPage/>
					</Route>
					<Route path='/howitworks'>
						<HowItWorks />
					</Route>
				</Layout>
			</Switch>
		</Router>
	)
}

export default App