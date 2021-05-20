import { gql } from '@apollo/client'

export const ADD_WATCH = gql`
    mutation addWatch($input: WatchInput!) {
        addWatch(input: $input) {
			description
			name
			imageIds {
			  imageName
			  publicId
			}
		}
    }
`

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
			phoneSpecs {
				memory
				battery
				display
				storage
				processor
				dimensions
				rearCamera
				frontCamera
				operatingSystem
			}
			variants {
				color
				unitsInTheWarehouse
			}
		}
	}
`

