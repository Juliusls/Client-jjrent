import React from 'react'
import Carousel from 'react-material-ui-carousel'
import { Image } from 'cloudinary-react'
import { makeStyles, Paper } from '@material-ui/core'
import config from '../../utils/config'

// import ipad1Max from '../../Images/ipad1Max.png'
// import ipad2Max from '../../Images/ipad2Max.png'
// import ipad3Max from '../../Images/ipad3Max.png'
// import ipad4Max from '../../Images/ipad4Max.png'

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

const ImagesCarousel = ({ images }) => {
	const classes = useStyles()

	const bigImages = images.filter(image => image.imageName.includes('image'))

	return (
		<div className={classes.conatinerDiv}>
			<Carousel
				className={classes.carousel}
				swipe={true}
				autoPlay={false}
				navButtonsAlwaysInvisible={true}
				animation='slide'
			>
				{bigImages.map((image, i) => 
					<Paper key={i} className={classes.bigImgContainer} classes={{root: classes.paperClass}}>
						<Image publicId={image.publicId} cloudName={config.REACT_APP_CLOUD_NAME} className={classes.bigImage} />
					</Paper> 
				)}
			</Carousel>
		</div>
	)
}

export default ImagesCarousel
