import React from 'react'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import { ListItemText, Divider } from '@material-ui/core'
import DashboardIcon from '@material-ui/icons/Dashboard'
import AddIcon from '@material-ui/icons/Add'

const ListItemLink = (props) => {
	return <ListItem button component="a" {...props} />
}

export const mainListItems = (
	<div>
		<ListItemLink href='/admin/dashboard'>
			<ListItemIcon>
				<DashboardIcon />
			</ListItemIcon>
			<ListItemText primary="Dashboard" />
		</ListItemLink>
		<Divider />
		<ListItemLink href='/admin/dashboard/addphone'>
			<ListItemIcon>
				<AddIcon />
			</ListItemIcon>
			<ListItemText primary="AddPhone" />
		</ListItemLink>

		<ListItemLink href='/admin/dashboard/addwatch'>
			<ListItemIcon>
				<AddIcon />
			</ListItemIcon>
			<ListItemText primary="AddWatch" />
		</ListItemLink>

		<ListItemLink href='/admin/dashboard/addlaptop'>
			<ListItemIcon>
				<AddIcon />
			</ListItemIcon>
			<ListItemText primary="AddLaptop" />
		</ListItemLink>
	</div>
)
