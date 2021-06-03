import React from 'react'

import { Drawer } from '@material-ui/core/'

import Filters from './Filters'


const TopFilter = ({ topMenuOpne, setTopMenuOpen, setBrandsArray, sortBy, setSortBy, minRentPeriod, setMinRentPeriod, brandsList, setPricesArray, minPrice, maxPrice }) => {
	return (
		<Drawer
			anchor="top"
			variant="temporary"
			open={topMenuOpne}
			onClose={() => setTopMenuOpen(false)}
		>
			<Filters 
				setTopMenuOpen={setTopMenuOpen}

				setBrandsArray={setBrandsArray} 
				brandsList={brandsList} 
				sortBy={sortBy} 
				setSortBy={setSortBy} 
				minRentPeriod={minRentPeriod} 
				setMinRentPeriod={setMinRentPeriod} 
				setPricesArray={setPricesArray} 
				maxPrice={maxPrice} 
				minPrice={minPrice}
			/>
		</Drawer>
	)
}

export default TopFilter
