import React from 'react'

import { makeStyles } from '@material-ui/core/styles'

import { Typography, Button } from '@material-ui/core'

const useStyles = makeStyles(theme => ({
	title: {
		color: theme.palette.common.white,
		textTransform: 'uppercase',
		fontWeight: 'bold',
		fontSize: 40,
		marginTop: 60,
		marginLeft: 50,
		maxWidth: 700
	},
	text: {
		color: theme.palette.common.white,
		fontWeight: 'bold',
		fontSize: 20,
		marginTop: 20,
		marginLeft: 50,
		maxWidth: 700
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
		}
	},
}))

const Jumbotron = () => {
	const classes = useStyles()
	return (
		<div className='centerlizeJumbotron'>
			<Typography classes={{ root: classes.title}}>The future of tech is renting</Typography>
			<Typography classes={{ root: classes.text}}>Rent the tech you want, when you want. And to celebrate our fresh new look, get 90% off your first month when you rent for 3+ months with code</Typography>
			<Button variant="contained" className={classes.buttonDiscover}>Discover deals</Button>

		</div>
	)
}

export default Jumbotron
