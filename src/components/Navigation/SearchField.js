import React from 'react'
// import { Link } from 'react-router-dom'
// import { Image } from 'cloudinary-react'
import { makeStyles } from '@material-ui/core/styles'

import { TextField, ClickAwayListener } from '@material-ui/core'
import Autocomplete from '@material-ui/lab/Autocomplete'
import { useQuery } from '@apollo/client'
import { ALL_LAPTOPS } from '../../graphql/laptops/queries'
import { Image } from 'cloudinary-react'


import config from '../../utils/config'
import { Fragment } from 'react'



const useStyles = makeStyles(theme => ({
	searchField: {
		color: theme.palette.primary.main,
		backgroundColor: theme.palette.common.white,
		borderRadius: 25,
		top: 0,
		left: 0,
		fontWeight: 'bold',
		borderColor: theme.palette.common.white,
		boxShadow: theme.shadows[5],
		marginTop: 15,
		'&:hover': {
			color: theme.palette.primary.main,
			boxShadow: theme.shadows[10],
			borderColor: theme.palette.primary.main,
		}
	},
	inputStyles: {
		color: theme.palette.primary.main,
		fontWeight: 'bold',
		fontSize: 16,
		paddingLeft: 10
	},
	noBorder: {
		border: 'none',
	},
	thumbs: {
		height: 35,
		width: 35,
		margin: 5
	}
}))

const SearchField = ({ setSearchFieldIsOpen }) => {
	const classes = useStyles()
	// const [searchQuery, setSearchQuery] = useState('')
	const devices = useQuery(ALL_LAPTOPS)
	
	if (devices.loading) return null

	console.log(devices.data.allLaptops)

	// const handleSearch = event => {
	// 	setSearchQuery(event.target.value)
	// }

	// useEffect(() => {
	// 	if (searchQuery.length > 0) {
	// 		console.log('longer')
	// 		setSearchMenuIsOpen(true)
	// 	} else {
	// 		console.log('shorter')
	// 		setSearchMenuIsOpen(false)
	// 	}
	// }, [searchQuery])


	return (
		<ClickAwayListener onClickAway={() => setSearchFieldIsOpen(false)}>
			<Autocomplete
				id="combo-box-demo"
				options={devices.data.allLaptops}
				getOptionLabel={(option) => option.laptopName}
				renderOption={(option) => (
					<Fragment>
						<span
							style={{ cursor: 'pointer' }}
							onClick={() => {
								window.location.href = option.link
							}}
						>
							<Image publicId={option.imageIds.filter(id => id.imageName.includes('thumb_1'))[0].publicId} cloudName={config.REACT_APP_CLOUD_NAME} className={classes.thumbs} />
							Clickable link {option.laptopName}
						</span>
						{/* <div onClick={() => console.log('worsk')}>
							<Image publicId={option.imageIds.filter(id => id.imageName.includes('thumb_1'))[0].publicId} cloudName={config.REACT_APP_CLOUD_NAME} className={classes.thumbs} />
							<Typography variant='body2' style={{ marginLeft: 10 }}>{option.laptopName}</Typography>
						</div> */}
					</Fragment>
				)}
				renderInput={(params) => <TextField {...params} label="Search" variant="outlined" autoFocus className={classes.searchField} fullWidth />}
			/>
			{/* <Autocomplete
				id="search"
				freeSolo
				options={devices.data.allLaptops}
				// renderOption={(option) => {
				// 	return (
				// 		<div>
				// 			{option.laptopName}
				// 			<ListItem button>
				// 				<ListItemAvatar>
				// 					<Image publicId={option.imageIds.filter(id => id.imageName.includes('thumb_1'))[0].publicId} cloudName={config.REACT_APP_CLOUD_NAME} className={classes.thumbs} />
				// 				</ListItemAvatar>
				// 				<ListItemText primary={option.laptopName} />
				// 			</ListItem>
				// 		</div>
				// 	)
				// }}
				renderOption={option => {
					return (
						<div>
							{option.laptopName}
							<ListItem button>
								<ListItemAvatar>
									<Image publicId={option.imageIds.filter(id => id.imageName.includes('thumb_1'))[0].publicId} cloudName={config.REACT_APP_CLOUD_NAME} className={classes.thumbs} />
								</ListItemAvatar>
								<ListItemText primary={option.laptopName} />
							</ListItem>
						</div>
					)
				}}
				renderInput={params => 
					<TextField {...params} label="Search" variant="outlined" autoFocus className={classes.searchField} fullWidth />
				}
			/> */}
			{/* <TextField
				id="search"
				type="search"
				className={classes.searchField}
				placeholder='Search'
				variant="outlined"
				autoFocus
				onChange={handleSearch}
				value={searchQuery}
				fullWidth
				InputProps={{
					className: classes.inputStyles,
					classes: { notchedOutline: classes.noBorder }
				}}
			/> */}
		</ClickAwayListener>
	)
}

export default SearchField