import React from 'react'
import { useEffect, useState } from 'react'
const AuthContext = React.createContext({
	users: [],
	addUserNandler: () => {},
	onChange: () => {},
})
export const AuthContextProvider = (props) => {
	const [users, setUsers] = useState([])

	const addUserNandler = (title, date, remove) => {
		setUsers([
			...users,
			{
				title,
				date,
				completed: false,
				remove,
				id: Math.random().toString(),
			},
		])
	}

	useEffect(() => {
		const localData = localStorage.getItem('data')
		setUsers(JSON.parse(localData) || [])
	}, [])

	useEffect(() => {
		localStorage.setItem('data', JSON.stringify(users))
	}, [users])

	return (
		<AuthContext.Provider
			value={{
				users: users,
				addUserNandler: addUserNandler,
				onChange: setUsers,
			}}
		>
			{props.children}
		</AuthContext.Provider>
	)
}
export default AuthContext
