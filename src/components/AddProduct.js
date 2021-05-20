import React from 'react'
import { Formik, Field } from 'formik'
import * as yup from 'yup'
import axios from 'axios'
import { TextField } from 'formik-material-ui'
import { makeStyles, Typography, Button } from '@material-ui/core'
import config from '../utils/config'

import { useMutation } from '@apollo/client'
import { ADD_WATCH } from '../graphql/queries'

import UploadComponent from './UploadComponent'

const useStyles = makeStyles(theme => ({
	inputColor:{
		color: theme.palette.text.secondary
	},	
}))

const initialValues = {
	name: '',
	description: '',
	files: []
}

const validationSchema = yup.object().shape({

})

const NewProductForm = ({ values, errors, touched, handleChange, handleBlur, handleSubmit, setFieldValue }) => {
	const classes = useStyles()

	return (
		<div className={classes.container}>
			<div className={classes.item}>
				<Typography variant='h4' style={{ textAlign: 'center', marginTop: 20 }}>Create an article</Typography>
				<form onSubmit={handleSubmit} className={classes.form}>
					<Typography variant='h6' className={classes.formControl}>Title</Typography>
					<Field
						component={TextField}
						onChange={handleChange}
						onBlur={handleBlur}
						value={values.name}
						error={touched.name && Boolean(errors.name)}
						helperText={touched.name && errors.name}
						id="name"
						name="name"
						label="Name"
						variant="outlined"
						fullWidth
						className={classes.paddings}
						InputProps={{
							className: classes.inputColor
						}}
					/>	
					<Typography variant='h6' className={classes.formControl}>Description</Typography>
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
						className={classes.paddings}
						InputProps={{
							className: classes.inputColor
						}}
					/>									
					<Typography variant='h6' className={classes.formControl}>Cover photo</Typography>
					<div className={classes.formControl}>
						{errors.files && touched.files && 
								<Typography variant='caption' style={{ color: '#f44336' }}>{errors.files}</Typography>
						}
					</div>
					<UploadComponent setFieldValue={setFieldValue} values={values} />
					<Button color="primary" variant="contained" type="submit" className={classes.button}>
                        Publish
					</Button>
				</form>
			</div>
		</div>
	)
}

const AddProduct = () => {

	const [ addWatch ]  = useMutation(ADD_WATCH)

	const handleSubmit = async (values) => {
		try {
			const formData = new FormData()

			const imagesForDbArray = Promise.all(values.files.map(async file => {
				console.log('start')
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
			console.log(imagesArray)
			const inputconst = { 
				name: values.name, 
				description: values.description, 
				imageIds: imagesArray 
			}

			console.log(inputconst)

			addWatch({ variables: 
				{ 
					input: inputconst
				}
			})


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
