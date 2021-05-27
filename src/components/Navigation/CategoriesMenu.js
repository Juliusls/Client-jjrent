import React from 'react'
import { Link } from 'react-router-dom'


import { makeStyles, Menu, MenuItem, ListItemIcon, ListItemText, Fade } from '@material-ui/core'

import PhoneIphoneIcon from '@material-ui/icons/PhoneIphone'
import LaptopMacIcon from '@material-ui/icons/LaptopMac'
import WatchIcon from '@material-ui/icons/Watch'

const useStyles = makeStyles(theme => ({
	menuComponentPaper: {
		borderRadius: 25,
		width: 'inherit',
		padding: 10,
		marginTop: 15
	},
	menuItem: {
		color: theme.palette.grey[900],
		'&:hover': {
			color: theme.palette.primary.main
		},
	},
	iconContainerStyle: {
		color: 'inherit'
	},
	iconStyle: {
		color: 'inherit'
	}, 
	listItemText: {
		color: 'inherit',
		fontSize: 17,
		fontWeight: 'bold'
	}
}))

const CategoriesMenu = ({ categoriesMenuIsOpen, handlecategoriesClose }) => {
	const classes = useStyles()

	return (
		<Menu
			anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
			transformOrigin={{ vertical: 'top', horizontal: 'left' }}
			id="simple-menu"
			anchorEl={categoriesMenuIsOpen}
			open={Boolean(categoriesMenuIsOpen)}
			onClose={handlecategoriesClose}
			MenuListProps={{ onMouseLeave: handlecategoriesClose }}
			getContentAnchorEl={null}
			TransitionComponent={Fade}
			className={classes.menuComponent}
			classes={{ paper: classes.menuComponentPaper }}
		>
			<MenuItem 
				onClick={handlecategoriesClose}
				component= { Link }
				to='/smartphones'
				className={classes.menuItem}
				style={{backgroundColor: 'white'}}
			>	
				<ListItemIcon className={classes.iconContainerStyle}>
					<PhoneIphoneIcon className={classes.iconStyle}/>
				</ListItemIcon>
				<ListItemText primary="Smartphones" classes={{primary: classes.listItemText}}/>
			</MenuItem>
			<MenuItem 
				onClick={handlecategoriesClose}
				component= { Link }
				to='/laptops'
				className={classes.menuItem}
				style={{backgroundColor: 'white'}}
			>
				<ListItemIcon className={classes.iconContainerStyle}>
					<LaptopMacIcon className={classes.iconStyle}/>
				</ListItemIcon>
				<ListItemText primary="Laptops" classes={{primary:classes.listItemText}}/>
			</MenuItem>
			<MenuItem 
				onClick={handlecategoriesClose}
				component= { Link }
				to='/smartwatches'
				className={classes.menuItem}
				style={{backgroundColor: 'white'}}
			>
				<ListItemIcon className={classes.iconContainerStyle}>
					<WatchIcon className={classes.iconStyle}/>
				</ListItemIcon>
				<ListItemText primary="Smartwatches" classes={{primary:classes.listItemText}}/>
			</MenuItem>
		</Menu>
	)
}

export default CategoriesMenu
