import React from 'react'

import { makeStyles, Card, Typography, Grid } from '@material-ui/core'
import EuroIcon from '@material-ui/icons/Euro'
import BeachAccessOutlinedIcon from '@material-ui/icons/BeachAccessOutlined'
import EmailOutlinedIcon from '@material-ui/icons/EmailOutlined'
import SyncOutlinedIcon from '@material-ui/icons/SyncOutlined'
import ThumbUpAltOutlinedIcon from '@material-ui/icons/ThumbUpAltOutlined'
import EcoOutlinedIcon from '@material-ui/icons/EcoOutlined'

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
	itemName: {
		color: '#274BA1',
		fontSize: 16,
		letterSpacing: 1,
		fontWeight: theme.typography.fontWeightBold,
		textAlign: 'center',
		marginTop: 10,
		padding: 5
	},
	gridItemDiv: {
		minHeight: 200,
		width: '100%',
		borderRadius: 15,
		// borderWidth: 2,
		borderColor: theme.palette.grey[300],
		// borderStyle: 'solid',
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: '#EFF3FC',
	},
	gridItem: {
		// padding: 20
	},
	icon: {
		color: '#274BA1',
	}
}))

const Benefits = () => {
	const classes = useStyles()
	return (
		<Card className={classes.card}>
			<Grid container spacing={3}>
				<Grid item xs={6} sm={4} md={4} lg={4} xl={4} className={classes.gridItem}>
					<div className={classes.gridItemDiv}>
						<EuroIcon style={{ fontSize: 40 }} className={classes.icon}/>
						<Typography className={classes.itemName}>No deposit, no hidden costs</Typography>
					</div>	
				</Grid>
				<Grid item xs={6} sm={4} md={4} lg={4} xl={4} className={classes.gridItem}>
					<div className={classes.gridItemDiv}>
						<BeachAccessOutlinedIcon style={{ fontSize: 40 }} className={classes.icon}/>
						<Typography className={classes.itemName}>Damage coverage</Typography>
					</div>
				</Grid>
				<Grid item xs={6} sm={4} md={4} lg={4} xl={4} className={classes.gridItem}>
					<div className={classes.gridItemDiv}>
						<SyncOutlinedIcon style={{ fontSize: 40 }} className={classes.icon}/>
						<Typography className={classes.itemName}>Flexible rental period with purchase option</Typography>
					</div>
				</Grid>
				<Grid item xs={6} sm={4} md={4} lg={4} xl={4} className={classes.gridItem}>
					<div className={classes.gridItemDiv}>
						<EmailOutlinedIcon style={{ fontSize: 40 }} className={classes.icon}/>
						<Typography className={classes.itemName}>Free easy returns</Typography>
					</div>
				</Grid>
				<Grid item xs={6} sm={4} md={4} lg={4} xl={4} className={classes.gridItem}>
					<div className={classes.gridItemDiv}>
						<ThumbUpAltOutlinedIcon style={{ fontSize: 40 }} className={classes.icon}/>
						<Typography className={classes.itemName}>Great Condition Promise</Typography>
					</div>
				</Grid>
				<Grid item xs={6} sm={4} md={4} lg={4} xl={4} className={classes.gridItem}> 
					<div className={classes.gridItemDiv}>
						<EcoOutlinedIcon style={{ fontSize: 40 }} className={classes.icon}/>
						<Typography className={classes.itemName}>Less e-waste, more sustainability</Typography>
					</div>
				</Grid>
			</Grid>
		</Card>
	)
}

export default Benefits
