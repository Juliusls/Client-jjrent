/* eslint-disable no-undef */
import React from 'react'
import { useQuery } from '@apollo/client'
import { makeStyles, Grid } from '@material-ui/core'
import { Typography } from '@material-ui/core/'
import DeviceCard from './DeviceCard'

import { FIND_LAPTOP } from '../graphql/laptops/queries'
import { FIND_PHONE } from '../graphql/phones/queries'
import { FIND_WATCH } from '../graphql/watches/queries'


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

const Recommended = ({ name }) => {
	const classes = useStyles()

	const firstItem = useQuery(FIND_LAPTOP, {
		variables: { id: '60b0a648a624718f93dee30c' }
	})
	
	const secondItem = useQuery(FIND_PHONE, {
		variables: { id: '60abb941cc1da53eef2f0e63' }
	})
	
	const thirtItem = useQuery(FIND_PHONE, {
		variables: { id: '60abbc1dcc1da53eef2f0e66' }
	})
	
	const fourthItem = useQuery(FIND_WATCH, {
		variables: { id: '60b0ae9ca624718f93dee30e' }
	})

	if (firstItem.loading || secondItem.loading || thirtItem.loading || fourthItem.loading) return null

	let first = firstItem.data.findLaptop
	let second = secondItem.data.findPhone
	let third = thirtItem.data.findPhone
	let fourth = fourthItem.data.findWatch


	return (
		<div className={classes.root} >
			<Typography variant='h4' className={classes.categoryName}>{name}</Typography>
			<Grid container spacing={2} className={classes.containerGrid} >
				<Grid item xs={12} sm={6} md={3} lg={3} key={first.id} style={{ height: '100%' }}>
					<DeviceCard name={first.laptopName} price={first.prices.twelvePrice} desc={first.description} image={first.imageIds.filter(image => image.imageName.includes('main_thumb_1'))} id={first.id} category='laptop'/>
				</Grid>
				<Grid item xs={12} sm={6} md={3} lg={3} key={second.id} style={{ height: '100%' }}>
					<DeviceCard name={second.phoneName} price={second.prices.twelvePrice} desc={second.description} image={second.imageIds.filter(image => image.imageName.includes('main_thumb_1'))} id={second.id} category='smartphone'/>
				</Grid>
				<Grid item xs={12} sm={6} md={3} lg={3} key={third.id} style={{ height: '100%' }}>
					<DeviceCard name={third.phoneName} price={third.prices.twelvePrice} desc={third.description} image={third.imageIds.filter(image => image.imageName.includes('main_thumb_1'))} id={third.id} category='smartphone'/>
				</Grid>
				<Grid item xs={12} sm={6} md={3} lg={3} key={fourth.id} style={{ height: '100%' }}>
					<DeviceCard name={fourth.watchName} price={fourth.prices.twelvePrice} desc={fourth.description} image={fourth.imageIds.filter(image => image.imageName.includes('main_thumb_1'))} id={fourth.id} category='smartwatch'/>
				</Grid>
			</Grid>
		</div>
	)
}

export default Recommended
