import React, { useState, useEffect } from 'react'
import { makeStyles, Grid, Card, Typography, CardContent, FormControlLabel, Checkbox, FormControl, RadioGroup, Radio, Slider, Hidden, Button } from '@material-ui/core/'

const useStyles = makeStyles(theme => ({
	card: {
		borderRadius: 15,
		backgroundColor: theme.palette.common.white,
		boxShadow: theme.shadows[5],
		[theme.breakpoints.down('xs')]: {
			margin: 10
		},
	},
	cardActionArea: {
		padding: 20,
		display: 'flex',
		justifyContent: 'space-between',
		alignContent: 'flex-start',
		alignItems: 'flex-start',
		flexDirection: 'column',
		[theme.breakpoints.down('xs')]: {
			padding: 20,
		},
	},
	cardContent: {
		padding: 0,
		width: '100%',
		'&:last-child': {
			paddingBottom: 0
		}
	},
	cardName: {
		color: theme.palette.grey[900],
		fontSize: 18,
		paddingBottom: 10,
		fontWeight: 'bold',
		letterSpacing: 'normal',
	},
	cardDesc: {
		color: theme.palette.grey[900],
		fontSize: 18,
		letterSpacing: 'normal',
	},
	priceSlider: {
		width: 'inherit',
	},
	sliderTrack: {
		height: 3,
		marginTop: 2,
	},
	sliderTrackNone: {
		display: 'none'
	},
	sliderRail: {
		height: 3,
		marginTop: 2,
	},
	sliderThumb: {
		height: 17,
		width: 17,
	},
	sliderMark: {
		height: 7,
		width: 7,
		borderRadius: 10,
		marginTop: 0,
		opacity: 1
	},
	slideMarkActive: {
		backgroundColor: theme.palette.primary.main,
		borderRadius: 10
	},
	minimumRentContainer: {
		display: 'flex',
		justifyContent: 'space-between'
	},
	formLabelsTexts: {
		color: theme.palette.common.black,
		fontSize: 18,
	},
	buttonCloseTopMenu: {
		color: theme.palette.common.white,
		backgroundColor: theme.palette.primary.main,
		borderRadius: 20,
		paddingTop: 8,
		paddingBottom: 8,
		paddingRight: 16,
		paddingLeft: 16,
		fontSize: 16,
		fontWeight: 'bold',
		boxShadow: theme.shadows[5],
		width: '100%',
		marginBottom: 10,
		'&:hover': {
			color: theme.palette.common.white,
			backgroundColor: theme.palette.primary.main,
			boxShadow: theme.shadows[10],
		},
		[theme.breakpoints.down('xs')]: {
			margin: 15
		},
		order: 5
	},
	gridItemOne: {
		[theme.breakpoints.down('sm')]: {
			order: 1
		},
		[theme.breakpoints.down('xs')]: {
			order: 1
		},
	},
	gridItemTwo: {
		[theme.breakpoints.down('sm')]: {
			order: 2
		},
		[theme.breakpoints.down('xs')]: {
			order: 2
		},
	},
	gridItemThree: {
		[theme.breakpoints.down('sm')]: {
			order: 4
		},
		[theme.breakpoints.down('xs')]: {
			order: 3
		},
	},
	gridItemFour: {
		[theme.breakpoints.down('sm')]: {
			order: 3
		},
		[theme.breakpoints.down('xs')]: {
			order: 4
		},
	},
}))


const Filters = ({ brandNames, minPrice, maxPrice, setTopMenuOpen }) => {
	const getDefaultCheckboxes = () =>
		brandNames.map(name => ({
			name: name,
			checked: false,
		}))
	const classes = useStyles()
	const [brandsChecked, setBandsChecked] = useState(getDefaultCheckboxes())
	const [sortBy, setSortBy] = React.useState('lowToHigh')
	const [priceRange, setPriceRange] = React.useState([minPrice, maxPrice])

	const handleCheckBoxChange = (event) => {
		setBandsChecked(brandsChecked.map(brandChecked => brandChecked.name === event.target.name ? { ...brandChecked, checked: !brandChecked.checked} : brandChecked))
	}

	const handlePriceChange = (event, newValue) => {
		setPriceRange(newValue)
	}
	
	useEffect(() => {
		console.log('priceRange: ', priceRange)
	}, [priceRange]) 

	useEffect(() => {
		console.log('checkedItems: ', brandsChecked)
	}, [brandsChecked]) 
	useEffect(() => {
		console.log('sortBy: ', sortBy)
	}, [sortBy]) 

	return (
		<Grid container spacing={2}>
			<Grid item xs={12} sm={6} md={4} lg={12} xl={12} className={classes.gridItemOne}>
				<Card className={classes.card} style={{ height: '100%'}}>
					<div className={classes.cardActionArea} classes={classes.shadowsRoot}>
						<CardContent classes={{root: classes.cardContent}}>
							<Typography className={classes.cardName}>
								Sort by
							</Typography>
							<FormControl component="fieldset">
								<RadioGroup aria-label="sortBy" name="sortBy" value={sortBy} onChange={(event) => setSortBy(event.target.value) }>
									<FormControlLabel value="lowToHigh" control={<Radio color="primary"/>} label="Price (Low To Low)" classes={{ label: classes.formLabelsTexts }} />
									<FormControlLabel value="highToLow" control={<Radio color="primary"/>} label="Price (High To Low)" classes={{ label: classes.formLabelsTexts }} />
								</RadioGroup>
							</FormControl>
						</CardContent>
					</div>
				</Card>
			</Grid>
			<Grid item xs={12} sm={6} md={4} lg={12} xl={12} className={classes.gridItemTwo}>
				<Card className={classes.card} style={{ height: '100%'}}>
					<div className={classes.cardActionArea} classes={classes.shadowsRoot}>
						<CardContent classes={{root: classes.cardContent}}>
							<Typography className={classes.cardName}>
								Montly Price
							</Typography>
							<Slider
								classes={{ track: classes.sliderTrack, thumb: classes.sliderThumb, rail: classes.sliderRail }}
								value={priceRange}
								min={minPrice}
								max={maxPrice}
								onChange={handlePriceChange}
								valueLabelDisplay="off"
								aria-labelledby="price-range-slider"
							/>
							<Typography className={classes.priceRangeText}>
								{priceRange[0]} € - {priceRange[1]} €
							</Typography>
						</CardContent>
					</div>
				</Card>
			</Grid>
			<Grid item xs={12} sm={6} md={4} lg={12} xl={12} className={classes.gridItemThree}>
				<Card className={classes.card} style={{ height: '100%'}}>
					<div className={classes.cardActionArea} classes={classes.shadowsRoot}>
						<CardContent classes={{root: classes.cardContent}}>
							<Typography className={classes.cardName}>
								Minimum rental period
							</Typography>
							<div className={classes.minimumRentContainer}>
								<Typography className={classes.formLabelsTexts}>
									1
								</Typography>
								<Typography className={classes.formLabelsTexts} style={{ marginLeft: 16 }}>
									3
								</Typography>
								<Typography className={classes.formLabelsTexts} style={{ marginLeft: 19 }}>
									6
								</Typography>
								<Typography className={classes.formLabelsTexts}>
									12
								</Typography>
							</div>
							<Slider
								defaultValue={1}
								classes={{ track: classes.sliderTrackNone, thumb: classes.sliderThumb, rail: classes.sliderRail, mark: classes.sliderMark, markActive: classes.slideMarkActive }}
								aria-labelledby="discrete-slider"
								valueLabelDisplay="off"
								step={1}
								marks
								min={1}
								max={4}
							/>
						</CardContent>
					</div>
				</Card>
			</Grid>
			<Grid item xs={12} sm={6} md={4} lg={12} xl={12} className={classes.gridItemFour}>
				<Card className={classes.card} style={{ height: '100%'}}>
					<div className={classes.cardActionArea} classes={classes.shadowsRoot}>
						<CardContent classes={{root: classes.cardContent}}>
							<Typography className={classes.cardName}>
								Brands
							</Typography>
							{brandNames.map(brand => (
								<FormControlLabel
									key={brand}
									control={
										<Checkbox
											checked={brandsChecked[brand]}
											onChange={handleCheckBoxChange}
											name={brand}
											color="primary"
										/>
									}
									label={brand.slice(0,1).toUpperCase() + brand.slice(1, brand.length)}
									classes={{ label: classes.formLabelsTexts }}
								/>
							))}
						</CardContent>
					</div>
				</Card>
			</Grid>
			<Hidden smUp>
				<Button variant="contained" className={classes.buttonCloseTopMenu} onClick={() => setTopMenuOpen(false)}>Apply</Button>
			</Hidden>
		</Grid>
	)
}

export default Filters
