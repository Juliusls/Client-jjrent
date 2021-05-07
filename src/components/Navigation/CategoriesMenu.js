import React from 'react'

import { makeStyles, Menu, MenuItem, ListItemIcon, ListItemText, Fade } from '@material-ui/core'

import PhoneIphoneIcon from '@material-ui/icons/PhoneIphone'
import LaptopMacIcon from '@material-ui/icons/LaptopMac'
import WatchIcon from '@material-ui/icons/Watch'
import HeadsetIcon from '@material-ui/icons/Headset'

const useStyles = makeStyles(theme => ({
	menuComponent: {
		marginTop: 10,
	},
	menuComponentPaper: {
		borderRadius: 25,
		width: 200,
		padding: 10
	},
	menuItem: {
		backgroundColor: 'white',
		'&:hover $child': {
			color: 'red'
		}
	},
	iconStyle: {
		color: theme.palette.grey[900],
	}, 
	listItemText: {
		color: theme.palette.grey[900],
		fontSize: 18,
	}
}))

const CategoriesMenu = ({ menuIsOpen, handleClose }) => {
	const classes = useStyles()


	return (
		<Menu
			anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
			transformOrigin={{ vertical: 'top', horizontal: 'left' }}
			id="simple-menu"
			anchorEl={menuIsOpen}
			open={Boolean(menuIsOpen)}
			onClose={handleClose}
			MenuListProps={{ onMouseLeave: handleClose }}
			getContentAnchorEl={null}
			TransitionComponent={Fade}
			className={classes.menuComponent}
			classes={{ paper: classes.menuComponentPaper }}
		>
			<MenuItem 
				onClick={handleClose}
				// component='a'
				// href='/phones'
				className={classes.menuItem}
			>	
				<ListItemIcon>
					<PhoneIphoneIcon className={classes.iconStyle}/>
				</ListItemIcon>
				<ListItemText primary="Phones" classes={{primary:classes.listItemText}}/>
			</MenuItem>
			<MenuItem 
				onClick={handleClose}
				// component='a'
				// href='/laptops'
				className={classes.menuItem}
			>
				<ListItemIcon>
					<LaptopMacIcon className={classes.iconStyle}/>
				</ListItemIcon>
				<ListItemText primary="Laptops" classes={{primary:classes.listItemText}}/>
			</MenuItem>
			<MenuItem 
				onClick={handleClose}
				// component='a'
				// href='/smartwatches'
				className={classes.menuItem}
			>
				<ListItemIcon>
					<WatchIcon className={classes.iconStyle}/>
				</ListItemIcon>
				<ListItemText primary="Smartwatches" classes={{primary:classes.listItemText}}/>
			</MenuItem>
			<MenuItem 
				onClick={handleClose}
				// component='a'
				// href='/headphones'
				className={classes.menuItem}
			>
				<ListItemIcon>
					<HeadsetIcon className={classes.iconStyle}/>
				</ListItemIcon>
				<ListItemText primary="Headphones" classes={{primary:classes.listItemText}}/>
			</MenuItem>
		</Menu>
	)
}

export default CategoriesMenu
