import React from 'react'

import { makeStyles, Menu, MenuItem, ListItemText, Fade } from '@material-ui/core'

const useStyles = makeStyles(theme => ({
	menuComponentPaper: {
		borderRadius: 25,
		width: 300,
		height: 300,
		padding: 10,
		paddingLeft: 30,
		marginTop: 14,
		[theme.breakpoints.down('sm')]: {
			width: 250,
		},
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

const AccountMenu = ({ cartMenuIsOpen, handleCartClose }) => {
	const classes = useStyles()

	return (
		<Menu
			anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
			transformOrigin={{ vertical: 'top', horizontal: 'right' }}
			id="simple-menu"
			anchorEl={cartMenuIsOpen}
			open={Boolean(cartMenuIsOpen)}
			onClose={handleCartClose}
			MenuListProps={{ onMouseLeave: handleCartClose }}
			getContentAnchorEl={null}
			TransitionComponent={Fade}
			className={classes.menuComponent}
			classes={{ paper: classes.menuComponentPaper }}
		>
			<MenuItem 
				// onClick={handleCartClose}
				className={classes.menuItem}
				style={{backgroundColor: 'white'}}
			>	
				<ListItemText primary="Empty cart" classes={{primary: classes.listItemText}}/>
			</MenuItem>
		</Menu>
	)
}

export default AccountMenu
