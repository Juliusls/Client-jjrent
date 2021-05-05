import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Typography, Button } from '@material-ui/core'

import coverPhoto from '../Images/backgroundImage.jpeg'


const useStyles = makeStyles(theme => ({
	title: {
		color: theme.palette.common.white,
		textTransform: 'uppercase',
		fontWeight: 'bold',
		fontSize: 40,
		marginTop: 60,
		marginLeft: 50,
		maxWidth: 700,
		[theme.breakpoints.down('sm')]: {
			marginTop: 30,
			marginLeft: 25,
		},
		[theme.breakpoints.down('xs')]: {
			marginTop: 12,
			marginLeft: 10,
		},
	},
	text: {
		color: theme.palette.common.white,
		fontWeight: 'bold',
		fontSize: 20,
		marginTop: 20,
		marginLeft: 50,
		maxWidth: 700,
		[theme.breakpoints.down('sm')]: {
			marginTop: 30,
			marginLeft: 25,
		},
		[theme.breakpoints.down('xs')]: {
			marginTop: 12,
			marginLeft: 10,
		},
	},
	buttonDiscover: {
		color: theme.palette.primary.main,
		backgroundColor: theme.palette.common.white,
		borderRadius: 25,
		paddingTop: 10,
		paddingBottom: 10,
		paddingRight: 20,
		paddingLeft: 20,
		marginTop: 25,
		marginLeft: 50,
		fontSize: 15,
		fontWeight: 'bold',
		'&:hover': {
			backgroundColor: theme.palette.common.white,
		},
		[theme.breakpoints.down('sm')]: {
			marginTop: 30,
			marginLeft: 25,
		},
		[theme.breakpoints.down('xs')]: {
			marginTop: 12,
			marginLeft: 10,
		},
	},
	containerJumbotron: {
		padding: 20,
		height: 400,
		backgroundPosition: 'center',
		backgroundSize: 'cover',
		color: 'white',
		borderRadius: 25,
		marginTop: 20,
		// [theme.breakpoints.down('sm')]: {
		// 	padding: 10
		// },
	}
}))

const Jumbotron = () => {
	const classes = useStyles()
	return (
		<div id='centerlizeJumbotron' className={classes.containerJumbotron} style={{ backgroundImage: `url(${coverPhoto})` }}>
			<Typography classes={{ root: classes.title }}>The future of tech is renting</Typography>
			<Typography classes={{ root: classes.text }}>Rent the tech you want, when you want. And to celebrate our fresh new look, get 90% off your first month when you rent for 3+ months with code</Typography>
			<Button variant="contained" className={classes.buttonDiscover}>Discover deals</Button>
		</div>
	)
}

export default Jumbotron
