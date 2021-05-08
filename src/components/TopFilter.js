import React from 'react'

import { Drawer } from '@material-ui/core/'

import Filters from './Filters'


const TopFilter = ({ topMenuOpne, setTopMenuOpen, brandNames, maxPrice, minPrice }) => {
	return (
		<Drawer
			// classes={{ paper: classes.paper }}
			anchor="top"
			variant="temporary"
			open={topMenuOpne}
			onClose={() => setTopMenuOpen(false)}
		>
			<Filters brandNames={brandNames} maxPrice={maxPrice} minPrice={minPrice} setTopMenuOpen={setTopMenuOpen} />
		</Drawer>
	)
}

export default TopFilter
