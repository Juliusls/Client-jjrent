import { gql } from '@apollo/client'


export const FIND_LAPTOP = gql`
	query findLaptop($id: String!) {
		findLaptop(id: $id) {
			id
			name
			category
			description
			brand
			insideTheBox
			prices {
				onePrice
				threePrice
				sixPrice
				twelvePrice
			}
			laptopSpecs {
				model
				memory
				display
				storage
				graphics
				processor
				dimensions
				operatingSystem
				keyboardLanguage
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

export const ALL_LAPTOPS = gql`
	query {
		allLaptops {
			id
			name
			category
			description
			brand
			insideTheBox
			prices {
				onePrice
				threePrice
				sixPrice
				twelvePrice
			}
			laptopSpecs {
				model
				memory
				display
				storage
				graphics
				processor
				dimensions
				operatingSystem
				keyboardLanguage
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

export const ALL_LAPTOPS_MINI = gql`
	query {
		allLaptops {
			id
			name
			category
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


export const ALL_LAPTOPS_MIDI = gql`
	query {
		allLaptops {
			id
			name
			category
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