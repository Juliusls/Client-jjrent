/* eslint-disable no-undef */
import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Grid, Typography, Button } from '@material-ui/core/'
import HowItWorksCard from './HowItWorksCard'

const useStyles = makeStyles(theme => ({
	root: {
		flexGrow: 1,
		backgroundColor: theme.palette.grey[200],
		borderRadius: 25,
		marginTop: 25,
		padding: 30,
		[theme.breakpoints.down('sm')]: {
			padding: 20,
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
		alignItems: 'stretch',
		justifyItems: 'stretch'
	},
	findOutMoreButton: {
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
		},
		[theme.breakpoints.down('sm')]: {
			marginTop: 10,
			paddingTop: 7,
			paddingBottom: 7,
			paddingRight: 14,
			paddingLeft: 14,
		},
	},
	gridItem: {
		alignSelf: 'stretch'
	}
}))

const HowItWorks = ({ data }) => {
	const classes = useStyles()

	return (
		<div className={classes.root} >
			<Typography variant='h4' className={classes.categoryName}>{data.label}</Typography>
			<Grid container spacing={3} className={classes.containerGrid} >
				{data.data.map(item => (
					<Grid key={item.name} item xs={12} sm={12} md={4} lg={4} className={classes.gridItem}>
						<HowItWorksCard name={item.name} desc={item.desc} />
					</Grid>
				))}
			</Grid>
			<Button variant="contained" className={classes.findOutMoreButton}>Find out more</Button>
		</div>
	)
}

export default HowItWorks
