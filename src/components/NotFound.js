import React from 'react'
import { Link } from 'react-router-dom'

import { Typography, makeStyles, Button } from '@material-ui/core'

const useStyles = makeStyles(theme => ({
	root: {
		marginTop: 50,
		marginBottom: 50,
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center'
	},
	notFoundNumber: {
		color: theme.palette.primary.main,
		fontWeight: 'bold',
		fontSize: 200,
		[theme.breakpoints.down('xs')]: {
			fontSize: 150,
		},
	},
	texts: {
		textAlign: 'center'
	},
	viewAllButton: {
		display: 'block',
		color: theme.palette.primary.main,
		backgroundColor: theme.palette.common.white,
		borderRadius: 25,
		paddingTop: 10,
		paddingBottom: 10,
		paddingRight: 20,
		paddingLeft: 20,
		marginTop: 30,
		marginRight: 'auto',
		marginLeft: 'auto',
		width: 180,
		textAlign: 'center',
		fontSize: 15,
		fontWeight: 'bold',
		boxShadow: theme.shadows[5],
		'&:hover': {
			backgroundColor: theme.palette.common.white,
			boxShadow: theme.shadows[10],
		},
		[theme.breakpoints.down('sm')]: {
			marginTop: 10,
			paddingTop: 7,
			paddingBottom: 7,
			paddingRight: 14,
			paddingLeft: 14,
		},
	},
}))

const NotFound = () => {
	const classes = useStyles()

	return (
		<div className={classes.root}>
			<Typography variant='h1' className={classes.notFoundNumber}>404</Typography>
			<Typography variant='h4' className={classes.texts}>Oops.. Page not found</Typography>
			<Typography variant='h6' className={classes.texts}>Sorry, the page you are looking for doesn&apost exist</Typography>
			<Button variant="contained" className={classes.viewAllButton} component={ Link } to={'/'}>Go Home</Button>
		</div>
	)
}

export default NotFound