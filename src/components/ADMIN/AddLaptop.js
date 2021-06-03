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

import { ADD_LAPTOP } from '../../graphql/laptops/mutations'
import config from '../../utils/config'
import UploadComponent from './UploadComponent'
import { laptopInsideTheBox, laptopBrands, prodcutPriceData } from '../../data'

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
	name: '',
	description: '',
	brand: '',
	onePrice: 0,
	threePrice: 0,
	sixPrice: 0,
	twelvePrice: 0,
	insideTheBox: [],
	model: '',
	memory: 0,
	display: '',
	storage: '',
	graphics: '',
	processor: '',
	dimensions: '',
	operatingSystem: '',
	keyboardLanguage: '',
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
				<Typography variant='h4' style={{ textAlign: 'center', marginTop: 20 }}>Create a Laptop</Typography>
				<form onSubmit={handleSubmit}>
					<Typography variant='h6'>Laptop Name</Typography>
					<Field
						component={TextField}
						onChange={handleChange}
						onBlur={handleBlur}
						value={values.name}
						error={touched.name && Boolean(errors.name)}
						helperText={touched.name && errors.name}
						id="name"
						name="name"
						label="Laptop Name"
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
						{laptopBrands.map(brand => 
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
					<Typography variant='h6'>Model</Typography>
					<Field
						component={TextField}
						onChange={handleChange}
						onBlur={handleBlur}
						value={values.model}
						error={touched.model && Boolean(errors.model)}
						helperText={touched.model && errors.model}
						id="model"
						name="model"
						label="Model"
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
							{laptopInsideTheBox.map(option =>
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
					<Typography variant='h6'>Display</Typography>
					<Typography variant='body2'>15.6 inches (1920 x 1080)</Typography>
					<Typography variant='body2'>15.6 inches (1920 x 1080) 60Hz</Typography>
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
					<Typography variant='h6'>Storage</Typography>
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
						type="text"
						fullWidth
					/>
					<Typography variant='h6'>Graphics</Typography>
					<Field
						component={TextField}
						onChange={handleChange}
						onBlur={handleBlur}
						value={values.graphics}
						error={touched.graphics && Boolean(errors.graphics)}
						helperText={touched.graphics && errors.graphics}
						id="graphics"
						name="graphics"
						label="Graphics"
						variant="outlined"
						type="text"
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
					<Typography variant='h6'>Keyboard Language</Typography>
					<Field
						component={TextField}
						onChange={handleChange}
						onBlur={handleBlur}
						value={values.keyboardLanguage}
						error={touched.keyboardLanguage && Boolean(errors.keyboardLanguage)}
						helperText={touched.keyboardLanguage && errors.keyboardLanguage}
						id="keyboardLanguage"
						name="keyboardLanguage"
						label="Keyboard Language"
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
					<Typography variant='body2'>name_color_size.png</Typography>
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

const AddLaptop = () => {
	const history = useHistory()
	const [ addLaptop ]  = useMutation(ADD_LAPTOP)

	const handleSubmit = async (values) => {
		try {
			const imagesForDbArray = Promise.all(values.files.map(async file => {
				let formData = new FormData()
				formData.append('file', file)
				formData.append('upload_preset', config.REACT_APP_UPLOAD_PRESET)
	
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
				name: values.name, 
				description: values.description,
				brand: values.brand,
				insideTheBox: values.insideTheBox,
				onePrice: values.onePrice,
				threePrice: values.threePrice,
				sixPrice: values.sixPrice,
				twelvePrice: values.twelvePrice,
				model: values.model,
				memory: values.memory,
				display: values.display,
				storage: values.storage,
				graphics: values.graphics,
				processor: values.processor,
				dimensions: values.dimensions,
				operatingSystem: values.operatingSystem,
				keyboardLanguage: values.keyboardLanguage,
				variants: variantsToNumbers,
				imageIds: imagesArray 
			}


			await addLaptop({ variables: { input: inputconst } })
			history.push('/admin/dashboard')

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

export default AddLaptop

// TODO ADD CATEGORY
// TODO yup validation
