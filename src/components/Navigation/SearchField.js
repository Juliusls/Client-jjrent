import React from 'react'
import { makeStyles } from '@material-ui/core/styles'

import { TextField } from '@material-ui/core'

const useStyles = makeStyles(theme => ({
	searchField: {
		color: theme.palette.primary.main,
		backgroundColor: theme.palette.common.white,
		borderRadius: 25,
		fontWeight: 'bold',
		borderColor: theme.palette.primary.main,
		'&:hover': {
			color: theme.palette.primary.main,
			boxShadow: 'none',
			borderColor: theme.palette.primary.main,
		}
	},
	inputStyles: {
		color: theme.palette.primary.main,
	}
}))

const SearchField = () => {
	const classes = useStyles()
	return (
		<TextField
			id="outlined-search"
			type="search"
			className={classes.searchField}
			placeholder='Search'
			variant="outlined"
			InputProps={{
				className: classes.inputStyles,
			}}
		/>
	)
}

export default SearchField
