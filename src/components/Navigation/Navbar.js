import React, { useState, useRef } from 'react'
import { Link } from 'react-router-dom'

import { makeStyles, Toolbar, AppBar, Fab, Typography, Button, Hidden } from '@material-ui/core'
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined'
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined'
import AccountCircleOutlinedIcon from '@material-ui/icons/AccountCircleOutlined'
import MenuOutlinedIcon from '@material-ui/icons/MenuOutlined'
import HelpOutlineOutlinedIcon from '@material-ui/icons/HelpOutlineOutlined'

import CategoriesMenu from './CategoriesMenu'
import AccountMenu from './AccountMenu'
import CartMenu from './CartMenu'
import LeftSideMenu from './LeftSideMenu'
import SearchField from './SearchField'

const useStyles = makeStyles(theme => ({
	appbar: {	
		backgroundColor: theme.palette.common.white,
		boxShadow: 'none',
		paddingLeft: 75,
		paddingRight: 75,
		zIndex: 3,
		[theme.breakpoints.down('md')]: {
			paddingLeft: 40,
			paddingRight: 40,
		},
		[theme.breakpoints.down('sm')]: {
			paddingLeft: 15,
			paddingRight: 15,
		},
		[theme.breakpoints.down('xs')]: {
			paddingLeft: 10,
			paddingRight: 10,
		},
		[theme.breakpoints.up('xl')]: {
			paddingLeft: 100,
			paddingRight: 100,
		},
	},
	root: {
		flexGrow: 1,
		maxWidth: 'inherit',		
	},
	toolbarContainer: {
		display: 'flex',
		justifyContent: 'space-between',
		backgroundColor: theme.palette.common.white,
		borderRadius: 25
	},
	buttonCart: {
		color: theme.palette.primary.main,
		backgroundColor: 'white',
		boxShadow: 'none',
		'&:hover': {
			backgroundColor: theme.palette.common.white,
			boxShadow: 'none',
		}
	},
	buttonSearch: {
		color: theme.palette.primary.main,
		backgroundColor: 'white',
		boxShadow: theme.shadows[5],
		position: 'fixed',
		bottom: 10,
		left: 10,
		zIndex: 2,
		'&:hover': {
			backgroundColor: theme.palette.common.white,
			boxShadow: 'none',
		}
	},
	buttonCategories: {
		color: theme.palette.primary.main,
		backgroundColor: theme.palette.common.white,
		borderRadius: 30,
		paddingTop: 10,
		paddingBottom: 10,
		paddingRight: 10,
		paddingLeft: 20,
		fontSize: 17,
		fontWeight: 'bold',
		boxShadow: 'none',
		'&:hover': {
			backgroundColor: theme.palette.common.white,
			boxShadow: 'none',
		}
	},
	title: {
		color: theme.palette.primary.main,
		fontWeight: 'bold',
		fontSize: 30,
		textDecoration: 'none',
		[theme.breakpoints.down('xs')]: {
			fontSize: 20,
		},
	},
	iconsSize: {
		fontSize: 35,
		[theme.breakpoints.down('xs')]: {
			fontSize: 30,
		},
	}
}))

const NavBar = () => {
	const classes = useStyles()
	const [leftSideMenuIsOpen, setLeftSideMenuIsOpen] = useState(false)
	const [categoriesMenuIsOpen, setCategoriesMenuIsOpen] = useState(false)
	const [accountMenuIsOpen, setAccountMenuIsOpen] = useState(false)
	const [cartMenuIsOpen, setCartMenuIsOpen] = useState(false)
	const [searchFieldIsOpen, setSearchFieldIsOpen] = useState(false)

	const searchInputRef = useRef()

	const handleCategoriesClick = (event) => {
		setCategoriesMenuIsOpen(event.currentTarget)
	}
	const handlecategoriesClose = () => {
		setCategoriesMenuIsOpen(null)
	}
	
	const handleAccountClick = (event) => {
		setAccountMenuIsOpen(event.currentTarget)
	}
	const handleAccountClose = () => {
		setAccountMenuIsOpen(null)
	}
	
	const handleCartClick = (event) => {
		setCartMenuIsOpen(event.currentTarget)
	}
	const handleCartClose = () => {
		setCartMenuIsOpen(null)
	}

	return (
		<div className={classes.root}>
			<AppBar position="fixed" className={classes.appbar} id='appbarStyle'>
				<Toolbar id='top-navbar' className={classes.toolbarContainer} style={{ padding: 0 }}>
					<Hidden xsDown>
						<Button
							aria-controls="simple-menu"
							variant="contained"
							aria-haspopup="true"
							onClick={handleCategoriesClick}
							startIcon={<MenuOutlinedIcon className={classes.iconsSize} style={{ fontSize: 35 }}/>}
							className={classes.buttonCategories}
						>
							Categories
						</Button>
					</Hidden>
					<Hidden smUp>
						<Fab color="primary" aria-label="add" className={classes.buttonCart} style={{ marginRight: 56 }} onClick={() => setLeftSideMenuIsOpen(true)}>
							<MenuOutlinedIcon style={{ fontSize: 30 }} />
						</Fab>
					</Hidden>
					
					<Typography className={classes.title} component={ Link } to='/'>JJ-rent</Typography>

					<div>
						<Hidden xsDown>
							<Fab color="primary" aria-label="add" className={classes.buttonCart} onClick={() => setSearchFieldIsOpen(true)}>
								<SearchOutlinedIcon className={classes.iconsSize}/>
							</Fab>
							<Fab color="primary" aria-label="add" className={classes.buttonCart} component={ Link } to='/howitworks'>
								<HelpOutlineOutlinedIcon className={classes.iconsSize}/>
							</Fab>
						</Hidden>
						<Fab color="primary" aria-label="add" className={classes.buttonCart} onClick={handleCartClick}>
							<ShoppingCartOutlinedIcon className={classes.iconsSize}/>
						</Fab>
						<Fab color="primary" aria-label="add" className={classes.buttonCart} onClick={handleAccountClick}>
							<AccountCircleOutlinedIcon className={classes.iconsSize}/>
						</Fab>
					</div>
				</Toolbar>
				{searchFieldIsOpen ? (
					<SearchField searchFieldIsOpen={searchFieldIsOpen} setSearchFieldIsOpen={setSearchFieldIsOpen} searchInputRef={searchInputRef} />
				) : null}
				
			</AppBar>
			<Hidden smUp>
				{searchFieldIsOpen ?
					null
					: (
						<Fab color="primary" aria-label="add" className={classes.buttonSearch} onClick={() => setSearchFieldIsOpen(true)}>
							<SearchOutlinedIcon className={classes.iconsSize}/>
						</Fab>
					)
				}
			</Hidden>
			<CategoriesMenu categoriesMenuIsOpen={categoriesMenuIsOpen} handlecategoriesClose={handlecategoriesClose} />
			<AccountMenu accountMenuIsOpen={accountMenuIsOpen} handleAccountClose={handleAccountClose} />
			<CartMenu cartMenuIsOpen={cartMenuIsOpen} handleCartClose={handleCartClose} />
			<LeftSideMenu leftSideMenuIsOpen={leftSideMenuIsOpen} setLeftSideMenuIsOpen={setLeftSideMenuIsOpen}/>
		</div>
	)
}

export default NavBar
