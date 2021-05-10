import React from 'react'

import { makeStyles, Grid } from '@material-ui/core'

import ipad1Mini from '../../Images/ipad1Mini.png'
import ipad2Mini from '../../Images/ipad2Mini.png'
import ipad3Mini from '../../Images/ipad3Mini.png'
import ipad4Mini from '../../Images/ipad4Mini.png'
import ipad1Max from '../../Images/ipad1Max.png'

const useStyles = makeStyles(theme => ({
	containerDiv: {
		height: 500,
		display: 'flex',
		marginBottom: 100
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
		'&:hover': {
			boxShadow: theme.shadows[10],
			borderRadius: 15
		},
	},
	image: {
		objectFit: 'contain',
		height: '100%',
		width: '100%',
	},
	bigImgContainer: {
		height: '100%'
	},
	bigImage: {
		objectFit: 'contain',
		height: '100%',
		width: '100%',
		minHeight: 500
	},
}))

const ImagesComponent = () => {
	const classes = useStyles()

	return (
		<div className={classes.containerDiv}>
			<Grid container className={classes.gridList} cols={1}>
				<Grid item className={classes.imgContainer} classes={{ root: classes.imgClass}}>
					<img src={ipad1Mini} className={classes.image}/>
				</Grid>
				<Grid item className={classes.imgContainer} classes={{ root: classes.imgClass}}>
					<img src={ipad2Mini} className={classes.image}/>
				</Grid>
				<Grid item className={classes.imgContainer} classes={{ root: classes.imgClass}}>
					<img src={ipad3Mini} className={classes.image}/>
				</Grid>
				<Grid item className={classes.imgContainer} classes={{ root: classes.imgClass}}>
					<img src={ipad4Mini} className={classes.image}/>
				</Grid>
			</Grid>
			<div className={classes.bigImgContainer}>
				<img src={ipad1Max} className={classes.bigImage} />
			</div>
		</div>
	)
}

export default ImagesComponent
