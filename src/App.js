import React, { useState } from 'react'
import { useQuery } from '@apollo/client'
import './styles.css'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { makeStyles, Backdrop, CircularProgress } from '@material-ui/core'

import { CartContext, SetCartContext } from './CartContext'


import NavBar from './components/Navigation/NavBar'
import Products from './components/ProductsList/Products'
import Jumbotron from './components/Jumbotron'
import OneCategory from './components/Onecategory'
import Recommended from './components/Recommended'
import Footer from './components/Footer'
import HowItWorksComponent from './components/HowItWorks/HowItWorksComponent'
import ProductPage from './components/ProductPage/ProductPage'
import HowItWorks from './components/HowItWorks/HowItWorks'
// import Dashboard from './components/ADMIN/Dashboard'
import NotFound from './components/NotFound'

import { howItWorksData } from './data'

import ScrollToTop from './utils/HOC'

import Container from '@material-ui/core/Container'

import { ALL_PHONES_MINI } from './graphql/phones/queries'
import { ALL_LAPTOPS_MINI } from './graphql/laptops/queries'
import { ALL_WATCHES_MINI } from './graphql/watches/queries'

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

  
// const Layout = ({ children }) => {
// 	const classes = useStyles()

// 	return (
// 		<section>
// 			<Container className={classes.root}>
// 				<NavBar />
// 				<div className={classes.offset} />
// 				{children}
// 				<Footer />
// 			</Container>
// 		</section>
// 	)
  
// }

const App = () => {
	const phonesResult = useQuery(ALL_PHONES_MINI)
	const laptopsResult = useQuery(ALL_LAPTOPS_MINI)
	const watchesResult = useQuery(ALL_WATCHES_MINI)

	const [context, setContext] = useState([])

	const classes = useStyles()


	if (phonesResult.loading || laptopsResult.loading || watchesResult.loading)  {
		return (
			<Backdrop open={open}>
				<CircularProgress color="inherit" />
			</Backdrop>
		)
	}

	return (
		<CartContext.Provider value={[context]}>
			<SetCartContext.Provider value={[setContext]}>
				<Router onUpdate={() => window.scrollTo(0, 0)} >
					<ScrollToTop />
					<Container className={classes.root}>
						<NavBar />
						<div className={classes.offset} />
						<Switch>
							{/* <Route exact path='/admin/dashboard' component={Dashboard}/> */}
							<Route exact path='/'>
								<Jumbotron />
								<Recommended category='Recommended'/>
								<HowItWorksComponent data={howItWorksData}/>
								<OneCategory category='Smartphones' data={phonesResult.data.allPhones}/>
								<OneCategory category='Laptops' data={laptopsResult.data.allLaptops}/>
								<OneCategory category='Smartwatches' data={watchesResult.data.allWatches}/>
							</Route>
							<Route exact path='/laptops'>
								<Products category='Laptops'/>
							</Route>
							<Route exact path='/smartphones'>
								<Products category='Smartphones'/>
							</Route>
							<Route exact path='/smartwatches'>
								<Products category='Smartwatches'/>
							</Route>
							<Route exact path='/:category/:id'>
								<ProductPage />
							</Route>
							<Route exact path='/howitworks'>
								<HowItWorks />
							</Route>
							<Route >
								<NotFound />
							</Route>
							<Route component={NotFound} />
						</Switch>
						<Footer />
					</Container>
				</Router>
			</SetCartContext.Provider>
		</CartContext.Provider>
	)
}

export default App

// TODO add option later to give only first or random four for eveyr request