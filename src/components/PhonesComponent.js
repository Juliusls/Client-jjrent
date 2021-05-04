import React from 'react'

import { makeStyles } from '@material-ui/core/styles'
import { Grid, Typography, Button } from '@material-ui/core/'
import DeviceCard from './DeviceCard'


const useStyles = makeStyles(theme => ({
	root: {
		flexGrow: 1,
		backgroundColor: theme.palette.grey[200],
		borderRadius: 25,
		marginTop: 25,
		padding: 30
	},
	categoryName: {
		color: theme.palette.primary.main,
		fontWeight: 'bold',
		marginBottom: 30
	},
	containerGrid: {
		display: 'flex',
		justifyContent: 'space-between',
	},
	viewAllButton: {
		color: theme.palette.primary.main,
		backgroundColor: theme.palette.common.white,
		borderRadius: 25,
		paddingTop: 10,
		paddingBottom: 10,
		paddingRight: 20,
		paddingLeft: 20,
		marginTop: 30,
		fontSize: 15,
		fontWeight: 'bold',
		boxShadow: theme.shadows[5],
		'&:hover': {
			backgroundColor: theme.palette.common.white,
			boxShadow: theme.shadows[10],
		}
	},
}))

import laptop from '../Images/macbookpro.png'
import watch from '../Images/watch.png'
import headphones from '../Images/headphones.png'
import tablet from '../Images/tablet.png'

const valuesForList = [
	{image: laptop, name: 'Apple MacBook Air (Late 2020) Laptop - Apple M1 - 8GB - 256GB SSD - Apple Integrated 7-core GPU', price: 25, desc: 'Bluetooth, Magnetically attaches and pairs, Compatible with iPad Air (4th generation), iPad Pro 12.9-inch (3rd generation) or later, iPad Pro 11-inch (1st generation) or later'},
	{image: watch, name: 'Lenovo ThinkPad E15 G2 Laptop - Intel® Core™ i5-1135G7 - 8GB - 256GB SSD - Intel® Iris® Xe Graphics', price: 53, desc: 'Fusce vitae justo in mi rutrum finibus ut eget lorem'},
	{image: headphones, name: 'Omen 15-dh1076ng - Gaming Laptop - Intel® Core™ i7-10750H - 32GB - 512GB PCIe + 1TB HDD - NVIDIA® GeForce® RTX™ 2070 Super Max-Q', price: 64, desc: 'Fusce vitae justo in mi rutrum finibus ut eget lorem'},
	{image: tablet, name: 'Asus', price: 12, desc: 'Fusce vitae justo in mi rutrum finibus ut eget lorem'}
]

const PhonesComponent = () => {
	const classes = useStyles()

	return (
		<div className={classes.root} >
			<Typography variant='h4' className={classes.categoryName}>Phones</Typography>
			<Grid container spacing={2} className={classes.containerGrid}>
				{valuesForList.map(value => (
					<Grid item xs={12} sm={6} md={3} lg={3} key={value.name}>
						<DeviceCard name={value.name} price={value.price} desc={value.desc} image={value.image} />
					</Grid>
				))}
			</Grid>
			<Button variant="contained" className={classes.viewAllButton}>View all</Button>
		</div>
	)
}

export default PhonesComponent
