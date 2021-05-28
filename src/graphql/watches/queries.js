import { gql } from '@apollo/client'

export const FIND_WATCH = gql`
query findWatch($id: String!) {
	findWatch(id: $id) {
		id
		watchName
		description
		brand
		insideTheBox
		prices {
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

export const ALL_WATCHES = gql`
	query {
		allWatches {    
			id
			watchName
			description
			brand
			insideTheBox
			prices {
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

export const ALL_WATCHES_MINI = gql`
	query {
		allWatches {    
			id
			watchName
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

export const ALL_WATCHES_MIDI = gql`
	query {
		allWatches {    
			id
			watchName
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
				unitsInTheWarehouse
			}
			imageIds {
				imageName
				publicId
			}
		}
	}
`

