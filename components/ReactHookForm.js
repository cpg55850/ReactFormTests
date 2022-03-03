import React from 'react'
import { useForm } from 'react-hook-form'

function ReactHookForm() {
	const {
		register,
		handleSubmit,
		formState: { errors, isValid, isSubmitting },
	} = useForm({
		mode: 'onChange', // allows for validation check on each input: requires multiple re-renders, which impacts performance. But this will allow the submit button to change disabled status based on the changing state of the form.
	})

	console.log(isValid)

	return (
		<form
			onSubmit={handleSubmit((data) => {
				console.log(data)
			})}
		>
			<input
				{...register('firstName', {
					required: 'This is required',
					minLength: {
						value: 4,
						message: 'Min length is 4',
					},
					onBlur: (e) => console.log('blurred'),
				})}
				placeholder='First Name'
			/>
			<p>{errors.firstName?.message}</p>
			<input
				{...register('lastName', { required: true, minLength: 4 })}
				placeholder='Last Name'
			/>
			<button type='submit' disabled={!isValid}>
				Submit
			</button>
			<p>{errors.lastName?.message}</p>
		</form>
	)
}

export default ReactHookForm
