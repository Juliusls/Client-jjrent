import React from 'react'

import { makeStyles, Radio } from '@material-ui/core/'


const useStyles = makeStyles({
	container: {
		marginBottom: 20,
		display: 'flex',
		justifyContent: 'flex-start',
	},
	radioContainter: {
		width: 50,
		height: 50,
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
	},
	radioButton: {
		
	},
	icon: {
		height: 24,
		width: 24,
		borderRadius: 50,
		maxWidth: '100%',
		maxHeight: '100%',
	},
	checkedIcon: {
		maxWidth: '100%',
		maxHeight: '100%',
		height: 24,
		width: 24,
		borderRadius: 50,
		borderColor: 'white',
		border: 'solid',
		borderWidth: 4,
		boxShadow: '0 0 0 1px rgba(161, 22, 146, 1)',
	}
})

const ColorPicker = ({ variants, selectedColor, setSelectedColor }) => {
	const classes = useStyles()

	return (
		<div className={classes.container}>
			{variants.map(variant => (
				<div key={variant} className={classes.radioContainter}>
					<Radio
						checked={selectedColor === variant.color}
						onChange={(event) => setSelectedColor(event.target.value)}
						value={variant.color}
						classes={{ root: classes.radioButton}}
						name="radio-button-demo"
						icon={<div className={classes.icon} style={{ backgroundColor: variant.colorCode }}/>}
						checkedIcon={<div className={classes.checkedIcon} style={{ backgroundColor: variant.colorCode }}/>}
						inputProps={{ 'aria-label': 'A' }}
					/>
				</div>
			))}
		</div>
	)
}

export default ColorPicker
