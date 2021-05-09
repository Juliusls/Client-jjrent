import React, { useState } from 'react'

import { makeStyles, Card, Typography, Box, IconButton, Button } from '@material-ui/core/'
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder'
import FavoriteIcon from '@material-ui/icons/Favorite'
import LocalShippingOutlinedIcon from '@material-ui/icons/LocalShippingOutlined'
import BeachAccessOutlinedIcon from '@material-ui/icons/BeachAccessOutlined'

import MinimumRental from './MinumumRental'

const useStyles = makeStyles(theme => ({
	card: {
		borderRadius: 15,
		backgroundColor: theme.palette.common.white,
		boxShadow: theme.shadows[5],
		// '&:hover': {
		// 	backgroundColor: theme.palette.common.white,
		// 	boxShadow: theme.shadows[10],
		// },
	},
	cardActionArea: {
		padding: 24,
		display: 'flex',
		justifyContent: 'space-between',
		alignContent: 'flex-start',
		alignItems: 'flex-start',
		flexDirection: 'column',
		[theme.breakpoints.down('xs')]: {
			flexDirection: 'row',
			padding: 12,
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
		[theme.breakpoints.down('xs')]: {
			fontSize: 22
		},
	},
	notFavoritedIcon: {
		color: theme.palette.grey[500],
		[theme.breakpoints.down('xs')]: {
			fontSize: 22
		},
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
		display: 'box',
		lineClamp: 2,
		boxOrient: 'vertical',
		overflow: 'hidden',
		letterSpacing: 'normal',
		minHeight: 48,
	},
	cardDesc: {
		color: theme.palette.common.black,
		fontSize: 16,
		display: 'box',
		lineClamp: 2,
		boxOrient: 'vertical',
		overflow: 'hidden',
		letterSpacing: 'normal',
		minHeight: 40,
		[theme.breakpoints.down('xs')]: {
			lineClamp: 5,
		},
	},
	cardAroundPrice: {
		color: theme.palette.common.black,
		fontSize: 16,
		marginTop: 10,
	},
	cardPrice: {
		color: theme.palette.common.black,
		fontSize: 24,
		fontWeight: 'bold',
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
	}
}))

const PriceCard = () => {

	const classes = useStyles()
	const [favorited, setFavorited] = useState(false)

	return (
		<Card className={classes.card} style={{ height: '100%' }}>
			<div className={classes.cardActionArea}>
				<div classes={{root: classes.cardContent}}>
					<div className={classes.iconTextContainer}>
						<Typography className={classes.cardName}>
							Apple iPhone 12 128GB
						</Typography>
						<IconButton className={classes.favoriteButtonContainer}  classes={{root: classes.favoriteButton}} onMouseDown={event => event.stopPropagation()} onTouchStart={(event) => event.stopPropagation()} onClick={() => setFavorited(!favorited)}>
							{favorited 
								? <FavoriteIcon className={classes.favoriteButtonIcon}/>
								: <FavoriteBorderIcon className={classes.notFavoritedIcon} />
							}
						</IconButton>
					</div>
					<Typography className={classes.cardDesc}>
						6.1 Super Retina Display, Dual Rear Camera, 5G, Face ID
					</Typography>
					<Typography className={classes.cardAroundPrice}>
						<Box display='inline' className={classes.cardPrice}> €20 </Box>
						per month for 6 months, afterwards cancel anytime
					</Typography>
					<div className={classes.iconTextContainer}>
						<LocalShippingOutlinedIcon />
						<Typography className={classes.cardDesc}>
							Delivery in 1–3 business days
						</Typography>
					</div>
					<div className={classes.iconTextContainer}>
						<BeachAccessOutlinedIcon />
						<Typography className={classes.cardDesc}>
						Insurance
						</Typography>
					</div>
					<Typography className={classes.cardDesc}>
						Select your minimum rental period
					</Typography>
					<MinimumRental />
					<Button variant="contained" className={classes.buttonSubscribe}>Subscribe</Button>
				</div>
			</div>
		</Card>
	)
}

export default PriceCard
