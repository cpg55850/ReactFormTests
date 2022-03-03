import React from 'react'
import styled from 'styled-components'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'

const initialValues = {
	firstName: '',
	lastName: '',
	email: '',
	picked: 'One',
}

const onSubmit = (values, actions) => {
	console.log(JSON.stringify(values, null, 2))
}

const validationSchema = Yup.object({
	firstName: Yup.string().required('Required'),
	lastName: Yup.string().required('Required'),
	email: Yup.string().email('Invalid email format').required('Required'),
})

const FormikForm = () => {
	return (
		<Wrapper>
			<Formik
				initialValues={initialValues}
				validationSchema={validationSchema}
				onSubmit={onSubmit}
			>
				{({ isValid, isSubmitting, values }) => (
					<Form name='contact-form'>
						<Field type='hidden' name='form-name' />
						<Field type='hidden' name='bot-field' />

						<Field name='firstName' placeholder='First Name' class='field' />
						<ErrorMessage name='firstName' />

						<Field name='lastName' placeholder='Last Name' class='field' />
						<ErrorMessage name='lastName' />

						<Field
							name='email'
							type='email'
							placeholder='Your Email'
							class='field'
						/>
						<ErrorMessage name='email' />

						<label>
							<Field type='radio' name='picked' value='One' />
							One
						</label>
						<label>
							<Field type='radio' name='picked' value='Two' />
							Two
						</label>
						<p>Value: {values.picked}</p>

						<button
							variant='contained'
							color='primary'
							type='submit'
							disabled={!isValid || isSubmitting}
						>
							Submit
						</button>
					</Form>
				)}
			</Formik>
		</Wrapper>
	)
}

const Wrapper = styled.div`
	p {
		margin: 0;
		padding: 0;
	}

	.user-msg {
		margin-bottom: 40px;
	}

	.message {
		width: 100%;
		height: 260px;
		padding: 14px 16px;
		font-size: 1rem;
		font-weight: 400;
		line-height: 1.5;
		color: #181818;
		border: 1px solid #ccc;
		resize: none;
		border-radius: 1px;
	}

	.user-info {
		margin-bottom: 1rem;
	}

	.field {
		/* margin-bottom: 1rem; */
		width: 100%;
		padding: 14px 16px;
		font-size: 1rem;
		font-weight: 400;
		line-height: 1.5;
		color: #181818;
		border: 1px solid #ccc;
		resize: none;
		border-radius: 1px;
	}

	.error {
		color: red;
	}

	.hidden {
		display: none;
	}
`

export default FormikForm
