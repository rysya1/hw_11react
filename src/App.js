import './App.css'
import Todoform from './components/TodoForm/Todoform'
import { useState } from 'react'
import AddList from './components/TodoList/AddList'
import { useEffect } from 'react'
function App() {
	const [users, setUsers] = useState([])

	const addUserNandler = (title, date,remove) => {
		setUsers([...users, { title, date,completed:false,remove, id: Math.random().toString() }])
	}

	useEffect(() => {
		const localData = localStorage.getItem('data') || []
		setUsers(JSON.parse(localData))
	}, [])
	useEffect(() => {
		localStorage.setItem('data', JSON.stringify(users))
	}, [users])

	function checkedHandler(checked) {
		setUsers(checked)
	}
	const removeTask = (remove) => {
		setUsers(remove)
	  }
	return (
		<div className='App'>
			<Todoform onAddUser={addUserNandler} />
			<AddList onChecked={checkedHandler} users={users} removeTask={removeTask}/>
		</div>
	)
}

export default App
