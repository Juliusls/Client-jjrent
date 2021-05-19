import React from 'react'
import Carousel from 'react-material-ui-carousel'
import { makeStyles, Paper } from '@material-ui/core'

import ipad1Max from '../../Images/ipad1Max.png'
import ipad2Max from '../../Images/ipad2Max.png'
import ipad3Max from '../../Images/ipad3Max.png'
import ipad4Max from '../../Images/ipad4Max.png'

const useStyles = makeStyles(theme => ({
	conatinerDiv: {
		width: '100%'
	},
	carousel: {
		backgroundColor: theme.palette.common.white,
		width: '100%',
	},
	bigImgContainer: {
		height: 260
	},
	paperClass: {
		boxShadow: 'none'
	},
	bigImage: {
		objectFit: 'contain',
		height: '100%',
		width: '100%',
	},
}))

const ImagesCarousel = () => {
	const classes = useStyles()
	let images = [
		ipad1Max,
		ipad2Max,
		ipad3Max,
		ipad4Max
	]

	return (
		<div className={classes.conatinerDiv}>
			<Carousel
				className={classes.carousel}
				swipe={true}
				autoPlay={false}
				navButtonsAlwaysInvisible={true}
				animation='slide'
			>
				{images.map( (image, i) => 
					<Paper key={i} className={classes.bigImgContainer} classes={{root: classes.paperClass}}>
						<img src={image} className={classes.bigImage} />
					</Paper> 
				
				)}
			</Carousel>
		</div>
	)
}

export default ImagesCarousel
