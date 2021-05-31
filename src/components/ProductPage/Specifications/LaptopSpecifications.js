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

const LaptopSpecifications = ({ laptopSpecs }) => {
	const classes = useStyles()
	return (
		<Card className={classes.card}>
			<Typography className={classes.cardName}>
				Specifications
			</Typography>
			<Grid container spacing={3}>
				<Grid item xs={12} sm={6} md={6} lg={6} xl={6}>
					<Typography className={classes.specName}>Model</Typography>
					<Typography className={classes.theSpec}>{laptopSpecs.model}GB</Typography>
				</Grid>
				<Grid item xs={12} sm={6} md={6} lg={6} xl={6}>
					<Typography className={classes.specName}>Memory</Typography>
					<Typography className={classes.theSpec}>{laptopSpecs.memory}GB</Typography>
				</Grid>
				<Grid item xs={12} sm={6} md={6} lg={6} xl={6}>
					<Typography className={classes.specName}>Display</Typography>
					<Typography className={classes.theSpec}>{laptopSpecs.display}</Typography>
				</Grid>
				<Grid item xs={12} sm={6} md={6} lg={6} xl={6}>
					<Typography className={classes.specName}>Storage</Typography>
					<Typography className={classes.theSpec}>{laptopSpecs.storage}</Typography>
				</Grid>
				<Grid item xs={12} sm={6} md={6} lg={6} xl={6}>
					<Typography className={classes.specName}>Processor</Typography>
					<Typography className={classes.theSpec}>{laptopSpecs.processor}</Typography>
				</Grid>
				<Grid item xs={12} sm={6} md={6} lg={6} xl={6}>
					<Typography className={classes.specName}>Graphics</Typography>
					<Typography className={classes.theSpec}>{laptopSpecs.graphics}</Typography>
				</Grid>
				<Grid item xs={12} sm={6} md={6} lg={6} xl={6}>
					<Typography className={classes.specName}>Dimensions</Typography>
					<Typography className={classes.theSpec}>{laptopSpecs.dimensions}</Typography>
				</Grid>
				<Grid item xs={12} sm={6} md={6} lg={6} xl={6}>
					<Typography className={classes.specName}>Operating System</Typography>
					<Typography className={classes.theSpec}>{laptopSpecs.operatingSystem}</Typography>
				</Grid>
				<Grid item xs={12} sm={6} md={6} lg={6} xl={6}>
					<Typography className={classes.specName}>Keyboard Language</Typography>
					<Typography className={classes.theSpec}>{laptopSpecs.operatingSystem}</Typography>
				</Grid>
			</Grid>
		</Card>
	)
}

export default LaptopSpecifications

// TODO add battery life