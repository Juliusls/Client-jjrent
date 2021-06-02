import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Grid, Typography, Divider, Hidden, Button } from '@material-ui/core/'
import DeviceCard from '../DeviceCard'
import Filters from './Filters'
import TopFilter from './TopFilter'

import { useQuery } from '@apollo/client'
import { ALL_PHONES_MIDI } from '../../graphql/phones/queries'
import { ALL_LAPTOPS_MIDI } from '../../graphql/laptops/queries'
import { ALL_WATCHES_MIDI } from '../../graphql/watches/queries'

const useStyles = makeStyles(theme => ({
	root: {
		flexGrow: 1,
		backgroundColor: theme.palette.grey[200],
		borderRadius: 25,
		marginTop: 25,
		padding: 30,
		[theme.breakpoints.down('sm')]: {
			padding: 15,
		},
	},
	categoryName: {
		color: theme.palette.primary.main,
		fontWeight: 'bold',
		marginBottom: 20,
		[theme.breakpoints.down('sm')]: {
			marginBottom: 10,
		},
	},
	dividerMain: {
		backgroundColor: theme.palette.primary.main,
		height: 3,
		borderRadius: 10,
		marginBottom: 20
	},
	dividerSecondary: {
		backgroundColor: theme.palette.primary.main,
		height: 2,
		borderRadius: 10,
		marginBottom: 20
	}, 
	flexboxContainer: {
		display: 'flex',
		alignItems: 'strech',
		justifyContent: 'flex-start',
		flexWrap: 'no-wrap',
		[theme.breakpoints.down('md')]: {
			flexDirection: 'column'
		},
		[theme.breakpoints.down('sm')]: {

		},
		[theme.breakpoints.down('xs')]: {

		},
	},
	firstGridContaner: {
		flexGrow: 1,
		alignSelf: 'strech',
		flexBasis: 0,
		marginRight: 16,
		[theme.breakpoints.down('md')]: {
			paddingBottom: 20,
			width: '100%'
		},
	},
	secondGridContaner: {
		flexGrow: 3,
		alignSelf: 'strech',
		flexBasis: 0
	},
	buttonFilter: {
		color: theme.palette.common.white,
		backgroundColor: theme.palette.primary.main,
		borderRadius: 25,
		paddingTop: 8,
		paddingBottom: 8,
		paddingRight: 16,
		paddingLeft: 16,
		fontSize: 16,
		fontWeight: 'bold',
		boxShadow: theme.shadows[5],
		marginBottom: 20,
		'&:hover': {
			color: theme.palette.common.white,
			backgroundColor: theme.palette.primary.main,
			boxShadow: theme.shadows[10],
		}
	},
}))

let mainData = null
let dataForMinMAx = null

const Products = ({ name }) => {
	const classes = useStyles()
	const phoneData = useQuery(ALL_PHONES_MIDI)
	const laptopData = useQuery(ALL_LAPTOPS_MIDI)
	const watchData = useQuery(ALL_WATCHES_MIDI)

	const [topMenuOpne, setTopMenuOpen] = useState(false)

	const [pricesArray, setPricesArray] = useState([])
	const [brandsArray, setBrandsArray] = useState([])
	const [sortBy, setSortBy] = useState('lowToHigh')
	const [minRentPeriod, setMinRentPeriod] = useState(4)

	if (phoneData.loading || laptopData.loading || watchData.loading) return <p>Loading ...</p>

	if (name === 'Smartphones') {
		mainData = phoneData.data.allPhones
		dataForMinMAx = phoneData.data.allPhones
	} else if (name === 'Laptops') {
		mainData = laptopData.data.allLaptops
		dataForMinMAx = laptopData.data.allLaptops
	} else if (name === 'Smartwatches') {
		mainData = watchData.data.allWatches
		dataForMinMAx = watchData.data.allWatches
	}

	// filter for BRANDS
	let brandsList = [...new Set(mainData.map(item => item.brand))]
	if (brandsArray && brandsArray.length !== 0) {
		mainData = mainData.filter(obj => brandsArray.includes(obj.brand))
	}

	// filter for MINRENTPERIOD
	const priceSwitch = (value) => {
		if (minRentPeriod === 4) {
			return value.prices.twelvePrice
		} else if (minRentPeriod === 3) {
			return value.prices.sixPrice
		} else if (minRentPeriod === 2) {
			return value.prices.threePrice
		} else if (minRentPeriod === 1) {
			return value.prices.onePrice
		}
	}

	// filter for SORTING
	switch (sortBy) {
	case 'lowToHigh':
		mainData = mainData.slice().sort((a, b) => {
			if (priceSwitch(a) > priceSwitch(b)) return 1
			if (priceSwitch(a) < priceSwitch(b)) return -1
			return 0
		})
		break
	case 'highToLow':
		mainData = mainData.slice().sort((a, b) => {
			if (priceSwitch(a)< priceSwitch(b)) return 1
			if (priceSwitch(a) > priceSwitch(b)) return -1
			return 0
		})
		break
	default:
		mainData
	}

	// filter for MONTLYPRICE
	mainData = mainData.slice().filter(item => pricesArray[0] <= priceSwitch(item) && priceSwitch(item) <= pricesArray[1])

	const dataValues = () => {
		switch (name) {
		case name = 'Smartphones':
			return mainData.map(phone => (
				<Grid item xs={12} sm={6} md={4} lg={4} key={phone.id}>
					<DeviceCard name={phone.phoneName} price={priceSwitch(phone)} desc={phone.description} image={phone.imageIds.filter(image => image.imageName.includes('main_thumb_1'))} id={phone.id} category='smartphone' minRentPeriod={minRentPeriod}/>
				</Grid>
			))
		case name = 'Laptops':
			return mainData.map(laptop => (
				<Grid item xs={12} sm={6} md={4} lg={4} key={laptop.id}>
					<DeviceCard name={laptop.laptopName} price={priceSwitch(laptop)} desc={laptop.description} image={laptop.imageIds.filter(image => image.imageName.includes('main_thumb_1'))} id={laptop.id} category='laptop' minRentPeriod={minRentPeriod}/>
				</Grid>
			))
		case name = 'Smartwatches':
			return mainData.map(watch => (
				<Grid item xs={12} sm={6} md={4} lg={4} key={watch.id}>
					<DeviceCard name={watch.watchName} price={priceSwitch(watch)} desc={watch.description} image={watch.imageIds.filter(image => image.imageName.includes('main_thumb_1'))} id={watch.id} category='smartwatch' minRentPeriod={minRentPeriod}/>
				</Grid>
			))	
		default:
			return null
		}
	}

	return (
		<div className={classes.root} >
			<Typography variant='h4' className={classes.categoryName}>{name}</Typography>
			<Divider classes={{ root: classes.dividerMain }}/>
			<div className={classes.flexboxContainer}>
				<Hidden xsDown>
					<div className={classes.firstGridContaner}>
						<Filters setBrandsArray={setBrandsArray} brandsList={brandsList} sortBy={sortBy} setSortBy={setSortBy} minRentPeriod={minRentPeriod} setMinRentPeriod={setMinRentPeriod} setPricesArray={setPricesArray} minPrice={Math.min(...dataForMinMAx.map(item => priceSwitch(item)))} maxPrice={Math.max(...dataForMinMAx.map(item => priceSwitch(item)))}/>
					</div>
					<Hidden lgUp>
						<Divider classes={{ root: classes.dividerSecondary }}/>
					</Hidden>
				</Hidden>
				<Hidden smUp>
					<Button variant="contained" className={classes.buttonFilter} onClick={() => setTopMenuOpen(true)}>Filter</Button>
				</Hidden>
				<Grid container spacing={2} className={classes.secondGridContaner}>
					{dataValues()}
				</Grid>
				<TopFilter topMenuOpne={topMenuOpne} setTopMenuOpen={setTopMenuOpen} brandsList={brandsList} sortBy={sortBy} setSortBy={setSortBy} minRentPeriod={minRentPeriod} setMinRentPeriod={setMinRentPeriod} setPricesArray={setPricesArray} minPrice={Math.min(...dataForMinMAx.map(item => priceSwitch(item)))} maxPrice={Math.max(...dataForMinMAx.map(item => priceSwitch(item)))} />
			</div>
		</div>
	)
}

export default Products