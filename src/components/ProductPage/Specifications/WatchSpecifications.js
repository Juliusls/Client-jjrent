import React from 'react'

import { makeStyles, Card, Typography, Grid } from '@material-ui/core'

const useStyles = makeStyles(theme => ({
	card: {
		padding: 24,
		borderRadius: 15,
		backgroundColor: theme.palette.common.white,
		boxShadow: theme.shadows[5],
		maxWidth: '100%',
		marginTop: 20,
		[theme.breakpoints.down('sm')]: {
			width: '-webkit-fill-available',
		},
	},
	cardName: {
		color: theme.palette.primary.main,
		fontSize: 24,
		letterSpacing: 'normal',
		fontWeight: theme.typography.fontWeightBold,
		marginBottom: 16
	},
	specName: {
		fontSize: 14,
		fontWeight: 'bold',
		letterSpacing: 2,
		textTransform: 'uppercase',
		marginBottom: 3
	},
	theSpec: {
		color: theme.palette.grey[600],
		fontSize: 16,
		letterSpacing: 1,
		fontWeight: theme.typography.fontWeightMedium,
	},
}))

const WatchSpecifications = ({ watchSpecs }) => {
	const classes = useStyles()
	return (
		<Card className={classes.card}>
			<Typography className={classes.cardName}>
				Specifications
			</Typography>
			<Grid container spacing={3}>
				<Grid item xs={12} sm={6} md={6} lg={6} xl={6}>
					<Typography className={classes.specName}>Type</Typography>
					<Typography className={classes.theSpec}>{watchSpecs.type}</Typography>
				</Grid>
				<Grid item xs={12} sm={6} md={6} lg={6} xl={6}>
					<Typography className={classes.specName}>Model Year</Typography>
					<Typography className={classes.theSpec}>{watchSpecs.modelYear}</Typography>
				</Grid>
				<Grid item xs={12} sm={6} md={6} lg={6} xl={6}>
					<Typography className={classes.specName}>Baterry Life</Typography>
					<Typography className={classes.theSpec}>{watchSpecs.batteryLife}</Typography>
				</Grid>
				<Grid item xs={12} sm={6} md={6} lg={6} xl={6}>
					<Typography className={classes.specName}>Connectivity</Typography>
					<Typography className={classes.theSpec}>{watchSpecs.connectivity}</Typography>
				</Grid>
				<Grid item xs={12} sm={6} md={6} lg={6} xl={6}>
					<Typography className={classes.specName}>Compatibility</Typography>
					<Typography className={classes.theSpec}>{watchSpecs.compatibility}</Typography>
				</Grid>
				<Grid item xs={12} sm={6} md={6} lg={6} xl={6}>
					<Typography className={classes.specName}>Build Material</Typography>
					<Typography className={classes.theSpec}>{watchSpecs.buildMaterial}</Typography>
				</Grid>
				<Grid item xs={12} sm={6} md={6} lg={6} xl={6}>
					<Typography className={classes.specName}>Band Size</Typography>
					<Typography className={classes.theSpec}>{watchSpecs.bandSize}</Typography>
				</Grid>
				<Grid item xs={12} sm={6} md={6} lg={6} xl={6}>
					<Typography className={classes.specName}>Water Resistance</Typography>
					<Typography className={classes.theSpec}>{watchSpecs.waterResistance}</Typography>
				</Grid>
				<Grid item xs={12} sm={6} md={6} lg={6} xl={6}>
					<Typography className={classes.specName}>Wireless And Location</Typography>
					<Typography className={classes.theSpec}>{watchSpecs.wirelessAndLocation}</Typography>
				</Grid>
				<Grid item xs={12} sm={6} md={6} lg={6} xl={6}>
					<Typography className={classes.specName}>Special Features</Typography>
					<Typography className={classes.theSpec}>{watchSpecs.specialFeatures}</Typography>
				</Grid>
				<Grid item xs={12} sm={6} md={6} lg={6} xl={6}>
					<Typography className={classes.specName}>Activity Tracking</Typography>
					<Typography className={classes.theSpec}>{watchSpecs.activityTracking}</Typography>
				</Grid>
			</Grid>
		</Card>
	)
}

export default WatchSpecifications