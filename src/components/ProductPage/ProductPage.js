import React from 'react'

import { makeStyles } from '@material-ui/core'

import ImagesComponent from './ImagesComponent'
import PriceCard from './PriceCard'
import Specifications from './Specifications'
import InsideTheBox from './InsideTheBox'
import QandA from './FAQ'
import Benefits from './Benefits'

const useStyles = makeStyles({
	containerDiv: {
		display: 'flex',
		// marginTop: 100,
	},
	pageFlow: {
		maxWidth: '60%',
		marginRight: 50,
		marginTop: 60,
		marginBottom: 20
	}
})

const ProductPage = () => {
	const classes = useStyles()

	return (
		<div className={classes.containerDiv} >
			<div className={classes.pageFlow}>
				<ImagesComponent />
				<Benefits />
				<InsideTheBox />
				<Specifications />
				<QandA />
			</div>
			<PriceCard />
		</div>
	)
}

export default ProductPage
