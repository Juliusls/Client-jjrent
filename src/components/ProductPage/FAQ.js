import React, { useState } from 'react'

import { makeStyles, Card, Typography, Accordion, AccordionSummary, AccordionDetails } from '@material-ui/core'

import AddIcon from '@material-ui/icons/Add'
import RemoveIcon from '@material-ui/icons/Remove'

const useStyles = makeStyles(theme => ({
	card: {
		padding: 24,
		borderRadius: 15,
		backgroundColor: theme.palette.common.white,
		boxShadow: theme.shadows[5],
		maxWidth: '100%',
		marginTop: 20,
	},
	cardName: {
		color: theme.palette.primary.main,
		fontSize: 24,
		letterSpacing: 'normal',
		fontWeight: theme.typography.fontWeightBold,
		marginBottom: 16
	},
	accordionClass: {
		boxShadow: 'none',
		'&.MuiAccordion-root:before': {
			display: 'none'
		}
	},
	accordionSummary: {
		padding: 0
	},
	accordionDetails: {
		padding: 0,
		marginRight: 40
	},
	questionText: {
		fontSize: 18,
		fontWeight: 'bold',
		color: theme.palette.common.black
	},
	answerText: {
		fontSize: 18,
		color: theme.palette.grey[800]
	},
}))

const QandA = () => {
	const classes = useStyles()
	const [expanded, setExpanded] = useState('panel1')

	const handleChange = (panel) => (event, newExpanded) => {
		setExpanded(newExpanded ? panel : false)
	}
	return (
		<Card className={classes.card}>
			<Typography className={classes.cardName}>
				Frequently asked questions
			</Typography>

			<Accordion square expanded={expanded === 'panel1'} onChange={handleChange('panel1')} classes={{ root: classes.accordionClass }}>
				<AccordionSummary 
					id="panel1d-header"
					classes={{ root: classes.accordionSummary}}
					expandIcon={expanded === 'panel1'?<RemoveIcon/>:<AddIcon />}
				>
					<Typography className={classes.questionText}>What condition are the products in?</Typography>
				</AccordionSummary>
				<AccordionDetails classes={{ root: classes.accordionDetails }}>
					<Typography className={classes.answerText}>
						Grover rents new and as good as new products. Before products are rented out again, they go through a detailed quality check and multi-stage processing, so that each device rented from Grover arrives in flawless condition. If your device isn’t as expected, our customer service is happy to help. Learn more about our Great Condition Promise.
					</Typography>
				</AccordionDetails>
			</Accordion>

			<Accordion square expanded={expanded === 'panel2'} onChange={handleChange('panel2')} classes={{ root: classes.accordionClass }}>
				<AccordionSummary 
					id="panel2d-header"
					classes={{ root: classes.accordionSummary}}
					expandIcon={expanded === 'panel2'?<RemoveIcon/>:<AddIcon />}
				>						
					<Typography className={classes.questionText}>When does the rent begin and end?</Typography>
				</AccordionSummary>
				<AccordionDetails classes={{ root: classes.accordionDetails }}>
					<Typography className={classes.answerText}>
						The first monthly rental payment is charged when ordering, but the rental period does not officially start until you receive your product. The delivery date determines the recurring monthly payment date. If you fall in love and want to keep your product longer than the minimum rental period, you can extend your rental plan in your customer account at any time to reduce the monthly payment. At the end of the minimum rental period, you can keep renting on a monthly basis for the same price or cancel your subscription by returning your device for free.
					</Typography>
				</AccordionDetails>
			</Accordion>

			<Accordion square expanded={expanded === 'panel3'} onChange={handleChange('panel3')} classes={{ root: classes.accordionClass }}>
				<AccordionSummary 
					id="panel3d-header"
					classes={{ root: classes.accordionSummary}}
					expandIcon={expanded === 'panel3'?<RemoveIcon/>:<AddIcon />}
				>
					<Typography className={classes.questionText}>What if my device gets damaged during the rental period?</Typography>
				</AccordionSummary>
				<AccordionDetails classes={{ root: classes.accordionDetails }}>
					<Typography className={classes.answerText}>
						If something happens during your rental, Grover Care is there for you. We pay for 90% of the repair costs for damages of all kinds, including display breakage, water damage, and technical defects. Of course there are no charges for device errors from the manufacturer. Learn more about Grover Care
					</Typography>
				</AccordionDetails>
			</Accordion>

			<Accordion square expanded={expanded === 'panel4'} onChange={handleChange('panel4')} classes={{ root: classes.accordionClass }}>
				<AccordionSummary 
					id="panel4d-header"
					classes={{ root: classes.accordionSummary}}
					expandIcon={expanded === 'panel4'?<RemoveIcon/>:<AddIcon />}
				>
					<Typography className={classes.questionText}>Do I have to worry about signs of use?</Typography>
				</AccordionSummary>
				<AccordionDetails classes={{ root: classes.accordionDetails }}>
					<Typography className={classes.answerText}>
						Don’t worry, we want you to enjoy your products as though they were yours. Small scratches and normal signs of use will be cleaned after return for free. In case of severe signs of wear, such as display breakage, Grover Care covers 90% of the repair costs. Here youll find example photos of normal signs of use that we repair for free and also photos of more severe damage where youd have to pay 10% of the repair cost.
					</Typography>
				</AccordionDetails>
			</Accordion>

			<Accordion square expanded={expanded === 'panel5'} onChange={handleChange('panel5')} classes={{ root: classes.accordionClass }}>
				<AccordionSummary 
					id="panel5d-header"
					classes={{ root: classes.accordionSummary}}
					expandIcon={expanded === 'panel5'?<RemoveIcon/>:<AddIcon />}
				>
					<Typography className={classes.questionText}>Can I also buy a product Im renting?</Typography>
				</AccordionSummary>
				<AccordionDetails classes={{ root: classes.accordionDetails }}>
					<Typography className={classes.answerText}>
						Yes. Just keep renting until you can keep it forever for one symbolic Euro. Or buy the product earlier by paying off all your monthly payments at once. To see how many months you would need to rent until it is paid off, you can put your desired product with your rental plan of choice in the rent bag, click Subscribe, click Continue, and hover over Purchase option
					</Typography>
				</AccordionDetails>
			</Accordion>

		</Card>
	)
}

export default QandA
