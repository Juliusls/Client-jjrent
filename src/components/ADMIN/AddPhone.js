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

import { ADD_PHONE } from '../../graphql/phones/mutations'
import config from '../../utils/config'
import UploadComponent from './UploadComponent'
import { phoneInsideTheBox, phoneBrands, prodcutPriceData } from '../../data'

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
	phoneName: '',
	description: '',
	brand: '',
	onePrice: 0,
	threePrice: 0,
	sixPrice: 0,
	twelvePrice: 0,
	insideTheBox: [],
	sim: '',
	memory: 0,
	battery: 0,
	display: '',
	storage: 0,
	processor: '',
	dimensions: '',
	rearCamera: '',
	frontCamera: '',
	operatingSystem: '',
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
				<Typography variant='h4' style={{ textAlign: 'center', marginTop: 20 }}>Create a Phone</Typography>
				<form onSubmit={handleSubmit}>
					<Typography variant='h6'>Phone Name</Typography>
					<Field
						component={TextField}
						onChange={handleChange}
						onBlur={handleBlur}
						value={values.phoneName}
						error={touched.phoneName && Boolean(errors.phoneName)}
						helperText={touched.phoneName && errors.phoneName}
						id="phoneName"
						name="phoneName"
						label="Phone Name"
						variant="outlined"
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
						fullWidth
					/>
					<Typography variant='h6'>Brand</Typography>
					<Field component={RadioGroup} name="brand" row defaultValue='Apple'>
						{phoneBrands.map(brand => 
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
									value={values[priceTerm.name]}
									error={touched[priceTerm.name]&& Boolean(errors[priceTerm.name])}
									helperText={touched[priceTerm.name] && errors[priceTerm.name]}
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
					<Typography variant='h6'>Sim</Typography>
					<Field
						component={TextField}
						onChange={handleChange}
						onBlur={handleBlur}
						value={values.sim}
						error={touched.sim && Boolean(errors.sim)}
						helperText={touched.sim && errors.sim}
						id="sim"
						name="sim"
						label="Sim"
						variant="outlined"
						type="text"
						fullWidth
					/>
					<FormControl component="fieldset">
						<Typography variant='h6'>Inside The Box</Typography>
						{errors.insideTheBox && touched.insideTheBox && 
							<Typography variant='caption' style={{ color: '#f44336' }}>{errors.insideTheBox}</Typography>
						}
						<FormGroup row>
							{phoneInsideTheBox.map(option =>
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
					<Typography variant='h6'>Memory, GB</Typography>
					<Field
						component={TextField}
						onChange={handleChange}
						onBlur={handleBlur}
						value={values.memory}
						error={touched.memory && Boolean(errors.memory)}
						helperText={touched.memory && errors.memory}
						id="memory"
						name="memory"
						label="Memory"
						variant="outlined"
						type="number"
						fullWidth
					/>
					<Typography variant='h6'>Battery, mAh</Typography>
					<Field
						component={TextField}
						onChange={handleChange}
						onBlur={handleBlur}
						value={values.battery}
						error={touched.battery && Boolean(errors.battery)}
						helperText={touched.battery && errors.battery}
						id="battery"
						name="battery"
						label="Battery"
						variant="outlined"
						type="number"
						fullWidth
					/>
					<Typography variant='h6'>Display</Typography>
					<Field
						component={TextField}
						onChange={handleChange}
						onBlur={handleBlur}
						value={values.display}
						error={touched.display && Boolean(errors.display)}
						helperText={touched.display && errors.display}
						id="display"
						name="display"
						label="Display"
						variant="outlined"
						type="text"
						fullWidth
					/>
					<Typography variant='h6'>Storage, GB</Typography>
					<Field
						component={TextField}
						onChange={handleChange}
						onBlur={handleBlur}
						value={values.storage}
						error={touched.storage && Boolean(errors.storage)}
						helperText={touched.storage && errors.storage}
						id="storage"
						name="storage"
						label="Storage"
						variant="outlined"
						type="number"
						fullWidth
					/>
					<Typography variant='h6'>Processor</Typography>
					<Field
						component={TextField}
						onChange={handleChange}
						onBlur={handleBlur}
						value={values.processor}
						error={touched.processor && Boolean(errors.processor)}
						helperText={touched.processor && errors.processor}
						id="processor"
						name="processor"
						label="Processor"
						variant="outlined"
						type="text"
						fullWidth
					/>
					<Typography variant='h6'>Dimensions</Typography>
					<Typography variant='body2'>Format: 30.41 x 21.24 x 1.56 cm - 1.4 kg</Typography>
					<Field
						component={TextField}
						onChange={handleChange}
						onBlur={handleBlur}
						value={values.dimensions}
						error={touched.dimensions && Boolean(errors.dimensions)}
						helperText={touched.dimensions && errors.dimensions}
						id="dimensions"
						name="dimensions"
						label="Dimensions"
						variant="outlined"
						type="text"
						fullWidth
					/>
					<Typography variant='h6'>Rear Camera</Typography>
					<Field
						component={TextField}
						onChange={handleChange}
						onBlur={handleBlur}
						value={values.rearCamera}
						error={touched.rearCamera && Boolean(errors.rearCamera)}
						helperText={touched.rearCamera && errors.rearCamera}
						id="rearCamera"
						name="rearCamera"
						label="Rear Camera"
						variant="outlined"
						type="text"
						fullWidth
					/>


					<Typography variant='h6'>Front Camera</Typography>
					<Field
						component={TextField}
						onChange={handleChange}
						onBlur={handleBlur}
						value={values.frontCamera}
						error={touched.frontCamera && Boolean(errors.frontCamera)}
						helperText={touched.frontCamera && errors.frontCamera}
						id="frontCamera"
						name="frontCamera"
						label="Front Camera"
						variant="outlined"
						type="text"
						fullWidth
					/>
					<Typography variant='h6'>Operating System</Typography>
					<Field
						component={TextField}
						onChange={handleChange}
						onBlur={handleBlur}
						value={values.operatingSystem}
						error={touched.operatingSystem && Boolean(errors.operatingSystem)}
						helperText={touched.operatingSystem && errors.operatingSystem}
						id="operatingSystem"
						name="operatingSystem"
						label="Operating System"
						variant="outlined"
						type="text"
						fullWidth
					/>
					<Typography variant='h6'>Color Variants</Typography>
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
											name={`variants.${index}.colorCode`}
											type="text"
											id={`variantInput-${index}.colorCode`}
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
								<IconButton id='addColorVarianttButton' color="primary" size='small'  component="span" onClick={() => push({ color: '', colorCode: '', unitsInTheWarehouse: 0 })}>
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
					<Typography variant='body2'>name_color_imageType_size_number.png</Typography>
					<Typography variant='body2'>applewatch6_spacegrey_main_thumb_1.png</Typography>
					<Typography variant='body2'>applewatch6_spacegrey_main_image_1.png</Typography>
					<Typography variant='body1' style={{ marginTop: 10 }}>Other thumbs and images:</Typography>
					<Typography variant='body2'>name_color_size_number.png</Typography>
					<Typography variant='body2'>applewatch6_spacegrey_thumb_2.png</Typography>
					<Typography variant='body2'>applewatch6_spacegrey_image_2.png</Typography>
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

const AddPhone = () => {
	const history = useHistory()
	const [ addPhone ]  = useMutation(ADD_PHONE)

	const handleSubmit = async (values) => {

		try {
			const imagesForDbArray = Promise.all(values.files.map(async file => {
				let formData = new FormData()
				await formData.append('file', file)
				await formData.append('upload_preset', config.REACT_APP_UPLOAD_PRESET)
	
				const response = await axios.post(
					`https://api.cloudinary.com/v1_1/${config.REACT_APP_CLOUD_NAME}/image/upload`, 
					formData
				)

				const newImage = {
					imageName: file.name,
					publicId: response.data.public_id
				}

				return newImage
			}))

			const imagesArray = await imagesForDbArray

			let variantsToNumbers = values.variants.map(variant => (
				{
					color: variant.color,
					colorCode: variant.colorCode,
					unitsInTheWarehouse: parseInt(variant.unitsInTheWarehouse) 
				}
			))
			
			const inputconst = { 
				phoneName: values.phoneName, 
				description: values.description,
				brand: values.brand,
				insideTheBox: values.insideTheBox,
				onePrice: values.onePrice,
				threePrice: values.threePrice,
				sixPrice: values.sixPrice,
				twelvePrice: values.twelvePrice,
				sim: values.sim,
				memory: values.memory,
				battery: values.battery,
				display: values.display,
				storage: values.storage,
				processor: values.processor,
				dimensions: values.dimensions,
				rearCamera: values.rearCamera,
				frontCamera: values.frontCamera,
				operatingSystem: values.operatingSystem,
				variants: variantsToNumbers,
				imageIds: imagesArray 
			}

			console.log('inputconst', inputconst)

			await addPhone({ variables: { input: inputconst } })
			history.push('/admin/dashboard/')

		} catch (error) {
			console.log('error', error)
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

export default AddPhone

// TODO yup validation