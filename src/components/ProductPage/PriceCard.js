import React, { useState } from 'react'

import { makeStyles, Card, Typography, Box, IconButton, Button, Tooltip, withStyles, Fade } from '@material-ui/core/'
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder'
import FavoriteIcon from '@material-ui/icons/Favorite'
import LocalShippingOutlinedIcon from '@material-ui/icons/LocalShippingOutlined'

import MinimumRental from './MinumumRental'
import ColorPicker from './ColorPicker'

const useStyles = makeStyles(theme => ({
	card: {
		padding: 24,
		borderRadius: 15,
		backgroundColor: theme.palette.common.white,
		boxShadow: theme.shadows[5],
		marginLeft: 'auto',
		position: 'sticky',
		top: 160,
		width: '100%',
		height: '100%',
		maxWidth: 700,
		minHeight: 500,
		marginTop: 60,
		zIndex: 2,
		[theme.breakpoints.down('sm')]: {
			position: 'static',
			zIndex: 1,
			height: 'inherit',
			marginLeft: 0,
			maxWidth: '100%',
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
		marginBottom: 16
	},
	cardPrice: {
		color: theme.palette.common.black,
		fontSize: 24,
		fontWeight: 'bold',
	},
	oneColorText: {
		color: theme.palette.primary.light,
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
	},
	iconTextContainer: {
		display: 'flex'
	},
	arrow: {
		color: theme.palette.common.black,
	},
	popper: {
		opacity: 0.85
	}
}))

const colors = ['blue', 'red', 'green']

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

const PriceCard = () => {
	const classes = useStyles()
	const [favorited, setFavorited] = useState(false)
	const [selectedColor, setSelectedColor] = useState(colors[0])

	return (
		// <Card className={classes.card} style={{ height: '100%'}}>
		<Card className={classes.card} >
			<div className={classes.cardContent} >
				<div className={classes.iconTextContainer}>
					<Typography className={classes.cardName}>
						Apple MacBook Air (Late 2020) Laptop - Apple M1 - 8GB - 256GB SSD - Apple Integrated 7-core GPU
					</Typography>
					<IconButton className={classes.favoriteButtonContainer}  classes={{root: classes.favoriteButton}} onMouseDown={event => event.stopPropagation()} onTouchStart={(event) => event.stopPropagation()} onClick={() => setFavorited(!favorited)}>
						{favorited 
							? <FavoriteIcon className={classes.favoriteButtonIcon}/>
							: <FavoriteBorderIcon className={classes.notFavoritedIcon} />
						}
					</IconButton>
				</div>
				<Typography className={classes.textDesc}>
					32.5MP, CMOS Sensor, 4K Video, Face and Eye detection, High continuos frame rate (30 frames per sec)
				</Typography>
				<Typography className={classes.cardAroundPrice}>
					<Box display='inline' className={classes.cardPrice}> €20 </Box>
						per month for 6 months, afterwards cancel anytime
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
						classes={{ arrow: classes.arrow, popper: classes.popper }}
						TransitionComponent={Fade}
						TransitionProps={{ timeout: 600 }}
						placement="top"
						title='At the end of your minimum rental period, you can keep on renting for the same price or cancel your subscription by sending the product back for free. Switching to a longer rental plan to lower your monthly payments is also possible at any time.'
					>
						<Box display='inline' className={classes.minimumText}>minimum rental period</Box>
					</BigTooltip>
				</Typography>
				<MinimumRental />
				<Typography className={classes.textColor}>
						Selected color:
					<Box display='inline' className={classes.oneColorText}> {selectedColor}</Box>
				</Typography>
				<ColorPicker colors={colors} selectedColor={selectedColor} setSelectedColor={setSelectedColor}/>
				<Button variant="contained" className={classes.buttonSubscribe}>Subscribe</Button>
			</div>
		</Card>
	)
}

export default PriceCard


// At the end of your minimum rental period, you can keep on renting for the same price or cancel your subscription by sending the product back for free. Switching to a longer rental plan to lower your monthly payments is also possible at any time.