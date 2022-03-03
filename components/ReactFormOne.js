import React from 'react'

function ReactFormOne() {
	const [firstName, setFirstName] = React.useState('')
	const [lastName, setLastName] = React.useState('')

	function handleFirstNameChange(event) {
		setFirstName(event.target.value)
	}

	function handleLastNameChange(event) {
		setLastName(event.target.value)
	}

	return (
		<form>
			<input
				type='text'
				placeholder='First Name'
				onChange={handleFirstNameChange}
				value={firstName}
			/>
			<input
				type='text'
				placeholder='Last Name'
				onChange={handleLastNameChange}
				value={lastName}
			/>
		</form>
	)
}

export default ReactFormOne
