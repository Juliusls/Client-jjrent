import React from 'react'

import { makeStyles, Drawer, List, ListItem, ListItemText, Divider, ListItemIcon } from '@material-ui/core'

import PhoneIphoneIcon from '@material-ui/icons/PhoneIphone'
import LaptopMacIcon from '@material-ui/icons/LaptopMac'
import WatchIcon from '@material-ui/icons/Watch'
import HeadsetIcon from '@material-ui/icons/Headset'

const useStyles = makeStyles(theme => ({
	list: {
		width: 220,
		minHeight: '100%'
	},
	// paper: {
	// 	background: theme.palette.primary.lighter
	// },
	textList: {
		fontWeight: 'bold',
		color: theme.palette.primary.main,
	},
	iconStyle: {
		// color: theme.palette.primary.light,
	}
	
}))

const LeftSideMenu = ({ leftSideMenuIsOpen, setLeftSideMenuIsOpen }) => {
	const classes = useStyles()

	return (
		<Drawer
			classes={{ paper: classes.paper }}
			anchor="left"
			variant="temporary"
			open={leftSideMenuIsOpen}
			onClose={() => setLeftSideMenuIsOpen(false)}
		>
			<div
				className={classes.list}
				role="button"
				onClick={() => setLeftSideMenuIsOpen(false)}
				onKeyDown={() => setLeftSideMenuIsOpen(false)}
			>
				<List>
					<ListItem  button style={{ textDecoration: 'none' }}>
						<ListItemIcon className={classes.iconStyle}>
							<PhoneIphoneIcon fontSize="medium" />
						</ListItemIcon>
						<ListItemText primary="Phones" classes={{ primary: classes.textList }}/>
					</ListItem>
					<ListItem  button style={{ textDecoration: 'none' }}>
						<ListItemIcon className={classes.iconStyle}>
							<LaptopMacIcon fontSize="medium" />
						</ListItemIcon>
						<ListItemText primary="Laptops" classes={{ primary: classes.textList }}/>
					</ListItem>
					<ListItem  button style={{ textDecoration: 'none' }}>
						<ListItemIcon className={classes.iconStyle}>
							<WatchIcon fontSize="medium" />
						</ListItemIcon>
						<ListItemText primary="Smartwatches" classes={{ primary: classes.textList }}/>
					</ListItem>
					<ListItem  button style={{ textDecoration: 'none' }}>
						<ListItemIcon className={classes.iconStyle}>
							<HeadsetIcon fontSize="medium" />
						</ListItemIcon>
						<ListItemText primary="Headphones" classes={{ primary: classes.textList }}/>
					</ListItem>
					<Divider light/>
					<ListItem  button style={{ textDecoration: 'none' }}>
						<ListItemText primary="Log In" classes={{ primary: classes.textList }}/>
					</ListItem>
					<ListItem  button style={{ textDecoration: 'none' }}>
						<ListItemText primary="Sign Up" classes={{ primary: classes.textList }}/>
					</ListItem>
					<ListItem  button style={{ textDecoration: 'none' }}>
						<ListItemText primary="How it works" classes={{ primary: classes.textList }}/>
					</ListItem>
				</List>
			</div>
		</Drawer>
	)
}

export default LeftSideMenu