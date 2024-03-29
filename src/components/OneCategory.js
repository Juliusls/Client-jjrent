/* eslint-disable no-undef */
import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Grid, Typography, Button } from '@material-ui/core/'
import DeviceCard from './DeviceCard'
import { Link } from 'react-router-dom'

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
		marginBottom: 30,
		[theme.breakpoints.down('sm')]: {
			marginBottom: 10,
		},
	},
	containerGrid: {
		alignItems: 'stretch'
	},
	viewAllButton: {
		display: 'block',
		color: theme.palette.primary.main,
		backgroundColor: theme.palette.common.white,
		borderRadius: 25,
		paddingTop: 10,
		paddingBottom: 10,
		paddingRight: 20,
		paddingLeft: 20,
		marginTop: 30,
		marginRight: 'auto',
		marginLeft: 'auto',
		width: 180,
		textAlign: 'center',
		fontSize: 15,
		fontWeight: 'bold',
		boxShadow: theme.shadows[5],
		'&:hover': {
			backgroundColor: theme.palette.common.white,
			boxShadow: theme.shadows[10],
		},
		[theme.breakpoints.down('sm')]: {
			marginTop: 10,
			paddingTop: 7,
			paddingBottom: 7,
			paddingRight: 14,
			paddingLeft: 14,
		},
	},
}))

const OneCategory = ({ category, data }) => {
	const classes = useStyles()

	// console.log(data)

	const dataValues = () => {
		switch (category) {
		case category = 'Smartphones':
			return data.map(phone => (
				<Grid item xs={12} sm={6} md={3} lg={3} key={phone.id} style={{ height: '100%' }}>
					<DeviceCard name={phone.name} price={phone.prices.twelvePrice} desc={phone.description} image={phone.imageIds.filter(image => image.imageName.includes('main_thumb_1'))} id={phone.id} category='smartphone'/>
				</Grid>
			))
		case category = 'Laptops':
			return data.map(laptop => (
				<Grid item xs={12} sm={6} md={3} lg={3} key={laptop.id} style={{ height: '100%' }}>
					<DeviceCard name={laptop.name} price={laptop.prices.twelvePrice} desc={laptop.description} image={laptop.imageIds.filter(image => image.imageName.includes('main_thumb_1'))} id={laptop.id} category='laptop'/>
				</Grid>
			))
		case category = 'Smartwatches':
			return data.map(watch => (
				<Grid item xs={12} sm={6} md={3} lg={3} key={watch.id} style={{ height: '100%' }}>
					<DeviceCard name={watch.name} price={watch.prices.twelvePrice} desc={watch.description} image={watch.imageIds.filter(image => image.imageName.includes('main_thumb_1'))} id={watch.id} category='smartwatch'/>
				</Grid>
			))	
		default:
			return null
		}
	}

	return (
		<div className={classes.root} >
			<Typography variant='h4' className={classes.categoryName}>{category}</Typography>
			<Grid container spacing={2} className={classes.containerGrid} >
				{dataValues()}
			</Grid>
			<Button variant="contained" className={classes.viewAllButton} component={ Link } to={`/${category.toLowerCase()}`}>View all</Button>
		</div>
	)
}

export default OneCategory
