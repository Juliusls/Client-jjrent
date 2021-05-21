import { gql } from '@apollo/client'

export const ADD_WATCH = gql`
    mutation addWatch($input: WatchInput!) {
        addWatch(input: $input) {
			id
			watchName
			description
			brand
			insideTheBox
			watchPrices {
				onePrice
				threePrice
				sixPrice
				twelvePrice
			}
			watchSpecs {
				type
				modelYear
				batteryLife
				connectivity
				compatibility
				buildMaterial
				bandSize
				waterResistance
				wirelessAndLocation
				specialFeatures
				activityTracking
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

export const ADD_LAPTOP = gql`
	mutation addLaptop($input: LaptopInput!) {
		addLaptop(input: $input) {
			id
			laptopName
			description
			brand
			insideTheBox
			laptopPrices {
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