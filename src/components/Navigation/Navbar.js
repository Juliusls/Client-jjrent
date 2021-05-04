import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Button, Typography, Toolbar, AppBar, Fab } from '@material-ui/core'
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
		color: theme.palette.primary.main,
		fontWeight: 'bold',
		marginRight: 40,
	},
	buttonOthers: {
		color: theme.palette.primary.main,
		backgroundColor: theme.palette.common.white,
		borderRadius: 25,
		fontSize: 13,
		fontWeight: 'bold',
		boxShadow: 'none',
		'&:hover': {
			opacity: 0.5,
			backgroundColor: theme.palette.common.white,
			boxShadow: 'none',
		}
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
		boxShadow: theme.shadows[5],
		'&:hover': {
			backgroundColor: theme.palette.common.white,
			boxShadow: theme.shadows[10],
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
		boxShadow: theme.shadows[5],
		'&:hover': {
			backgroundColor: theme.palette.common.white,
			color: theme.palette.primary.main,
			boxShadow: theme.shadows[10],
		}
	},
	buttonCategories: {
		color: theme.palette.primary.main,
		backgroundColor: theme.palette.common.white,
		borderRadius: 30,
		paddingTop: 10,
		paddingBottom: 10,
		paddingRight: 30,
		paddingLeft: 30,
		fontSize: 20,
		fontWeight: 'bold',
		boxShadow: theme.shadows[5],
		'&:hover': {
			backgroundColor: theme.palette.common.white,
			boxShadow: theme.shadows[10],
		}
	},
	buttonCart: {
		color: theme.palette.primary.main,
		backgroundColor: 'white',
		boxShadow: theme.shadows[5],
		'&:hover': {
			backgroundColor: theme.palette.common.white,
			boxShadow: theme.shadows[10],
		}
	},
	topContainer: {
		display: 'flex',
		justifyContent: 'space-between',
	},
	containerLogo: {
		flexGrow: 1,
		display: 'flex',
		justifyContent: 'flex-start',
		alignItems: 'center'
	},
	bottomContainer: {
		display: 'flex',
	},
	searchField: {
		flexGrow: 1,
		marginLeft: 10,
		marginRight: 10,
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
				<Toolbar id='top-navbar' classes={classes.topContainer} style={{ padding: 0 }}>
					<div className={classes.containerLogo}>
						<Typography variant="h4" className={classes.title}>JJ-rent</Typography>
						<Button variant="contained" className={classes.buttonOthers}>How it works</Button>
					</div>
					<div>
						<Button variant="contained" className={classes.buttonLogin}>Log In</Button>
						<Button variant="contained" className={classes.buttonSignup}>Sign Up</Button>
					</div>
				</Toolbar>
				<Toolbar id='bottom-navbar' classes={classes.bottomContainer} style={{ padding: 0 }}>
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
					<div className={classes.searchField}>
						<SearchField />
					</div>
					<Fab color="primary" aria-label="add" className={classes.buttonCart}>
						<ShoppingBasketIcon />
					</Fab>
				</Toolbar>
				<CategoriesMenu menuIsOpen={menuIsOpen} handleClose={handleClose} />
			</AppBar>
		</div>
	)
}

export default Navbar
