import React, { useState } from 'react'
import Carousel from 'react-material-ui-carousel'
import { Image } from 'cloudinary-react'
import { makeStyles, Modal, Fab, Backdrop } from '@material-ui/core'
import CloseIcon from '@material-ui/icons/Close'

import config from '../../utils/config'

const useStyles = makeStyles(theme => ({
	conatinerDiv: {
		width: '100%'
	},
	carousel: {
		backgroundColor: theme.palette.common.white,
		width: '100%',
	},
	bigImage: {
		objectFit: 'contain',
		width: '100%',
		height: 300
	},
	carouselFullScreen: {
		position: 'absolute',
		top: '50%',
		left: '50%',
		transform: 'translate(-50%, -50%)',
		backgroundColor: 'transparent',
		outline: 'none',
		objectFit: 'contain',
		maxHeight: '100%',
		maxWidth: '100%'
	},
	backDrop: {
		backdropFilter: 'blur(2px)',
		backgroundColor: 'rgba(255,255,255,0.7)'
	},
	bigImageModal: {
		position: 'absolute',
		top: '50%',
		left: '50%',
		transform: 'translate(-50%, -50%)',
		backgroundColor: 'transparent',
		padding: theme.spacing(2, 4, 3),
		outline: 'none',
		objectFit: 'contain',
		maxHeight: '90%',
		maxWidth: '90%'
	},
	closeButton: {
		position: 'absolute',
		backgroundColor: theme.palette.common.white,
		bottom: '0%',
		right: '0%',
		transform: 'translate(-50%, -50%)',
		boxShadow: 'none',
		'&:hover': {
			backgroundColor: theme.palette.common.white,
			boxShadow: theme.shadows[5],

		}
	},	
}))

const ImagesCarousel = ({ images }) => {
	const classes = useStyles()
	const [open, setOpen] = useState(false)
	const [modalImage, setImodalImage] = useState(false)

	const bigImages = images.filter(image => image.imageName.includes('image'))

	const handleImageFullScreen = (image) => {
		setImodalImage(image)
		setOpen(true)
	}

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
					<Image key={i} publicId={image.publicId} cloudName={config.REACT_APP_CLOUD_NAME} className={classes.bigImage} onClick={() => handleImageFullScreen(image)} />
				)}
			</Carousel>

			<Modal
				open={open}
				onClose={() => setOpen(!open)}
				aria-labelledby="simple-modal-title"
				aria-describedby="simple-modal-description"
				BackdropComponent={Backdrop}
				BackdropProps={{
					classes: {
						root: classes.backDrop,
					},
				}}
			>
				<div>
					<Image publicId={modalImage.publicId} cloudName={config.REACT_APP_CLOUD_NAME} className={classes.bigImageModal} />
					<Fab aria-label="close" className={classes.closeButton} onClick={() => setOpen(false)}>
						<CloseIcon/>
					</Fab>
				</div>
			</Modal>
		</div>
	)
}

export default ImagesCarousel