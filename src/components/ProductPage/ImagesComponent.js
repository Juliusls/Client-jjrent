import React, { useState } from 'react'
import { Image } from 'cloudinary-react'
import { makeStyles, Grid, Modal, Backdrop, Fab } from '@material-ui/core'
import config from '../../utils/config'
import CloseIcon from '@material-ui/icons/Close'
import ZoomInIcon from '@material-ui/icons/ZoomIn'


// import ipad1Max from '../../Images/ipad1Max.png'

const useStyles = makeStyles(theme => ({
	containerDiv: {
		height: 500,
		display: 'flex',
		marginBottom: 100,
		maxWidth: '100%',
		[theme.breakpoints.down('sm')]: {
			maxWidth: '100%',
			marginBottom: 50,
		},
	},
	gridList: {
		maxWidth: 94,
		maxHeight: 376
	},
	imgContainer: {
		width: 94,
		height: 94,
		padding: 12,
	},
	imgContainerHover: {
		width: 94,
		height: 94,
		padding: 12,
		boxShadow: theme.shadows[10],
		borderRadius: 15
	},
	image: {
		objectFit: 'contain',
		height: '100%',
		width: '100%',
	},
	bigImgContainer: {
		display: 'flex',
		justifyContent: 'center',
		height: '100%',
		width: '100%',
		maxWidth: 'inherit',
		marginLeft: 25,
		position: 'relative'
	},
	bigImage: {
		objectFit: 'contain',
		height: '100%',
		width: '100%',
		minHeight: 500,
		maxWidth: 'inherit',
	},
	fullScreenImage: {
		position: 'absolute',
		top: '50%',
		left: '50%',
		transform: 'translate(-50%, -50%)',
		backgroundColor: 'transparent',
		padding: theme.spacing(2, 4, 3),
		outline: 'none',
		objectFit: 'contain',
		maxHeight: '80%',
		maxWidth: '80%'
	},
	backDrop: {
		backdropFilter: 'blur(2px)',
		backgroundColor: 'rgba(255,255,255,0.7)'
	},
	closeButton: {
		position: 'absolute',
		backgroundColor: theme.palette.common.white,
		bottom: '0%',
		right: '0%',
		transform: 'translate(-50%, -50%)',
	},
	zoomInButton: {
		position: 'absolute',
		backgroundColor: theme.palette.common.white,
		boxShadow: 'none',
		top: '50%',
		left: '50%',
		transform: 'translate(-50%, -50%)',
		color: theme.palette.grey[700],
		zIndex: 2,
		'&:hover': {
			backgroundColor: theme.palette.common.white,
			boxShadow: theme.shadows[5],
		}
	},
}))

const ImagesComponent = ({ images }) => {
	const classes = useStyles()
	const thumbs = images.filter(image => image.imageName.includes('thumb'))
	const [open, setOpen] = useState(false)
	const [hover, setHover] = useState(false)

	const [imageSelected, setImageSelected] = useState('1')

	const handleImageSelect = (imageFullName) => {
		const imageIndex = imageFullName.substring(imageFullName.indexOf('thumb') + 6).split('.')[0]
		setImageSelected(imageIndex)
	}
	
	const bigImage = images.filter(image => image.imageName.includes(`image_${imageSelected}`))

	return (
		<div className={classes.containerDiv}>
			<Grid container className={classes.gridList} cols={1}>
				{thumbs.map(thumb => 
					<Grid item button className={(thumb.imageName.includes(`thumb_${imageSelected}`)) ? classes.imgContainerHover : classes.imgContainer} classes={{ root: classes.imgClass }} key={thumb.imageName} onClick={() => handleImageSelect(thumb.imageName)}>
						<Image publicId={thumb.publicId} cloudName={config.REACT_APP_CLOUD_NAME} className={classes.image} />
					</Grid>
				)}
			</Grid>
			<div className={classes.bigImgContainer} onClick={() => setOpen(true)}>
				<Image publicId={bigImage[0].publicId} cloudName={config.REACT_APP_CLOUD_NAME} className={classes.bigImage} onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}/>
				<Fab aria-label="close" className={classes.zoomInButton} onClick={() => setOpen(true)} style={{ display: hover ? 'inline-flex' : 'none'}} onMouseEnter={() => setHover(true)}>
					<ZoomInIcon fontSize="large"/>
				</Fab>
			</div>
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
					<Image publicId={bigImage[0].publicId} cloudName={config.REACT_APP_CLOUD_NAME} className={classes.fullScreenImage} />
					<Fab aria-label="close" className={classes.closeButton} onClick={() => setOpen(false)}>
						<CloseIcon/>
					</Fab>
				</div>
			</Modal>
		</div>
	)
}

export default ImagesComponent
