import React, { useState } from 'react'

import { makeStyles, Card, CardActionArea, CardContent, Typography, Box, IconButton } from '@material-ui/core/'
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder'
import FavoriteIcon from '@material-ui/icons/Favorite'

import MinimumRental from './MinumumRental'

const useStyles = makeStyles(theme => ({
	card: {
		borderRadius: 15,
		backgroundColor: theme.palette.common.white,
		boxShadow: theme.shadows[5],
		'&:hover': {
			backgroundColor: theme.palette.common.white,
			boxShadow: theme.shadows[10],
		},
	},
	cardActionArea: {
		padding: 15,
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
	favoriteButtonOrder:{
		[theme.breakpoints.down('xs')]: {
			order: 3,
		},
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
		paddingTop: 20,
		marginTop: 'auto',
		[theme.breakpoints.down('xs')]: {
			order: 2,
			marginTop: 0,
			paddingTop: 0,
			flexGrow: 1
		},
	},
	cardName: {
		color: theme.palette.common.black,
		fontSize: 16,
		fontWeight: 'bold',
		display: 'box',
		lineClamp: 2,
		boxOrient: 'vertical',
		overflow: 'hidden',
		letterSpacing: 'normal',
		minHeight: 48,
		[theme.breakpoints.down('xs')]: {
			lineClamp: 4,
		},
	},
	cardDesc: {
		color: theme.palette.common.black,
		fontSize: 14,
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
		fontSize: 12,
		marginTop: 10,
	},
	cardPrice: {
		color: theme.palette.common.black,
		fontSize: 16,
		fontWeight: 'bold',
	},
}))

const PriceCard = () => {

	const classes = useStyles()
	const [favorited, setFavorited] = useState(false)

	return (
		<Card className={classes.card} style={{ height: '100%' }}>
			<CardActionArea className={classes.cardActionArea}>
				<IconButton className={classes.favoriteButtonOrder}  classes={{root: classes.favoriteButton}} onMouseDown={event => event.stopPropagation()} onTouchStart={(event) => event.stopPropagation()} onClick={() => setFavorited(!favorited)}>
					{favorited 
						? <FavoriteIcon className={classes.favoriteButtonIcon} />
						: <FavoriteBorderIcon className={classes.notFavoritedIcon}/>
					}
				</IconButton>
				<CardContent classes={{root: classes.cardContent}}>
					<Typography className={classes.cardName}>
						Apple iPhone 12 128GB
					</Typography>
					<Typography className={classes.cardDesc}>
						6.1 Super Retina Display, Dual Rear Camera, 5G, Face ID
					</Typography>
					<Typography className={classes.cardAroundPrice}>
						<Box display='inline' className={classes.cardPrice}> €20 </Box>
						per month for 6 months, afterwards cancel anytime
					</Typography>
					<Typography className={classes.cardDesc}>
						Delivery in 1–3 business days
					</Typography>
					<Typography className={classes.cardDesc}>
						Insurance
					</Typography>
					<Typography className={classes.cardDesc}>
						Select your minimum rental period
					</Typography>
					<MinimumRental />
				</CardContent>
			</CardActionArea>
		</Card>
	)
}

export default PriceCard
