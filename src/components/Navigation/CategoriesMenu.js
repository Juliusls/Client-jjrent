import React from 'react'

import { makeStyles, Menu, MenuItem, ListItemIcon, ListItemText, Fade } from '@material-ui/core'

import PhoneIphoneIcon from '@material-ui/icons/PhoneIphone'
import LaptopMacIcon from '@material-ui/icons/LaptopMac'
import WatchIcon from '@material-ui/icons/Watch'
import HeadsetIcon from '@material-ui/icons/Headset'

const useStyles = makeStyles(theme => ({
	// menuComponent: {
	// 	marginTop: 10,
	// },
	menuComponentPaper: {
		borderRadius: 25,
		width: 200,
		padding: 10,
	},
	menuItem: {
		color: theme.palette.grey[900],
		'&:hover': {
			color: theme.palette.primary.main
		}
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
				style={{backgroundColor: 'white'}}
			>	
				<ListItemIcon className={classes.iconContainerStyle}>
					<PhoneIphoneIcon className={classes.iconStyle}/>
				</ListItemIcon>
				<ListItemText primary="Phones" classes={{primary: classes.listItemText}}/>
			</MenuItem>
			<MenuItem 
				onClick={handleClose}
				// component='a'
				// href='/laptops'
				className={classes.menuItem}
				style={{backgroundColor: 'white'}}
			>
				<ListItemIcon className={classes.iconContainerStyle}>
					<LaptopMacIcon className={classes.iconStyle}/>
				</ListItemIcon>
				<ListItemText primary="Laptops" classes={{primary:classes.listItemText}}/>
			</MenuItem>
			<MenuItem 
				onClick={handleClose}
				// component='a'
				// href='/smartwatches'
				className={classes.menuItem}
				style={{backgroundColor: 'white'}}
			>
				<ListItemIcon className={classes.iconContainerStyle}>
					<WatchIcon className={classes.iconStyle}/>
				</ListItemIcon>
				<ListItemText primary="Smartwatches" classes={{primary:classes.listItemText}}/>
			</MenuItem>
			<MenuItem 
				onClick={handleClose}
				// component='a'
				// href='/headphones'
				className={classes.menuItem}
				style={{backgroundColor: 'white'}}
			>
				<ListItemIcon className={classes.iconContainerStyle}>
					<HeadsetIcon className={classes.iconStyle}/>
				</ListItemIcon>
				<ListItemText primary="Headphones" classes={{primary:classes.listItemText}}/>
			</MenuItem>
		</Menu>
	)
}

export default CategoriesMenu
