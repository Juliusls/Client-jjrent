import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'


import { ThemeProvider } from '@material-ui/styles'
import theme from './theme'

import { ApolloClient, ApolloProvider, HttpLink, InMemoryCache } from '@apollo/client'

const client = new ApolloClient({
	cache: new InMemoryCache({
		addTypename: false
	}),
	link: new HttpLink({
		uri: 'http://localhost:4000',
	})
})


ReactDOM.render(
	<ApolloProvider client={client}>
		<ThemeProvider theme={theme}>
			<App />
		</ThemeProvider>
	</ApolloProvider>,
	document.getElementById('root')
)


