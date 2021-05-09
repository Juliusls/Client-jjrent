import React from 'react'

import { makeStyles } from '@material-ui/core'

import ImagesComponent from './ImagesComponent'
import PriceCard from './PriceCard'

const useStyles = makeStyles({
	containerDiv: {
		display: 'flex',
		marginTop: 100,
	},
})

const ProductPage = () => {
	const classes = useStyles()

	return (
		<div className={classes.containerDiv} >
			<ImagesComponent />
			<PriceCard />
		</div>
	)
}

export default ProductPage
