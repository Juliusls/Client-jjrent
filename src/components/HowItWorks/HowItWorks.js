import React from 'react'
import { makeStyles, Grid, Card } from '@material-ui/core'
import Timeline from '@material-ui/lab/Timeline'
import TimelineItem from '@material-ui/lab/TimelineItem'
import TimelineSeparator from '@material-ui/lab/TimelineSeparator'
import TimelineConnector from '@material-ui/lab/TimelineConnector'
import TimelineContent from '@material-ui/lab/TimelineContent'
import TimelineDot from '@material-ui/lab/TimelineDot'

import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline'
import AccountCircleOutlinedIcon from '@material-ui/icons/AccountCircleOutlined'
import CreditCardOutlinedIcon from '@material-ui/icons/CreditCardOutlined'
import LocalShippingOutlinedIcon from '@material-ui/icons/LocalShippingOutlined'
import DevicesOtherOutlinedIcon from '@material-ui/icons/DevicesOtherOutlined'
import PhoneAndroidOutlinedIcon from '@material-ui/icons/PhoneAndroidOutlined'

import EuroIcon from '@material-ui/icons/Euro'
import BeachAccessOutlinedIcon from '@material-ui/icons/BeachAccessOutlined'
import EmailOutlinedIcon from '@material-ui/icons/EmailOutlined'
import SyncOutlinedIcon from '@material-ui/icons/SyncOutlined'
import ThumbUpAltOutlinedIcon from '@material-ui/icons/ThumbUpAltOutlined'
import EcoOutlinedIcon from '@material-ui/icons/EcoOutlined'

import Paper from '@material-ui/core/Paper'
import { Typography } from '@material-ui/core'

const useStyles = makeStyles(theme => ({
	timeline: {
		padding: 0
	},
	paper: {
		padding: '6px 16px',
	},
	secondaryTail: {
		backgroundColor: theme.palette.primary.main,
	},
	text: {
		fontSize: 20,
		[theme.breakpoints.down('xs')]: {
			fontSize: 14
		},
	},
	categoryName: {
		color: theme.palette.primary.main,
		fontWeight: 'bold',
		marginBottom: 20
	},
	iconSizes: {
		fontSize: 35
	},
	cardOne: {
		padding: 24,
		borderRadius: 15,
		backgroundColor: theme.palette.common.white,
		boxShadow: theme.shadows[5],
		maxWidth: '100%',
		marginTop: 50,
		[theme.breakpoints.down('sm')]: {
			width: '-webkit-fill-available',
		},
		[theme.breakpoints.down('xs')]: {
			marginTop: 30,
			padding: 10
		},
	},
	cardTwo: {
		padding: 24,
		borderRadius: 15,
		backgroundColor: theme.palette.common.white,
		boxShadow: theme.shadows[5],
		maxWidth: '100%',
		marginTop: 25,
		marginBottom: 25,
		[theme.breakpoints.down('sm')]: {
			width: '-webkit-fill-available',
		},
		[theme.breakpoints.down('xs')]: {
			marginTop: 30,
			padding: 10
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
	itemDesc: {
		color: '#101F42',
		fontSize: 12,
		letterSpacing: 1,
		fontWeight: theme.typography.fontWeightBold,
		textAlign: 'center',
		marginTop: 5,
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

const CustomizedTimeline = () => {
	const classes = useStyles()

	return (
		<div>
			<Card className={classes.cardOne}>
				<Typography variant='h4' className={classes.categoryName}>How It Works</Typography>
				<Timeline align="alternate" classes={{ alignAlternate: classes.timeline}}>
					<TimelineItem>
						<TimelineSeparator>
							<TimelineDot color="primary">
								<DevicesOtherOutlinedIcon className={classes.iconSizes} />
							</TimelineDot>
							<TimelineConnector className={classes.secondaryTail} />
						</TimelineSeparator>
						<TimelineContent>
							<Paper elevation={3} className={classes.paper}>
								<Typography className={classes.text}>
									Find perfect device for you
								</Typography>
							</Paper>
						</TimelineContent>
					</TimelineItem>
					<TimelineItem>
						<TimelineSeparator>
							<TimelineDot color="primary">
								<CheckCircleOutlineIcon className={classes.iconSizes} />
							</TimelineDot>
							<TimelineConnector className={classes.secondaryTail} />
						</TimelineSeparator>
						<TimelineContent>
							<Paper elevation={3} className={classes.paper}>
								<Typography className={classes.text}>
									Choose rental period
								</Typography>
							</Paper>
						</TimelineContent>
					</TimelineItem>
					<TimelineItem>
						<TimelineSeparator>
							<TimelineDot color="primary">
								<AccountCircleOutlinedIcon className={classes.iconSizes} />
							</TimelineDot>
							<TimelineConnector className={classes.secondaryTail} />
						</TimelineSeparator>
						<TimelineContent>
							<Paper elevation={3} className={classes.paper}>
								<Typography className={classes.text}>
									Register yourself
								</Typography>
							</Paper>
						</TimelineContent>
					</TimelineItem>
					<TimelineItem>
						<TimelineSeparator>
							<TimelineDot color="primary" >
								<CreditCardOutlinedIcon className={classes.iconSizes} />
							</TimelineDot>
							<TimelineConnector className={classes.secondaryTail} />
						</TimelineSeparator>
						<TimelineContent>
							<Paper elevation={3} className={classes.paper}>
								<Typography className={classes.text}>
									Pay first month
								</Typography>
							</Paper>
						</TimelineContent>
					</TimelineItem>
					<TimelineItem>
						<TimelineSeparator>
							<TimelineDot color="primary">
								<LocalShippingOutlinedIcon className={classes.iconSizes} />
							</TimelineDot>
							<TimelineConnector className={classes.secondaryTail} />
						</TimelineSeparator>
						<TimelineContent>
							<Paper elevation={3} className={classes.paper}>
								<Typography className={classes.text}>
									We will send you your phone
								</Typography>
							</Paper>
						</TimelineContent>
					</TimelineItem>
					<TimelineItem>
						<TimelineSeparator>
							<TimelineDot color="primary">
								<PhoneAndroidOutlinedIcon className={classes.iconSizes} />
							</TimelineDot>
							<TimelineConnector className={classes.secondaryTail} />
						</TimelineSeparator>
						<TimelineContent>
							<Paper elevation={3} className={classes.paper}>
								<Typography className={classes.text}>
									Enjoy your device and pay montly
								</Typography>
							</Paper>
						</TimelineContent>
					</TimelineItem>
					<TimelineItem>
						<TimelineSeparator>
							<TimelineDot color="primary">
								<LocalShippingOutlinedIcon className={classes.iconSizes} />
							</TimelineDot>
						</TimelineSeparator>
						<TimelineContent>
							<Paper elevation={3} className={classes.paper}>
								<Typography className={classes.text}>
									Send it back once your rental period is over
								</Typography>
							</Paper>
						</TimelineContent>
					</TimelineItem>
				</Timeline>
			</Card>
			
			<Card className={classes.cardTwo}>
				<Typography variant='h4' className={classes.categoryName}>Benefits</Typography>
				<Grid container spacing={3}>
					<Grid item xs={12} sm={6} md={6} lg={4} xl={4} className={classes.gridItem}>
						<div className={classes.gridItemDiv}>
							<EuroIcon style={{ fontSize: 40 }} className={classes.icon}/>
							<Typography className={classes.itemName}>No deposit, no hidden costs</Typography>
							<Typography className={classes.itemDesc}>Just pay the first month’s rent and we’ll ship your order. The rental period does not start until the product arrives with you.</Typography>
						</div>	
					</Grid>
					<Grid item xs={12} sm={6} md={6} lg={4} xl={4} className={classes.gridItem}>
						<div className={classes.gridItemDiv}>
							<BeachAccessOutlinedIcon style={{ fontSize: 40 }} className={classes.icon}/>
							<Typography className={classes.itemName}>Damage coverage</Typography>
							<Typography className={classes.itemDesc}>If something breaks, we pay 90% of the cost to repair or replace the product and you pay only 10%. Normal signs of use don’t count as damage, so don’t worry about those at all.</Typography>
						</div>
					</Grid>
					<Grid item xs={12} sm={6} md={6} lg={4} xl={4} className={classes.gridItem}>
						<div className={classes.gridItemDiv}>
							<SyncOutlinedIcon style={{ fontSize: 40 }} className={classes.icon}/>
							<Typography className={classes.itemName}>Flexible rental period with purchase option</Typography>
							<Typography className={classes.itemDesc}>Your minimum rental period isn’t set in stone. Switch to a longer term anytime to pay less each month, or continue to rent monthly at the same price after your minimum rental period ends. You can also buy the product anytime.</Typography>
						</div>
					</Grid>
					<Grid item xs={12} sm={6} md={6} lg={4} xl={4} className={classes.gridItem}>
						<div className={classes.gridItemDiv}>
							<EmailOutlinedIcon style={{ fontSize: 40 }} className={classes.icon}/>
							<Typography className={classes.itemName}>Free easy returns</Typography>
							<Typography className={classes.itemDesc}>When your minimum rental period is over, you can end your rental payments anytime. Just return your product with the free shipping label one day before your next payment.</Typography>
						</div>
					</Grid>
					<Grid item xs={12} sm={6} md={6} lg={4} xl={4} className={classes.gridItem}>
						<div className={classes.gridItemDiv}>
							<ThumbUpAltOutlinedIcon style={{ fontSize: 40 }} className={classes.icon}/>
							<Typography className={classes.itemName}>Great Condition Promise</Typography>
							<Typography className={classes.itemDesc}>Every device you rent is either new or like new – and always tested for technical perfection.</Typography>
						</div>
					</Grid>
					<Grid item xs={12} sm={6} md={6} lg={4} xl={4} className={classes.gridItem}> 
						<div className={classes.gridItemDiv}>
							<EcoOutlinedIcon style={{ fontSize: 40 }} className={classes.icon}/>
							<Typography className={classes.itemName}>Less e-waste, more sustainability</Typography>
							<Typography className={classes.itemDesc}>We will re-rent or recycle your rented device</Typography>
						</div>
					</Grid>
				</Grid>
			</Card>
		</div>
		
	)
}

export default CustomizedTimeline
