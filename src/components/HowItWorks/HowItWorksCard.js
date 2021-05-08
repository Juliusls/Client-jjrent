import React from 'react'

import { makeStyles, Card, CardContent, Typography } from '@material-ui/core/'

const useStyles = makeStyles(theme => ({
	card: {
		borderRadius: 15,
		backgroundColor: theme.palette.common.white,
		boxShadow: '0px 0px 10px 2px rgba(199, 115, 190, 1),0px 0px 10px 2px rgba(199, 115, 190, 1),0px 0px 10px 2px rgba(199, 115, 190, 1)'
	},
	cardActionArea: {
		padding: 15,
		display: 'flex',
		justifyContent: 'space-between',
		alignContent: 'flex-start',
		alignItems: 'flex-start',
		flexDirection: 'column'
	},
	cardContent: {
		padding: 0,
		marginTop: 'auto',
	},
	cardName: {
		color: theme.palette.common.black,
		fontSize: 28,
		fontWeight: 'bold',
		letterSpacing: 'normal',
		minHeight: 48,
	},
	cardDesc: {
		color: theme.palette.common.black,
		fontSize: 18,
		letterSpacing: 'normal',
		minHeight: 60
	},
}))

const HowItWorksCard = ({ name, desc }) => {
	const classes = useStyles()

	return (
		<Card className={classes.card} style={{ height: '100%'}}>
			<div className={classes.cardActionArea} classes={classes.shadowsRoot}>
				<CardContent classes={{root: classes.cardContent}}>
					<Typography className={classes.cardName}>
						{name}
					</Typography>
					<Typography className={classes.cardDesc}>
						{desc}
					</Typography>
				</CardContent>
			</div>
		</Card>
	)
}

export default HowItWorksCard