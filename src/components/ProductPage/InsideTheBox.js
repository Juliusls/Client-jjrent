import React from 'react'

import { makeStyles, Card, Typography, Grid } from '@material-ui/core'
import CameraAltOutlinedIcon from '@material-ui/icons/CameraAltOutlined'

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
	itemName: {
		color: theme.palette.common.black,
		fontSize: 16,
		letterSpacing: 1,
		fontWeight: theme.typography.fontWeightBold,
	},
	gridItem: {
		minHeight: 150,
		width: '100%',
		borderRadius: 15,
		borderWidth: 2,
		borderColor: theme.palette.grey[300],
		borderStyle: 'solid',
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		justifyContent: 'center',
	}
}))

const InsideTheBox = () => {
	const classes = useStyles()
	return (
		<Card className={classes.card}>
			<Typography className={classes.cardName}>
				Inside the box
			</Typography>
			<Grid container spacing={3}>
				<Grid item xs={4} sm={4} md={4} lg={4} xl={4}>
					<div className={classes.gridItem}>
						<CameraAltOutlinedIcon style={{ fontSize: 40 }}/>
						<Typography className={classes.itemName}>iPhone</Typography>
					</div>	
				</Grid>
				<Grid item xs={4} sm={4} md={4} lg={4} xl={4}>
					<div className={classes.gridItem}>
						<CameraAltOutlinedIcon style={{ fontSize: 40 }}/>
						<Typography className={classes.itemName}>Charging Cable</Typography>
					</div>
				</Grid>
				<Grid item xs={4} sm={4} md={4} lg={4} xl={4}>
					<div className={classes.gridItem}>
						<CameraAltOutlinedIcon style={{ fontSize: 40 }}/>
						<Typography className={classes.itemName}>SIM card remover</Typography>
					</div>

				</Grid>
				<Grid item xs={4} sm={4} md={4} lg={4} xl={4}>
					<div className={classes.gridItem}>
						<CameraAltOutlinedIcon style={{ fontSize: 40 }}/>
						<Typography className={classes.itemName}>User manual</Typography>
					</div>
				</Grid>
			</Grid>
		</Card>
	)
}

export default InsideTheBox
