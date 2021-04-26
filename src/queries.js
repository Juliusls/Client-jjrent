import { gql } from '@apollo/client'

export const ALL_PHONES = gql`
	query {
		allPhones  {
			id
			name
			description
			brand
			insideTheBox
			prices {
				onePrice
				threePrice
				sixPrice
				twelvePrice
			}
			underTheHood {
				sim
				memory
				battery
				display
				storage
				processor
				dimensions
				rearCamera
				frontCamera
				opearatingSystem
			}
			variants {
				color
				unitsInTheWarehouse
			}
		}
}
`