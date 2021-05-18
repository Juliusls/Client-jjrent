import React from 'react'
import { makeStyles } from '@material-ui/core/styles'

import { TextField, ClickAwayListener } from '@material-ui/core'

const useStyles = makeStyles(theme => ({
	searchField: {
		color: theme.palette.primary.main,
		backgroundColor: theme.palette.common.white,
		borderRadius: 25,
		position: 'relative',
		top: 0,
		left: 0,
		fontWeight: 'bold',
		borderColor: theme.palette.primary.main,
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
}))

const SearchField = ({ setSearchFieldIsOpen }) => {
	const classes = useStyles()

	return (
		<ClickAwayListener onClickAway={() => setSearchFieldIsOpen(false)}>
			<TextField
				id="outlined-search"
				type="search"
				className={classes.searchField}
				placeholder='Search'
				variant="outlined"
				// ref={searchInputRef}
				autoFocus
				fullWidth
				InputProps={{
					className: classes.inputStyles,
					classes:{ notchedOutline: classes.noBorder }
				}}
			/>
		</ClickAwayListener>

	)
}

export default SearchField
