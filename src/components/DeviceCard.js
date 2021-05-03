import React from 'react'
import cardImage from '../Images/macbookpro.png'

import { makeStyles, Card, CardActionArea, CardContent, CardMedia, Typography, Box } from '@material-ui/core/'

const useStyles = makeStyles(theme => ({
	card: {
		maxWidth: 345,
		borderRadius: 15,
		backgroundColor: theme.palette.common.white,
		boxShadow: theme.shadows[5],
		'&:hover': {
			backgroundColor: theme.palette.common.white,
			boxShadow: theme.shadows[10],
		},
	},
	cardActionArea: {
		padding: 15
	},
	media: {
		maxHeight: 'inherit',
		maxWidth: '',
		width: 'auto',
		height: 250
	},
	cardContent: {
		padding: 0,
	},
	cardTextBold: {
		color: theme.palette.common.black,
		fontSize: 20,
		fontWeight: 'bold',
	},
	cardText: {
		color: theme.palette.common.black,
		fontSize: 16,
	},
	cardTextSmall: {
		color: theme.palette.common.black,
		fontSize: 14,
	}
}))

const DeviceCard = ({ name, price, desc }) => {
	const classes = useStyles()

	return (
		<div>
			<Card className={classes.card}>
				<CardActionArea className={classes.cardActionArea}>
					<CardMedia
						className={classes.media}
						image={cardImage}
						title="Contemplative Reptile"
						style ={{maxWidth: '100%'}}
					/>
					<CardContent classes={{root: classes.cardContent}}>
						<Typography className={classes.cardTextBold}>
							{name}
						</Typography>
						<Typography className={classes.cardText}>
							{desc}
						</Typography>
						<Typography className={classes.cardTextSmall}>
							from €
							<Box display='inline' className={classes.cardTextBold}>{price} </Box>
							per month
						</Typography>
					</CardContent>
				</CardActionArea>
			</Card>
		</div>
	)
}

export default DeviceCard
