import React from 'react'
import { useParams } from 'react-router-dom'
import { useQuery } from '@apollo/client'

import { makeStyles, Hidden } from '@material-ui/core'

import ImagesComponent from './ImagesComponent'
import ImagesCarousel from './ImagesCarousel'
import PriceCard from './PriceCard'
import PhoneSpecifications from './Specifications/PhoneSpecifications'
import LaptopSpecifications from './Specifications/LaptopSpecifications'
import WatchSpecifications from './Specifications/WatchSpecifications'


import InsideTheBox from './InsideTheBox'
import QandA from './FAQ'
import Benefits from './Benefits'

import { FIND_PHONE } from '../../graphql/phones/queries'
import { FIND_LAPTOP } from '../../graphql/laptops/queries'
import { FIND_WATCH } from '../../graphql/watches/queries'

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
	let mainData
	const classes = useStyles()

	let { id } = useParams()
	let { category } = useParams()

	let phone
	let laptop
	let watch
	if (category === 'smartphone') {
		phone = useQuery(FIND_PHONE, { variables: { id: id }})
	} else if (category === 'laptop') {
		laptop = useQuery(FIND_LAPTOP, { variables: { id: id }})
	} else if (category === 'smartwatch') {
		watch = useQuery(FIND_WATCH, { variables: { id: id }})
	}

	if (phone) {
		if (phone.loading) {
			return null
		}
		mainData = phone.data.findPhone
	}
	if (laptop) {
		if (laptop.loading) {
			return null
		}
		mainData = laptop.data.findLaptop
	}
	if (watch) {
		if (watch.loading) {
			return null
		}
		mainData = watch.data.findWatch
	}

	const specSwitch = () => {
		switch (category) {
		case 'smartphone':
			return <PhoneSpecifications phoneSpecs={mainData.phoneSpecs} />
		case 'laptop':
			return <LaptopSpecifications laptopSpecs={mainData.laptopSpecs} />
		case 'smartwatch':
			return <WatchSpecifications watchSpecs={mainData.watchSpecs} />
		default:
			break
		}
	}

	const nameSwitch = () => {
		switch (category) {
		case 'smartphone':
			return mainData.phoneName
		case 'laptop':
			return mainData.laptopName
		case 'smartwatch':
			return mainData.watchName
		default:
			break
		}
	}

	console.log(mainData)

	return (
		<div className={classes.containerDiv} >
			<Hidden smDown>
				<div className={classes.pageFlow}>
					<ImagesComponent images={mainData.imageIds}/>
					<Benefits />
					<InsideTheBox insideTheBox={mainData.insideTheBox} />
					{specSwitch()}
					<QandA />
				</div>
				<PriceCard name={nameSwitch()} prices={mainData.prices} desc={mainData.description} variants={mainData.variants} />
			</Hidden>
			<Hidden mdUp>
				<div className={classes.pageFlow}>
					<ImagesCarousel images={mainData.imageIds} />
					<PriceCard name={nameSwitch()} prices={mainData.prices} desc={mainData.description} variants={mainData.variants} />
					<Benefits />
					<InsideTheBox insideTheBox={mainData.insideTheBox} />
					{specSwitch()}
					<QandA />
				</div>
			</Hidden>
			
		</div>
	)
}

export default ProductPage
