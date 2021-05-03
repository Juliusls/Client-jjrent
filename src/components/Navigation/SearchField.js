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
		boxShadow: theme.shadows[5],
		'&:hover': {
			color: theme.palette.primary.main,
			boxShadow: theme.shadows[10],
			borderColor: theme.palette.primary.main,
		}
	},
	inputStyles: {
		color: theme.palette.primary.main,
		fontWeight: 'bold',
		fontSize: 15,
		paddingLeft: 10,
	},
	noBorder: {
		border: 'none',
	},
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
			fullWidth
			InputProps={{
				className: classes.inputStyles,
				classes:{ notchedOutline: classes.noBorder }
			}}
		/>
	)
}

export default SearchField
