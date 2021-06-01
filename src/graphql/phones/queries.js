import { gql } from '@apollo/client'

export const FIND_PHONE = gql`
  query findPhone($id: String!) {
    findPhone(id: $id) {
		id
		phoneName
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
			colorCode
			unitsInTheWarehouse
		}
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
			phoneName
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
				colorCode
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
			prices {
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
			prices {
				onePrice
				threePrice
				sixPrice
				twelvePrice
			}
			variants {
				color
				colorCode
				unitsInTheWarehouse
			}
			imageIds {
				imageName
				publicId
			}
		}
	}
`

