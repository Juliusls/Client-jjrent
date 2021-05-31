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
	itemName: {
		color: theme.palette.common.black,
		fontSize: 16,
		letterSpacing: 1,
		fontWeight: theme.typography.fontWeightBold,
		textAlign: 'center'
	},
	gridItem: {
		minHeight: 50,
		width: '100%',
		borderRadius: 15,
		borderWidth: 2,
		borderColor: theme.palette.grey[200],
		borderStyle: 'solid',
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		justifyContent: 'center',
	},
	// iconsSize: {
	// 	fontSize: 40
	// }
}))

const InsideTheBox = ({ insideTheBox }) => {
	const classes = useStyles()

	// const IconSwitch = (icon) => {
	// 	console.log(icon)
	
	// 	switch (icon) {
	// 	case 'Phone':
	// 		return <PhoneIphoneOutlinedIcon className={classes.iconsSize}/>
	// 	case 'Charging Cable':
	// 		return <CameraAltOutlinedIcon className={classes.iconsSize}/>
	// 	case 'Charger':
	// 		return <CameraAltOutlinedIcon className={classes.iconsSize}/>
	// 	case 'SIM card remover':
	// 		return <CameraAltOutlinedIcon className={classes.iconsSize}/>
	// 	case 'User manual':
	// 		return <CameraAltOutlinedIcon className={classes.iconsSize}/>
	// 	case 'Case':
	// 		return <CameraAltOutlinedIcon className={classes.iconsSize}/>
	// 	case 'Screen protector':
	// 		return <CameraAltOutlinedIcon className={classes.iconsSize}/>
	// 	case 'Smartwatch':
	// 		return <WatchOutlinedIcon className={classes.iconsSize}/>
	// 	case 'Watch strap':
	// 		return <CameraAltOutlinedIcon className={classes.iconsSize}/>
	// 	case 'Charging station':
	// 		return <CameraAltOutlinedIcon className={classes.iconsSize}/>
	// 	case 'Charger brick':
	// 		return <CameraAltOutlinedIcon className={classes.iconsSize}/>
	// 	case 'Laptop':
	// 		return <LaptopMacOutlinedIcon className={classes.iconsSize}/>
	// 	case 'Power adapter':
	// 		return <PowerOutlinedIcon className={classes.iconsSize}/>
	// 	default:
	// 		return null
	// 	}
	// }

	return (
		<Card className={classes.card}>
			<Typography className={classes.cardName}>
				In The Box
			</Typography>
			<Grid container spacing={3}>
				{insideTheBox.map(item => 
					<Grid item xs={6} sm={4} md={4} lg={4} xl={4} key={item}>
						<div className={classes.gridItem}>
							<Typography className={classes.itemName}>{item}</Typography>
						</div>	
					</Grid>
				)}
				{/* <Grid item xs={6} sm={4} md={4} lg={4} xl={4}>
					<div className={classes.gridItem}>
						<CameraAltOutlinedIcon className={classes.iconsSize}/>
						<Typography className={classes.itemName}>iPhone</Typography>
					</div>	
				</Grid>
				<Grid item xs={6} sm={4} md={4} lg={4} xl={4}>
					<div className={classes.gridItem}>
						<CameraAltOutlinedIcon className={classes.iconsSize}/>
						<Typography className={classes.itemName}>Charging Cable</Typography>
					</div>
				</Grid>
				<Grid item xs={6} sm={4} md={4} lg={4} xl={4}>
					<div className={classes.gridItem}>
						<CameraAltOutlinedIcon className={classes.iconsSize}/>
						<Typography className={classes.itemName}>SIM card remover</Typography>
					</div>

				</Grid>
				<Grid item xs={6} sm={4} md={4} lg={4} xl={4}>
					<div className={classes.gridItem}>
						<CameraAltOutlinedIcon className={classes.iconsSize}/>
						<Typography className={classes.itemName}>User manual</Typography>
					</div>
				</Grid> */}
			</Grid>
		</Card>
	)
}

export default InsideTheBox
