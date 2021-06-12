import React, { useEffect, useState, useContext } from 'react'

import { makeStyles, Menu, List, ListItem, ListItemText, Fade, Typography, Button, Divider, IconButton } from '@material-ui/core'
import DeleteOutlinedIcon from '@material-ui/icons/DeleteOutlined'

import config from '../../utils/config'

import { CartContext } from '../../CartContext'

import { Image } from 'cloudinary-react'

import { SetCartContext } from '../../CartContext'



const useStyles = makeStyles(theme => ({
	menuComponentPaper: {
		borderRadius: 25,
		width: 400,
		maxHeight: 600,
		padding: 20,
		marginTop: 14,
		[theme.breakpoints.down('xs')]: {
			position: 'fixed',
			width: '100vh',
			maxHeight: '60vh'
		},
	},
	menuComponent:{
		
	},
	listItemRoot: {
		padding: 0
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
	},
	buttonContinue: {
		color: theme.palette.common.white,
		backgroundColor: theme.palette.primary.main,
		borderRadius: 20,
		paddingTop: 8,
		paddingBottom: 8,
		paddingRight: 16,
		paddingLeft: 16,
		fontSize: 16,
		fontWeight: 'bold',
		boxShadow: theme.shadows[5],
		width: '100%',
		marginTop: 10,
		'&:hover': {
			color: theme.palette.common.white,
			backgroundColor: theme.palette.primary.main,
			boxShadow: theme.shadows[10],
		},
	},
	subtotalText: {
		color: theme.palette.common.black,
		fontSize: 16,
		fontWeight: 'bold',
	},
	priceText: {
		color: theme.palette.common.black,
		fontSize: 16,
		fontWeight: 'bold',
	},
	productName: {
		color: theme.palette.common.black,
		fontSize: 16,
		fontWeight: 'bold',
		display: 'box',
		lineClamp: 1,
		boxOrient: 'vertical',
		overflow: 'hidden',
		letterSpacing: 'normal',
		minHeight: 24,
		marginBottom: 5,
		[theme.breakpoints.down('xs')]: {
			fontSize: 14,
		},
	},
	divider: {
		marginBottom: 10,
	},
	subtotalDiv: {
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'space-between'
	},
	thumbsContainer: {
		marginRight: 10,
		minWidth: 70,
		height: 70,
		display: 'flex',
		justifyContent: 'center',
		[theme.breakpoints.down('xs')]: {
			minWidth: 50,
			height: 50,
		},
	},
	thumbs: {
		objectFit: 'contain',
		height: 70,
		maxWidth: 70,
		margin: 'auto',
		[theme.breakpoints.down('xs')]: {
			minWidth: 50,
			height: 50,
		},
	},
	rowDiv: {
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'space-between'
	},
	listItem: {
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'left',
		marginBottom: 30,
		minHeight: 80
	},
	infoDiv: {
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'space-between',
		width: '100%',
		height: '100%',
	},
	buttonDelete: {
	},
	colorCircle: {
		border: '1px solid #888',
		borderRadius: '50%',
		height: 15,
		width: 15,
		margin: 3
	},
	divColor: {
		display: 'flex',
		flexDirection: 'row',
		marginBottom: 5
	},
	colorName: {
		marginLeft: 5,
		[theme.breakpoints.down('xs')]: {
			fontSize: 14,
		},
	},
	cartItemPrice: {
		color: theme.palette.common.black,
		fontSize: 16,
		fontWeight: 'bold',
		[theme.breakpoints.down('xs')]: {
			fontSize: 14,
		},
	},
	periodText: {
		[theme.breakpoints.down('xs')]: {
			textAlign: 'center'
		},
	}
}))

const AccountMenu = ({ cartMenuIsOpen, handleCartClose }) => {
	const classes = useStyles()
	const [cartItems, setCartItems] = useState([])

	const [context] = useContext(CartContext)
	const [setContext] = useContext(SetCartContext)

	useEffect(() => {
		let cart = JSON.parse(localStorage.getItem('cart')) || []
		setCartItems(cart)
	}, [context]) 

	const handleRemoveFromCart = (id) => {
		let prev_items = JSON.parse(localStorage.getItem('cart'))
		let itemsAfterRemoval = prev_items.filter(item => item.id !== id)
		setContext(itemsAfterRemoval)
		localStorage.setItem('cart', JSON.stringify(itemsAfterRemoval))
	}

	console.log(cartItems)

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
			marginThreshold={0}
		>
			<div>
				{cartItems.length > 0 
					?
					<div>
						<List className={classes.root}>
							{cartItems.map(item => 
								<ListItem key={item.id} className={classes.listItem} classes={{ root: classes.listItemRoot }}>
									<div className={classes.thumbsContainer}>
										<Image publicId={item.publicId} cloudName={config.REACT_APP_CLOUD_NAME} className={classes.thumbs} />
									</div>
									<div className={classes.infoDiv}>
										<Typography type="body2" className={classes.productName}>{item.name}</Typography>
										<div className={classes.divColor}>
											<p className={classes.colorCircle} style={{ backgroundColor: item.colorCode}}></p>
											<Typography className={classes.colorName} type="body2">{item.colorName}</Typography>
										</div>
										<div className={classes.rowDiv}>
											<Typography type="body2" className={classes.periodText}><span display='inline' className={classes.cartItemPrice}>€{item.price}</span> per month</Typography>
											<Typography type="body2" className={classes.periodText}>{item.period}</Typography>
										</div>
									</div>
									<IconButton aria-label="delete" className={classes.buttonDelete} onClick={() => handleRemoveFromCart(item.id)}>
										<DeleteOutlinedIcon />
									</IconButton>
								</ListItem>) 
							}			
						</List>		
						<Divider className={classes.divider}/>
						<div className={classes.subtotalDiv}>
							<Typography><span className={classes.subtotalText}>Subtotal</span> Incl. VAT</Typography>
							<Typography className={classes.priceText}>€{cartItems.length > 0 ? cartItems.map(item => item.price).reduce((a, b) => a + b) : 0}</Typography>
						</div>
						<Button variant="contained" className={classes.buttonContinue} onClick={() => console.log('Continue')}>Continue</Button>
					</div>
					:
					<ListItem 
						className={classes.menuItem}
						style={{backgroundColor: 'white'}}
					>	
						<ListItemText primary="Empty cart" classes={{primary: classes.listItemText}}/>
					</ListItem>
				}
			</div>
		</Menu>
	)
}

export default AccountMenu
