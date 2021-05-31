import React, { useState } from 'react'
import { Image } from 'cloudinary-react'
import { makeStyles, Grid } from '@material-ui/core'
import config from '../../utils/config'

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
	imgClass: {
		// margin: 5
	},
	imgContainer: {
		width: 94,
		height: 94,
		padding: 12,
		// '&:hover': {
		// 	boxShadow: theme.shadows[10],
		// 	borderRadius: 15
		// },
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
		height: '100%',
		maxWidth: 'inherit',
		marginRight: 50
	},
	bigImage: {
		objectFit: 'contain',
		height: '100%',
		width: '100%',
		minHeight: 500,
		maxWidth: 'inherit',
		marginLeft: 25
	},
}))

const ImagesComponent = ({ images }) => {
	const classes = useStyles()
	const thumbs = images.filter(image => image.imageName.includes('thumb'))


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
			<div className={classes.bigImgContainer}>
				<Image publicId={bigImage[0].publicId} cloudName={config.REACT_APP_CLOUD_NAME} className={classes.bigImage} />
			</div>
		</div>
	)
}

export default ImagesComponent
