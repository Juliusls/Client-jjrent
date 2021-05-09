import React from 'react'

import { makeStyles, Typography, Slider } from '@material-ui/core/'

const useStyles = makeStyles(theme => ({
	minimumRentContainer: {
		display: 'flex',
		justifyContent: 'space-between'
	},
	formLabelsTexts: {
		color: theme.palette.common.black,
		fontSize: 18,
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
}))


const MinumumRental = () => {
	const classes = useStyles()

	return (
		<div>
			<div className={classes.minimumRentContainer}>
				<Typography className={classes.formLabelsTexts}>
					1+
				</Typography>
				<Typography className={classes.formLabelsTexts} style={{ marginLeft: 16 }}>
					3+
				</Typography>
				<Typography className={classes.formLabelsTexts} style={{ marginLeft: 19 }}>
					6+
				</Typography>
				<Typography className={classes.formLabelsTexts}>
					12+
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
		</div>
	)
}

export default MinumumRental
