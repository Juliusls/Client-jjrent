import React, { useState, useContext } from 'react'

import { makeStyles, Card, Typography, IconButton, Button, Tooltip, Hidden, Fade, withStyles } from '@material-ui/core/'
// import Alert from '@material-ui/lab/Alert'

import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder'
import FavoriteIcon from '@material-ui/icons/Favorite'
import LocalShippingOutlinedIcon from '@material-ui/icons/LocalShippingOutlined'

import MinimumRental from './MinumumRental'
import ColorPicker from './ColorPicker'

import { SetCartContext } from '../../CartContext'

const useStyles = makeStyles(theme => ({
	card: {
		padding: 24,
		borderRadius: 15,
		backgroundColor: theme.palette.common.white,
		boxShadow: theme.shadows[5],
		marginLeft: 'auto',
		position: 'sticky',
		top: 80,
		width: '100%',
		height: '100%',
		maxWidth: 700,
		minHeight: 500,
		marginTop: 60,
		marginBottom: 20,
		zIndex: 2,
		[theme.breakpoints.down('sm')]: {
			position: 'static',
			zIndex: 1,
			height: 'inherit',
			marginLeft: 0,
			maxWidth: '-webkit-fill-available',
			minHeight: 300,
			marginTop: 30,
		},
	},
	favoriteButton: {
		display: 'block',
		marginLeft: 'auto',
		padding: 0,
		color: theme.palette.grey[500],
		'&:hover': {
			backgroundColor: theme.palette.common.white,
			color: theme.palette.grey[900]
		}
	},
	favoriteButtonContainer:{
		alignSelf: 'flex-start'
	},
	favoriteButtonIcon: {
		color: theme.palette.primary.main,
	},
	notFavoritedIcon: {
		color: theme.palette.grey[500],
	},
	imageContainer: {
		width: 'inherit',
		paddingBottom: '100%',
		position: 'relative',
		[theme.breakpoints.down('xs')]: {
			order: 1,
			padding: 0,
			width: 80,
			position: 'static',
			marginTop: 'auto',
			marginBottom: 'auto',
			marginLeft: 10,
			marginRight: 10,
		},
	},
	media: {
		position: 'absolute',
		top: 0,
		bottom: 0,
		width: '100%',
		height: '100%',
		objectFit: 'contain',
		[theme.breakpoints.down('xs')]: {
			maxHeight: 'inherit',
			width: 'inherit',
			height: 'auto',
			position: 'static',
			marginTop: 'auto',
		},
	},
	cardContent: {
		padding: 0,
		marginTop: 'auto',
	},
	cardName: {
		color: theme.palette.common.black,
		fontSize: 24,
		fontWeight: 'bold',
		letterSpacing: 'normal',
		marginBottom: 16
	},
	textDesc: {
		color: theme.palette.common.black,
		fontSize: 16,
		letterSpacing: 'normal',
		marginBottom: 16
	},
	textDelivery: {
		color: theme.palette.common.black,
		fontSize: 16,
		letterSpacing: 'normal',
		marginBottom: 32,
		marginLeft: 16
	},
	textPeriod: {
		color: theme.palette.common.black,
		fontSize: 16,
		letterSpacing: 'normal',
	},
	textColor: {
		color: theme.palette.common.black,
		fontSize: 16,
		letterSpacing: 'normal',
		marginTop: 16
	},
	minimumText: {
		textDecoration: 'underline'
	},
	cardAroundPrice: {
		color: theme.palette.common.black,
		fontSize: 16,
		marginBottom: 16,
		// [theme.breakpoints.down('sm')]: {
		// 	marginBottom: 0,
		// 	fontSize: 12,
		// 	flexGrow: 1,
		// 	flexBasis: 0
		// },
	},
	cardPrice: {
		color: theme.palette.common.black,
		fontSize: 24,
		fontWeight: 'bold',
		// [theme.breakpoints.down('sm')]: {
		// 	fontSize: 18,
		// },
	},
	oneColorText: {
		color: theme.palette.common.black,
		fontSize: 20,
		fontWeight: theme.typography.fontWeightBold,
	},
	buttonSubscribe: {
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
		marginBottom: 10,
		'&:hover': {
			color: theme.palette.common.white,
			backgroundColor: theme.palette.primary.main,
			boxShadow: theme.shadows[10],
		},
		[theme.breakpoints.down('sm')]: {
			marginBottom: 0,
			maxHeight: 'inherit',
			flexGrow: 1,
			flexBasis: 0,
			marginLeft: 10
		},
	},
	iconTextContainer: {
		display: 'flex'
	},
	tooltip: {
		opacity: 0.85,
		color: theme.palette.common.black,
	},
	bottomButtonSubscribe: {
		color: theme.palette.common.white,
		backgroundColor: theme.palette.primary.main,
		borderRadius: 25,
		paddingTop: 8,
		paddingBottom: 8,
		paddingRight: 16,
		paddingLeft: 16,
		fontSize: 16,
		fontWeight: 'bold',
		boxShadow: theme.shadows[5],
		width: '100%',
		position: 'fixed',
		bottom: 10,
		right: 10,
		zIndex: 2,
		maxWidth: '33%',
		height: 56,
		'&:hover': {
			color: theme.palette.common.white,
			backgroundColor: theme.palette.primary.main,
			boxShadow: 'none',
		},
		[theme.breakpoints.down('md')]: {
			right: 15,
		},
		[theme.breakpoints.down('xs')]: {
			maxWidth: '40%',
			right: 10,
		},
	},
}))

const BigTooltip = withStyles((theme) => ({
	tooltip: {
		backgroundColor: theme.palette.common.black,
		color: theme.palette.common.white,
		fontSize: 16,
		padding: 10,
		fontWeight: 'bold',
		borderRadius: 10
	},
}))(Tooltip)

const PriceCard = ({ id, name, prices, desc, variants, thumbId }) => {
	const classes = useStyles()
	const [favorited, setFavorited] = useState(false)
	const colors = variants.map(variant => variant.color)
	const [selectedColor, setSelectedColor] = useState(colors[0])
	const [minRentPeriod, setMinRentPeriod] = useState(4)

	const [setContext] = useContext(SetCartContext)

	// filter for MINRENTPERIOD
	const priceSwitch = () => {
		if (minRentPeriod === 4) {
			return prices.twelvePrice
		} else if (minRentPeriod === 3) {
			return prices.sixPrice
		} else if (minRentPeriod === 2) {
			return prices.threePrice
		} else if (minRentPeriod === 1) {
			return prices.onePrice
		}
	}
	
	const perMonthTextSwitch = () => {
		if (minRentPeriod === 4) {
			return '12 months'
		} else if (minRentPeriod === 3) {
			return '6 months'
		} else if (minRentPeriod === 2) {
			return '3 months'
		} else if (minRentPeriod === 1) {
			return '1 month'
		}
	}

	const handleSubscirbe = () => {
		let prev_items = JSON.parse(localStorage.getItem('cart')) || []
		console.log('prev_items', prev_items)
		
		// look for item in cart array
		let existingItem = prev_items.find(cartItem => cartItem.id == id)

		// alert if item is already in the car
		if (existingItem) {
			alert('Item is already in the cart')
		// if it is not in the cart add it
		} else {
			let cartItem = {
				id: id,
				name: name,
				colorName: selectedColor,
				colorCode: variants.filter(variant => variant.color === selectedColor)[0].colorCode,
				publicId: thumbId,
				price: priceSwitch(),
				period: perMonthTextSwitch()
			}
			let new_items = [...prev_items, cartItem]
			setContext(new_items)
			localStorage.setItem('cart', JSON.stringify(new_items))
			console.log('new_items', new_items)
		}
	}

	return (
		<Card className={classes.card} >
			<div className={classes.cardContent} >
				<div className={classes.iconTextContainer}>
					<Typography className={classes.cardName}>
						{name}
					</Typography>
					<IconButton className={classes.favoriteButtonContainer}  classes={{root: classes.favoriteButton}} onMouseDown={event => event.stopPropagation()} onTouchStart={(event) => event.stopPropagation()} onClick={() => setFavorited(!favorited)}>
						{favorited 
							? <FavoriteIcon className={classes.favoriteButtonIcon}/>
							: <FavoriteBorderIcon className={classes.notFavoritedIcon} />
						}
					</IconButton>
				</div>
				<Typography className={classes.textDesc}>
					{desc}
				</Typography>
				<Typography className={classes.cardAroundPrice}>
					<span display='inline' className={classes.cardPrice}>€{priceSwitch()}</span>
						per month for {perMonthTextSwitch()}, afterwards cancel anytime
				</Typography>
				<div className={classes.iconTextContainer}>
					<LocalShippingOutlinedIcon />
					<Typography className={classes.textDelivery}>
						Delivery in 1–3 business days
					</Typography>
				</div>
				<Typography className={classes.textPeriod}>
					{'Select your '}
					<BigTooltip 
						arrow
						classes={{ tooltip: classes.tooltip }}
						TransitionComponent={Fade}
						TransitionProps={{ timeout: 600 }}
						placement="top"
						title='At the end of your minimum rental period, you can keep on renting for the same price or cancel your subscription by sending the product back for free. Switching to a longer rental plan to lower your monthly payments is also possible at any time.'
					>
						<span display='inline' className={classes.minimumText}>minimum rental period</span>
					</BigTooltip>
				</Typography>
				<MinimumRental setMinRentPeriod={setMinRentPeriod} />
				<Typography className={classes.textColor}>
						Selected color:
					<span display='inline' className={classes.oneColorText}> {selectedColor}</span>
				</Typography>
				<ColorPicker variants={variants} selectedColor={selectedColor} setSelectedColor={setSelectedColor}/>
				<Hidden smDown>
					<Button variant="contained" className={classes.buttonSubscribe} onClick={() => handleSubscirbe()}>Subscribe</Button>
				</Hidden>
				<Hidden mdUp>
					<Button variant="contained" className={classes.bottomButtonSubscribe} onClick={() => handleSubscirbe()}>Subscribe</Button>					
				</Hidden>
			</div>
		</Card>
	)
}

export default PriceCard