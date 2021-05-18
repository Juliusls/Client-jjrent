import React from 'react'

import { makeStyles, Menu, MenuItem, ListItemText, Fade } from '@material-ui/core'

const useStyles = makeStyles(theme => ({
	menuComponentPaper: {
		borderRadius: 25,
		width: 200,
		padding: 10,
		paddingLeft: 30,
		marginTop: 14
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

const AccountMenu = ({ accountMenuIsOpen, handleAccountClose }) => {
	const classes = useStyles()

	return (
		<Menu
			anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
			transformOrigin={{ vertical: 'top', horizontal: 'right' }}
			id="simple-menu"
			anchorEl={accountMenuIsOpen}
			open={Boolean(accountMenuIsOpen)}
			onClose={handleAccountClose}
			MenuListProps={{ onMouseLeave: handleAccountClose }}
			getContentAnchorEl={null}
			TransitionComponent={Fade}
			className={classes.menuComponent}
			classes={{ paper: classes.menuComponentPaper }}
		>
			<MenuItem 
				onClick={handleAccountClose}
				className={classes.menuItem}
				style={{backgroundColor: 'white'}}
			>	
				<ListItemText primary="Log In" classes={{primary: classes.listItemText}}/>
			</MenuItem>
			<MenuItem 
				onClick={handleAccountClose}
				className={classes.menuItem}
				style={{backgroundColor: 'white'}}
			>
				<ListItemText primary="Sign Up" classes={{primary:classes.listItemText}}/>
			</MenuItem>
		</Menu>
	)
}

export default AccountMenu
