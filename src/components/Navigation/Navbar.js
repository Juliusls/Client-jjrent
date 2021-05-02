import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Button, Typography, Toolbar, AppBar, Fab, IconButton } from '@material-ui/core'
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank'
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket'

import CategoriesMenu from './CategoriesMenu'
import SearchField from './SearchField'


const useStyles = makeStyles(theme => ({
	appbar: {			
		backgroundColor: theme.palette.common.white,
		boxShadow: 'none'
	},
	root: {
		flexGrow: 1,
	},
	title: {
		flexGrow: 1,
		color: theme.palette.primary.main,
		fontSize: 30,
		fontWeight: 'bold',
	},
	buttonLogin: {
		color: theme.palette.primary.main,
		backgroundColor: theme.palette.common.white,
		borderRadius: 25,
		paddingTop: 10,
		paddingBottom: 10,
		paddingRight: 20,
		paddingLeft: 20,
		margin: 10,
		fontSize: 20,
		fontWeight: 'bold',
		'&:hover': {
			backgroundColor: theme.palette.common.white,
			boxShadow: 3,
		}
	},
	buttonSignup: {
		color: theme.palette.common.white,
		backgroundColor: theme.palette.primary.main,
		borderRadius: 25,
		paddingTop: 10,
		paddingBottom: 10,
		paddingRight: 20,
		paddingLeft: 20,
		fontSize: 20,
		fontWeight: 'bold',
		'&:hover': {
			backgroundColor: theme.palette.common.white,
			color: theme.palette.primary.main,
			boxShadow: 20,
		}
	},
	buttonCategories: {
		color: theme.palette.primary.main,
		backgroundColor: theme.palette.common.white,
		borderRadius: 25,
		paddingTop: 13,
		paddingBottom: 13,
		paddingRight: 30,
		paddingLeft: 30,
		fontSize: 20,
		fontWeight: 'bold',
		'&:hover': {
			backgroundColor: theme.palette.common.white,
			boxShadow: 3,
		}
	},
	buttonCart: {
		backgroundColor: 'white',
		borderColor: theme.palette.primary.main,
		boxShadow: 'none',
		'&:hover': {
			backgroundColor: theme.palette.common.white,
			boxShadow: 3,
		}
	}
}))

const Navbar = () => {
	const classes = useStyles()
	const [menuIsOpen, setMenuIsOpen] = useState(false)
	const handleClick = (event) => {
		setMenuIsOpen(event.currentTarget)
	}
	const handleClose = () => {
		setMenuIsOpen(null)
	}

	return (
		<div className={classes.root}>
			<AppBar position="static" className={classes.appbar}>
				<Toolbar id='top-navbar'>
					<Typography variant="h6" className={classes.title}>
						JJ-rent
					</Typography>
					<Button variant="contained" className={classes.buttonLogin}>Log In</Button>
					<Button variant="contained" className={classes.buttonSignup}>Sign Up</Button>
				</Toolbar>
				<Toolbar id='bottom-navbar'>
					<Button
						aria-controls="simple-menu"
						variant="contained"
						aria-haspopup="true"
						onClick={handleClick}
						onMouseOver={handleClick}
						startIcon={<CheckBoxOutlineBlankIcon/>}
						className={classes.buttonCategories}
					>
						Categories
					</Button>
					<SearchField />
					<Fab color="primary" aria-label="add" className={classes.buttonCart}>
						<ShoppingBasketIcon />
					</Fab>
					<IconButton color="primary" className={classes.buttonCart}>
						<ShoppingBasketIcon />
					</IconButton>
				</Toolbar>
				<CategoriesMenu menuIsOpen={menuIsOpen} handleClose={handleClose} />
			</AppBar>
		</div>
	)
}

export default Navbar
