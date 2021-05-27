import React from 'react'
import { Link } from 'react-router-dom'


import { makeStyles, Drawer, List, ListItem, ListItemText, Divider, ListItemIcon } from '@material-ui/core'

import PhoneIphoneIcon from '@material-ui/icons/PhoneIphone'
import LaptopMacIcon from '@material-ui/icons/LaptopMac'
import WatchIcon from '@material-ui/icons/Watch'

const useStyles = makeStyles(theme => ({
	list: {
		width: 220,
		minHeight: '100%'
	},
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
					<ListItem component={ Link } to='/smartPhones' button style={{ textDecoration: 'none' }}>
						<ListItemIcon className={classes.iconStyle}>
							<PhoneIphoneIcon fontSize="medium" />
						</ListItemIcon>
						<ListItemText primary="SmartPhones" classes={{ primary: classes.textList }}/>
					</ListItem>
					<ListItem component={ Link } to='/laptops' button style={{ textDecoration: 'none' }}>
						<ListItemIcon className={classes.iconStyle}>
							<LaptopMacIcon fontSize="medium" />
						</ListItemIcon>
						<ListItemText primary="Laptops" classes={{ primary: classes.textList }}/>
					</ListItem>
					<ListItem component={ Link } to='/smartwatches' button style={{ textDecoration: 'none' }}>
						<ListItemIcon className={classes.iconStyle}>
							<WatchIcon fontSize="medium" />
						</ListItemIcon>
						<ListItemText primary="Smartwatches" classes={{ primary: classes.textList }}/>
					</ListItem>
					<Divider light/>
					<ListItem component={ Link } to='/howitworks' button style={{ textDecoration: 'none' }}>
						<ListItemText primary="How it works" classes={{ primary: classes.textList }}/>
					</ListItem>
				</List>
			</div>
		</Drawer>
	)
}

export default LeftSideMenu