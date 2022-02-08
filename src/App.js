import './App.css'
import Todoform from './components/TodoForm/Todoform'
import AddList from './components/TodoList/AddList'
import AuthContext from './store/auth-context'
import { useContext } from 'react'
function App() {
	const ctxData = useContext(AuthContext)
	return (
		<>
			<div className='App'>
				{ctxData && <Todoform />}
				{ctxData && (
					<AddList
					// onChecked={checkedHandler}
					// users={users}
					// removeTask={removeTask}
					/>
				)}
			</div>
		</>
	)
}

export default App
