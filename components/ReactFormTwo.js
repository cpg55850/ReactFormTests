import React from 'react'

function ReactFormTwo() {
	const [formData, setFormData] = React.useState({
		firstName: '',
		lastName: '',
	})

	function handleChange(event) {
		setFormData((prevFormData) => {
			return {
				...prevFormData,
				[event.target.name]: event.target.value,
			}
		})
	}

	return (
		<form>
			<input
				type='text'
				placeholder='First Name'
				onChange={handleChange}
				name='firstName'
				value={formData.firstName}
			/>
			<input
				type='text'
				placeholder='Last Name'
				onChange={handleChange}
				name='lastName'
				value={formData.lastName}
			/>
		</form>
	)
}

export default ReactFormTwo
