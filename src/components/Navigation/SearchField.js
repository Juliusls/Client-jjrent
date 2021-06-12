import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { ClickAwayListener, TextField, makeStyles, List, ListItemText, ListItem, Typography } from '@material-ui/core'
import { useQuery } from '@apollo/client'
import { ALL_LAPTOPS_MINI } from '../../graphql/laptops/queries'
import { ALL_PHONES_MINI } from '../../graphql/phones/queries'
import { ALL_WATCHES_MINI } from '../../graphql/watches/queries'
import config from '../../utils/config'
import { Image } from 'cloudinary-react'

// import SearchBar from 'material-ui-search-bar'



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
	thumbsContainer: {
		minWidth: 50,
		height: 50,
		display: 'flex',
		justifyContent: 'center'
	},
	thumbs: {
		objectFit: 'contain',
		height: 35,
		maxWidth: 35,
		margin: 'auto',
	},
	listComponent: {
		backgroundColor: theme.palette.grey[200],
		marginTop: 16,
		borderRadius: 15,
		maxHeight: '50vh',
		overflow: 'auto',
		boxShadow: theme.shadows[5],
		[theme.breakpoints.down('md')]: {
			maxHeight: '40vh',
		},
	},
	listItemRoot: {
		'&:hover': {
			backgroundColor: theme.palette.grey[300],
		}
	},
	listItemText: {
		color: theme.palette.common.black,
		marginLeft: 10,
		fontWeight: 'bold',
		overflow: 'hidden',
		lineClamp: 1,
		display: 'box',
		boxOrient: 'vertical',
		fontSize: 16,
	},
}))

const SearchField = ({ setSearchFieldIsOpen }) => {
	const classes = useStyles()
	const [searchQuery, setSearchQuery] = useState('')
	const laptops = useQuery(ALL_LAPTOPS_MINI)
	const phones = useQuery(ALL_PHONES_MINI)
	const watches = useQuery(ALL_WATCHES_MINI)
	
	if (laptops.loading || phones.loading || watches.loading ) return null

	const handleSearch = event => {
		setSearchQuery(event.target.value)
	}

	let newData = [ ...phones.data.allPhones, ...laptops.data.allLaptops,  ...watches.data.allWatches ]

	newData = newData.filter(item => item.name.toLowerCase().includes(searchQuery.toLowerCase()))

	return (
		<ClickAwayListener onClickAway={() => setSearchFieldIsOpen(false)}>
			<div>
				<TextField
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
				/>
				<List component="nav" className={classes.listComponent}>
					{newData.length > 0 
						? newData.map(laptop => 
							<ListItem button component={ Link } key={laptop.id} to={`/${laptop.category}/${laptop.id}`} onClick={() => setSearchFieldIsOpen(false)} className={classes.listItem}  classes={{ root: classes.listItemRoot }}>
								<div className={classes.thumbsContainer}>
									<Image publicId={laptop.imageIds.filter(id => id.imageName.includes('thumb_1'))[0].publicId} cloudName={config.REACT_APP_CLOUD_NAME} className={classes.thumbs} />
								</div>
								<ListItemText 
									disableTypography
									primary={<Typography type="body2" className={classes.listItemText}>{laptop.name}</Typography>}
								/>
							</ListItem>)
						: 
						<ListItem  onClick={() => setSearchFieldIsOpen(false)} className={classes.listItem}  classes={{ root: classes.listItemRoot }}>
							<ListItemText 
								disableTypography
								primary={<Typography type="body2" className={classes.listItemText}>We couldn’t find anything for that.</Typography>}
							/>
						</ListItem>
					}
				</List>
			</div>
		</ClickAwayListener>
	)
}

export default SearchField