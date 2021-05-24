/* eslint-disable no-undef */
import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Grid, Typography, Divider, Hidden, Button } from '@material-ui/core/'
import DeviceCard from '../DeviceCard'
import Filters from './Filters'
import TopFilter from './TopFilter'
// import laptop from '../../Images/macbookpro.png'
// import watch from '../../Images/watch.png'
// import headphones from '../../Images/headphones.png'
// import tablet from '../../Images/tablet.png'

import { useQuery } from '@apollo/client'
import { ALL_PHONES_MIDI } from '../../graphql/queries'

// const valuesForList = [
// 	{image: headphones, name: 'Omen 15-dh1076ng - Gaming Laptop - Igsntel® Core™ i7-10750H - 32GB - 512GB PCIe + 1TB HDD - NVIDIA® GeForce® RTX™ 2070 Super Max-Q', price: 64, desc: 'Fusce vitae justo in mi rutrum finibus ut eget lorem'},
// 	{image: laptop, name: 'Apple MacBook Air (Late 2020) Laptop - Apple M1 - 8GB - 256GB SSD - Apple Inteasdagrated 7-core GPU', price: 25, desc: 'Bluetooth, Magnetically attaches and pairs, Compatible with iPad Air (4th generation), iPad Pro 12.9-inch (3rd generation) or later, iPad Pro 11-inch (1st generation) or later'},
// 	{image: watch, name: 'Lenovo ThinkPad E15 G2 Laptop - Intel® Core™ i5-1135G7 - 8GB - 256GB SSD - Inteasdasl® Iris® Xe Graphics', price: 53, desc: 'Fusce vitae justo in mi rutrum finibus ut eget lorem'},
// 	{image: tablet, name: 'Asus zensdffone a5', price: 12, desc: 'Fusce vitae justo in mi rutrum finibus ut eget lorem'},
// 	{image: watch, name: 'Lenovo ThsdfinkPad E15 G2 Laptop - Intel® Core™ i5-1135G7 - 8GB - 256GB SSD - Intel® Iris® Xe Graphics', price: 53, desc: 'Fusce vitae justo in mi rutrum finibus ut eget lorem'},
// 	{image: headphones, name: 'Omen 15-sdfdh1076ng - Gaming Laptop - Intel® Core™ i7-10750H - 32GB - 512GB PCIe + 1TB HDD - NVIDIA® GeForce® RTX™ 2070 Super Max-Q', price: 64, desc: 'Fusce vitae justo in mi rutrum finibus ut eget lorem'},
// 	{image: tablet, name: 'Asus zenfondsfde a5', price: 12, desc: 'Fusce vitae justo in mi rutrum finibus ut eget lorem'},
// 	{image: laptop, name: 'Apple MacBook Air (Late 2020) Laptop - Apple M1 - 8GsdfB - 256GB SSD - Apple Integrated 7-core GPU', price: 25, desc: 'Bluetooth, Magnetically attaches and pairs, Compatible with iPad Air (4th generation), iPad Pro 12.9-inch (3rd generation) or later, iPad Pro 11-inch (1st generation) or later'},
// ]

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

let brandNames = ['apple', 'samsung', 'oneplus', 'lenovo']
let maxPrice = 150
let minPrice = 29
let mainData = null

const Products = ({ name }) => {
	const classes = useStyles()
	const getDefaultCheckboxes = () =>
		brandNames.map(name => ({
			name: name,
			checked: false,
		}))

	const [topMenuOpne, setTopMenuOpen] = useState(false)
	
	const [brandsChecked, setBandsChecked] = useState(getDefaultCheckboxes())
	const [sortBy, setSortBy] = useState('lowToHigh')
	const [priceRange, setPriceRange] = useState([minPrice, maxPrice])
	const [minRentPeriod, setMinRentPeriod] = useState(4)

	const phoneData = useQuery(ALL_PHONES_MIDI)

	if (phoneData.loading) return <p>Loading ...</p>

	if (name === 'Smartphones') {
		mainData = phoneData.data.allPhones
	}

	console.log(mainData)

	// filter for SORTING

	// filter for MONTLYPRICE
	const price = (phone) => {
		if (minRentPeriod === 4) {
			return phone.phonePrices.twelvePrice
		} else if (minRentPeriod === 3) {
			return phone.phonePrices.sixPrice
		} else if (minRentPeriod === 2) {
			return phone.phonePrices.threePrice
		} else if (minRentPeriod === 1) {
			return phone.phonePrices.onePrice
		}
	}

	// filter for MINRENTPERIOD

	// filter for BRANDS

	const dataValues = () => {
		switch (name) {
		case name = 'Smartphones':
			return mainData.map(phone => (
				<Grid item xs={12} sm={6} md={4} lg={4} key={phone.id}>
					<DeviceCard name={phone.phoneName} price={price(phone)} desc={phone.description} image={phone.imageIds.filter(image => image.imageName.includes('thumb_1_main'))} />
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
						<Filters brandNames={brandNames} maxPrice={maxPrice} minPrice={minPrice} brandsChecked={brandsChecked} setBandsChecked={setBandsChecked} sortBy={sortBy} setSortBy={setSortBy} priceRange={priceRange} setPriceRange={setPriceRange} minRentPeriod={minRentPeriod} setMinRentPeriod={setMinRentPeriod} />
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
				<TopFilter topMenuOpne={topMenuOpne} setTopMenuOpen={setTopMenuOpen} maxPrice={maxPrice} minPrice={minPrice} brandNames={brandNames} brandsChecked={brandsChecked} setBandsChecked={setBandsChecked} sortBy={sortBy} setSortBy={setSortBy} priceRange={priceRange} setPriceRange={setPriceRange} minRentPeriod={minRentPeriod} setMinRentPeriod={setMinRentPeriod}/>
			</div>
		</div>
	)
}

export default Products
