import React, { useState } from 'react'

import { makeStyles, AppBar } from '@material-ui/core'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'

import AddWatch  from './AddWatch'
import AddLaptop  from './AddLaptop'

function TabPanel(props) {
	const { children, value, index, ...other } = props
  
	return (
		<div
			role="tabpanel"
			hidden={value !== index}
			id={`simple-tabpanel-${index}`}
			aria-labelledby={`simple-tab-${index}`}
			{...other}
		>
			{value === index && (
				<div p={3}>
					<div>{children}</div>
				</div>
			)}
		</div>
	)
}

const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1,
		backgroundColor: theme.palette.background.paper,
	},
}))

const AdminTabs = () => {
	const classes = useStyles()
	const [value, setValue] = useState(0)


	const handleChange = (event, newValue) => {
		setValue(newValue)
	}
 
	return (
		<div className={classes.root}>
			<AppBar position="static">
				<Tabs value={value} onChange={handleChange} aria-label="simple tabs example">
					<Tab label="Create a Watch" />
					<Tab label="Create a Laptop" />
				</Tabs>
			</AppBar>
			<TabPanel value={value} index={0}>
				<AddWatch />
			</TabPanel>
			<TabPanel value={value} index={1}>
				<AddLaptop />
			</TabPanel>
		</div>
	)
}

export default AdminTabs
