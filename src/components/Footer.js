import React from 'react'
import { makeStyles, Toolbar, AppBar, Divider, Button, Fab, Typography } from '@material-ui/core'
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
	firstToolbar: {
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'strech',
		marginTop: 15,
		marginBottom: 15,
		[theme.breakpoints.down('sm')]: {
			flexDirection: 'column',
		},
	},
	primaryInfoDiv: {
		display: 'flex',
		flexDirection: 'row',
		[theme.breakpoints.down('xs')]: {
			flexDirection: 'column',
		},
	},
	secondaryInfoDiv: {
		display: 'flex',
		flexDirection: 'row',
		[theme.breakpoints.down('sm')]: {
			paddingTop: 15
		},
		[theme.breakpoints.down('xs')]: {
			flexDirection: 'column',
			paddingTop: 30
		},
	},
	toolbarPadding: {
		[theme.breakpoints.down('xs')]: {
			paddingRight: 0,
			paddingLeft: 0,
		},
	},
	secondToolbar: {
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'strech',
		marginTop: 15,
	},
	getInTouchComponent: {
		display: 'flex',
		flexDirection: 'row'
	},
	otherButton: {
		color: theme.palette.primary.main,
		backgroundColor: theme.palette.common.white,
		borderRadius: 30,
		paddingTop: 10,
		paddingBottom: 10,
		paddingRight: 20,
		paddingLeft: 20,
		fontSize: 15,
		margin: 10,
		fontWeight: 'bold',
		boxShadow: 'none',
		'&:hover': {
			backgroundColor: theme.palette.common.white,
			boxShadow: theme.shadows[5],
		},
		[theme.breakpoints.down('md')]: {
			margin: 2,
			paddingTop: 5,
			paddingBottom: 5,
			paddingRight: 10,
			paddingLeft: 10,
		},
		[theme.breakpoints.down('sm')]: {
			margin: 10,
		},
	},
	getInTouchButton: {
		color: theme.palette.primary.main,
		backgroundColor: theme.palette.common.white,
		borderRadius: 30,
		height: 56,
		paddingTop: 10,
		paddingBottom: 10,
		paddingRight: 20,
		paddingLeft: 20,
		fontSize: 15,
		fontWeight: 'bold',
		boxShadow: theme.shadows[3],
		marginRight: 16,
		'&:hover': {
			backgroundColor: theme.palette.common.white,
			boxShadow: theme.shadows[10],
		},
		[theme.breakpoints.down('xs')]: {
			marginRight: 8,
		},
	},
	facebookIcon: {
		backgroundColor: theme.palette.common.white,
		fontSize: 30,
		boxShadow: theme.shadows[3],
		marginRight: 16,
		'&:hover': {
			backgroundColor: theme.palette.common.white,
			boxShadow: theme.shadows[10],
		},
		[theme.breakpoints.down('xs')]: {
			marginRight: 8,
		},
	},
	instagramIcon: {
		backgroundColor: theme.palette.common.white,
		fontSize: 30,
		boxShadow: theme.shadows[3],
		'&:hover': {
			backgroundColor: theme.palette.common.white,
			boxShadow: theme.shadows[10],
		}
	},
	iconSocialMedia: {
		fontSize: 30,
		color: theme.palette.primary.main
	},
	copyrightText: {
		color: theme.palette.grey[700],
		fontSize: 16,
		marginTop: 20
	},
}))


const Footer = () => {
	const classes = useStyles()
	return (
		<AppBar position="relative" color="primary" className={classes.appBar}>
			<Divider light/>
			<Toolbar className={classes.firstToolbar} classes={{ regular: classes.toolbarPadding}}>
				<div className={classes.primaryInfoDiv}>
					<Button variant="contained" className={classes.otherButton} onClick={() => console.log('clicked')}>
						FAQ
					</Button>
					<Button variant="contained" className={classes.otherButton} onClick={() => console.log('clicked')}>
						How It Works
					</Button>
					<Button variant="contained" className={classes.otherButton} onClick={() => console.log('clicked')}>
						About
					</Button>
					<Button variant="contained" className={classes.otherButton} onClick={() => console.log('clicked')}>
						Contact Us
					</Button>
				</div>
				<div className={classes.secondaryInfoDiv}>
					<Button variant="contained" className={classes.otherButton} onClick={() => console.log('clicked')}>
						Privacy Policy
					</Button>
					<Button variant="contained" className={classes.otherButton} onClick={() => console.log('clicked')}>
						Terms and Conditions
					</Button>
				</div>
			</Toolbar>
			<Divider light/>
			<Toolbar className={classes.secondToolbar} classes={{ regular: classes.toolbarPadding}}>
				<div className={classes.getInTouchComponent}>
					<Button variant="contained" className={classes.getInTouchButton}>
						Get in touch
					</Button>
					<Fab className={classes.facebookIcon}>
						<FacebookIcon className={classes.iconSocialMedia} />
					</Fab>
					<Fab className={classes.instagramIcon}>
						<InstagramIcon className={classes.iconSocialMedia} />
					</Fab>
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