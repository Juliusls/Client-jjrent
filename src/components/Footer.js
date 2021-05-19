import React from 'react'
import { makeStyles, Typography, Toolbar, AppBar, Divider, Button, Link, IconButton } from '@material-ui/core'
import FacebookIcon from '@material-ui/icons/Facebook'
import InstagramIcon from '@material-ui/icons/Instagram'


const useStyles = makeStyles(theme => ({
	appBar: {
		top: 'auto',
		bottom: 0,
		backgroundColor: theme.palette.common.white,
		boxShadow: 'none',
		paddingTop: 20,
		marginBottom: 50,
		zIndex: 1
	},
	getInTouchText: {
		fontSize: 15,
		margin: 10,
		color: theme.palette.common.black,
		align: 'center',
		textAlign: 'center'
	},
	getInTouch: {
		color: theme.palette.primary.main,
		backgroundColor: theme.palette.common.white,
		borderRadius: 25,
		paddingTop: 10,
		paddingBottom: 10,
		paddingRight: 20,
		paddingLeft: 20,
		fontSize: 15,
		marginLeft: 20,
		fontWeight: 'bold',
		boxShadow: theme.shadows[5],
		'&:hover': {
			backgroundColor: theme.palette.common.white,
			boxShadow: theme.shadows[10],
		},
	},
	iconSocialMedia: {
		color: theme.palette.grey[800],
		marginLeft: 15,
		marginRight: 15,
		'&:hover': {
			color: theme.palette.common.black
		},
		[theme.breakpoints.down('sm')]: {
			marginLeft: 10,
			marginRight: 10,
		},
	},
	firstToolbar: {
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'strech',
		marginTop: 15,
		marginBottom: 15,
		[theme.breakpoints.down('xs')]: {
			flexDirection: 'column',
			marginBottom: 20,
		},
	},
	secondToolbar: {
		display: 'flex',
		justifyContent: 'space-between',
		alignItems: 'strech',
		marginTop: 15,
		marginBottom: 15,
		[theme.breakpoints.down('xs')]: {
			flexDirection: 'column'
		},
	},
	thirdToolbar: {
		display: 'flex',
		justifyContent: 'space-between',
		alignItems: 'strech',
		marginTop: 15,
		marginBottom: 15,
		marginLeft: 0,
		[theme.breakpoints.down('sm')]: {
			flexDirection: 'column'
		},
	},
	menuText: {
		color: theme.palette.grey[900],
		fontSize: 20,
		margin: 15
	},
	bottomText: {
		color: theme.palette.grey[700],
		fontSize: 20,
		margin: 15
	},
	copyrightText: {
		color: theme.palette.grey[700],
		fontSize: 16,
		margin: 10
	},
	infoText: {
		fontSize: 16,
		color: theme.palette.common.black
	},
	iconSocialMediaContainer: {
		'&:hover': {
			backgroundColor: theme.palette.common.white,
		}
	},
	privacyTextContainer: {
		[theme.breakpoints.down('sm')]: {
			display: 'flex',
			flexDirection: 'column',
			alignItems: 'center'
		},
	}
}))


const Footer = () => {
	const classes = useStyles()
	return (
		<AppBar position="relative" color="primary" className={classes.appBar}>
			<Divider light/>
			<Toolbar className={classes.firstToolbar}>
				<Typography className={classes.getInTouchText}>
					Do you have a question or just need support?
				</Typography>
				<Button variant="contained" className={classes.getInTouch} >
					Get in touch
				</Button>
			</Toolbar>
			<Divider light/>
			<Toolbar className={classes.secondToolbar}>
				<Link href="#" onClick={() => console.log('Privacy Policy clicked')} className={classes.menuText}>
					FAQ
				</Link>
				<Link href="#" onClick={() => console.log('Privacy Policy clicked')} className={classes.menuText}>
					How it works
				</Link>
				<Link href="#" onClick={() => console.log('Privacy Policy clicked')} className={classes.menuText}>
					About
				</Link>
				<Link href="#" onClick={() => console.log('Privacy Policy clicked')} className={classes.menuText}>
				Contacts
				</Link>
			</Toolbar>
			<Divider light/>
			<Toolbar className={classes.thirdToolbar}>
				<div className={classes.privacyTextContainer}>
					<Link href="#" onClick={() => console.log('Privacy Policy clicked')} className={classes.bottomText}>
						Privacy Policy
					</Link>
					<Link href="#" onClick={() => console.log('Terms and Conditions clicked')} className={classes.bottomText}>
						Terms and Conditions
					</Link>
				</div>
				<div>
					<IconButton className={classes.iconSocialMediaContainer}>
						<FacebookIcon style={{ fontSize: 30 }} className={classes.iconSocialMedia} />
					</IconButton>
					<IconButton className={classes.iconSocialMediaContainer}>
						<InstagramIcon style={{ fontSize: 30 }} className={classes.iconSocialMedia} />
					</IconButton>
				</div>
				<Typography className={classes.copyrightText}>
					{'JJ-Rent © '}
					{new Date().getFullYear()}
				</Typography>
			</Toolbar>
		</AppBar>
	)
}

export default Footer