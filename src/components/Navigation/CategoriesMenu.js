import React from 'react'

import { Menu, MenuItem, ListItemIcon, ListItemText, Fade } from '@material-ui/core'

import PhoneIphoneIcon from '@material-ui/icons/PhoneIphone'
import LaptopMacIcon from '@material-ui/icons/LaptopMac'
import WatchIcon from '@material-ui/icons/Watch'
import HeadsetIcon from '@material-ui/icons/Headset'

const CategoriesMenu = ({ menuIsOpen, handleClose }) => {
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

		>
			<MenuItem onClick={handleClose}>
				<ListItemIcon>
					<PhoneIphoneIcon fontSize="small" />
				</ListItemIcon>
				<ListItemText primary="Phones" />
			</MenuItem>
			<MenuItem onClick={handleClose}>
				<ListItemIcon>
					<LaptopMacIcon fontSize="small" />
				</ListItemIcon>
				<ListItemText primary="Laptops" />
			</MenuItem>
			<MenuItem onClick={handleClose}>
				<ListItemIcon>
					<WatchIcon fontSize="small" />
				</ListItemIcon>
				<ListItemText primary="Smart Watches" />
			</MenuItem>
			<MenuItem onClick={handleClose}>
				<ListItemIcon>
					<HeadsetIcon fontSize="small" />
				</ListItemIcon>
				<ListItemText primary="Headphones" />
			</MenuItem>
		</Menu>
	)
}

export default CategoriesMenu
