import React from 'react'

import { makeStyles, Hidden } from '@material-ui/core'

import ImagesComponent from './ImagesComponent'
import ImagesCarousel from './ImagesCarousel'
import PriceCard from './PriceCard'
import Specifications from './Specifications'
import InsideTheBox from './InsideTheBox'
import QandA from './FAQ'
import Benefits from './Benefits'

const useStyles = makeStyles(theme => ({
	containerDiv: {
		display: 'flex',
	},
	pageFlow: {
		maxWidth: '60%',
		marginRight: 50,
		marginTop: 60,
		marginBottom: 20,
		[theme.breakpoints.down('sm')]: {
			maxWidth: '100%',
			marginRight: 0,
		},
	}
}))

const ProductPage = () => {
	const classes = useStyles()

	return (
		<div className={classes.containerDiv} >
			<Hidden smDown>
				<div className={classes.pageFlow}>
					<ImagesComponent />
					<Benefits />
					<InsideTheBox />
					<Specifications />
					<QandA />
				</div>
				<PriceCard />
			</Hidden>
			<Hidden mdUp>
				<div className={classes.pageFlow}>
					<ImagesCarousel />
					<PriceCard />
					<Benefits />
					<InsideTheBox />
					<Specifications />
					<QandA />
				</div>
			</Hidden>
			
		</div>
	)
}

export default ProductPage
