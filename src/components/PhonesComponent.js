import React from 'react'

import { makeStyles } from '@material-ui/core/styles'
import { Grid, Typography, Button } from '@material-ui/core/'
import DeviceCard from './DeviceCard'


const useStyles = makeStyles(theme => ({
	root: {
		flexGrow: 1,
		backgroundColor: theme.palette.grey[200],
		borderRadius: 25,
		marginTop: 25,
		padding: 30
	},
	categoryName: {
		color: theme.palette.primary.main,
		fontWeight: 'bold',
		marginBottom: 30
	},
	containerGrid: {
		display: 'flex',
		justifyContent: 'space-between',
	},
	viewAllButton: {
		color: theme.palette.primary.main,
		backgroundColor: theme.palette.common.white,
		borderRadius: 25,
		paddingTop: 10,
		paddingBottom: 10,
		paddingRight: 20,
		paddingLeft: 20,
		marginTop: 30,
		fontSize: 15,
		fontWeight: 'bold',
		boxShadow: theme.shadows[5],
		'&:hover': {
			backgroundColor: theme.palette.common.white,
			boxShadow: theme.shadows[10],
		}
	},
}))

const valuesForList = [
	{name: 'Macbook', price: 25, desc: 'Fusce vitae justo in mi rutrum finibus ut eget lorem'},
	{name: 'Lenovo', price: 53, desc: 'Fusce vitae justo in mi rutrum finibus ut eget lorem'},
	{name: 'Dell', price: 64, desc: 'Fusce vitae justo in mi rutrum finibus ut eget lorem'},
	{name: 'Asus', price: 12, desc: 'Fusce vitae justo in mi rutrum finibus ut eget lorem'}
]

const PhonesComponent = () => {
	const classes = useStyles()

	return (
		<div className={classes.root} >
			<Typography variant='h4' className={classes.categoryName}>Phones</Typography>
			<Grid container spacing={3} className={classes.containerGrid}>
				{valuesForList.map(value => (
					<Grid item xs={12} sm={6} md={3} lg={3} key={value.name}>
						<DeviceCard name={value.name} price={value.price} desc={value.desc}/>
					</Grid>
				))}
			</Grid>
			<Button variant="contained" className={classes.viewAllButton}>View all</Button>
		</div>
	)
}

export default PhonesComponent
