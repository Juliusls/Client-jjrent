import React, { useState } from 'react'

import { makeStyles, Card, CardActionArea, CardContent, Typography, Box, IconButton } from '@material-ui/core/'
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder'
import FavoriteIcon from '@material-ui/icons/Favorite'
import { Image } from 'cloudinary-react'
import { useHistory } from 'react-router-dom'

// import { Link } from 'react-router-dom'


import config from '../utils/config'

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

const DeviceCard = ({ name, price, desc, image, id, category }) => {


	const classes = useStyles()
	const history = useHistory()

	const [favorited, setFavorited] = useState(false)

	const handleCardClick = () => {
		history.push(`/${category}/${id}`)
	}

	return (
		<Card className={classes.card} style={{ height: 'inherit' }} >
			<CardActionArea className={classes.cardActionArea} onClick={() => handleCardClick()}>
				<IconButton className={classes.favoriteButtonOrder}  classes={{root: classes.favoriteButton}} onMouseDown={event => event.stopPropagation()} onTouchStart={(event) => event.stopPropagation()} onClick={() => setFavorited(!favorited)}>
					{favorited 
						? <FavoriteIcon className={classes.favoriteButtonIcon} />
						: <FavoriteBorderIcon className={classes.notFavoritedIcon}/>
					}
				</IconButton>
				<div className={classes.imageContainer}>
					<Image publicId={image[0].publicId} cloudName={config.REACT_APP_CLOUD_NAME} className={classes.media} />
				</div>
				<CardContent classes={{root: classes.cardContent}}>
					<Typography className={classes.cardName}>
						{name}
					</Typography>
					<Typography className={classes.cardDesc}>
						{desc}
					</Typography>
					<Typography className={classes.cardAroundPrice}>
						from 
						<Box display='inline' className={classes.cardPrice}> €{price} </Box>
						per month
					</Typography>
				</CardContent>
			</CardActionArea>
		</Card>
	)
}

export default DeviceCard