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
			width: '100%',
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

const Specifications = () => {
	const classes = useStyles()
	return (
		<Card className={classes.card}>
			<Typography className={classes.cardName}>
				Specifications
			</Typography>
			<Grid container spacing={3}>
				<Grid item xs={6} sm={6} md={6} lg={6} xl={6}>
					<Typography className={classes.specName}>Memory</Typography>
					<Typography className={classes.theSpec}>6GB</Typography>
				</Grid>
				<Grid item xs={6} sm={6} md={6} lg={6} xl={6}>
					<Typography className={classes.specName}>Display</Typography>
					<Typography className={classes.theSpec}>6.7-Inch (SUPER RETINA OLED, 1284 x 2778 Pixels)</Typography>
				</Grid>
				<Grid item xs={6} sm={6} md={6} lg={6} xl={6}>
					<Typography className={classes.specName}>Battery</Typography>
					<Typography className={classes.theSpec}>3687mAh</Typography>
				</Grid>
				<Grid item xs={6} sm={6} md={6} lg={6} xl={6}>
					<Typography className={classes.specName}>Storage</Typography>
					<Typography className={classes.theSpec}>256GB</Typography>
				</Grid>
				<Grid item xs={6} sm={6} md={6} lg={6} xl={6}>
					<Typography className={classes.specName}>Processor</Typography>
					<Typography className={classes.theSpec}>Apple A14 Bionic</Typography>
				</Grid>
				<Grid item xs={6} sm={6} md={6} lg={6} xl={6}>
					<Typography className={classes.specName}>Dimensions</Typography>
					<Typography className={classes.theSpec}>16.1 x 7.8 x 0.74 cm • 0.23 kg</Typography>
				</Grid>
				<Grid item xs={6} sm={6} md={6} lg={6} xl={6}>
					<Typography className={classes.specName}>Rear Camera</Typography>
					<Typography className={classes.theSpec}>12MP + 12MP + 12MP</Typography>
				</Grid>
				<Grid item xs={6} sm={6} md={6} lg={6} xl={6}>
					<Typography className={classes.specName}>Front Camera</Typography>
					<Typography className={classes.theSpec}>12MP</Typography>
				</Grid>
				<Grid item xs={6} sm={6} md={6} lg={6} xl={6}>
					<Typography className={classes.specName}>Operating System</Typography>
					<Typography className={classes.theSpec}>iOS14</Typography>
				</Grid>
			</Grid>
		</Card>
	)
}

export default Specifications
