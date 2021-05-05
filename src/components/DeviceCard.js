import React from 'react'

import { makeStyles, Card, CardActionArea, CardContent, Typography, Box, IconButton } from '@material-ui/core/'
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder'

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
		flexDirection: 'column'
	},
	cardContent: {
		padding: 0,
		marginTop: 'auto',
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
		paddingTop: 20,
	},
	cardDesc: {
		color: theme.palette.common.black,
		fontSize: 14,
		display: 'box',
		lineClamp: 2,
		boxOrient: 'vertical',
		overflow: 'hidden',
		letterSpacing: 'normal',
		minHeight: 40
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
	imageContainer: {
		width: 'inherit',
		paddingBottom: '100%',
		position: 'relative',
	},
	media: {
		position: 'absolute',
		top: 0,
		bottom: 0,
		width: '100%',
		height: '100%',
		objectFit: 'contain',
	}
}))

const DeviceCard = ({ name, price, desc, image }) => {
	const classes = useStyles()

	return (
		<Card className={classes.card} style={{ height: '100%' }}>
			<CardActionArea className={classes.cardActionArea}>
				<IconButton classes={{root: classes.favoriteButton}} onMouseDown={event => event.stopPropagation()}>
					<FavoriteBorderIcon fontSize="small"/>
				</IconButton>
				<div className={classes.imageContainer}>
					<img src={image} className={classes.media}/>					
				</div>
				<CardContent classes={{root: classes.cardContent}}>
					<Typography className={classes.cardName}>
						{name}
					</Typography>
					<Typography className={classes.cardDesc}>
						{desc}
					</Typography>
				</CardContent>
				<Typography className={classes.cardAroundPrice}>
						from 
					<Box display='inline' className={classes.cardPrice}> €{price} </Box>
						per month
				</Typography>
			</CardActionArea>
		</Card>
	)
}

export default DeviceCard