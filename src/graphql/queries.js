import { gql } from '@apollo/client'

export const ALL_PHONES = gql`
	query {
		allPhones  {
			id
			phoneName
			description
			brand
			insideTheBox
			phonePrices {
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
			imageIds {
				imageName
				publicId
			}
		}
	}
`

export const ALL_PHONES_MINI = gql`
	query {
		allPhones  {
			id
			phoneName
			description
			phonePrices {
				twelvePrice
			}
			imageIds {
				imageName
				publicId
			}
		}
	}
`

export const ALL_PHONES_MIDI = gql`
	query {
		allPhones  {
			id
			phoneName
			description
			brand
			phonePrices {
				onePrice
				threePrice
				sixPrice
				twelvePrice
			}
			variants {
				color
				unitsInTheWarehouse
			}
			imageIds {
				imageName
				publicId
			}
		}
	}
`

