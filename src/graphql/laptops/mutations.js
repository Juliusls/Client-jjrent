import { gql } from '@apollo/client'

export const ADD_LAPTOP = gql`
	mutation addLaptop($input: LaptopInput!) {
		addLaptop(input: $input) {
			id
			laptopName
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
				unitsInTheWarehouse
			}
			imageIds {
				imageName
				publicId
			}
		}
    }
`