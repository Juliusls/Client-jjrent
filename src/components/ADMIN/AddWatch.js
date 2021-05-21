import React from 'react'
import { useHistory } from 'react-router-dom'
import { useMutation } from '@apollo/client'
import { Formik, Field, FieldArray } from 'formik'
import * as yup from 'yup'
import axios from 'axios'

import { TextField, CheckboxWithLabel, RadioGroup } from 'formik-material-ui'
import { makeStyles, Typography, Button, FormControl, FormGroup, FormControlLabel, IconButton, Radio } from '@material-ui/core'
import AddIcon from '@material-ui/icons/Add'
import RemoveIcon from '@material-ui/icons/Remove'

import { ADD_WATCH } from '../../graphql/mutations'
import config from '../../utils/config'
import UploadComponent from './UploadComponent'
import { watchInsideTheBox, watchBrands, watchTypes, watchCompatibility, prodcutPriceData } from '../../data'

const useStyles = makeStyles({
	priceContainer: {
		display: 'flex',
		flexDirection: 'row'
	},
	priceItem: {
		marginRight: 5
	},
	buttonSubmit: {
		marginTop: 50
	}
})

const initialValues = {
	watchName: '',
	description: '',
	brand: '',
	insideTheBox: [],
	onePrice: 0,
	threePrice: 0,
	sixPrice: 0,
	twelvePrice: 0,
	type: '',
	modelYear: 2020,
	batteryLife: '',
	connectivity: '',
	compatibility: '',
	buildMaterial: '',
	bandSize: '',
	waterResistance: '',
	wirelessAndLocation: '',
	specialFeatures: '',
	activityTracking: '',
	variants: [],
	files: []
}

const validationSchema = yup.object().shape({

})

const NewProductForm = ({ values, errors, touched, handleChange, handleBlur, handleSubmit, setFieldValue }) => {
	const classes = useStyles()

	return (
		<div>
			<div>
				<Typography variant='h4' style={{ textAlign: 'center', marginTop: 20 }}>Create a Watch</Typography>
				<form onSubmit={handleSubmit}>
					<Typography variant='h6'>Watch Name</Typography>
					<Field
						component={TextField}
						onChange={handleChange}
						onBlur={handleBlur}
						value={values.watchName}
						error={touched.watchName && Boolean(errors.watchName)}
						helperText={touched.watchName && errors.watchName}
						id="watchName"
						name="watchName"
						label="Watch Name"
						variant="outlined"
						type="text"
						fullWidth
					/>	
					<Typography variant='h6'>Description</Typography>
					<Field
						component={TextField}
						onChange={handleChange}
						onBlur={handleBlur}
						value={values.description}
						error={touched.description && Boolean(errors.description)}
						helperText={touched.description && errors.description}
						id="description"
						name="description"
						label="Description"
						variant="outlined"
						type="text"
						fullWidth
					/>
					<Typography variant='h6'>Brand</Typography>
					<Field component={RadioGroup} name="brand" row defaultValue='Apple'>
						{watchBrands.map(brand => 
							<FormControlLabel
								key={brand}
								value={brand}
								control={<Radio/>}
								label={brand}
							/>
						)}
					</Field>
					<FormControl component="fieldset">
						<Typography variant='subtitle1' style={{ marginBottom: 10 }}>Pricing</Typography>
						<div className={classes.priceContainer}>
							{prodcutPriceData.map(priceTerm => 
								<Field
									key={priceTerm.name}
									component={TextField}
									onChange={handleChange}
									onBlur={handleBlur}
									value={values.[priceTerm.name]}
									error={touched.[priceTerm.name]&& Boolean(errors.[priceTerm.name])}
									helperText={touched.[priceTerm.name] && errors.[priceTerm.name]}
									id={priceTerm.name}
									name={priceTerm.name}
									label={priceTerm.label}
									type="number"
									variant="outlined"
									fullWidth
									className={classes.priceItem}
								/>
							)}
						</div>
					</FormControl>
					<Typography variant='h6'>Type</Typography>
					<Field component={RadioGroup} name="type" row defaultValue='Smartwatch'>
						{watchTypes.map(type =>
							<FormControlLabel
								key={type}
								value={type}
								control={<Radio/>}
								label={type}
							/>
						)}
					</Field>
					<FormControl component="fieldset">
						<Typography variant='h6'>Inside The Box</Typography>
						{errors.insideTheBox && touched.insideTheBox && 
							<Typography variant='caption' style={{ color: '#f44336' }}>{errors.insideTheBox}</Typography>
						}
						<FormGroup row>
							{watchInsideTheBox.map(option =>
								<FormControlLabel
									key={option}
									control={
										<Field
											component={CheckboxWithLabel}
											id={option.toLowerCase()}
											type="checkbox"
											name="insideTheBox"
											value={option}
											Label={{ label: `${option}` }}
										/>
									}
								/>
							)}
						</FormGroup>
					</FormControl>
					<Typography variant='h6' >Model Year</Typography>
					<Field
						component={TextField}
						onChange={handleChange}
						onBlur={handleBlur}
						value={values.modelYear}
						error={touched.modelYear && Boolean(errors.modelYear)}
						helperText={touched.modelYear && errors.modelYear}
						id="modelYear"
						name="modelYear"
						label="Model Year"
						type="number"
						variant="outlined"
						fullWidth
					/>
					<Typography variant='h6' >Battery Life</Typography>
					<Field
						component={TextField}
						onChange={handleChange}
						onBlur={handleBlur}
						value={values.batteryLife}
						error={touched.batteryLife && Boolean(errors.batteryLife)}
						helperText={touched.batteryLife && errors.batteryLife}
						id="batteryLife"
						name="batteryLife"
						label="Battery Life"
						variant="outlined"
						type="text"
						fullWidth
					/>
					<Typography variant='h6'>Connectivity</Typography>
					<Field
						component={TextField}
						onChange={handleChange}
						onBlur={handleBlur}
						value={values.connectivity}
						error={touched.connectivity && Boolean(errors.connectivity)}
						helperText={touched.connectivity && errors.connectivity}
						id="connectivity"
						name="connectivity"
						label="Connectivity"
						variant="outlined"
						type="text"
						fullWidth
					/>
					<Typography variant='h6' >Compatibility</Typography>
					<Field component={RadioGroup} name="compatibility" row defaultValue='Android / iOS'>
						{watchCompatibility.map(comp => 
							<FormControlLabel
								key={comp}
								value={comp}
								control={<Radio/>}
								label={comp}
							/>
						)}
					</Field>
					<Typography variant='h6'>Build Material</Typography>
					<Field
						component={TextField}
						onChange={handleChange}
						onBlur={handleBlur}
						value={values.buildMaterial}
						error={touched.buildMaterial && Boolean(errors.buildMaterial)}
						helperText={touched.buildMaterial && errors.buildMaterial}
						id="buildMaterial"
						name="buildMaterial"
						label="Build Material"
						variant="outlined"
						type="text"
						fullWidth
					/>
					<Typography variant='h6'>Band Size</Typography>
					<Field
						component={TextField}
						onChange={handleChange}
						onBlur={handleBlur}
						value={values.bandSize}
						error={touched.bandSize && Boolean(errors.bandSize)}
						helperText={touched.bandSize && errors.bandSize}
						id="bandSize"
						name="bandSize"
						label="Band Size"
						variant="outlined"
						type="text"
						fullWidth
					/>
					<Typography variant='h6'>Water Resistance</Typography>
					<Field
						component={TextField}
						onChange={handleChange}
						onBlur={handleBlur}
						value={values.waterResistance}
						error={touched.waterResistance && Boolean(errors.waterResistance)}
						helperText={touched.waterResistance && errors.waterResistance}
						id="waterResistance"
						name="waterResistance"
						label="Water Resistance"
						variant="outlined"
						type="text"
						fullWidth
					/>
					<Typography variant='h6' >Wireless And Location</Typography>
					<Field
						component={TextField}
						onChange={handleChange}
						onBlur={handleBlur}
						value={values.wirelessAndLocation}
						error={touched.wirelessAndLocation && Boolean(errors.wirelessAndLocation)}
						helperText={touched.wirelessAndLocation && errors.wirelessAndLocation}
						id="wirelessAndLocation"
						name="wirelessAndLocation"
						label="Wireless And Location"
						variant="outlined"
						type="text"
						fullWidth
					/>
					<Typography variant='h6' >Special Features</Typography>
					<Typography variant='body2' style={{ marginBottom: 10 }}>List of features</Typography>
					<Field
						component={TextField}
						onChange={handleChange}
						onBlur={handleBlur}
						value={values.specialFeatures}
						error={touched.specialFeatures && Boolean(errors.specialFeatures)}
						helperText={touched.specialFeatures && errors.specialFeatures}
						id="specialFeatures"
						name="specialFeatures"
						label="Special Features"
						variant="outlined"
						type="text"
						fullWidth
					/>
					<Typography variant='h6' >Activity Tracking</Typography>
					<Typography variant='body2' style={{ marginBottom: 10 }}>List of activity tracing features</Typography>
					<Field
						component={TextField}
						onChange={handleChange}
						onBlur={handleBlur}
						value={values.activityTracking}
						error={touched.activityTracking && Boolean(errors.activityTracking)}
						helperText={touched.activityTracking && errors.activityTracking}
						id="activityTracking"
						name="activityTracking"
						label="Activity Tracking"
						variant="outlined"
						type="text"
						fullWidth
					/>
					<Typography variant='h6' >Color Variants</Typography>
					<Typography variant='body2' style={{ marginBottom: 10 }}>Color name and units in the warehouse</Typography>
					<FieldArray
						name="variants"
						render={({ pop, push }) => (
							<div>
								{values.variants.map((variant, index) => (
									<div key={index}>
										<Field
											component={TextField}
											variant="outlined"
											name={`variants.${index}.color`}
											type="text"
											id={`variantInput-${index}.color`}
											multiline
											fullWidth											
										/>
										<Field
											component={TextField}
											variant="outlined"
											name={`variants.${index}.unitsInTheWarehouse`}
											type="number"
											id={`variantInput-${index}.unitsInTheWarehouse`}
											multiline
											fullWidth										
										/>
										{errors.variants &&	errors.variants[index] && touched.variants && touched.variants[index]}
									</div>
								))
								}
								<IconButton id='addColorVarianttButton' color="primary" size='small'  component="span" onClick={() => push({ color: '', unitsInTheWarehouse: 0 })}>
									<AddIcon />
								</IconButton>
								<IconButton color="primary" aria-label="upload picture" size='small' component="span" onClick={pop}>
									<RemoveIcon />
								</IconButton>
							</div>
						)}
					/>
					<Typography variant='h6'>Images</Typography>
					<Typography variant='body1' style={{ marginBottom: 20}}>Image formats:</Typography>
					<Typography variant='body1' >Main thumbs and images:</Typography>
					<Typography variant='body2'>name_color_size_imageType.png</Typography>
					<Typography variant='body2'>applewatch6_spacegrey_thumb_main.png</Typography>
					<Typography variant='body2'>applewatch6_spacegrey_image_main.png</Typography>
					<Typography variant='body1' style={{ marginTop: 10 }}>Other thumbs and images:</Typography>
					<Typography variant='body2'>name_color_size.png</Typography>
					<Typography variant='body2'>applewatch6_spacegrey_thumb.png</Typography>
					<Typography variant='body2'>applewatch6_spacegrey_image.png</Typography>
					<div  >
						{errors.files && touched.files && 
								<Typography variant='caption' style={{ color: '#f44336' }}>{errors.files}</Typography>
						}
					</div>
					<UploadComponent setFieldValue={setFieldValue} values={values} />
					<Button color="primary" variant="contained" type="submit" className={classes.buttonSubmit}>
                        Submit
					</Button>
				</form>
			</div>
		</div>
	)
}

const AddProduct = () => {
	const history = useHistory()
	const [ addWatch ]  = useMutation(ADD_WATCH)

	const handleSubmit = async (values) => {


		try {
			const formData = new FormData()

			const imagesForDbArray = Promise.all(values.files.map(async file => {
				formData.append('file', file)
				formData.append('upload_preset', config.REACT_APP_UPLOAD_PRESET)
	
				const response = await axios.post(
					`https://api.cloudinary.com/v1_1/${config.REACT_APP_CLOUD_NAME}/image/upload`, 
					formData
				)
				const newImage = {
					imageName: response.data.original_filename,
					publicId: response.data.public_id
				}

				return newImage
			}))

			const imagesArray = await imagesForDbArray

			let variantsToNumbers = values.variants.map(variant => (
				{
					color: variant.color,
					unitsInTheWarehouse: parseInt(variant.unitsInTheWarehouse) 
				}
			))
		
			const inputconst = { 
				watchName: values.watchName, 
				description: values.description,
				brand: values.brand,
				insideTheBox: values.insideTheBox,
				onePrice: values.onePrice,
				threePrice: values.threePrice,
				sixPrice: values.sixPrice,
				twelvePrice: values.twelvePrice,
				type: values.type,
				modelYear: values.modelYear,
				batteryLife: values.batteryLife,
				connectivity: values.connectivity,
				compatibility: values.compatibility,
				buildMaterial: values.buildMaterial,
				bandSize: values.bandSize,
				waterResistance: values.waterResistance,
				wirelessAndLocation: values.wirelessAndLocation,
				specialFeatures: values.specialFeatures,
				activityTracking: values.activityTracking,
				variants: variantsToNumbers,
				imageIds: imagesArray 
			}

			await addWatch({ variables: { input: inputconst } })
			history.push('/admin/')

		} catch (error) {
			console.log('error')
		}
		
	}

	return (
		<div>
			<Formik
				initialValues={initialValues}
				validationSchema={validationSchema}
				onSubmit={handleSubmit}
			>
				{({ values, errors, touched, handleChange, handleBlur, handleSubmit, setFieldValue }) => 
					<NewProductForm 
						values={values}
						errors={errors}
						touched={touched}
						handleChange={handleChange}
						handleBlur={handleBlur}
						handleSubmit={handleSubmit}
						setFieldValue={setFieldValue}
					/>}
			</Formik>
		</div>
	)
}

export default AddProduct